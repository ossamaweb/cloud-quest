import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "@/amplify/client";
import {
  createUserLessonCompletionSet,
  CreateUserLessonCompletionSet,
  UserModuleProgressCreate,
  UserWithStats,
} from "@/lib/types";

class CreateUserLessonCompletionError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "CreateUserLessonCompletionError";
    this.code = code;
  }
}

export interface CreateUserLessonCompletionInput {
  userId: string;
  moduleId: string | null;
  lessonId: string;
  lessonSlug: string;
  lessonOrder: number;
  accuracy: number;
  points: number;
  duration: number;
  userModuleProgress: UserModuleProgressCreate | undefined;
  currentUser: UserWithStats;
}

export function useCreateLessonCompletionMutation(courseSlug: string | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateUserLessonCompletionInput) => {
      try {
        const completion = await client.models.UserLessonCompletion.create({
          userId: input.userId,
          lessonId: input.lessonId,
          accuracy: input.accuracy,
          points: input.points,
          duration: input.duration,
        });

        console.log({ completion });

        if (completion.errors) {
          throw new CreateUserLessonCompletionError(
            JSON.stringify(completion.errors),
            "API_ERROR"
          );
        }

        const stats = input.currentUser.stats;
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

        if (input.userModuleProgress?.id) {
          // Update Module Progress
          const updateModuleProgress =
            await client.models.UserModuleProgress.update({
              id: input.userModuleProgress?.id,
              lastLessonOrder: input.lessonOrder,
            });
          console.log({ updateModuleProgress });
          if (updateModuleProgress.errors) {
            throw new CreateUserLessonCompletionError(
              JSON.stringify(updateModuleProgress.errors),
              "API_ERROR"
            );
          }
        } else {
          // Create New Module Progress
          const createModuleProgress =
            await client.models.UserModuleProgress.create({
              userId: input.userId,
              moduleId: input.moduleId,
              lastLessonOrder: input.lessonOrder,
              startDate: new Date().toISOString(),
            });
          console.log({ createModuleProgress });

          if (createModuleProgress.errors) {
            throw new CreateUserLessonCompletionError(
              JSON.stringify(createModuleProgress.errors),
              "API_ERROR"
            );
          }
        }

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
