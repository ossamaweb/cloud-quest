"use client";

import {
  DragAndDropQuestion,
  FillInTheBlankQuestion,
  ImageIdentificationQuestion,
  LessonQuestionProps,
  MatchingQuestion,
  MultipleChoiceQuestion,
  OrderingQuestion,
  QuestionData,
  ShortAnswerQuestion,
  TrueFalseQuestion,
} from "@/lib/interfaces";
import * as React from "react";
import { MultipleChoice } from "@/components/ui-questions/multiple-choice.question";
import { DragAndDrop } from "@/components/ui-questions/drag-and-drop.question";
import { ImageIdentification } from "@/components/ui-questions/image-identification.question";
import { Matching } from "@/components/ui-questions/matching.question";
import { Ordering } from "@/components/ui-questions/ordering.question";
import { ShortAnswer } from "@/components/ui-questions/short-answer.question";
import { TrueFalse } from "@/components/ui-questions/true-false.question";
import { FillInTheBlank } from "@/components/ui-questions/fill-in-the-blank.question";
import { cn } from "@/lib/utils";
import { QuestionType } from "@/lib/graphql/API";

export default function LessonQuestion(
  props: LessonQuestionProps<string | number | boolean | object>
) {
  const parsedData = React.useMemo(() => {
    if (!props.data || typeof props.data !== "string") {
      console.error("Question data not found");
      return null;
    }

    try {
      const parsedData = JSON.parse(props.data as string) as QuestionData;
      console.log({ parsedData });
      return parsedData;
    } catch (err) {
      console.error("Failed to parse question data:", err);
      return null;
    }
  }, [props.data]);

  if (!parsedData) {
    return <div>Failed to parse question data!</div>;
  }

  return (
    <div className={cn("w-full h-full", props.className)}>
      <div className="flex flex-col justify-between sm:gap-8 gap-4 w-full h-full">
        <QuestionHeaderRenderer type={props.type} />

        <div className="flex-1 flex flex-col items-stretch justify-center">
          <div className="space-y-8">
            <QuestionTitleRenderer type={props.type} title={props.title} />
            <QuestionOptionsRenderer {...props} data={parsedData} />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionHeaderRenderer({
  type,
}: Pick<LessonQuestionProps<QuestionData>, "type">): React.ReactNode {
  const pageTitle = React.useMemo(() => {
    switch (type) {
      case QuestionType.MULTIPLE_CHOICE:
        return "Select the correct option";
      case QuestionType.DRAG_AND_DROP:
        return "Drag and drop to correct positions";
      case QuestionType.SCENARIO_BASED:
        return "Solve the following scenario";
      case QuestionType.SHORT_ANSWER:
        return "Type your answer";
      case QuestionType.FILL_IN_THE_BLANK:
        return "Fill in the blank";
      case QuestionType.MATCHING:
        return "Select the matching pairs";
      case QuestionType.TRUE_FALSE:
        return "True or false";
      case QuestionType.ORDERING:
        return "Select in order";
      case QuestionType.IMAGE_IDENTIFICATION:
        return null;
      default:
        return "Answer the following question";
    }
  }, [type]);

  if (!pageTitle) {
    return null;
  }

  return <h2 className="font-bold text-xl text-foreground">{pageTitle}</h2>;
}

function QuestionTitleRenderer({
  type,
  title,
}: Pick<LessonQuestionProps<QuestionData>, "type" | "title">): React.ReactNode {
  if (type === QuestionType.FILL_IN_THE_BLANK) {
    return null;
  }
  return <h3 className="sm:text-lg text-base font-medium">{title}</h3>;
}

function QuestionOptionsRenderer({
  data,
  ...rest
}: LessonQuestionProps<QuestionData>): React.ReactNode {
  switch (rest.type) {
    case QuestionType.MULTIPLE_CHOICE:
      return <MultipleChoice data={data as MultipleChoiceQuestion} {...rest} />;
    case QuestionType.DRAG_AND_DROP:
      return <DragAndDrop data={data as DragAndDropQuestion} {...rest} />;
    case QuestionType.SHORT_ANSWER:
      return <ShortAnswer data={data as ShortAnswerQuestion} {...rest} />;
    case QuestionType.FILL_IN_THE_BLANK:
      return <FillInTheBlank data={data as FillInTheBlankQuestion} {...rest} />;
    case QuestionType.MATCHING:
      return <Matching data={data as MatchingQuestion} {...rest} />;
    case QuestionType.TRUE_FALSE:
      return <TrueFalse data={data as TrueFalseQuestion} {...rest} />;
    case QuestionType.ORDERING:
      return <Ordering data={data as OrderingQuestion} {...rest} />;
    case QuestionType.IMAGE_IDENTIFICATION:
      return (
        <ImageIdentification
          data={data as ImageIdentificationQuestion}
          {...rest}
        />
      );
    default:
      return <div>Unsupported question type</div>;
  }
}
