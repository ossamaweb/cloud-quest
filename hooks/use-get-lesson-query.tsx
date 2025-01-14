import client from "@/amplify/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getLessonSelectionSet, GetLessonSelectionSet } from "@/lib/types";
import { lessonFixture } from "@/lib/lesson.fixtures";

class GetLessonError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "GetLessonError";
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
      // return lessonFixture;
      try {
        const getLesson =
          await client.models.Lesson.list<GetLessonSelectionSet>({
            filter: { slug: { eq: lessonSlug ?? "NONE" } },
            selectionSet: getLessonSelectionSet,
          });

        if (getLesson.errors) {
          throw new GetLessonError(
            JSON.stringify(getLesson.errors),
            "API_ERROR"
          );
        }

        const getLessonData = getLesson.data?.[0];

        if (!getLessonData) {
          throw new GetLessonError("No lesson data found", "NOT_FOUND");
        }

        return getLessonData;
      } catch (error) {
        console.error("[useGetLessonQuery] Error:", error);
        throw error;
      }
    },
    retry: (failureCount, error) => {
      // Only retry on network errors, not on business logic errors
      if (error instanceof GetLessonError) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return { lesson, isError, error };
}
