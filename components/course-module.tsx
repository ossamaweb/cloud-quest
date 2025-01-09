"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import ModuleNode from "./ui/module-node";
import { useRouter } from "next/router";
import { ListModule } from "@/lib/types";

interface CourseModuleProps {
  index: number;
  data: ListModule;
  courseSlug: string;

  className?: string;
}

export default function CourseModule({
  index: moduleIndex,
  data,
  courseSlug,
  className = "",
}: CourseModuleProps) {
  const router = useRouter();
  const handleOnModuleNodeClick = React.useCallback(
    (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      lessonSlug: string
    ) => {
      event.preventDefault();
      router.push(`/${courseSlug}/${data.slug}/${lessonSlug}`);
    },
    [courseSlug, data.slug, router]
  );

  const { isModuleLocked, lessons, lessonsSize, lastLessonOrder } =
    React.useMemo(() => {
      const userProgress = data.userProgress?.[0];
      const isModuleLocked = !userProgress && data.order > 1; // the first module should be open by default
      return {
        isModuleLocked,
        lessons: data.lessons.sort((a, b) => (a.order || 0) - (b.order || 0)),
        lessonsSize: data.lessons.length,
        lastLessonOrder: isModuleLocked
          ? 0
          : userProgress?.lastLessonOrder ?? 1,
      };
    }, [data.lessons, data.order, data.userProgress]);

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
        <h2 className="relative px-4 inline-block text-lg bg-background font-bold text-muted-foreground/50 text-center">
          {data.title}
        </h2>
      </div>

      <div className="flex items-center flex-col gap-6">
        {lessons.map((lesson, nodeIndex) => (
          <ModuleNode
            key={lesson.id}
            id={lesson.id}
            slug={lesson.slug}
            index={nodeIndex}
            inverse={moduleIndex % 2 !== 0}
            total={lessonsSize}
            current={
              isModuleLocked ? undefined : lesson.order === lastLessonOrder
            }
            locked={isModuleLocked || lesson.order > lastLessonOrder}
            onClick={handleOnModuleNodeClick}
          />
        ))}
      </div>
    </div>
  );
}
