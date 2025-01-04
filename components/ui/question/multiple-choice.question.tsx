"use client";

import { LessonQuestionProps, MultipleChoiceQuestion } from "@/lib/interfaces";
import ButtonQuestion from "../button-question";
import { useCallback, useState } from "react";
import { gradeQuestion } from "@/lib/utils";

export const MultipleChoice = ({
  data,
  status,
  checked,
  onGrade,
}: LessonQuestionProps<MultipleChoiceQuestion>) => {
  const [{ selectedId }, setState] = useState({ selectedId: "" });

  const handleOnClick = useCallback(
    (optionId: string) => {
      setState({ selectedId: optionId });
      gradeQuestion(data, optionId, onGrade);
    },
    [data, onGrade]
  );

  return (
    <div className="space-y-2">
      {data.options.map((option, index) => (
        <div key={option.id}>
          <ButtonQuestion
            text={option.text}
            label={String(index + 1)}
            selected={selectedId === option.id}
            disabled={checked}
            status={checked && selectedId === option.id ? status : undefined}
            onClick={() => handleOnClick(option.id)}
          />
        </div>
      ))}
    </div>
  );
};
