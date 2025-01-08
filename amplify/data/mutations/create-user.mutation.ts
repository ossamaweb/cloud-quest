import client from "../../client";

export async function createUserMutation(
  cognitoUser: {
    userId: string;
    username: string;
    email: string;
  },
  defaultCourseId: string
) {
  try {
    // Create User record
    const user = await client.models.User.create({
      id: cognitoUser.userId,
      username: cognitoUser.username,
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
      modulesCompleted: 0,
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

    return {
      user: user.data,
      userStats: userStats.data,
      userCourseEnrollment: enrollment.data,
    };
  } catch (error) {
    console.error("Error creating user with stats:", error);
    throw error;
  }
}
