"use client";

import * as React from "react";
import { useUserModulesQuery } from "@/hooks/use-user-modules-query";
import CourseModule from "./course-module";

interface CourseModulesProps {
  className?: string;
  courseId: string | null;
  userId: string | null;
}

export default function CourseModules({
  className = "",
  userId,
  courseId,
}: CourseModulesProps) {
  const { userModules, error, isError } = useUserModulesQuery(userId, courseId);

  if (isError) {
    return <div>Error loading user: {error?.message}</div>;
  }

  if (!userModules) {
    return <div>loading...</div>;
  }

  return (
    <div className="space-y-16 mb-16">
      {userModules?.map((userModule, index) => (
        <CourseModule key={userModule.id} index={index} data={userModule} />
      ))}
    </div>
  );
}
