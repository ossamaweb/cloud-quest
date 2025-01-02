import LessonFooter from "@/components/lesson-footer";
import LessonLoading from "@/components/lesson-loading";
import LessonQuestion from "@/components/lesson-question";
import Button from "@/components/ui/button";
import ButtonGame from "@/components/ui/button-game";
import ProgressBar from "@/components/ui/progress-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LessonQuestionProps, Question } from "@/lib/interfaces";
import { questionFixtures } from "@/lib/questions.fixtures";
import { cn, getQuestionEndMessage } from "@/lib/utils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { CheckIcon, XIcon } from "lucide-react";
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
    answered: false,
    checked: false,
    status: "unanswered",
    progress: 0,
    questionIndex: 0,
    questionExplanation: undefined,
  });

  const totalQuestions = questionFixtures.length;

  const handleOnAnswer = useCallback<LessonQuestionProps<unknown>["onAnswer"]>(
    (correct, points, autoCheck, data) => {
      setStateUI((prev) => ({
        ...prev,
        answered: true,
        checked: autoCheck,
        status: correct ? "correct" : "incorrect",
        questionExplanation: data.explanation,
      }));
    },
    []
  );

  const handleOnCheck = useCallback(() => {
    setStateUI((prev) => ({
      ...prev,
      checked: true,
    }));
  }, []);

  const handleOnContinue = useCallback(() => {
    setStateUI((prev) => ({
      status: "unanswered",
      checked: false,
      answered: true, // debug
      progress: (100 * (prev.questionIndex + 1)) / totalQuestions,
      questionIndex: Math.min(prev.questionIndex + 1, totalQuestions),
      questionExplanation: undefined,
    }));
  }, [totalQuestions]);

  const hasExplanation = true;
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
      <div className="relative h-screen flex flex-col overflow-x-hidden">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="max-w-6xl mx-auto sm:px-8 px-4 sm:py-8 py-4">
              <div className="flex justify-between items-center sm:gap-4 gap-2">
                <div>
                  <Button className="hover:bg-transparent -ml-3 px-2 py-1 text-border hover:text-foreground/50">
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
                className="w-full h-full"
              >
                {questionFixtures.map((item, index) => (
                  <TabsContent
                    key={item.id}
                    value={String(index)}
                    className="mt-0 w-full h-full"
                  >
                    <LessonQuestion
                      data={item}
                      answered={stateUI.answered}
                      checked={stateUI.checked}
                      status={stateUI.status}
                      onAnswer={handleOnAnswer}
                      className={cn(
                        "w-full h-full",
                        index > 0 &&
                          "animate-in motion-safe:fade-in-25 motion-safe:slide-in-from-right-1/4 duration-500"
                      )}
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
