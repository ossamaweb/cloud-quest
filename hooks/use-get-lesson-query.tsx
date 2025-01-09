import client from "@/amplify/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getLessonSelectionSet, GetLessonSelectionSet } from "@/lib/types";

class GelLessonError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "GelLessonError";
    this.code = code;
  }
}

export function useGetLessonQuery(lessonSlug: string | null) {
  const queryKey = useMemo(() => ["getLesson", `${lessonSlug}`], [lessonSlug]);

  const {
    data: lesson,
    isError,
    error,
  } = useQuery({
    queryKey,
    enabled: Boolean(lessonSlug),
    // placeholderData,
    queryFn: async () => {
      try {
        const getLesson =
          await client.models.Lesson.list<GetLessonSelectionSet>({
            filter: { slug: { eq: lessonSlug ?? "NONE" } },
            selectionSet: getLessonSelectionSet,
          });

        if (getLesson.errors) {
          throw new GelLessonError(
            JSON.stringify(getLesson.errors),
            "API_ERROR"
          );
        }

        const getLessonData = getLesson.data?.[0];
        if (!getLessonData) {
          throw new GelLessonError("No lesson data found", "NOT_FOUND");
        }

        return getLessonData;
      } catch (error) {
        console.error("[useGetQuestionQuery] Error:", error);
        throw error;
      }
    },
    retry: (failureCount, error) => {
      // Only retry on network errors, not on business logic errors
      if (error instanceof GelLessonError) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return { lesson, isError, error };
}
