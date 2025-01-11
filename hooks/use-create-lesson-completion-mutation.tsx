import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "@/amplify/client";
import {
  CreateUserLessonCompletion,
  CreateUserLessonCompletionSet,
  UserLessonCompletion,
  UserLessonCompletionCreateType,
  UserWithStats,
} from "@/lib/types";
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
  currentUser: UserWithStats;
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

async function updateUserStats(input: CreateUserLessonCompletionInput) {
  const currentUser = await getUser(input.userId);
  const stats = currentUser.data?.stats;

  if (!stats) {
    throw new CreateUserLessonCompletionError(
      "No user stats found",
      "NOT_FOUND"
    );
  }
  const updateUserStats = await client.models.UserStats.update({
    id: stats.id,
    lessonsCompleted: (stats.lessonsCompleted ?? 0) + 1,
    points: Math.floor((stats.points ?? 0) + input.points),
    // streak: a.integer().default(0),
    // longestStreak: a.integer().default(0),
  });

  if (updateUserStats.errors) {
    throw new CreateUserLessonCompletionError(
      JSON.stringify(updateUserStats.errors),
      "API_ERROR"
    );
  }
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
        console.log({ completion });

        const userStats = await updateUserStats(input);
        console.log({ userStats });

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

        return completion.data;
      } catch (error) {
        console.error("[useCreateLessonCompletionMutation] Error:", error);
        throw error;
      }
    },
    onSuccess: async (data) => {
      // Invalidate relevant queries when mutation succeeds
    },
    retry: (failureCount, error) => {
      if (error instanceof CreateUserLessonCompletionError) {
        return false;
      }
      return failureCount < 2;
    },
  });
}
