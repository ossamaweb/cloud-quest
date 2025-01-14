import client from "@/amplify/client";
import { currentUserSelectionSet, CurrentUserSelectionSet } from "../types";
import coursesSeedData from "@/tools/amplify/seed-data/002_courses.seed";

export class UserError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "UserError";
    this.code = code;
  }
}

export async function getUser(id: string) {
  const userModel = await client.models.User.get<CurrentUserSelectionSet>(
    {
      id,
    },
    { selectionSet: currentUserSelectionSet }
  );

  if (userModel.errors) {
    throw new UserError(JSON.stringify(userModel.errors), "API_ERROR");
  }

  return userModel;
}

export async function setupNewUser(cognitoUser: {
  userId: string;
  username: string;
  email: string;
}) {
  const defaultCourseId = process.env.DEFAULT_COURSE_ID;
  if (!defaultCourseId) {
    throw new Error("Provide a default course ID");
  }
  try {
    const username = cognitoUser.email.split("@")?.[0] ?? cognitoUser.username;
    // Create User record
    const user = await client.models.User.create({
      username,
      id: cognitoUser.userId,
      email: cognitoUser.email,
      status: "ACTIVE",
    });

    if (!user?.data?.id) {
      throw new Error("Failed to create user record");
    }

    // Create UserStats record
    const userStats = await client.models.UserStats.create({
      userId: user.data.id,
      points: 0,
      streak: 0,
      longestStreak: 0,
      lessonsCompleted: 0,
      coursesCompleted: 0,
      achievementsUnlocked: 0,
    });

    if (!userStats?.data?.id) {
      throw new Error("Failed to create user stats record");
    }

    // 3. Create UserCourseEnrollment record
    const enrollment = await client.models.UserCourseEnrollment.create({
      userId: user.data.id,
      courseId: defaultCourseId,
      enrollmentDate: new Date().toISOString(),
    });

    if (!enrollment?.data?.id) {
      throw new Error("Failed to create user course enrollment record");
    }

    const userModel = await client.models.User.get<CurrentUserSelectionSet>(
      {
        id: user.data.id,
      },
      { selectionSet: currentUserSelectionSet }
    );

    if (!userModel?.data?.id) {
      throw new Error("Failed to return user user record");
    }

    return userModel;
  } catch (error) {
    console.error("Error creating user with stats:", error);
    throw error;
  }
}
