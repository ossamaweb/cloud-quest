import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

// Type guard example
// function isMultipleChoiceQuestion(
//   question: Question
// ): question is MultipleChoiceQuestion {
//   return question.type === QUESTION_TYPE.MULTIPLE_CHOICE;
// }

// // Usage example
// function gradeQuestion(question: Question, userAnswer: any): number {
//   switch (question.type) {
//     case QUESTION_TYPE.MULTIPLE_CHOICE:
//       return userAnswer === question.correctOptionId ? question.points ?? 0 : 0;
//     case QUESTION_TYPE.TRUE_FALSE:
//       return userAnswer === question.correctAnswer ? question.points ?? 0 : 0;
//     // Add other cases as needed
//     default:
//       return 0;
//   }
// }

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
