import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "@/amplify/client";
import { getUser } from "@/lib/helpers/user.helpers";

export interface CreateUserLessonCompletionInput {
  userId: string;
  moduleId: string | null;
  lessonId: string;
  lessonSlug: string;
  lessonOrder: number;
  accuracy: number;
  points: number;
  duration: number;
  repeated: boolean;
}

async function createUserLessonCompletion(
  input: CreateUserLessonCompletionInput
) {
  const completion = await client.models.UserLessonCompletion.create({
    userId: input.userId,
    lessonId: input.lessonId,
    accuracy: input.accuracy,
    points: input.points,
    duration: input.duration,
  });

  if (completion.errors) {
    throw new CreateUserLessonCompletionError(
      JSON.stringify(completion.errors),
      "API_ERROR"
    );
  }

  return completion;
}

async function updateUserStatsAfterLessonCompletion(
  input: CreateUserLessonCompletionInput
) {
  const currentUser = await getUser(input.userId);
  const stats = currentUser.data?.stats;

  if (!stats) {
    throw new CreateUserLessonCompletionError(
      "No user stats found",
      "NOT_FOUND"
    );
  }

  const previous = {
    points: stats.points ?? 0,
    lessonsCompleted: stats.lessonsCompleted ?? 0,
    streak: stats.streak ?? 0,
    lastStreakAt: stats.lastStreakAt ? new Date(stats.lastStreakAt) : null,
    longestStreak: stats.longestStreak ?? 0,
  };

  // Check if the dates are different calendar days
  const now = new Date();
  const isDifferentDay =
    !previous.lastStreakAt ||
    now.getDate() !== previous.lastStreakAt.getDate() ||
    now.getMonth() !== previous.lastStreakAt.getMonth() ||
    now.getFullYear() !== previous.lastStreakAt.getFullYear();

  const current = {
    points: Math.floor(previous.points + input.points),
    lessonsCompleted: !input.repeated
      ? previous.lessonsCompleted + 1 // Only increment if it's first time
      : previous.lessonsCompleted, // Do not increment if the lesson is repeated
    streak: isDifferentDay
      ? previous.streak + 1 // Increment only on a new calendar day
      : previous.streak, // Keep same if same calendar day
    lastStreakAt: isDifferentDay
      ? now // Update only when streak increments
      : previous.lastStreakAt, // Keep previous time if same day
  };

  const updateUserStats = await client.models.UserStats.update({
    id: stats.id,
    lessonsCompleted: current.lessonsCompleted,
    points: current.points,
    streak: current.streak,
    lastStreakAt: current.lastStreakAt?.toISOString(),
    longestStreak: Math.max(current.streak, previous.longestStreak),
  });

  if (updateUserStats.errors) {
    throw new CreateUserLessonCompletionError(
      JSON.stringify(updateUserStats.errors),
      "API_ERROR"
    );
  }

  return {
    userStats: updateUserStats,
    newStreakCount: isDifferentDay ? current.streak : 0,
  };
}

class CreateUserLessonCompletionError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "CreateUserLessonCompletionError";
    this.code = code;
  }
}

export function useCreateLessonCompletionMutation(courseSlug: string | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateUserLessonCompletionInput) => {
      try {
        const completion = await createUserLessonCompletion(input);

        const postCompletion = await updateUserStatsAfterLessonCompletion(
          input
        );

        // wait for refetching to complete then return data
        await Promise.all([
          queryClient.refetchQueries({
            queryKey: ["getLesson", input.lessonSlug],
            exact: true,
          }),
          queryClient.refetchQueries({
            queryKey: ["currentUser", input.userId],
            exact: true,
          }),
          queryClient.refetchQueries({
            queryKey: ["listModules", courseSlug],
            exact: true,
          }),
        ]);

        return {
          userLessonCompletion: completion.data,
          userStats: postCompletion.userStats.data,
          newStreakCount: postCompletion.newStreakCount,
        };
      } catch (error) {
        console.error("[useCreateLessonCompletionMutation] Error:", error);
        throw error;
      }
    },
    onSuccess: async () => {
      // Invalidate relevant queries when mutation succeeds
      queryClient.invalidateQueries({
        queryKey: ["getLeaderboard"],
        exact: true,
      });
    },
    retry: (failureCount, error) => {
      if (error instanceof CreateUserLessonCompletionError) {
        return false;
      }
      return failureCount < 2;
    },
  });
}
