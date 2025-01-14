"use client";

import * as React from "react";
import { useListModulesQuery } from "@/hooks/use-list-modules-query";
import CourseModule from "./course-module";

interface CourseModulesProps {
  className?: string;
  userId: string | null;
  courseId: string | null;
  courseSlug: string;
}

export default function CourseModules({
  className = "",
  userId,
  courseId,
  courseSlug,
}: CourseModulesProps) {
  const { userModules, error, isError } = useListModulesQuery(courseId);

  React.useEffect(() => {
    // Instant scroll to current lesson
    if (userModules && userModules.length > 0) {
      const element = document.getElementById("currentLessonNode");
      element?.scrollIntoView({ behavior: "auto", block: "center" });
    }
  }, [userModules]);

  if (isError) {
    return <div>Error loading user: {error?.message}</div>;
  }

  if (!userModules) {
    return (
      <div className="h-[80vh] w-full flex items-center justify-center">
        <p className="text-muted-foreground">loading...</p>
      </div>
    );
  }

  if (userModules.length === 0) {
    return (
      <div className="h-[80vh] w-full flex items-center justify-center">
        <p className="text-muted-foreground">No module found</p>
      </div>
    );
  }

  return (
    <div className="space-y-16 mb-16">
      {userModules?.map((userModule, index) => (
        <CourseModule
          key={userModule.id}
          index={index}
          data={userModule}
          previousData={userModules?.[index - 1]}
          courseSlug={courseSlug}
        />
      ))}
    </div>
  );
}
