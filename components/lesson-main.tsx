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
    completed: boolean;
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
    completed: false,
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
  slug: string;
  questions: GetLesson["questions"];
  onComplete: () => void;
}
export default function LessonMain({ questions, onComplete }: LessonMainProps) {
  const [{ questionState, lessonState, lessonStats }, setState] =
    React.useState<LessonMainState>(LessonMainInitialState);

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
        const questionIndex = prev.questionState.index + 1;

        const progress = props.autoCheck
          ? (100 * questionIndex) / questionsSize
          : prev.lessonState.progress;

        const weightedAccuracy =
          prev.lessonStats.weightedAccuracy + props.accuracy;
        const answersCount = prev.lessonStats.answersCount + props.answersCount;
        const accuracy = Math.floor(weightedAccuracy / answersCount);

        return {
          ...prev,
          questionState: {
            ...prev.questionState,
            answered: true,
            checked: props.autoCheck,
            status: props.correct ? "correct" : "incorrect",
            explanation: props.data.explanation,
          },
          lessonState: {
            ...prev.lessonState,
            progress: progress,
          },
          lessonStats: {
            duration: prev.lessonStats.duration + 0,
            points: Math.floor(prev.lessonStats.points + props.points),
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

  const handleOnContinue = React.useCallback(() => {
    setState((prev) => {
      const questionIndex = Math.min(
        prev.questionState.index + 1,
        questionsSize
      );
      const completed = questionIndex > questionsSize - 1;
      return {
        ...prev,
        lessonState: {
          ...prev.lessonState,
          completed,
        },
        questionState: {
          ...prev.questionState,
          index: questionIndex,
          status: "unanswered",
          checked: false,
          answered: false,
          explanation: undefined,
        },
      };
    });
  }, [questionsSize]);

  return (
    <div className="fixed w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden">
      <div className="relative flex-1 flex flex-col justify-between">
        {!lessonState.completed && (
          <LessonHeader progress={lessonState.progress} />
        )}

        <div className="flex-1">
          <div className="max-w-2xl mx-auto h-full sm:px-6 px-4 sm:pb-12 pb-6">
            <Tabs
              value={String(questionState.index)}
              activationMode="manual"
              className="w-full h-full"
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
        completed={lessonState.completed}
        handleOnCheck={handleOnCheck}
        handleOnContinue={handleOnContinue}
        handleOnComplete={onComplete}
      />
    </div>
  );
}
