import {
  CreateQuestionInput,
  QuestionType,
  QuestionDifficulty,
} from "@/lib/graphql/API";

const questionsSeedData: Array<CreateQuestionInput> = [
  {
    difficulty: QuestionDifficulty.EASY,
    lessonId: "string",
    order: 1,
    points: 10,
    question: "string",
    questionData: "{}",
    type: QuestionType.MATCHING,
  },
];

export default questionsSeedData;
