"use client";

import PageLoading from "@/components/page-loading";

import { useAuthenticator } from "@aws-amplify/ui-react";

import { useRouter } from "next/router";
import * as React from "react";
import LessonMain from "@/components/lesson-main";
import { useGetLessonQuery } from "@/hooks/use-get-lesson-query";

export default function Lesson() {
  const router = useRouter();
  const { lesson, isError, error } = useGetLessonQuery(
    (router.query?.lessonSlug ?? null) as string | null
  );

  console.log(lesson);

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
        slug={lesson.slug}
        questions={lesson.questions}
      />
    </main>
  );
}
