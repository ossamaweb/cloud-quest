import { useAuthenticator } from "@aws-amplify/ui-react";
import client from "@/amplify/client";
import { useQuery } from "@tanstack/react-query";
import { UserStatus } from "@/lib/graphql/API";
import { useMemo } from "react";

class UserModuleError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "UserModuleError";
    this.code = code;
  }
}

const currentUserSelectionSet = [
  "id",
  "username",
  "email",
  "profilePicture",
  "status",
  "stats.*",
  "courses.id",
  "courses.courseId",
  "courses.enrollmentDate",
  "courses.completionDate",
  "courses.course.*",
];

export function useUserModulesQuery(userId: string, courseId: string) {
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
        throw new UserModuleError("No user ID found", "NOT_FOUND");
      }

      if (!courseId) {
        throw new UserModuleError("No course ID found", "NOT_FOUND");
      }

      try {
        const userModel = await client.models.User.get(
          { id: cognito.user.userId },
          {
            selectionSet: currentUserSelectionSet,
          }
        );

        if (userModel.errors) {
          throw new UserError(JSON.stringify(userModel.errors), "API_ERROR");
        }

        const userData = userModel.data;
        if (!userData) {
          throw new UserError("No user data found", "NOT_FOUND");
        }

        if (userData.status !== UserStatus.ACTIVE) {
          throw new UserError(
            `Account ${userData.status?.toLowerCase()}`,
            "STATUS_ERROR"
          );
        }

        return userModel.data;
      } catch (error) {
        console.error("[useCurrentUser] Error:", error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: Boolean(cognito.user?.userId),
    retry: (failureCount, error) => {
      // Only retry on network errors, not on business logic errors
      if (error instanceof UserError) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return { currentUser, isError, error };
}
