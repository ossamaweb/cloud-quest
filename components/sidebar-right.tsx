"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface SidebarRightProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SidebarRight({
  children,
  className = "",
}: SidebarRightProps) {
  return (
    <div
      className={cn(
        "sticky top-0 w-80 h-screen hidden sm:block bg-background border-l border-muted p-4",
        className
      )}
    >
      <div className="h-full flex flex-col space-y-6">
        <div className="flex-1 space-y-6">{children}</div>

        <div className="space-y-2 px-2 text-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CloudQuest. All rights reserved.
          </div>
          <div className="space-x-4 text-sm uppercase">
            <a
              href="https://github.com/ossamaweb/cloud-quest"
              target="_blank"
              rel="noopener"
              className="hover:text-primary"
            >
              Github
            </a>
            <a
              href="https://x.com/ossamaweb"
              target="_blank"
              rel="noopener"
              className="hover:text-primary"
            >
              X/Twitter
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            Game was created for the{" "}
            <a
              href="https://awsdevchallenge.devpost.com/"
              target="_blank"
              rel="noopener"
              className="hover:text-primary"
            >
              AWS Game Challenge
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
