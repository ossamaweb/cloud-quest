"use client";
import * as React from "react";
import LessonFooter from "@/components/lesson-footer";
import LessonQuestion from "@/components/lesson-question";
import LessonCompleted from "@/components/lesson-completed";
import LessonHeader from "@/components/lesson-header";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { LessonQuestionProps } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import { GetLesson } from "@/lib/types";
import { CreateUserLessonCompletionInput } from "@/hooks/use-create-lesson-completion-mutation";

interface LessonMainState {
  questionState: {
    answered: boolean;
    checked: boolean;
    status: LessonQuestionProps<unknown>["status"];
    index: number;
    explanation?: string;
  };
  lessonState: {
    progress: number;
    saving: boolean;
    saved: boolean;
  };
  lessonStats: {
    duration: number;
    points: number;
    accuracy: number;
    weightedAccuracy: number;
    answersCount: number;
  };
}

const LessonMainInitialState: LessonMainState = {
  questionState: {
    answered: false,
    checked: false,
    status: "unanswered",
    index: 0,
    explanation: undefined,
  },
  lessonState: {
    progress: 0,
    saving: false,
    saved: false,
  },
  lessonStats: {
    duration: 0,
    points: 0,
    accuracy: 0,
    weightedAccuracy: 0,
    answersCount: 0,
  },
};

