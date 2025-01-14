import "dotenv/config";
import {
  GoogleGenerativeAI,
  GoogleGenerativeAIFetchError,
} from "@google/generative-ai";
import { FunctionCallingMode } from "@google/generative-ai/server";
import { functionDeclarations } from "./function-delerations";
import { generateQuestionsPrompt } from "./prompt-generator";
import { GetLesson } from "@/lib/types";
import fs from "node:fs";
import lessonsSeedData from "@/tools/amplify/seed-data/004_lessons.seed";
import modulesSeedData from "@/tools/amplify/seed-data/003_modules.seed";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("process.env.GEMINI_API_KEY not found.");
}

if (!functionDeclarations) {
  throw new Error("functionDeclarations not found.");
}

console.log({ functionDeclarations: functionDeclarations.length });

const generationConfig = {
  temperature: 0.2,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 16384,
  responseMimeType: "text/plain",
};

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  tools: [
    {
      functionDeclarations,
    },
  ],
  toolConfig: { functionCallingConfig: { mode: FunctionCallingMode.AUTO } },
});

type GeneratedLesson = Omit<
  GetLesson,
  "owner" | "createdAt" | "updatedAt" | "version"
>;

async function generateLesson(prompt: string): Promise<[GeneratedLesson]> {
  const chatSession = model.startChat({
    generationConfig,
  });

  const result = await chatSession.sendMessage(prompt);
  const text = result.response.text();
  // Remove code block markers
  const jsonText = text.replace(/```(json)?\n/g, "").replace(/```/g, "");
  try {
    const parsedText = JSON.parse(jsonText) as [GeneratedLesson];

    return Promise.resolve(parsedText);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
}

async function onGenerate() {
  console.log(`Will generate data for ${lessonsSeedData.length} lessons.`);

  let generatedLessonCount = 0;
  const rateLimitThrottle = 10000; //10s
  const mainFileName = `./tools/ai/questions-generator/dist/main.json`;

  const results: GeneratedLesson[] = [];
  for (const [index, lesson] of lessonsSeedData.entries()) {
    let wait = true;

    const lessonId = lesson.id!;
    const moduleId = lesson.moduleId!;
    const moduleData = modulesSeedData.find((m) => m.id === moduleId);

    if (!moduleData) {
      console.error(`Module ${moduleId} not found`);
      continue;
    }
    console.log("****", index, "****");
    console.log(moduleId, lessonId, "start");

    console.time(lessonId);

    const prompt = generateQuestionsPrompt({
      lessonId,
      lessonTitle: lesson.title,
      lessonDescription: lesson.about,
      moduleId,
      moduleTitle: moduleData.title,
      moduleDescription: moduleData.description ?? "",
    });

    await generateLesson(prompt)
      .then((res) => {
        wait = true;
        results.push(...res);

        // Write results to a file
        const fileName = `./tools/ai/questions-generator/dist/${moduleId}-${lessonId}.json`;
        fs.writeFileSync(fileName, JSON.stringify(res, null, 2), {
          flag: "w",
        });

        fs.writeFileSync(mainFileName, JSON.stringify(results, null, 2), {
          flag: "w",
        });

        generatedLessonCount++;
      })
      .catch((e) => {
        console.error("Error", { lessonId, e });
        if ((e as GoogleGenerativeAIFetchError)?.status === 429) {
          // too many requests
          wait = false;
        }
      });

    console.timeEnd(lessonId);

    if (wait) {
      // Add a delay of ${rateLimitThrottle} seconds between requests, because GEMINI allow only 10 requests per minute
      console.log(lessonId, "waiting for", rateLimitThrottle / 1000, "s...");
      await new Promise((resolve) => setTimeout(resolve, rateLimitThrottle));
    } else {
      console.log(lessonId, "not waiting...");
    }
  }

  console.log(`Generated data for ${generatedLessonCount} lessons.`);
  console.log(`Generated data for ${results.length} questions.`);
}

const main = async () => {
  await onGenerate();
};

main();
