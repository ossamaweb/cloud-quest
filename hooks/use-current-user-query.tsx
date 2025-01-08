import { useAuthenticator } from "@aws-amplify/ui-react";
import client from "@/amplify/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { currentUserSelectionSet, CurrentUserSelectionSet } from "@/lib/types";

class UserError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "UserError";
    this.code = code;
  }
}

export default function useCurrentUserQuery() {
  const cognito = useAuthenticator();
  const queryKey = useMemo(
    () => ["currentUser", cognito.user?.userId],
    [cognito.user?.userId]
  );

  const {
    data: currentUser,
    isError,
    error,
  } = useQuery({
    queryKey,
    enabled: Boolean(cognito.user?.userId),
    queryFn: async () => {
      try {
        const userModel = await client.models.User.get<CurrentUserSelectionSet>(
          {
            id: cognito.user.userId,
          },
          { selectionSet: currentUserSelectionSet }
        );

        if (userModel.errors) {
          throw new UserError(JSON.stringify(userModel.errors), "API_ERROR");
        }

        const userData = userModel.data;
        if (!userData) {
          throw new UserError("No user data found", "NOT_FOUND");
        }

        if (userData.status !== "ACTIVE") {
          throw new UserError(
            `Account ${userData.status?.toLowerCase()}`,
            "STATUS_ERROR"
          );
        }

        return userData;
      } catch (error) {
        console.error("[useCurrentUserQuery] Error:", error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes

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
