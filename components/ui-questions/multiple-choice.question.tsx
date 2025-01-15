"use client";

import { LessonQuestionProps, MultipleChoiceQuestion } from "@/lib/interfaces";
import * as React from "react";
import { gradeQuestion, validateMultipleChoiceAnswer } from "@/lib/utils";
import { KeyboardProvider } from "@/hooks/use-keyboard";
import ButtonQuestion from "../ui/button-question";

export const MultipleChoice = ({
  data,
  points,
  status,
  checked,
  previousMistake,
  onGrade,
  onAnswer,
}: LessonQuestionProps<MultipleChoiceQuestion>) => {
  const [{ selectedId }, setState] = React.useState({ selectedId: "" });

  const handleOnClick = React.useCallback(
    (optionId: string) => {
      setState({ selectedId: optionId });
      const correct = validateMultipleChoiceAnswer(
        optionId,
        data.correctOptionId
      );

      gradeQuestion({
        onGrade,
        data,
        previousMistake,
        trials: [correct],
        totalPoints: points,
        autoCheck: false,
        answersCount: 1,
      });
    },
    [data, onGrade, points, previousMistake]
  );

  const { options } = React.useMemo(() => {
    return {
      options: [...data.options].sort(() => Math.random() - 0.5),
    };
  }, [data.options]);

  return (
    <KeyboardProvider>
      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <div key={option.id}>
            <ButtonQuestion
              className="leading-5 h-16 md:text-base text-sm"
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
