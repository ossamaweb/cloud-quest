"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import ModuleNode from "./ui/module-node";
import { useRouter } from "next/router";
import { UserModule } from "@/lib/types";

interface CourseModuleProps {
  index: number;
  data: UserModule;
  className?: string;
}

export default function CourseModule({
  index,
  data,
  className = "",
}: CourseModuleProps) {
  const router = useRouter();
  const handleOnModuleNodeClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, slug: string) => {
      // Handle module node click
      console.log("Module node clicked:", slug);
      router.push(`/lessons/${slug}`);
    },
    [router]
  );

  const lessonsSize = React.useMemo(
    () => data.lessons.length,
    [data.lessons.length]
  );

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
        {data.lessons.map((lesson, nodeIndex) => (
          <ModuleNode
            key={lesson.id}
            id={lesson.id}
            slug={lesson.slug}
            index={nodeIndex}
            total={lessonsSize}
            inverse={index % 2 !== 0}
            current={false}
            inactive={index > 0}
            onClick={handleOnModuleNodeClick}
          />
        ))}
      </div>
    </div>
  );
}
