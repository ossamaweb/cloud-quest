"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import LessonNode from "./ui/lesson-node";
import { useRouter } from "next/router";
import { ListModule } from "@/lib/types";

interface CourseModuleProps {
  index: number;
  data: ListModule;
  previousData?: ListModule;
  courseSlug: string;
  className?: string;
}

export default function CourseModule({
  index: moduleIndex,
  data,
  previousData,
  courseSlug,
  className = "",
}: CourseModuleProps) {
  const router = useRouter();
  const handleOnModuleNodeClick = React.useCallback(
    (lessonSlug: string) => {
      router.push(`/${courseSlug}/${data.slug}/${lessonSlug}`);
    },
    [courseSlug, data.slug, router]
  );

  const { lessons, lessonsSize, currentLesson } = React.useMemo(() => {
    const isPreviousModuleCompleted = previousData
      ? previousData?.lessons.every((lesson) => lesson.userCompletions?.[0])
      : false;

    const isCurrentModuleCompleted = data.lessons.every(
      (lesson) => lesson.userCompletions?.[0]
    );

    const isModuleUnlocked =
      data.order === 1 ? true : isPreviousModuleCompleted;

    const lessons = data.lessons.sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );

    const currentLesson =
      isModuleUnlocked && !isCurrentModuleCompleted
        ? lessons.find((lesson) => !lesson.userCompletions?.[0])
        : undefined;

    return {
      lessonsSize: lessons.length,
      lessons,
      currentLesson,
    };
  }, [data.lessons, data.order, previousData]);

  return (
    <div className={cn("relative space-y-16", className)}>
      {/* <div className="absolute top-0 w-full rounded-lg p-4 bg-primary">
        <div className="text-sm uppercase text-muted/70 font-semibold">
          Module 4
        </div>
        <h2 className="text-2xl font-semibold text-primary-foreground">
          Module name
        </h2>
      </div> */}

      <div className="relative text-center">
        <div className="absolute top-1/2 h-0.5 w-full bg-border rounded-md" />
        <h2 className="relative px-4 inline-block text-lg bg-background font-bold text-muted-foreground/80 text-center">
          {data.title}
        </h2>
      </div>

      <div className="flex items-center flex-col gap-6">
        {lessons.map((lesson, nodeIndex) => (
          <LessonNode
            key={lesson.id}
            id={lesson.id}
            slug={lesson.slug}
            title={lesson.title}
            description={lesson.description}
            points={lesson.points}
            index={nodeIndex}
            inverse={moduleIndex % 2 !== 0}
            total={lessonsSize}
            current={currentLesson?.id === lesson.id}
            completed={!!lesson.userCompletions?.[0]}
            onClick={handleOnModuleNodeClick}
          />
        ))}
      </div>
    </div>
  );
}
