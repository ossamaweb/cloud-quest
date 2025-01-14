"use client";

import { LessonQuestionProps, TrueFalseQuestion } from "@/lib/interfaces";
import { useCallback, useState } from "react";
import { gradeQuestion, validateTrueOrFalseAnswer } from "@/lib/utils";
import { CheckIcon, XIcon } from "lucide-react";
import { KeyboardProvider } from "@/hooks/use-keyboard";
import ButtonQuestion from "../ui/button-question";

export const TrueFalse = ({
  data,
  points,
  status,
  checked,
  onGrade,
}: LessonQuestionProps<TrueFalseQuestion>) => {
  const [{ selectedId }, setState] = useState({ selectedId: "" });

  const handleOnClick = useCallback(
    (selectedId: string) => {
      setState({ selectedId });
      const correct = validateTrueOrFalseAnswer(
        selectedId === "1",
        data.correctAnswer
      );

      gradeQuestion({
        onGrade,
        data,
        trials: [correct],
        totalPoints: points,
        autoCheck: false,
        answersCount: 1,
      });
    },
    [data, onGrade, points]
  );

  return (
    <KeyboardProvider>
      <div className="flex items-center justify-center sm:pt-0 pt-4 gap-8">
        <div>
          <ButtonQuestion
            keyboardShortcut="1"
            selected={selectedId === "1"}
            disabled={checked}
            status={checked && selectedId === "1" ? status : undefined}
            onClick={() => handleOnClick("1")}
            className="sm:w-40 sm:h-40 w-28 h-28 flex gap-2 flex-col justify-center"
          >
            <CheckIcon className="w-16 h-16 flex-shrink-0 -order-1" />
          </ButtonQuestion>
        </div>

        <div>
          <ButtonQuestion
            keyboardShortcut="2"
            selected={selectedId === "0"}
            disabled={checked}
            status={checked && selectedId === "0" ? status : undefined}
            onClick={() => handleOnClick("0")}
            className="sm:w-40 sm:h-40 w-28 h-28 flex gap-2 flex-col justify-center"
          >
            <XIcon className="w-16 h-16 flex-shrink-0 -order-1" />
          </ButtonQuestion>
        </div>
      </div>
    </KeyboardProvider>
  );
};
