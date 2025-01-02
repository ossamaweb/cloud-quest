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

export default function LessonQuestion(props: LessonQuestionProps<Question>) {
  return (
    <div className={props.className}>
      <div className="flex flex-col justify-between gap-8 w-full h-full">
        <h2 className="font-bold text-2xl text-foreground">
          <QuestionTitleRenderer type={props.data.type} />
        </h2>

        <div className="flex-1 flex flex-col items-stretch justify-center">
          <QuestionOptionsRenderer {...props} />
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

function QuestionOptionsRenderer({
  data,
  ...rest
}: LessonQuestionProps<Question>): React.JSX.Element {
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

function QuestionTitleRenderer({
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
      return "Provide a short answer";
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
