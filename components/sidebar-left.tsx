"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import Button from "./ui/button";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface SidebarLeftProps {
  className?: string;
}

export default function SidebarLeft({ className = "" }: SidebarLeftProps) {
  const { signOut } = useAuthenticator();
  return (
    <div
      className={cn(
        "w-64 hidden sm:block bg-background border-r border-muted h-screen p-4",
        className
      )}
    >
      <nav className="space-y-6">
        <div className="text-2xl font-bold px-4 py-2 text-[#232F3E]">
          CloudQuest
        </div>
        {/* Add navigation items here */}
        <ul className="space-y-2">
          <li>
            <Button active={true} className="w-full text-left py-3">
              Learn
            </Button>
          </li>
          <li>
            <Button active={false} className="w-full text-left py-3">
              Profile
            </Button>
          </li>
          <li>
            <Button active={false} className="w-full text-left py-3">
              Settings
            </Button>
          </li>
          <li>
            <Button
              onClick={() => signOut()}
              active={false}
              className="w-full text-left py-3"
            >
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
