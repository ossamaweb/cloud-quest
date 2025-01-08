import client from "@/amplify/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { UserModulesSelectionSet, userModulesSelectionSet } from "@/lib/types";

class UserModulesError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "UserModulesError";
    this.code = code;
  }
}

export function useUserModulesQuery(
  userId: string | null,
  courseId: string | null
) {
  const queryKey = useMemo(
    () => ["userModules", `${userId}::${courseId}`],
    [userId, courseId]
  );

  const {
    data: userModules,
    isError,
    error,
  } = useQuery({
    queryKey,
    queryFn: async () => {
      if (!userId) {
        throw new UserModulesError("No user ID found", "NOT_FOUND");
      }

      if (!courseId) {
        throw new UserModulesError("No course ID found", "NOT_FOUND");
      }
      try {
        const userModules =
          await client.models.Module.list<UserModulesSelectionSet>({
            filter: { courseId: { eq: courseId } },
            selectionSet: userModulesSelectionSet,
          });

        if (userModules.errors) {
          throw new UserModulesError(
            JSON.stringify(userModules.errors),
            "API_ERROR"
          );
        }

        const userModulesData = userModules.data;
        if (!userModulesData) {
          throw new UserModulesError("No modules data found", "NOT_FOUND");
        }

        return userModulesData.sort((a, b) => (a.order || 0) - (b.order || 0));
      } catch (error) {
        console.error("[useUserModulesQuery] Error:", error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: Boolean(userId) && Boolean(courseId),
    retry: (failureCount, error) => {
      // Only retry on network errors, not on business logic errors
      if (error instanceof UserModulesError) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return { userModules, isError, error };
}
