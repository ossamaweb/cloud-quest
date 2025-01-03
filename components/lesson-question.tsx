"use client";

import { QUESTION_TYPE } from "@/lib/enums";
import { LessonQuestionProps, Question } from "@/lib/interfaces";
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
import { cn } from "@/lib/utils";

export default function LessonQuestion(props: LessonQuestionProps<Question>) {
  return (
    <div className={cn("w-full h-full", props.className)}>
      <div className="flex flex-col justify-between sm:gap-8 gap-4 w-full h-full">
        <h2 className="font-bold sm:text-2xl text-xl text-foreground">
          <QuestionHeaderRenderer type={props.data.type} />
        </h2>

        <div className="flex-1 flex flex-col items-stretch justify-center">
          <div className="sm:space-y-8 space-y-4">
            <QuestionTitleRenderer {...props} />
            <QuestionOptionsRenderer {...props} />
          </div>
        </div>
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

function QuestionHeaderRenderer({
  type,
}: {
  type: QUESTION_TYPE;
}): React.ReactNode {
  switch (type) {
    case QUESTION_TYPE.MULTIPLE_CHOICE:
      return "Select the correct option";
    case QUESTION_TYPE.DRAG_AND_DROP:
      return "Drag and drop to correct positions";
    case QUESTION_TYPE.SCENARIO_BASED:
      return "Solve the following scenario";
    case QUESTION_TYPE.SHORT_ANSWER:
      return "Write a short answer";
    case QUESTION_TYPE.FILL_IN_THE_BLANK:
      return "Fill in the blank";
    case QUESTION_TYPE.MATCHING:
      return "Select the matching pairs";
    case QUESTION_TYPE.TRUE_FALSE:
      return "True or false";
    case QUESTION_TYPE.ORDERING:
      return "Order items correctly";
    case QUESTION_TYPE.IMAGE_IDENTIFICATION:
      return "Identify the image";
    default:
      return "Answer the following question";
  }
}

function QuestionTitleRenderer({
  data,
}: LessonQuestionProps<Question>): React.ReactNode {
  if (data.type === QUESTION_TYPE.FILL_IN_THE_BLANK) {
    return null;
  }
  return <h3 className="sm:text-lg text-base font-medium">{data.question}</h3>;
}

function QuestionOptionsRenderer({
  data,
  ...rest
}: LessonQuestionProps<Question>): React.ReactNode {
  switch (data.type) {
    case QUESTION_TYPE.MULTIPLE_CHOICE:
      return <MultipleChoice data={data} {...rest} />;
    case QUESTION_TYPE.DRAG_AND_DROP:
      return <DragAndDrop data={data} {...rest} />;
    case QUESTION_TYPE.SCENARIO_BASED:
      return <ScenarioBased data={data} {...rest} />;
    case QUESTION_TYPE.SHORT_ANSWER:
      return <ShortAnswer data={data} {...rest} />;
    case QUESTION_TYPE.FILL_IN_THE_BLANK:
      return <FillInTheBlank data={data} {...rest} />;
    case QUESTION_TYPE.MATCHING:
      return <Matching data={data} {...rest} />;
    case QUESTION_TYPE.TRUE_FALSE:
      return <TrueFalse data={data} {...rest} />;
    case QUESTION_TYPE.ORDERING:
      return <Ordering data={data} {...rest} />;
    case QUESTION_TYPE.IMAGE_IDENTIFICATION:
      return <ImageIdentification data={data} {...rest} />;
    default:
      return <div>Unsupported question type</div>;
  }
}
