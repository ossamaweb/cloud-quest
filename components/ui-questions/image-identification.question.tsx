"use client";

import {
  LessonQuestionProps,
  ImageIdentificationQuestion,
} from "@/lib/interfaces";
import { useCallback, useState } from "react";
import { gradeQuestion, validateImageIdentificationAnswer } from "@/lib/utils";
import { KeyboardProvider } from "@/hooks/use-keyboard";
import Image from "next/image";
import ButtonQuestion from "@/components/ui/button-question";

export const ImageIdentification = ({
  data,
  points,
  status,
  checked,
  onGrade,
}: LessonQuestionProps<ImageIdentificationQuestion>) => {
  const [{ selectedId }, setState] = useState({ selectedId: "" });

  const handleOnClick = useCallback(
    (optionId: string) => {
      setState({ selectedId: optionId });

      const correct = validateImageIdentificationAnswer(
        optionId,
        data.correctOptionId
      );
      gradeQuestion({
        onGrade,
        data,
        trials: [correct],
        totalPoints: points,
        autoCheck: false,
        answersCount: 1,
      });
    },
    [data, onGrade, points]
  );

  return (
    <KeyboardProvider>
      <div className="flex sm:flex-row flex-col justify-center items-stretch sm:gap-8 gap-4">
        <div className="sm:flex-1 sm:h-auto h-64 flex items-center justify-center bg-input border-border border-2 rounded-md p-2">
          {!!data.image.url && (
            <figure className="relative rounded-md overflow-hidden">
              <Image
                src={data.image.url}
                alt={data.image.altText}
                className="object-contain w-auto h-auto"
                width={256}
                height={256}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
                priority={true}
              />
            </figure>
          )}
        </div>

        <div className="flex-1 grid grid-cols-1 gap-4">
          {data.options.map((option, index) => (
            <div key={option.id}>
              <ButtonQuestion
                className="leading-5 h-16"
                text={option.text}
                keyboardShortcut={String(index + 1)}
                selected={selectedId === option.id}
                disabled={checked || selectedId === option.id}
                status={
                  checked && selectedId === option.id ? status : undefined
                }
                onClick={() => handleOnClick(option.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </KeyboardProvider>
  );
};
