"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { LessonQuestionProps, FillInTheBlankQuestion } from "@/lib/interfaces";
import { cn, gradeQuestion, validateBlankAnswer } from "@/lib/utils";
import * as React from "react";

export const FillInTheBlank = ({
  title,
  data,
  points,
  checked,
  previousMistake,
  onAnswer,
  onGrade,
}: LessonQuestionProps<FillInTheBlankQuestion>) => {
  const isMobile = useIsMobile();
  const inputRefs = React.useRef<Map<string, HTMLSpanElement>>(new Map());

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

  const setInputRef = React.useCallback(
    (element: HTMLSpanElement | null, blankId: string) => {
      if (element) {
        inputRefs.current.set(blankId, element);
      } else {
        inputRefs.current.delete(blankId);
      }
    },
    []
  );

  const handleOnInput = React.useCallback(
    (e: React.FormEvent<HTMLSpanElement>, blankId: string) => {
      const content = (e.target as HTMLSpanElement).textContent || "";

      setValue((prev) => ({
        ...prev,
        [blankId]: content,
      }));
    },
    []
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLSpanElement>, currentBlankId: string) => {
      if (e.key === "Enter") {
        e.preventDefault();

        const currentBlankIndex = data.blanks.findIndex(
          (blank) => blank.id === currentBlankId
        );

        // Get next blank if exists
        const nextBlank = data.blanks[currentBlankIndex + 1];
        if (nextBlank) {
          const nextElement = inputRefs.current.get(nextBlank.id);
          nextElement?.focus();
        }
      }
    },
    [data.blanks]
  );

  React.useEffect(() => {
    if (checked) {
      const trials = data.blanks.map((blank) =>
        validateBlankAnswer(
          value[blank.id],
          blank.correctAnswer,
          blank.acceptableAnswers
        )
      );
      gradeQuestion({
        onGrade,
        data,
        trials,
        previousMistake,
        totalPoints: points,
        autoCheck: false,
        answersCount: data.blanks.length,
      });
    }
  }, [checked, data, onGrade, points, previousMistake, value]);

  const autoFocusOnFirstInput = React.useCallback(() => {
    if (data.blanks.length) {
      const firstElement = inputRefs.current.get(data.blanks[0].id);
      firstElement?.focus();
    }
  }, [data.blanks]);

  const handleOnContainerClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      // Auto focus on the first input when clicking anywhere on the form
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      autoFocusOnFirstInput();
    },
    [autoFocusOnFirstInput]
  );

  React.useEffect(() => {
    if (!isMobile) {
      // Auto focus on the first input if not from Mobile
      autoFocusOnFirstInput();
    }
  }, [autoFocusOnFirstInput, isMobile]);

  const parts = React.useMemo(() => {
    // Split the text by the placeholder pattern
    const arr = title.split(/(\{[0-9]+\})/g);

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
  }, [title]);

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
        ref={(element) => setInputRef(element, blank.id)}
        tabIndex={!checked ? 0 : -1}
        contentEditable={!checked}
        suppressContentEditableWarning={true}
        onInput={(e) => handleOnInput(e, blank.id)}
        onKeyDown={(e) => handleKeyDown(e, blank.id)}
        className={cn(
          "border-b-2 border-border bg-transparent outline-none",
          !checked && "focus:border-blue-500",
          checked &&
            !correct &&
            "border-red-500 dark:border-red-600 dark:text-red-500 text-red-700",
          checked &&
            correct &&
            "border-green-500 dark:border-green-700 dark:text-green-500 text-green-700",
          "inline-block",
          "transition-colors duration-150 ease-in-out"
        )}
        style={{ minWidth: `${blank.correctAnswer.length + 2}ch` }}
      />
    );
  };

  return (
    <div
      onClick={handleOnContainerClick}
      className="bg-input border-border border-2 rounded-sm py-2 px-4 min-h-40 cursor-default"
    >
      <div className="inline">
        {parts.map((part) =>
          part.type === "text" ? part.value : renderInput(part.index)
        )}
      </div>
    </div>
  );
};
