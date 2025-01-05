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

  const handleOnInput = React.useCallback(
    (e: React.FormEvent<HTMLSpanElement>, blankId: string) => {
      const content = (e.target as HTMLSpanElement).textContent || "";

      setValue((prev) => ({
        ...prev,
        [blankId]: content.replace(/\u200B/g, ""),
      }));
    },
    []
  );

  React.useEffect(() => {
    if (!checked) return;
    gradeQuestion(data, value, onGrade);
  }, [checked, data, onGrade, value]);

  const handleOnFormClick = React.useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      if (autoFocusRef.current) {
        autoFocusRef.current.focus();
      }
    },
    [autoFocusRef]
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
      <span
        key={blank.id}
        title={blank.id}
        role="textbox"
        aria-multiline="false"
        inputMode="email"
        ref={index === 0 ? autoFocusRef : null}
        tabIndex={!checked ? 0 : -1}
        contentEditable={!checked}
        suppressContentEditableWarning={true}
        onInput={(e) => handleOnInput(e, blank.id)}
        // onKeyDown={handleOnKeyDown}
        className={cn(
          "border-b-2 border-border bg-transparent outline-none",
          !checked && "focus:border-blue-500",
          checked &&
            !correct &&
            "border-red-500 dark:border-red-600 dark:text-red-500 text-red-700",
          checked &&
            correct &&
            "border-green-500 dark:border-green-700 dark:text-green-500 text-green-700",
          value[blank.id].length > 12 ? "inline pb-[2.6px]" : "inline-block",
          "transition-colors duration-150 ease-in-out"
        )}
        style={{ minWidth: `${blank.correctAnswer.length + 2}ch` }}
      >
        {/* Zero-width space character as a workaround for some browser */}
        {"\u200B"}
      </span>
    );
  };

  return (
    <form
      id={data.id}
      name={data.id}
      onSubmit={handleSubmit}
      onClick={handleOnFormClick}
      className="bg-input  border-border border-2 rounded-sm py-2 px-4 min-h-40 cursor-default"
    >
      <div className="inline">
        {parts.map((part) =>
          part.type === "text" ? part.value : renderInput(part.index)
        )}
      </div>

      <input type="submit" hidden={true} />
    </form>
  );
};
