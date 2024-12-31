import LessonLoading from "@/components/lesson-loading";
import LessonQuestion from "@/components/lesson-question";
import Button from "@/components/ui/button";
import ProgressBar from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { XIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Lesson() {
  const { user } = useAuthenticator();
  const router = useRouter();
  const [stateUI, setStateUI] = useState({ answered: true, incorrect: false });

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

              <ProgressBar value={50} />
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

        <div className="border-t-2 border-border sticky bottom-0 w-full bg-background">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="flex gap-4 justify-between items-center">
              <div>
                <Button className="bg-transparent border-border border-b-4 text-muted-foreground w-40 inline-flex items-center justify-center hover:bg-border/40">
                  Why?
                </Button>
              </div>
              <div>
                <Button
                  disabled={!stateUI.answered}
                  className={cn(
                    "border-transparent border-b-4 text-background w-40 inline-flex items-center justify-center disabled:bg-muted disabled:border-b-muted disabled:text-muted-foreground/30",
                    "active:translate-y-0.5 active:border-b-0 transition-all duration-100",
                    stateUI.incorrect
                      ? "bg-red-500 border-b-red-600 enabled:hover:bg-red-400"
                      : "bg-green-500 border-b-green-600 enabled:hover:bg-green-400"
                  )}
                >
                  {stateUI.answered ? "Continue" : "Check"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
