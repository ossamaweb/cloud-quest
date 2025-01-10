"use client";

import * as React from "react";
import { useListModulesQuery } from "@/hooks/use-list-modules-query";
import CourseModule from "./course-module";
import { UserWithStats } from "@/lib/types";

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

  if (isError) {
    return <div>Error loading user: {error?.message}</div>;
  }

  if (!userModules) {
    return <div>loading...</div>;
  }

  console.log({ userModules });
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
