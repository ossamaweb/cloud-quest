"use client";

import PageLoading from "@/components/page-loading";
import { useRouter } from "next/router";
import * as React from "react";
import LessonMain from "@/components/lesson-main";
import { useGetLessonQuery } from "@/hooks/use-get-lesson-query";
import {
  CreateUserLessonCompletionInput,
  useCreateLessonCompletionMutation,
} from "@/hooks/use-create-lesson-completion-mutation";

import { lessonFixture } from "@/lib/lesson.fixtures";
import useCurrentUserQuery from "@/hooks/use-current-user-query";

export default function Lesson() {
  const router = useRouter();
  const currentUserQuery = useCurrentUserQuery();
  const { lesson, isError, error } = useGetLessonQuery(
    (router.query?.lessonSlug ?? null) as string | null
  );
  const { mutate } = useCreateLessonCompletionMutation(
    (router.query?.courseSlug ?? null) as string | null
  );
  const [saved, setSaved] = React.useState(false);

  const handleOnComplete = React.useCallback(() => {
    router.push(`/`);
  }, [router]);

  const handleOnSave = React.useCallback(
    (
      data: Pick<
        CreateUserLessonCompletionInput,
        "accuracy" | "points" | "duration"
      >
    ) => {
      if (!lesson) {
        return;
      }
      if (!currentUserQuery.currentUser?.id) {
        return;
      }

      const input: CreateUserLessonCompletionInput = {
        ...data,
        userId: currentUserQuery.currentUser.id,
        lessonId: lesson.id ?? "none",
        lessonOrder: lesson.order,
        lessonSlug: lesson.slug,
        moduleId: lesson.moduleId,
        currentUser: currentUserQuery.currentUser,
      };

      mutate(input, {
        onSuccess: (data) => {
          console.log("Lesson completion created:", data);
          setSaved(true);
        },
        onError: (error) => {
          console.error("Failed to create lesson completion:", error);
          setSaved(true);
        },
      });
    },
    [currentUserQuery.currentUser, lesson, mutate]
  );

  if (isError) {
    return <div>Error loading user: {error?.message}</div>;
  }

  if (!currentUserQuery.currentUser) {
    return <PageLoading />;
  }

  if (isError) {
    return <div>Error loading lesson: {error?.message}</div>;
  }

  if (!lesson) {
    return (
      <PageLoading message="This lesson content is AI-generated and under review for accuracy" />
    );
  }

  return (
    <main>
      <LessonMain
        id={lesson.id}
        questions={lesson.questions}
        saved={saved}
        onComplete={handleOnComplete}
        onSave={handleOnSave}
      />
    </main>
  );
}
