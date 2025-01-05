"use client";

import { LessonQuestionProps, TrueFalseQuestion } from "@/lib/interfaces";
import ButtonQuestion from "../button-question";
import { useCallback, useState } from "react";
import { gradeQuestion } from "@/lib/utils";
import { CheckIcon, XIcon } from "lucide-react";
import { KeyboardProvider } from "@/hooks/use-keyboard";

export const TrueFalse = ({
  data,
  status,
  checked,
  onGrade,
}: LessonQuestionProps<TrueFalseQuestion>) => {
  const [{ selectedId }, setState] = useState({ selectedId: "" });

  const handleOnClick = useCallback(
    (selectedId: string) => {
      setState({ selectedId });
      gradeQuestion(data, selectedId === "1", onGrade);
    },
    [data, onGrade]
  );

  return (
    <KeyboardProvider>
      <div className="flex items-center justify-center sm:pt-0 pt-4 gap-8">
        <div>
          <ButtonQuestion
            keyboardShortcut="1"
            selected={selectedId === "1" && !checked}
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
            selected={selectedId === "0" && !checked}
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
