import { CreateQuestionInput } from "@/lib/graphql/API";
import { QuestionData } from "@/lib/interfaces";
import questionsSeed from "@/tools/ai/questions-generator/dist/main.json";

// In the DB model questionData is a string.
// We stringify the questionData object where we create a record in DB in tools/amplify/seed.ts
interface QuestionSeed extends Omit<CreateQuestionInput, "questionData"> {
  questionData: QuestionData;
}

const questionsSeedData: Array<QuestionSeed> = [
  ...questionsSeed,
] as QuestionSeed[];

export default questionsSeedData;
