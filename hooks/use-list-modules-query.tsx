import client from "@/amplify/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { ListModulesSelectionSet, listModulesSelectionSet } from "@/lib/types";

class ListModulesError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "ListModulesError";
    this.code = code;
  }
}

export function useListModulesQuery(courseId: string | null) {
  const queryKey = useMemo(() => ["listModules", `${courseId}`], [courseId]);

  const {
    data: userModules,
    isError,
    error,
  } = useQuery({
    queryKey,
    enabled: Boolean(courseId),
    // placeholderData,
    queryFn: async () => {
      try {
        const listModules =
          await client.models.Module.list<ListModulesSelectionSet>({
            filter: { courseId: { eq: courseId ?? "NONE" } },
            selectionSet: listModulesSelectionSet,
          });

        if (listModules.errors) {
          throw new ListModulesError(
            JSON.stringify(listModules.errors),
            "API_ERROR"
          );
        }

        const listModulesData = listModules.data;
        if (!listModulesData) {
          throw new ListModulesError("No modules data found", "NOT_FOUND");
        }

        return listModulesData.sort((a, b) => (a.order || 0) - (b.order || 0));
      } catch (error) {
        console.error("[useListModulesQuery] Error:", error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes

    retry: (failureCount, error) => {
      // Only retry on network errors, not on business logic errors
      if (error instanceof ListModulesError) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return { userModules, isError, error };
}
