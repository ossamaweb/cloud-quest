import "dotenv/config";
import { Amplify } from "aws-amplify";
import { signIn, getCurrentUser, AuthUser } from "aws-amplify/auth";
import outputs from "@/amplify_outputs.json";
import client from "@/amplify/client";
import coursesSeedData from "./seed-data/002_courses.seed";
import modulesSeedData from "./seed-data/003_modules.seed";
import lessonsSeedData from "./seed-data/004_lessons.seed";
import questionsSeedData from "./seed-data/005_questions.seed";
import { setupNewUser } from "@/lib/helpers/user.helpers";
import * as readline from "readline";

export async function seedData({ userId, username, signInDetails }: AuthUser) {
  // 1. Create default Course
  const course = await client.models.Course.create(coursesSeedData[0]);

  if (!course.data?.id) {
    throw new Error("Failed to create course record");
  }

  console.log("1. course created.", { id: course.data.id });

  // 2. Create User with UserStats and UserCourseEnrollment
  const user = await setupNewUser({
    userId,
    username,
    email: signInDetails?.loginId ?? username,
  });

  console.log("2. user created.", { id: user.data?.id });

  // 2. Create Achievements
  // const achievement = await client.models.Achievement.create({
  //   name: "First Steps",
  //   description: "Complete your first lesson",
  //   category: "LESSON",
  //   icon: "https://example.com/icons/first-steps.png",
  //   pointValue: 50,
  // });

  // 7. Create Modules
  for (const moduleData of modulesSeedData) {
    await client.models.Module.create({
      id: moduleData.id,
      slug: moduleData.slug,
      title: moduleData.title,
      description: moduleData.description,
      order: moduleData.order,
      difficulty: moduleData.difficulty,
      courseId: course.data.id,
    });
  }

  console.log("3. modules created.", { count: modulesSeedData.length });

  // 9. Create Lessons
  for (const lessonData of lessonsSeedData) {
    await client.models.Lesson.create({
      id: lessonData.id,
      slug: lessonData.slug,
      title: lessonData.title,
      content: lessonData.content,
      order: lessonData.order,
      type: lessonData.type,
      moduleId: lessonData.moduleId,
    });
  }

  console.log("4. lessons created.", { count: lessonsSeedData.length });

  // 10. Create Questions for the lesson
  for (const questionData of questionsSeedData) {
    await client.models.Question.create(questionData);
  }

  console.log("5. questions created.", { count: questionsSeedData.length });

  return {
    user,
    course,
  };
}

async function tempSeed({ userId, username, signInDetails }: AuthUser) {
  // 9. Create Lessons
  for (const lessonData of lessonsSeedData) {
    await client.models.Lesson.create({
      id: lessonData.id,
      slug: lessonData.slug,
      title: lessonData.title,
      content: lessonData.content,
      order: lessonData.order,
      type: lessonData.type,
      moduleId: lessonData.moduleId,
    });
  }

  console.log("4. lessons created.", { count: lessonsSeedData.length });

  return true;
}

function askForConfirmation(question: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(`${question} (y/N): `, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y");
    });
  });
}

async function main() {
  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
    throw new Error(
      "ADMIN_USERNAME and ADMIN_PASSWORD environment variables are required"
    );
  }

  // Ask for confirmation before proceeding
  const confirmed = await askForConfirmation(
    "WARNING: This operation will seed the database with initial data. This action cannot be undone. Do you want to continue?"
  );

  if (!confirmed) {
    console.log("Operation cancelled by user");
    process.exit(0);
  }

  Amplify.configure(outputs);

  try {
    // Sign in the user first
    const { isSignedIn } = await signIn({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    });

    if (!isSignedIn) {
      throw new Error("Failed to sign in");
    }

    const cognitoUser = await getCurrentUser();

    // After successful sign in proceed with seeding
    console.log("Starting data seeding...");
    const seededData = await seedData(cognitoUser);

    console.log("Data seeding completed successfully:", seededData);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

main();
