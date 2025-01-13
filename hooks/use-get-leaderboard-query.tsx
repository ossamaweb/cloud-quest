import client from "@/amplify/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  getLeaderboardSelectionSet,
  GetLeaderboardSelectionSet,
} from "@/lib/types";

class GetLeaderboardError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "GetLeaderboardError";
    this.code = code;
  }
}

export function useGetLeaderboardQuery() {
  const queryKey = useMemo(() => ["getLeaderboard"], []);

  const {
    data: getLeaderboard,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    // placeholderData,
    queryFn: async () => {
      try {
        const listUsers =
          await client.models.User.list<GetLeaderboardSelectionSet>({
            filter: { status: { eq: "ACTIVE" } },
            selectionSet: getLeaderboardSelectionSet,
          });

        if (listUsers.errors) {
          throw new GetLeaderboardError(
            JSON.stringify(listUsers.errors),
            "API_ERROR"
          );
        }

        const listUsersData = listUsers.data;
        if (!listUsersData) {
          throw new GetLeaderboardError("No user data found", "NOT_FOUND");
        }

        return listUsersData.sort(
          (a, b) => (b.stats.points || 0) - (a.stats.points || 0)
        );
      } catch (error) {
        console.error("[useGetLeaderboardQuery] Error:", error);
        throw error;
      }
    },

    retry: (failureCount, error) => {
      // Only retry on network errors, not on business logic errors
      if (error instanceof GetLeaderboardError) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return { getLeaderboard, isLoading, isError, error };
}
