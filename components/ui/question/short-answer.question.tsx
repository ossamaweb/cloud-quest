"use client";

import { LessonQuestionProps, ShortAnswerQuestion } from "@/lib/interfaces";
import { gradeQuestion } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

export const ShortAnswer = ({
  data,
  checked,
  onGrade,
  onAnswer,
}: LessonQuestionProps<ShortAnswerQuestion>) => {
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

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      gradeQuestion(data, value, onGrade);
    },
    [data, value, onGrade]
  );

  useEffect(() => {
    if (!checked) return;

    gradeQuestion(data, value, onGrade);
  }, [checked, data, onGrade, value]);

  return (
    <form
      id={data.id}
      name={data.id}
      onSubmit={handleSubmit}
      className="space-y-2"
    >
      <input
        type="text"
        value={value}
        autoFocus={true}
        autoComplete="off"
        disabled={checked}
        onChange={handleChange}
        className="w-full p-2 bg-input border-2 border-border rounded-sm outline-none placeholder:text-foreground/20"
        placeholder="Type your answer"
      />
      <input type="submit" hidden={true} />
    </form>
  );
};
