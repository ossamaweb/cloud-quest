"use client";

import { cn, getQuestionEndMessage } from "@/lib/utils";
import { XIcon, CheckIcon } from "lucide-react";
import * as React from "react";
import ButtonGame from "./ui/button-game";
import { LessonQuestionProps } from "@/lib/interfaces";
import { KeyboardProvider } from "@/hooks/use-keyboard";

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
    <KeyboardProvider>
      <div className="w-full bg-background relative">
        <div
          className={cn(
            "bg-background border-t-2 border-border",
            checked && "pointer-events-none"
          )}
        >
          <div className="max-w-4xl mx-auto sm:px-8 px-4 sm:py-12 py-6">
            <div className="flex sm:flex-row flex-col gap-8 justify-end items-center">
              <div className="sm:w-auto w-full">
                <ButtonGame
                  className="w-full sm:w-40"
                  disabled={!answered || checked}
                  keyboardShortcut="Enter"
                  onClick={handleOnCheck}
                >
                  Check
                </ButtonGame>
              </div>
            </div>
          </div>
        </div>

        {checked && status !== "unanswered" && (
          <div
            className={cn(
              "absolute bottom-0 w-full border-t-2 border-transparent",
              // (!checked || status === "unanswered") && "hidden",
              status === "incorrect"
                ? "bg-red-200 dark:bg-zinc-900"
                : "bg-green-200 dark:bg-zinc-900"
            )}
          >
            <div className="max-w-4xl mx-auto sm:px-8 px-4 sm:py-12 py-6">
              <div className="flex sm:flex-row flex-col sm:gap-8 gap-4 justify-between sm:items-center items-start">
                <div
                  className={cn(
                    "flex items-center justify-start gap-2",
                    status === "incorrect" && "dark:text-red-500 text-red-700",
                    status === "correct" && "dark:text-green-500 text-green-700"
                  )}
                >
                  <div className="flex-shrink-0 w-10 h-10">
                    <div
                      className={cn(
                        "w-10 h-10 bg-background flex items-center justify-center rounded-full",
                        "motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in motion-safe:duration-500"
                      )}
                    >
                      {status === "incorrect" ? (
                        <XIcon strokeWidth={5} />
                      ) : (
                        <CheckIcon strokeWidth={5} />
                      )}
                    </div>
                  </div>

                  <div className="text-lg">
                    <div className="font-bold">
                      {getQuestionEndMessage(status, questionIndex)}
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
                    keyboardShortcut="Enter"
                    onClick={handleOnContinue}
                  >
                    Continue
                  </ButtonGame>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </KeyboardProvider>
  );
}
