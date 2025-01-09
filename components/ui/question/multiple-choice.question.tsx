"use client";

import { LessonQuestionProps, MultipleChoiceQuestion } from "@/lib/interfaces";
import ButtonQuestion from "../button-question";
import { useCallback, useState } from "react";
import { gradeQuestion } from "@/lib/utils";
import { KeyboardProvider } from "@/hooks/use-keyboard";
import { QuestionType } from "@/lib/graphql/API";

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
      gradeQuestion(QuestionType.MULTIPLE_CHOICE, data, optionId, onGrade);
    },
    [data, onGrade]
  );

  return (
    <KeyboardProvider>
      <div className="grid grid-cols-1 gap-4">
        {data.options.map((option, index) => (
          <div key={option.id}>
            <ButtonQuestion
              text={option.text}
              keyboardShortcut={String(index + 1)}
              selected={selectedId === option.id}
              disabled={checked || selectedId === option.id}
              status={checked && selectedId === option.id ? status : undefined}
              onClick={() => handleOnClick(option.id)}
            />
          </div>
        ))}
      </div>
    </KeyboardProvider>
  );
};
