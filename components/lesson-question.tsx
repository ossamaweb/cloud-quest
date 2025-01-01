"use client";

import { QUESTION_TYPE } from "@/lib/enums";
import { BaseQuestion, Question } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import * as React from "react";
import { MultipleChoice } from "./ui/question/multiple-choice.question";
import { DragAndDrop } from "./ui/question/drag-and-drop.question";
import { ScenarioBased } from "./ui/question/scenario-based.question";
import { ImageIdentification } from "./ui/question/image-identification.question";
import { Matching } from "./ui/question/matching.question";
import { Ordering } from "./ui/question/ordering.question";
import { ShortAnswer } from "./ui/question/short-answer.question";
import { TrueFalse } from "./ui/question/true-false.question";
import { FillInTheBlank } from "./ui/question/fill-in-the-blank.question";

interface LessonQuestionProps {
  data: Question;
  className?: string;
}

export default function LessonQuestion({
  data,

  className,
}: LessonQuestionProps) {
  return (
    <div className={cn("max-w-2xl mx-auto px-6 pb-12", className)}>
      <h2 className="font-bold text-2xl text-foreground">{data.question}</h2>

      <div className="mt-8">
        <QuestionRenderer question={data} onAnswer={() => null} />
      </div>

      {/* <p className="text-base text-foreground mt-4">{description}</p> */}

      {/* {imageSrc && (
        <figure className="mt-8 bg-muted rounded-lg p-2">
          <img src={imageSrc} alt={imageAlt} className="rounded-lg" />
          {imageCaption && (
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )} */}
    </div>
  );
}

interface QuestionRendererProps {
  question: Question;
  onAnswer: (answer: any) => void;
}

export const QuestionRenderer = ({
  question,
  onAnswer,
}: QuestionRendererProps) => {
  switch (question.type) {
    case QUESTION_TYPE.MULTIPLE_CHOICE:
      return <MultipleChoice question={question} onAnswer={onAnswer} />;
    case QUESTION_TYPE.DRAG_AND_DROP:
      return <DragAndDrop question={question} onAnswer={onAnswer} />;
    case QUESTION_TYPE.SCENARIO_BASED:
      return <ScenarioBased question={question} onAnswer={onAnswer} />;
    case QUESTION_TYPE.SHORT_ANSWER:
      return <ShortAnswer question={question} onAnswer={onAnswer} />;
    case QUESTION_TYPE.FILL_IN_THE_BLANK:
      return <FillInTheBlank question={question} onAnswer={onAnswer} />;
    case QUESTION_TYPE.MATCHING:
      return <Matching question={question} onAnswer={onAnswer} />;
    case QUESTION_TYPE.TRUE_FALSE:
      return <TrueFalse question={question} onAnswer={onAnswer} />;
    case QUESTION_TYPE.ORDERING:
      return <Ordering question={question} onAnswer={onAnswer} />;
    case QUESTION_TYPE.IMAGE_IDENTIFICATION:
      return <ImageIdentification question={question} onAnswer={onAnswer} />;
    default:
      return <div>Unsupported question type</div>;
  }
};
