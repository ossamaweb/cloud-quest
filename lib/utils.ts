import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  LessonQuestionProps,
  MultipleChoiceQuestion,
  Question,
} from "./interfaces";
import { QUESTION_TYPE } from "./enums";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ANSWER_MSG_UNCORRECT = [
  "That's not quite right!",
  "Not exactly...",
  "Sorry, that's not correct.",
  "Incorrect answer.",
];
const ANSWER_MSG_CORRECT = [
  "Great work!",
  "Perfect!",
  "Excellent!",
  "You got it!",
];

export function getQuestionEndMessage(
  incorrect: boolean,
  questionIndex: number
): string {
  if (incorrect) {
    return ANSWER_MSG_UNCORRECT[questionIndex % ANSWER_MSG_UNCORRECT.length];
  }
  return ANSWER_MSG_CORRECT[questionIndex % ANSWER_MSG_CORRECT.length];
}

const QUESTION_GRADING: Record<
  QUESTION_TYPE,
  (
    question: Question,
    userAnswer: unknown
  ) => { correct: boolean; points: number }
> = {
  [QUESTION_TYPE.MULTIPLE_CHOICE]: (question, userAnswer) => {
    const mcQuestion = question as MultipleChoiceQuestion;
    const correct = userAnswer === mcQuestion.correctOptionId;
    const points = mcQuestion.points ?? 0;
    return { correct, points };
  },
  [QUESTION_TYPE.DRAG_AND_DROP]: function (
    question: Question,
    userAnswer: unknown
  ): { correct: boolean; points: number } {
    throw new Error("Function not implemented.");
  },
  [QUESTION_TYPE.SCENARIO_BASED]: function (
    question: Question,
    userAnswer: unknown
  ): { correct: boolean; points: number } {
    throw new Error("Function not implemented.");
  },
  [QUESTION_TYPE.SHORT_ANSWER]: function (
    question: Question,
    userAnswer: unknown
  ): { correct: boolean; points: number } {
    throw new Error("Function not implemented.");
  },
  [QUESTION_TYPE.FILL_IN_THE_BLANK]: function (
    question: Question,
    userAnswer: unknown
  ): { correct: boolean; points: number } {
    throw new Error("Function not implemented.");
  },
  [QUESTION_TYPE.MATCHING]: function (
    question: Question,
    userAnswer: unknown
  ): { correct: boolean; points: number } {
    throw new Error("Function not implemented.");
  },
  [QUESTION_TYPE.TRUE_FALSE]: function (
    question: Question,
    userAnswer: unknown
  ): { correct: boolean; points: number } {
    throw new Error("Function not implemented.");
  },
  [QUESTION_TYPE.ORDERING]: function (
    question: Question,
    userAnswer: unknown
  ): { correct: boolean; points: number } {
    throw new Error("Function not implemented.");
  },
  [QUESTION_TYPE.IMAGE_IDENTIFICATION]: function (
    question: Question,
    userAnswer: unknown
  ): { correct: boolean; points: number } {
    throw new Error("Function not implemented.");
  },
};

export function gradeQuestion(
  data: Question,
  userAnswer: unknown,
  cb: LessonQuestionProps<unknown>["onAnswer"]
) {
  const questionGrading = QUESTION_GRADING[data.type];
  if (!questionGrading) {
    throw new Error("Function not implemented.");
  }

  const { correct, points } = questionGrading(data, userAnswer);
  cb(correct, points, data);
}

export function getModuleNodeTranslation(
  index = 0,
  numNodes = 6,
  inverse = false
) {
  // Calculate rotation for arc formation
  // Spread nodes across 180 degrees (-90 to +90)
  const angleSpread = 180;
  const angleStep = angleSpread / (numNodes - 1);
  const rotation = -90 + index * angleStep;
  // Calculate radius for positioning
  const radius = 100; // Adjust this value to control arc size
  const x = radius * Math.cos((rotation * Math.PI) / 180) * (inverse ? -1 : 1);

  return {
    transform: `translateX(${x}px)`,
  } as React.CSSProperties;
}
