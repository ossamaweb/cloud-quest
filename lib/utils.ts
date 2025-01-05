import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  DragAndDropQuestion,
  FillInTheBlankQuestion,
  ImageIdentificationQuestion,
  LessonQuestionProps,
  MatchingQuestion,
  MultipleChoiceQuestion,
  OrderingQuestion,
  Question,
  ScenarioBasedQuestion,
  ShortAnswerQuestion,
  TrueFalseQuestion,
} from "./interfaces";
import { QUESTION_TYPE } from "./enums";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AUTO_CHECK_DURATION = 400;

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

export function validateBlankAnswer(
  userAnswer: string | undefined,
  correctAnswer: string,
  acceptableAnswers?: string[]
): boolean {
  const userValue = userAnswer?.trim().toLowerCase() ?? "";
  const correctAnswers = [correctAnswer, ...(acceptableAnswers ?? [])];
  const blankCorrect =
    correctAnswers.map((ac) => ac.toLowerCase().trim()).includes(userValue) ??
    false;

  return blankCorrect;
}

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

const QUESTION_GRADING: Record<
  QUESTION_TYPE,
  (
    question: Question,
    userAnswer: unknown
  ) => { correct: boolean; points: number; autoCheck: boolean }
> = {
  [QUESTION_TYPE.MULTIPLE_CHOICE]: (question, userAnswer) => {
    const mcQuestion = question as MultipleChoiceQuestion;
    const mcAnswer = userAnswer as string;
    const correct = mcAnswer === mcQuestion.correctOptionId;
    const points = mcQuestion.points ?? 0;
    return { correct, points, autoCheck: false };
  },

  [QUESTION_TYPE.DRAG_AND_DROP]: (question, userAnswer) => {
    const ddQuestion = question as DragAndDropQuestion;
    const ddAnswer = userAnswer as Record<string, string>;

    const correct = Object.entries(ddAnswer).every(
      ([key, value]) => ddQuestion.correctPairings[key] === value
    );
    return {
      correct,
      points: correct ? ddQuestion.points ?? 0 : 0,
      autoCheck: true,
    };
  },

  [QUESTION_TYPE.SCENARIO_BASED]: (question, userAnswer) => {
    throw new Error("Function not implemented.");
  },

  [QUESTION_TYPE.SHORT_ANSWER]: (question, userAnswer) => {
    const saQuestion = question as ShortAnswerQuestion;
    const userText = (userAnswer as string).toLowerCase().trim();
    const correctAnswers = [
      saQuestion.correctAnswer,
      ...(saQuestion.acceptableAnswers ?? []),
    ];
    const correct =
      correctAnswers
        .map((answer) => answer.toLowerCase().trim())
        .includes(userText) ?? false;
    return {
      correct,
      points: correct ? saQuestion.points ?? 0 : 0,
      autoCheck: true,
    };
  },

  [QUESTION_TYPE.FILL_IN_THE_BLANK]: (question, userAnswer) => {
    // throw new Error("Function not implemented.");
    const fibQuestion = question as FillInTheBlankQuestion;
    const fibAnswer = userAnswer as Record<string, string>;

    // Check if all blanks are filled and correct
    const correct = fibQuestion.blanks.every(
      ({ id, correctAnswer, acceptableAnswers }) =>
        validateBlankAnswer(fibAnswer[id], correctAnswer, acceptableAnswers)
    );

    return {
      correct,
      points: correct ? fibQuestion.points ?? 0 : 0,
      autoCheck: true,
    };
  },

  [QUESTION_TYPE.MATCHING]: (question, userAnswer) => {
    const mQuestion = question as MatchingQuestion;
    const mAnswer = userAnswer as Record<string, string>;

    const correct = validateMatchAnswer(mAnswer, mQuestion.correctPairings);

    return {
      correct,
      points: correct ? mQuestion.points ?? 0 : 0,
      autoCheck: true,
    };
  },

  [QUESTION_TYPE.TRUE_FALSE]: (question, userAnswer) => {
    const tfQuestion = question as TrueFalseQuestion;
    const correct = userAnswer === tfQuestion.correctAnswer;
    return {
      correct,
      points: correct ? tfQuestion.points ?? 0 : 0,
      autoCheck: false,
    };
  },

  [QUESTION_TYPE.ORDERING]: (question, userAnswer) => {
    const oQuestion = question as OrderingQuestion;
    const userOrder = userAnswer as string[];
    const correct = validateOrderingAnswer(userOrder, oQuestion.correctOrder);

    return {
      correct,
      points: correct ? oQuestion.points ?? 0 : 0,
      autoCheck: true,
    };
  },

  [QUESTION_TYPE.IMAGE_IDENTIFICATION]: (question, userAnswer) => {
    throw new Error("Function not implemented.");
    // const imgQuestion = question as ImageIdentificationQuestion;
    // const userIdentification = (userAnswer as string).toLowerCase().trim();
    // const correct = imgQuestion.correctOptionId
    //   .map((id) => id.toLowerCase().trim())
    //   .includes(userIdentification);
    // return { correct, points: correct ? imgQuestion.points ?? 0 : 0 };
  },
};

export function gradeQuestion(
  data: Question,
  userAnswer: unknown,
  cb: LessonQuestionProps<unknown>["onGrade"]
): void {
  const questionGrading = QUESTION_GRADING[data.type];
  if (!questionGrading) {
    throw new Error("Function not implemented.");
  }

  const { correct, points, autoCheck } = questionGrading(data, userAnswer);

  cb(correct, points, autoCheck, data);
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
