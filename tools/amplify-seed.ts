import "dotenv/config";
import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
import outputs from "@/amplify_outputs.json";
import client from "@/lib/client";
import { Client } from "aws-amplify/api";
import { type Schema } from "@/amplify/data/schema";

export async function seedData(client: Client<Schema>) {
  // 1. Create Users first since many other models depend on them
  const user = await client.models.User.create({
    username: "demo_user",
    email: "demo@example.com",
    profilePicture: "https://example.com/default-avatar.png",
    status: "ACTIVE",
  });

  // 2. Create UserStats for the user (has-one relationship)
  const userStats = await client.models.UserStats.create({
    userId: user.data?.id,
    points: 100,
    streak: 5,
    longestStreak: 7,
    lessonsCompleted: 10,
    modulesCompleted: 2,
    coursesCompleted: 1,
    achievementsUnlocked: 3,
  });

  // 3. Create Achievements
  const achievement = await client.models.Achievement.create({
    name: "First Steps",
    description: "Complete your first lesson",
    category: "LESSON",
    icon: "https://example.com/icons/first-steps.png",
    pointValue: 50,
  });

  // 4. Create UserAchievement (connecting user and achievement)
  const userAchievement = await client.models.UserAchievement.create({
    userId: user.data?.id,
    achievementId: achievement.data?.id,
    earnedAt: new Date().toISOString(),
  });

  // 5. Create Course
  const course = await client.models.Course.create({
    slug: "aws-basics-101",
    title: "AWS Basics",
    description: "Learn the fundamentals of AWS",
    status: "ACTIVE",
  });

  // 6. Create UserCourseEnrollment
  const enrollment = await client.models.UserCourseEnrollment.create({
    userId: user.data?.id,
    courseId: course.data?.id,
    enrollmentDate: new Date().toISOString(),
  });

  // 7. Create Module
  const _module = await client.models.Module.create({
    slug: "introduction-to-aws",
    title: "Introduction to AWS",
    description: "Basic concepts of AWS",
    order: 1,
    difficulty: "BEGINNER",
    courseId: course.data?.id,
  });

  // 8. Create UserModuleProgress
  const moduleProgress = await client.models.UserModuleProgress.create({
    userId: user.data?.id,
    moduleId: _module.data?.id,
    startDate: new Date().toISOString(),
  });

  // 9. Create Lesson
  const lesson = await client.models.Lesson.create({
    slug: "what-is-aws",
    title: "What is AWS?",
    content: "Amazon Web Services (AWS) is a comprehensive cloud platform...",
    order: 1,
    type: "LESSON",
    moduleId: _module.data?.id,
  });

  // 10. Create Questions for the lesson
  const question = await client.models.Question.create({
    lessonId: lesson.data?.id,
    order: 1,
    type: "MULTIPLE_CHOICE",
    question: "What does AWS stand for?",
    questionData: {
      options: [
        "Amazon Web Services",
        "Advanced Web System",
        "Automated Web Server",
        "Amazon Web System",
      ],
      correctAnswer: 0,
    },
    points: 10,
    difficulty: "EASY",
    version: 1,
    tags: ["basics", "terminology"],
  });

  // 11. Create UserLessonCompletion
  const lessonCompletion = await client.models.UserLessonCompletion.create({
    userId: user.data?.id,
    lessonId: lesson.data?.id,
    points: 10,
    accuracy: 100,
    duration: 300, // in seconds
  });

  return {
    user,
    userStats,
    achievement,
    userAchievement,
    course,
    enrollment,
    module: _module,
    moduleProgress,
    lesson,
    question,
    lessonCompletion,
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

    // After successful sign in proceed with seeding

    console.log("Starting data seeding...");
    const seededData = await seedData(client);
    console.log("Data seeding completed successfully:", seededData);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

main();
