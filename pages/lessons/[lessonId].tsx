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
  }>({
    answered: false,
    checked: false,
    status: "unanswered",
    progress: 0,
    questionIndex: 0,
  });

  const totalQuestions = questionFixtures.length;

  const handleOnAnswer = useCallback(
    (correct: boolean, points: number, data: Question) => {
      setStateUI((prev) => ({
        ...prev,
        answered: true,
        status: correct ? "correct" : "incorrect",
      }));
    },
    []
  );

  const handleOnCheck = useCallback(() => {
    setStateUI((prev) => ({
      ...prev,
      checked: true,
      incorrect: Math.random() < 0.5,
    }));
  }, []);

  const handleOnContinue = useCallback(() => {
    setStateUI((prev) => ({
      ...prev,
      checked: false,
      incorrect: false,
      progress: (100 * (prev.questionIndex + 1)) / totalQuestions,
      questionIndex: Math.min(prev.questionIndex + 1, totalQuestions),
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
      <div className="h-screen flex flex-col justify-between">
        <div>
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex justify-between items-center sm:gap-4 gap-2">
              <div>
                <Button className="hover:bg-transparent -ml-3 px-2 text-border hover:text-foreground/50">
                  <XIcon />
                </Button>
              </div>

              <ProgressBar value={stateUI.progress} />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Tabs value={String(stateUI.questionIndex)}>
            {questionFixtures.map((item, index) => (
              <TabsContent
                key={item.id}
                value={String(index)}
                className="overflow-hidden"
              >
                <LessonQuestion
                  data={item}
                  answered={stateUI.answered}
                  checked={stateUI.checked}
                  status={stateUI.status}
                  onAnswer={handleOnAnswer}
                  className={cn(
                    index === 0
                      ? ""
                      : "animate-in motion-safe:fade-in motion-safe:slide-in-from-right-1/4 duration-500"
                  )}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="sticky bottom-0 w-full bg-background border-t-2 border-border ">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="flex h-12 gap-4 justify-end items-center">
              <div>
                <ButtonGame
                  disabled={!stateUI.answered}
                  onClick={handleOnCheck}
                >
                  Check
                </ButtonGame>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "absolute inset-0 bg-background-darker",
              stateUI.checked
                ? "pointer-events-auto animate-in motion-safe:fade-in duration-150"
                : "pointer-events-none opacity-0"
            )}
          >
            <div className="max-w-4xl mx-auto px-6 py-12">
              <div className="flex h-12 gap-4 sm:justify-between justify-end items-center">
                <div
                  className={cn(
                    "flex items-center gap-2",
                    stateUI.status === "incorrect" &&
                      "dark:text-red-500 text-red-600",
                    stateUI.status === "correct" &&
                      "dark:text-green-600 text-green-700"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 bg-border flex items-center justify-center rounded-full",
                      stateUI.checked
                        ? "animate-in motion-safe:fade-in-50 motion-safe:zoom-in-50 duration-300"
                        : "opacity-0 scale-0"
                    )}
                  >
                    {stateUI.status === "incorrect" ? (
                      <XIcon strokeWidth={5} />
                    ) : (
                      <CheckIcon strokeWidth={5} />
                    )}
                  </div>

                  <div className="font-medium text-lg sm:block hidden">
                    {getQuestionEndMessage(
                      stateUI.status === "incorrect",
                      stateUI.questionIndex
                    )}
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                  {hasExplanation && (
                    <div>
                      <ButtonGame className="bg-transparent border-border text-muted-foreground enabled:hover:bg-border/40">
                        Why?
                      </ButtonGame>
                    </div>
                  )}
                  <div>
                    <ButtonGame
                      status={stateUI.status}
                      onClick={handleOnContinue}
                    >
                      Continue
                    </ButtonGame>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
