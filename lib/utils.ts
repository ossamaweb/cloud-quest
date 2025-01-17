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
  correctPairings: Array<{ termId: string; definitionId: string }>
): boolean {
  return Object.entries(userAnswer).every(([key, value]) => {
    return correctPairings.find(
      (cp) => cp.termId === key && cp.definitionId === value
    );
  });
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
  previousMistake,
  onGrade,
}: {
  trials: boolean[];
  answersCount: number;
  totalPoints: number;
  autoCheck: boolean;
  data: QuestionData;
  previousMistake: boolean | undefined;
  onGrade: LessonQuestionProps<unknown>["onGrade"];
}): void {
  const correctTrials = trials.filter((correct) => correct);
  const accuracy = (correctTrials.length / trials.length) * 100;
  const weightedAccuracy = accuracy * answersCount;
  const correct = correctTrials.length === answersCount;
  const accuratePoints = (totalPoints * accuracy) / 100;

  // Grade Only Correct Attempt
  onGrade({
    correct,
    autoCheck,
    data,
    points: previousMistake ? 0 : accuratePoints,
    answersCount: previousMistake ? 0 : answersCount,
    accuracy: previousMistake ? 0 : weightedAccuracy,
  });
}

export function getLessonNodeTranslation(
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

// Helper function to add leading zero if needed
function padWithZero(num: number): string {
  return num.toString().padStart(2, "0");
}

export function formatTimeWithHours(totalSeconds: number): string {
  // Calculate each time unit
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Pad each unit with leading zeros
  const paddedHours = padWithZero(hours);
  const paddedMinutes = padWithZero(minutes);
  const paddedSeconds = padWithZero(seconds);

  // Return HH:MM:SS format if there are hours, otherwise MM:SS
  if (hours > 0) {
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }
  return `${paddedMinutes}:${paddedSeconds}`;
}

export function getRepeatedLessonPoints(points: number): number {
  return Math.round(points * 0.25); // 25% of original points for lesson review
}

export function calcuateLessonFinalPoints(
  points: number,
  repeated: boolean
): number {
  const finalpoints = Math.round(points);
  return repeated ? getRepeatedLessonPoints(finalpoints) : finalpoints;
}
