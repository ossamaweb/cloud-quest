import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LessonQuestionProps, QuestionData } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AUTO_CHECK_DURATION = 500;

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
  status: LessonQuestionProps<unknown>["status"],
  questionIndex: number
): string {
  if (status === "incorrect") {
    return ANSWER_MSG_UNCORRECT[questionIndex % ANSWER_MSG_UNCORRECT.length];
  }
  if (status === "correct") {
    return ANSWER_MSG_CORRECT[questionIndex % ANSWER_MSG_CORRECT.length];
  }
  return "";
}

export function validateMultipleChoiceAnswer(
  userAnswer: string,
  correctAnswer: string
): boolean {
  return userAnswer === correctAnswer;
}

export const validateImageIdentificationAnswer = validateMultipleChoiceAnswer;

export function validateTrueOrFalseAnswer(
  userAnswer: boolean,
  correctAnswer: boolean
): boolean {
  return userAnswer === correctAnswer;
}

export function validateBlankAnswer(
  userAnswer: string | undefined,
  correctAnswer: string,
  acceptableAnswers?: string[]
): boolean {
  const userValue = userAnswer?.trim().toLowerCase() ?? "";
  const correctAnswers = [correctAnswer, ...(acceptableAnswers ?? [])];
  const blankCorrect =
    correctAnswers.map((ca) => ca.toLowerCase().trim()).includes(userValue) ??
    false;

  return blankCorrect;
}

export const validateShortAnswer = validateBlankAnswer;

export function validateMatchAnswer(
  userAnswer: Record<string, string>,
  correctPairings: Record<string, string>
): boolean {
  return Object.entries(userAnswer).every(
    ([key, value]) => correctPairings[key] === value
  );
}

export function validateOrderingAnswer(
  userAnswer: string[],
  correctOrder: string[]
): boolean {
  return (
    userAnswer.length === correctOrder.length &&
    userAnswer.every((item, index) => item === correctOrder[index])
  );
}

export function gradeQuestion({
  trials,
  answersCount,
  totalPoints,
  autoCheck,
  data,
  onGrade,
}: {
  trials: boolean[];
  answersCount: number;
  totalPoints: number;
  autoCheck: boolean;
  data: QuestionData;
  onGrade: LessonQuestionProps<unknown>["onGrade"];
}): void {
  const correctTrials = trials.filter((correct) => correct);
  const accuracy = (correctTrials.length / trials.length) * 100;
  const correct = correctTrials.length === answersCount;
  onGrade({
    correct,
    points: (totalPoints * accuracy) / 100,
    accuracy: accuracy * answersCount,
    answersCount,
    autoCheck,
    data,
  });
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
