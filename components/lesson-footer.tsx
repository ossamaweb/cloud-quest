"use client";

import { cn, getQuestionEndMessage } from "@/lib/utils";
import { XIcon, CheckIcon } from "lucide-react";
import * as React from "react";
import ButtonGame from "./ui/button-game";
import { LessonQuestionProps } from "@/lib/interfaces";

interface LessonFooterProps {
  answered: boolean;
  checked: boolean;
  status: LessonQuestionProps<unknown>["status"];
  questionIndex: number;
  questionExplanation?: string;
  hasExplanation?: boolean;
  handleOnCheck: () => void;
  handleOnContinue: () => void;
}

export default function LessonFooter({
  answered,
  checked,
  status,
  questionIndex,
  questionExplanation,
  handleOnCheck,
  handleOnContinue,
}: LessonFooterProps) {
  return (
    <div className="w-full bg-background relative">
      <div
        className={cn(
          "bg-background border-t-2 border-border",
          checked && "invisible pointer-events-none"
        )}
      >
        <div className="max-w-4xl mx-auto sm:px-8 px-4 sm:py-12 py-6">
          <div className="flex sm:flex-row flex-col gap-8 justify-end items-center">
            <div className="sm:w-auto w-full">
              <ButtonGame
                className="w-full sm:w-40"
                disabled={!answered}
                onClick={handleOnCheck}
              >
                Check
              </ButtonGame>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-0 w-full border-t-2 border-transparent",
          status === "incorrect"
            ? "bg-red-100 dark:bg-background-darker"
            : "bg-green-100 dark:bg-background-darker",
          !checked && "hidden"
        )}
      >
        <div className="max-w-4xl mx-auto sm:px-8 px-4 sm:py-12 py-6">
          <div className="flex sm:flex-row flex-col sm:gap-8 gap-4 justify-between sm:items-center items-start">
            <div
              className={cn(
                "flex items-center justify-start gap-2",
                "animate-in motion-safe:fade-in duration-150",
                status === "incorrect"
                  ? "dark:text-red-500 text-red-700"
                  : "dark:text-green-500 text-green-700",
                checked && "animate-in motion-safe:fade-in-50 duration-150"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 flex-shrink-0 bg-background dark:bg-muted flex items-center justify-center rounded-full",
                  checked
                    ? "animate-in motion-safe:fade-in-50 motion-safe:zoom-in-50 duration-500"
                    : "opacity-0 scale-0"
                )}
              >
                {status === "incorrect" ? (
                  <XIcon strokeWidth={5} />
                ) : (
                  <CheckIcon strokeWidth={5} />
                )}
              </div>

              <div className="text-lg">
                <div className="font-bold">
                  {getQuestionEndMessage(status === "incorrect", questionIndex)}
                </div>
                {!!questionExplanation && (
                  <div className="text-sm text-pretty">
                    {questionExplanation}
                  </div>
                )}
              </div>
            </div>
            <div className="sm:w-auto w-full">
              <ButtonGame
                className="w-full sm:w-40"
                status={status}
                onClick={handleOnContinue}
              >
                Continue
              </ButtonGame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
