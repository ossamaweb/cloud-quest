"use client";

import { LessonQuestionProps, TrueFalseQuestion } from "@/lib/interfaces";
import ButtonQuestion from "../button-question";
import { useCallback, useState } from "react";
import { gradeQuestion } from "@/lib/utils";
import { CheckIcon, XIcon } from "lucide-react";

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
    <div className="flex items-center justify-center sm:pt-0 pt-4 gap-8">
      <div>
        <ButtonQuestion
          className="w-32 h-32 justify-center"
          selected={selectedId === "1"}
          disabled={checked}
          status={checked && selectedId === "1" ? status : undefined}
          onClick={() => handleOnClick("1")}
        >
          <CheckIcon className="w-16 h-16" />
        </ButtonQuestion>
      </div>
      <div>
        <ButtonQuestion
          className="w-32 h-32 justify-center"
          selected={selectedId === "0"}
          disabled={checked}
          status={checked && selectedId === "0" ? status : undefined}
          onClick={() => handleOnClick("0")}
        >
          <XIcon className="w-16 h-16" />
        </ButtonQuestion>
      </div>
    </div>
  );
};
