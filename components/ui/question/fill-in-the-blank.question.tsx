"use client";

import { useAutoFocus } from "@/hooks/use-auto-focus";
import { FillInTheBlankQuestion, LessonQuestionProps } from "@/lib/interfaces";
import { cn, gradeQuestion, validateBlankAnswer } from "@/lib/utils";
import * as React from "react";

export const FillInTheBlank = ({
  data,
  checked,
  answered,
  onAnswer,
  onGrade,
}: LessonQuestionProps<FillInTheBlankQuestion>) => {
  const autoFocusRef = useAutoFocus();

  const [value, setValue] = React.useState<Record<string, string>>(
    Object.fromEntries(data.blanks.map((blank) => [blank.id, ""]))
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, blankId: string) => {
      setValue((prev) => ({ ...prev, [blankId]: e.target.value }));
    },
    []
  );

  React.useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const hasValue = Object.values(value).every((v) => v.trim().length > 0);
      onAnswer(hasValue);
    }, 100);

    return () => clearTimeout(debounceTimeout);
  }, [onAnswer, value]);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (answered) {
        gradeQuestion(data, value, onGrade);
      }
    },
    [data, value, onGrade, answered]
  );

  React.useEffect(() => {
    if (!checked) return;
    gradeQuestion(data, value, onGrade);
  }, [checked, data, onGrade, value]);

  const handleOnFormClick = React.useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (autoFocusRef.current) {
        autoFocusRef.current.focus();
      }
    },
    []
  );

  const parts = React.useMemo(() => {
    // Split the text by the placeholder pattern
    const arr = data.question.split(/(\{[0-9]+\})/g);

    const parts = arr.map(
      (
        part
      ): {
        type: "text" | "input";
        value: string;
        index: number;
      } => {
        // Check if the part matches the placeholder pattern
        const match = part.match(/\{([0-9]+)\}/);
        return match
          ? { type: "input", value: match[1], index: parseInt(match[1]) - 1 }
          : { type: "text", value: part, index: 0 };
      }
    );

    return parts;
  }, [data.question]);

  const renderInput = (index: number) => {
    const blank = data.blanks[index];

    const correct = checked
      ? validateBlankAnswer(
          value[blank.id],
          blank.correctAnswer,
          blank.acceptableAnswers
        )
      : false;

    return (
      <span className="relative" key={blank.id}>
        <span
          className="bg-red-600 inline-block min-w-12 invisible pointer-events-none outline-none"
          aria-hidden="true"
          tabIndex={-1}
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {value[blank.id]}
        </span>
        <input
          type="text"
          key={blank.id}
          ref={index === 0 ? autoFocusRef : null}
          title={blank.id}
          value={value[blank.id]}
          disabled={checked}
          autoComplete="off"
          onChange={(e) => handleChange(e, blank.id)}
          className={cn(
            "absolute inset-0 -bottom-0.5 border-b-2 border-border focus:border-blue-500 bg-transparent outline-none transition-colors",
            checked &&
              !correct &&
              "border-red-500 dark:text-red-500 text-red-700",
            checked &&
              correct &&
              "border-green-600 dark:text-green-500 text-green-700"
          )}
        />
      </span>
    );
  };

  return (
    <form
      id={data.id}
      name={data.id}
      onSubmit={handleSubmit}
      onClick={handleOnFormClick}
      className="bg-input border-border border-2 rounded-sm py-2 px-4 min-h-40"
    >
      <div>
        {parts.map((part) =>
          part.type === "text" ? part.value : renderInput(part.index)
        )}
      </div>

      <input type="submit" hidden={true} />
    </form>
  );
};
