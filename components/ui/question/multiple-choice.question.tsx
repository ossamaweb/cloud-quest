"use client";

import { LessonQuestionProps, MultipleChoiceQuestion } from "@/lib/interfaces";
import ButtonQuestion from "../button-question";
import { useCallback, useState } from "react";

export const MultipleChoice = ({
  data,
  status,
  checked,
  onAnswer,
}: LessonQuestionProps<MultipleChoiceQuestion>) => {
  const [{ selectedId }, setState] = useState({ selectedId: "" });

  const handleOnClick = useCallback(
    (optionId: string) => {
      setState({ selectedId: optionId });
      onAnswer(data.correctOptionId === optionId, data.points ?? 0, data);
    },
    [data, onAnswer]
  );

  return (
    <div className="space-y-4">
      {data.options.map((option, index) => (
        <div key={option.id}>
          <ButtonQuestion
            text={option.text}
            label={String(index + 1)}
            selected={selectedId === option.id}
            checked={checked}
            disabled={checked}
            status={checked && selectedId === option.id ? status : undefined}
            onClick={() => handleOnClick(option.id)}
          />
        </div>

        // <label key={option.id} className="flex items-center space-x-2">
        //   <input
        //     type="radio"
        //     name={question.id}
        //     value={option.id}
        //     onChange={() => onAnswer(option.id)}
        //   />
        //   <span>{option.text}</span>
        //   {option.imageUrl && (
        //     <img src={option.imageUrl} alt="" className="h-8 w-8" />
        //   )}
        // </label>
      ))}
    </div>
  );
};
