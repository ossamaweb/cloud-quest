"use client";

import { FillInTheBlankQuestion, LessonQuestionProps } from "@/lib/interfaces";
import { cn, gradeQuestion, validateBlankAnswer } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const FillInTheBlank = ({
  data,
  checked,
  answered,
  onAnswer,
  onGrade,
}: LessonQuestionProps<FillInTheBlankQuestion>) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.focus();
    }
  }, []);

  const [value, setValue] = useState<Record<string, string>>(
    Object.fromEntries(data.blanks.map((blank) => [blank.id, ""]))
  );

  // const handleChange = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>, blankId: string) => {
  //     setValue((prev) => ({ ...prev, [blankId]: e.target.value }));
  //   },
  //   []
  // );

  const handleOnInput = useCallback(
    (e: React.FormEvent<HTMLSpanElement>, blankId: string) => {
      const content = (e.target as HTMLSpanElement).textContent || "";

      setValue((prev) => ({
        ...prev,
        [blankId]: content.replace(/\u200B/g, ""),
      }));
    },
    []
  );

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const hasValue = Object.values(value).every((v) => v.trim().length > 0);
      onAnswer(hasValue);
    }, 100);

    return () => clearTimeout(debounceTimeout);
  }, [onAnswer, value]);

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (answered) {
          gradeQuestion(data, value, onGrade);
        }

        return false;
      }
    },
    [answered, data, onGrade, value]
  );

  useEffect(() => {
    if (!checked) return;
    gradeQuestion(data, value, onGrade);
  }, [checked, data, onGrade, value]);

  const parts = useMemo(() => {
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
        ref={index === 0 ? spanRef : undefined}
        role="textbox"
        aria-label="Fill in the blank"
        aria-multiline="false"
        tabIndex={!checked ? 0 : -1}
        contentEditable={!checked}
        suppressContentEditableWarning={true}
        onInput={(e) => handleOnInput(e, blank.id)}
        onKeyDown={handleOnKeyDown}
        className={cn(
          "inline-block min-w-12 border-b-2 border-border bg-transparent outline-none transition-colors",
          !checked && "focus:border-blue-500",
          checked &&
            !correct &&
            "border-red-500 dark:text-red-500 text-red-700",
          checked &&
            correct &&
            "border-green-600 dark:text-green-500 text-green-700"
        )}
      >
        {/* Zero-width space character as a workaround for some browser */}
        {"\u200B"}
      </span>
    );

    // return (
    //   <input
    //     type="text"
    //     key={blank.id}
    //     title={blank.id}
    //     value={value[blank.id]}
    //     autoFocus={index === 0}
    //     disabled={checked}
    //     onChange={(e) => handleChange(e, blank.id)}
    //     className={cn(
    //       "w-12 py-1 bg-transparent border-b-2 border-border focus:border-blue-500 outline-none transition-colors",
    //       checked &&
    //         !correct &&
    //         "border-red-500 dark:text-red-500 text-red-700",
    //       checked &&
    //         correct &&
    //         "border-green-600 dark:text-green-500 text-green-700"
    //     )}
    //     style={
    //       {
    //         // minWidth: "6ch",
    //         // maxWidth: "20ch",
    //         // width: `${value[blank.id]?.length ?? 0}ch`,
    //       }
    //     }
    //   />
    // );
  };

  return (
    <div className="bg-input border-border border-2 rounded-sm py-2 px-4 min-h-40">
      <div>
        {parts.map((part) =>
          part.type === "text" ? part.value : renderInput(part.index)
        )}
      </div>
    </div>
  );
};
