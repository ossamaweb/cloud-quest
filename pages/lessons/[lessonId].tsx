import LessonFooter from "@/components/lesson-footer";
import LessonLoading from "@/components/lesson-loading";
import LessonQuestion from "@/components/lesson-question";
import Button from "@/components/ui/button";

import ProgressBar from "@/components/ui/progress-bar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { LessonQuestionProps } from "@/lib/interfaces";
import { questionFixtures } from "@/lib/questions.fixtures";
import { cn } from "@/lib/utils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { XIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export default function Lesson() {
  const { user } = useAuthenticator();
  const router = useRouter();

  const [stateUI, setStateUI] = useState<{
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

  const totalQuestions = questionFixtures.length;

  const handleOnGrade = useCallback<LessonQuestionProps<unknown>["onGrade"]>(
    (correct, points, autoCheck, data) => {
      console.log({ correct, points, autoCheck, data });

      setStateUI((prev) => ({
        ...prev,
        answered: true,
        checked: autoCheck,
        status: correct ? "correct" : "incorrect",
        questionExplanation: data.explanation,
        progress: autoCheck
          ? (100 * (prev.questionIndex + 1)) / totalQuestions
          : prev.progress,
      }));
    },
    [totalQuestions]
  );

  const handleOnAnswer = useCallback((answered: boolean) => {
    setStateUI((prev) => ({
      ...prev,
      answered,
    }));
  }, []);

  const handleOnCheck = useCallback(() => {
    setStateUI((prev) => ({
      ...prev,
      progress: (100 * (prev.questionIndex + 1)) / totalQuestions,
      checked: true,
    }));
  }, [totalQuestions]);

  const handleOnContinue = useCallback(() => {
    setStateUI((prev) => ({
      status: "unanswered",
      checked: false, // debug
      answered: false, // debug
      progress: prev.progress,
      questionIndex: Math.min(prev.questionIndex + 1, totalQuestions),
      questionExplanation: undefined,
    }));
  }, [totalQuestions]);

  const loading = false;
  if (loading) {
    return (
      <main>
        <LessonLoading tip="Did you know" />
      </main>
    );
  }

  return (
    <main>
      <div className="full-height flex flex-col overflow-y-scroll overflow-x-hidden">
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-shrink-0">
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
                {questionFixtures.map((item, index) => (
                  <TabsContent
                    key={item.id}
                    value={String(index)}
                    tabIndex={-1}
                    className={cn(
                      "mt-0 w-full h-full focus-visible:ring-0 focus:ring-0",
                      index > 0 &&
                        "motion-safe:animate-in motion-safe:fade-in-25 motion-safe:slide-in-from-right-1/4 motion-safe:duration-500"
                    )}
                  >
                    <LessonQuestion
                      data={item}
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
    </main>
  );
}
