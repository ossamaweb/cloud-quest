"use client";
import * as React from "react";
import LessonFooter from "@/components/lesson-footer";
import LessonQuestion from "@/components/lesson-question";
import Button from "@/components/ui/button";
import ProgressBar from "@/components/ui/progress-bar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { LessonQuestionProps } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { GetLesson } from "@/lib/types";

interface LessonMainProps {
  id: string | null;
  slug: string;
  questions: GetLesson["questions"];
}
export default function LessonMain({ questions }: LessonMainProps) {
  const [stateUI, setStateUI] = React.useState<{
    answered: boolean;
    checked: boolean;
    status: LessonQuestionProps<unknown>["status"];
    progress: number;
    questionIndex: number;
    questionExplanation?: string;
  }>({
    answered: false, // debug
    checked: false,
    status: "unanswered",
    progress: 0,
    questionIndex: 0,
    questionExplanation: undefined,
  });

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
    (correct, points, autoCheck, data) => {
      console.log({ correct, points, autoCheck, data });

      setStateUI((prev) => ({
        ...prev,
        answered: true,
        checked: autoCheck,
        status: correct ? "correct" : "incorrect",
        questionExplanation: data.explanation,
        progress: autoCheck
          ? (100 * (prev.questionIndex + 1)) / questionsSize
          : prev.progress,
      }));
    },
    [questionsSize]
  );

  const handleOnAnswer = React.useCallback((answered: boolean) => {
    setStateUI((prev) => ({
      ...prev,
      answered,
    }));
  }, []);

  const handleOnCheck = React.useCallback(() => {
    setStateUI((prev) => ({
      ...prev,
      progress: (100 * (prev.questionIndex + 1)) / questionsSize,
      checked: true,
    }));
  }, [questionsSize]);

  const handleOnContinue = React.useCallback(() => {
    setStateUI((prev) => ({
      status: "unanswered",
      checked: false, // debug
      answered: false, // debug
      progress: prev.progress,
      questionIndex: Math.min(prev.questionIndex + 1, questionsSize),
      questionExplanation: undefined,
    }));
  }, [questionsSize]);

  return (
    <div className="fixed w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden">
      <div className="relative flex-1 flex flex-col justify-between">
        <div className="sticky top-0 z-10 flex-shrink-0 bg-background">
          <div className="max-w-6xl mx-auto sm:px-8 px-4 sm:py-8 py-4">
            <div className="flex justify-between items-center sm:gap-4 gap-2">
              <div>
                <Button className="hover:bg-transparent -ml-3 px-2 py-1 dark:text-zinc-700 text-zinc-500 hover:text-foreground/50">
                  <XIcon />
                </Button>
              </div>

              <ProgressBar value={stateUI.progress} />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="max-w-2xl mx-auto h-full sm:px-6 px-4 sm:pb-12 pb-6">
            <Tabs
              value={String(stateUI.questionIndex)}
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
                    title={item.question}
                    type={item.type}
                    data={item.questionData}
                    answered={stateUI.answered}
                    checked={stateUI.checked}
                    status={stateUI.status}
                    onGrade={handleOnGrade}
                    onAnswer={handleOnAnswer}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      <LessonFooter
        answered={stateUI.answered}
        checked={stateUI.checked}
        status={stateUI.status}
        questionIndex={stateUI.questionIndex}
        questionExplanation={stateUI.questionExplanation}
        handleOnCheck={handleOnCheck}
        handleOnContinue={handleOnContinue}
      />
    </div>
  );
}
