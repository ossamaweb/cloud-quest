import LessonLoading from "@/components/lesson-loading";
import LessonQuestion from "@/components/lesson-question";
import Button from "@/components/ui/button";
import ButtonGame from "@/components/ui/button-game";
import ProgressBar from "@/components/ui/progress-bar";
import { cn, getQuestionEndMessage } from "@/lib/utils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { CheckIcon, XIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export default function Lesson() {
  const { user } = useAuthenticator();
  const router = useRouter();
  const [stateUI, setStateUI] = useState({
    answered: true,
    cheched: false,
    incorrect: false,
    progress: 0,
  });

  const handleOnCheck = useCallback(() => {
    setStateUI((prev) => ({
      ...prev,
      cheched: true,
      incorrect: Math.random() < 0.5,
    }));
  }, []);

  const handleOnContinue = useCallback(() => {
    setStateUI((prev) => ({
      ...prev,
      cheched: false,
      incorrect: false,
      progress: prev.progress + 10,
    }));
  }, []);

  const questionIndex = 1;
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
          <LessonQuestion
            title="Title of the game goes here"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            imageSrc="/screen.png"
            imageAlt="Screenshot of the game"
            imageCaption="Figure caption goes here"
          >
            <div>X</div>
          </LessonQuestion>
        </div>

        <div className="sticky bottom-0 w-full bg-background border-t-2 border-border ">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="flex h-12 gap-4 justify-end items-center">
              <div>
                <ButtonGame
                  disabled={!stateUI.answered}
                  incorrect={stateUI.incorrect}
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
              stateUI.cheched
                ? "pointer-events-auto animate-in motion-safe:fade-in duration-150"
                : "pointer-events-none opacity-0"
            )}
          >
            <div className="max-w-4xl mx-auto px-6 py-12">
              <div className="flex h-12 gap-4 sm:justify-between justify-end items-center">
                <div
                  className={cn(
                    "flex items-center gap-2",
                    stateUI.incorrect ? "text-red-500" : "text-green-500"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 bg-border flex items-center justify-center rounded-full",
                      stateUI.cheched
                        ? "animate-in motion-safe:fade-in motion-safe:zoom-in duration-300"
                        : "opacity-0 scale-0"
                    )}
                  >
                    {stateUI.incorrect ? (
                      <XIcon strokeWidth={5} />
                    ) : (
                      <CheckIcon strokeWidth={5} />
                    )}
                  </div>

                  <div className="font-medium text-lg sm:block hidden">
                    {getQuestionEndMessage(stateUI.incorrect, questionIndex)}
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
                      incorrect={stateUI.incorrect}
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
