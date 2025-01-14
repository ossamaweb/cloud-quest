"use client";

import { useAutoFocus } from "@/hooks/use-auto-focus";
import { QuestionType } from "@/lib/graphql/API";
import { LessonQuestionProps, ShortAnswerQuestion } from "@/lib/interfaces";
import { gradeQuestion, validateShortAnswer } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

export const ShortAnswer = ({
  id,
  data,
  points,
  checked,
  previousMistake,
  onGrade,
  onAnswer,
}: LessonQuestionProps<ShortAnswerQuestion>) => {
  const autoFocusRef = useAutoFocus();
  const [value, setValue] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const hasValue = value.trim().length > 0;
      onAnswer(hasValue);
    }, 100);

    return () => clearTimeout(debounceTimeout);
  }, [onAnswer, value]);

  const handleOnGrade = useCallback(
    (answer: string) => {
      const correct = validateShortAnswer(
        answer,
        data.correctAnswer,
        data.acceptableAnswers
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
    [onGrade, data, points, previousMistake]
  );

  // const handleSubmit = useCallback(
  //   (e: React.FormEvent) => {
  //     e.preventDefault();
  //     const hasValue = value.trim().length > 0;
  //     if (hasValue) {
  //       handleOnGrade(value, true);
  //     }
  //   },
  //   [value, handleOnGrade]
  // );

  useEffect(() => {
    if (checked) {
      handleOnGrade(value);
    }
  }, [checked, value, handleOnGrade]);

  return (
    <div
      // id={id ?? "shortAnswerForm"}
      // name={id ?? "shortAnswerForm"}
      // onSubmit={handleSubmit}
      className="space-y-2"
    >
      <input
        type="text"
        ref={autoFocusRef}
        value={value}
        autoComplete="off"
        disabled={checked}
        onChange={handleChange}
        className="w-full p-2 bg-input border-2 border-border rounded-sm outline-none placeholder:text-foreground/20"
        placeholder="Type your answer"
      />
      {/* <input type="submit" hidden={true} /> */}
    </div>
  );
};
