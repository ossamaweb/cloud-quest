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
        "w-80 relative hidden sm:block bg-background border-l border-muted p-4",
        className
      )}
    >

        <div className="space-y-2 px-2 text-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CloudQuest. All rights reserved.
          </div>
          <div className="space-x-4 text-sm uppercase">
            <a href="#" className="hover:text-primary">
              Github
            </a>
            <a href="#" className="hover:text-primary">
              X/Twitter
            </a>
            <a href="#" className="hover:text-primary">
              AWS
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            Game was created for the{" "}
            <a href="#" className="hover:text-primary">
              AWS Game Challenge
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
