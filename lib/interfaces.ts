import { QUESTION_TYPE } from "./enums";

// Common types
export type ID = string;

// Base interfaces
interface Option {
  id: ID;
  text: string;
  imageUrl?: string;
}

export interface BaseQuestion {
  id: ID;
  type: QUESTION_TYPE;
  question: string;
  explanation?: string;
  points?: number;
}

// Specific question type interfaces
export interface MultipleChoiceQuestion extends BaseQuestion {
  type: QUESTION_TYPE.MULTIPLE_CHOICE;
  options: Option[];
  correctOptionId: ID;
}

export interface DragAndDropQuestion extends BaseQuestion {
  type: QUESTION_TYPE.DRAG_AND_DROP;
  categories: Option[];
  items: Option[];
  correctPairings: Record<ID, ID>; // itemId -> categoryId
}

// A rubric in a ScenarioBasedQuestion is a scoring guide that lists specific criteria for evaluating the student's answer to a scenario-based question. Let me expand the ScenarioBasedQuestion interface with a more detailed rubric structure:
interface RubricCriterion {
  id: ID;
  criterion: string;
  points: number;
  description: string;
  performanceLevels: {
    excellent: {
      points: number;
      description: string;
    };
    good: {
      points: number;
      description: string;
    };
    fair: {
      points: number;
      description: string;
    };
    poor: {
      points: number;
      description: string;
    };
  };
}
export interface ScenarioBasedQuestion extends BaseQuestion {
  type: QUESTION_TYPE.SCENARIO_BASED;
  scenario: string;
  correctAnswer: string;
  rubric?: RubricCriterion[];
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: QUESTION_TYPE.SHORT_ANSWER;
  correctAnswer: string;
  acceptableAnswers?: string[]; // Alternative correct answers
  caseSensitive?: boolean;
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  type: QUESTION_TYPE.FILL_IN_THE_BLANK;
  questionText: string;
  blanks: {
    id: ID;
    correctAnswer: string;
    acceptableAnswers?: string[];
  }[];
}

export interface MatchingQuestion extends BaseQuestion {
  type: QUESTION_TYPE.MATCHING;
  terms: Option[];
  definitions: Option[];
  correctPairings: Record<ID, ID>; // termId -> definitionId
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: QUESTION_TYPE.TRUE_FALSE;
  correctAnswer: boolean;
}

export interface OrderingQuestion extends BaseQuestion {
  type: QUESTION_TYPE.ORDERING;
  items: Option[];
  correctOrder: ID[]; // Array of item IDs in correct order
}

export interface ImageIdentificationQuestion extends BaseQuestion {
  type: QUESTION_TYPE.IMAGE_IDENTIFICATION;
  image: {
    url: string;
    altText: string;
  };
  options: Option[];
  correctOptionId: ID;
}

// Union type for all question types
export type Question =
  | MultipleChoiceQuestion
  | DragAndDropQuestion
  | ScenarioBasedQuestion
  | ShortAnswerQuestion
  | FillInTheBlankQuestion
  | MatchingQuestion
  | TrueFalseQuestion
  | OrderingQuestion
  | ImageIdentificationQuestion;

export interface LessonQuestionProps<T> {
  data: T;
  answered: boolean;
  checked: boolean;
  status: "unanswered" | "correct" | "incorrect";
  onAnswer: (correct: boolean, points: number, data: Question) => void;
  className?: string;
}
