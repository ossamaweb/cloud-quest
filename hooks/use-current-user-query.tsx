import { useAuthenticator } from "@aws-amplify/ui-react";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getUser, setupNewUser, UserError } from "@/lib/helpers/user.helpers";

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
        const userModel = await getUser(cognito.user.userId);

        let userData = userModel.data;

        if (!userData) {
          // create new user with stats & enrollment
          const newUser = await setupNewUser({
            userId: cognito.user.userId,
            username: cognito.user.username,
            email: cognito.user.signInDetails?.loginId ?? cognito.username,
          });

          userData = newUser.data;
        }

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
