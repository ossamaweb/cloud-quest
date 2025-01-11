import { QuestionDifficulty, QuestionType } from "./graphql/API";

// Common types
export type ID = string;

// Base interfaces
export interface QuestionOption {
  id: ID;
  text: string;
  imageUrl?: string;
}

export interface BaseQuestion {
  explanation?: string;
}

// Specific question type interfaces
export interface MultipleChoiceQuestion extends BaseQuestion {
  options: QuestionOption[];
  correctOptionId: ID;
}

export interface DragAndDropQuestion extends BaseQuestion {
  categories: QuestionOption[];
  items: QuestionOption[];
  correctPairings: Array<{ itemId: string; categoryId: string }>; // itemId -> categoryId
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
  scenario: string;
  correctAnswer: string;
  rubric?: RubricCriterion[];
}

export interface ShortAnswerQuestion extends BaseQuestion {
  correctAnswer: string;
  acceptableAnswers?: string[]; // Alternative correct answers
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  blanks: {
    id: ID;
    correctAnswer: string;
    acceptableAnswers?: string[];
  }[];
}

export interface MatchingQuestion extends BaseQuestion {
  terms: QuestionOption[];
  definitions: QuestionOption[];
  correctPairings: Array<{ termId: string; definitionId: string }>; // termId -> definitionId
}

export interface TrueFalseQuestion extends BaseQuestion {
  correctAnswer: boolean;
}

export interface OrderingQuestion extends BaseQuestion {
  items: QuestionOption[];
  correctOrder: ID[]; // Array of item IDs in correct order
}

export interface ImageIdentificationQuestion extends BaseQuestion {
  image: {
    url: string;
    altText: string;
  };
  options: QuestionOption[];
  correctOptionId: ID;
}

// Union type for all question types
export type QuestionData =
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
  className?: string;
  id: string | null;
  title: string;
  type: keyof typeof QuestionType | null;
  points: number;
  difficulty: keyof typeof QuestionDifficulty | null;
  data: T;
  answered: boolean;
  checked: boolean;
  status: "unanswered" | "correct" | "incorrect";
  onAnswer: (answered: boolean) => void;
  onGrade: ({
    correct,
    points,
    accuracy,
    autoCheck,
    data,
  }: {
    correct: boolean;
    points: number;
    accuracy: number;
    answersCount: number;
    autoCheck: boolean;
    data: QuestionData;
  }) => void;
}
