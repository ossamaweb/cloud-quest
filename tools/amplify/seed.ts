import "dotenv/config";
import { Amplify } from "aws-amplify";
import { signIn, getCurrentUser, AuthUser } from "aws-amplify/auth";
import outputs from "@/amplify_outputs.json";
import client from "@/amplify/client";
import { createUserMutation } from "@/amplify/data/mutations";
import coursesSeedData from "./seed-data/002_courses.seed";
import modulesSeedData from "./seed-data/003_modules.seed";
import lessonsSeedData from "./seed-data/004_lessons.seed";

export async function seedData({ userId, username, signInDetails }: AuthUser) {
  // 1. Create default Course
  const course = await client.models.Course.create(coursesSeedData[0]);

  if (!course.data?.id) {
    throw new Error("Failed to create course record");
  }

  console.log("1. course created.", { id: course.data.id });

  // 2. Create User with UserStats and UserCourseEnrollment
  const user = await createUserMutation(
    {
      userId,
      username,
      email: signInDetails?.loginId ?? username,
    },
    course.data.id
  );

  console.log("2. user created.", { id: user.user.id });

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
    const _module = await client.models.Module.create({
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
    const lesson = await client.models.Lesson.create({
      id: lessonData.id,
      slug: lessonData.slug,
      title: lessonData.title,
      content: lessonData.content,
      order: lessonData.order,
      type: lessonData.type,
      moduleId: lessonData.moduleId,
    });
  }

  console.log("3. lessons created.", { count: lessonsSeedData.length });
  // 10. Create Questions for the lesson
  // const question = await client.models.Question.create({
  //   lessonId: lesson.data?.id,
  //   order: 1,
  //   type: "MULTIPLE_CHOICE",
  //   question: "What does AWS stand for?",
  //   questionData: {
  //     options: [
  //       "Amazon Web Services",
  //       "Advanced Web System",
  //       "Automated Web Server",
  //       "Amazon Web System",
  //     ],
  //     correctAnswer: 0,
  //   },
  //   points: 10,
  //   difficulty: "EASY",
  //   version: 1,
  //   tags: ["basics", "terminology"],
  // });

  return {
    user,
    course,
  };
}

async function main() {
  Amplify.configure(outputs);

  try {
    // Sign in the user first
    const { isSignedIn } = await signIn({
      username: process.env.ADMIN_USERNAME!,
      password: process.env.ADMIN_PASSWORD!,
    });

    if (!isSignedIn) {
      throw new Error("Failed to sign in");
    }

    const currentUser = await getCurrentUser();

    // After successful sign in proceed with seeding
    console.log("Starting data seeding...");
    const seededData = await seedData(currentUser);
    console.log("Data seeding completed successfully:", seededData);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

main();