interface LessonMainProps {
  id: string | null;
  questions: GetLesson["questions"];
  saved: boolean;
  onComplete: () => void;
  onSave: (
    data: Pick<
      CreateUserLessonCompletionInput,
      "accuracy" | "points" | "duration"
    >
  ) => void;
}
export default function LessonMain({
  questions,
  saved,
  onComplete,
  onSave,
}: LessonMainProps) {
  const [{ questionState, lessonState, lessonStats }, setState] =
    React.useState<LessonMainState>(LessonMainInitialState);

  const durationsRef = React.useRef<
    Record<string, { start: number; end: number; duration: number }>
  >({});

  const { questionsSize, sortedQuestions } = React.useMemo(() => {
    return {
      sortedQuestions: questions.sort(
        (a, b) => (a.order || 0) - (b.order || 0)
      ),
      questionsSize: questions.length,
    };
  }, [questions]);

  const handleOnGrade = React.useCallback<
    LessonQuestionProps<unknown>["onGrade"]
  >(
    (props) => {
      setState((prev) => {
        const { lessonState, lessonStats, questionState } = prev;

        const questionIndex = questionState.index + 1;

        const progress = props.autoCheck
          ? (100 * questionIndex) / questionsSize
          : lessonState.progress;

        const weightedAccuracy = lessonStats.weightedAccuracy + props.accuracy;
        const answersCount = lessonStats.answersCount + props.answersCount;
        const accuracy = Math.floor(weightedAccuracy / answersCount);

        return {
          ...prev,
          questionState: {
            ...questionState,
            answered: true,
            checked: props.autoCheck,
            status: props.correct ? "correct" : "incorrect",
            explanation: props.data.explanation,
          },
          lessonState: {
            ...lessonState,
            progress,
          },
          lessonStats: {
            ...lessonStats,
            points: Math.floor(lessonStats.points + props.points),
            accuracy: Math.max(0, Math.min(100, accuracy)),
            answersCount,
            weightedAccuracy,
          },
        };
      });
    },
    [questionsSize]
  );

  const handleOnAnswer = React.useCallback((answered: boolean) => {
    setState((prev) => ({
      ...prev,
      questionState: {
        ...prev.questionState,
        answered,
      },
    }));
  }, []);

  const handleOnCheck = React.useCallback(() => {
    setState((prev) => ({
      ...prev,
      lessonState: {
        ...prev.lessonState,
        progress: (100 * (prev.questionState.index + 1)) / questionsSize,
      },
      questionState: {
        ...prev.questionState,
        checked: true,
      },
    }));
  }, [questionsSize]);

  const handleOnSave = React.useCallback(
    (totalDuration: number) => {
      if (!lessonState.saved) {
        onSave({
          accuracy: lessonStats.accuracy,
          points: lessonStats.points,
          duration: totalDuration,
        });

        durationsRef.current = {};
      }
    },
    [lessonState.saved, lessonStats.accuracy, lessonStats.points, onSave]
  );

  const handleOnContinue = React.useCallback(
    (nextQuestionIndex: number) => {
      const finalQuestion = nextQuestionIndex >= questionsSize;
      let totalDuration = 0;
      if (finalQuestion) {
        totalDuration = Object.keys(durationsRef.current)
          .map((key) => durationsRef.current[key].duration)
          .reduce((acc, v) => acc + v, 0);

        totalDuration = Math.ceil(totalDuration / 1000); // convert to seconds

        handleOnSave(totalDuration);
      }

      setState((prev) => {
        return {
          ...prev,
          lessonStats: {
            ...prev.lessonStats,
            duration: totalDuration,
          },
          lessonState: {
            ...prev.lessonState,
            saving: finalQuestion,
          },
          questionState: {
            ...prev.questionState,
            index: finalQuestion ? prev.questionState.index : nextQuestionIndex, // do not move to next qustion when saving
            status: "unanswered",
            checked: finalQuestion ? true : false,
            answered: false,
            explanation: undefined,
          },
        };
      });
    },
    [handleOnSave, questionsSize]
  );

  React.useEffect(() => {
    if (questionState.checked) {
      const endTime = new Date().getTime();
      durationsRef.current[questionState.index] = {
        ...durationsRef.current[questionState.index],
        end: endTime,
        duration: endTime - durationsRef.current[questionState.index].start,
      };
    } else {
      durationsRef.current[questionState.index] = {
        ...durationsRef.current[questionState.index],
        start: new Date().getTime(),
      };
    }
  }, [questionState.index, questionState.checked]);

  React.useEffect(() => {
    if (saved) {
      setState((prev) => ({
        ...prev,
        lessonState: {
          ...prev.lessonState,
          saving: false,
          saved: true,
        },
        questionState: {
          ...prev.questionState,
          index: Math.min(prev.questionState.index + 1, questionsSize + 1),
          checked: false,
          answered: false,
        },
      }));
    }
  }, [questionsSize, saved]);

  return (
    <div className="fixed w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden">
      <div className="relative flex-1 flex flex-col justify-between">
        {!lessonState.saved && <LessonHeader progress={lessonState.progress} />}

        <div className="flex-1">
          <div className="max-w-2xl mx-auto h-full sm:px-6 px-4 sm:pb-12 pb-6">
            <Tabs
              value={String(questionState.index)}
              activationMode="manual"
              className="w-full h-full"
              onValueChange={(e) => console.log("onValueChange", e)}
            >
              {sortedQuestions.map((item, index) => (
                <TabsContent
                  key={item.id}
                  value={String(index)}
                  tabIndex={-1}
                  className={cn(
                    "mt-0 w-full h-full outline-none focus-visible:ring-0 focus:ring-0",
                    index > 0 &&
                      "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-1/4 motion-safe:duration-500"
                  )}
                >
                  <LessonQuestion
                    id={item.id}
                    title={item.question}
                    type={item.type}
                    points={item.points}
                    difficulty={item.difficulty}
                    data={item.questionData}
                    answered={questionState.answered}
                    checked={questionState.checked}
                    status={questionState.status}
                    onGrade={handleOnGrade}
                    onAnswer={handleOnAnswer}
                  />
                </TabsContent>
              ))}

              <TabsContent
                key="lessonCompleted"
                value={String(questionsSize)}
                tabIndex={-1}
                className={cn(
                  "mt-0 w-full h-full outline-none focus-visible:ring-0 focus:ring-0",
                  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-1/4 motion-safe:duration-500"
                )}
              >
                <LessonCompleted
                  points={lessonStats.points}
                  accuracy={lessonStats.accuracy}
                  duration={lessonStats.duration}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <LessonFooter
        answered={questionState.answered}
        checked={questionState.checked}
        status={questionState.status}
        questionIndex={questionState.index}
        questionExplanation={questionState.explanation}
        saved={lessonState.saved}
        saving={lessonState.saving}
        handleOnCheck={handleOnCheck}
        handleOnContinue={handleOnContinue}
        handleOnComplete={onComplete}
      />
    </div>
  );
}
