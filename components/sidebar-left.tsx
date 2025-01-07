"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { HouseIcon, UserIcon, SettingsIcon, LogOutIcon } from "lucide-react";
import Button from "./ui/button";

interface SidebarLeftProps {
  className?: string;
}

export default function SidebarLeft({ className = "" }: SidebarLeftProps) {
  const { signOut } = useAuthenticator();
  return (
    <div
      className={cn(
        "lg:w-64 hidden sm:block bg-background border-r border-muted h-screen p-4",
        className
      )}
    >
      <nav className="space-y-6">
        <div className="text-2xl font-bold px-4 py-2 dark:text-primary text-blue-950 select-none">
          <span className="hidden lg:inline-block">CloudQuest</span>
          <span className="lg:hidden inline-block">CQ</span>
        </div>

        {/* Add navigation items here */}
        <ul className="space-y-2">
          <li>
            <Button
              active={true}
              className="lg:w-full text-left py-3 px-4 space-x-4"
            >
              <HouseIcon />
              <span className="lg:inline-block hidden">Learn</span>
            </Button>
          </li>
          <li>
            <Button
              active={false}
              className="lg:w-full text-left py-3 px-4 space-x-4"
            >
              <UserIcon />
              <span className="lg:inline-block hidden">Profile</span>
            </Button>
          </li>
          <li>
            <Button
              active={false}
              className="lg:w-full text-left py-3 px-4 space-x-4"
            >
              <SettingsIcon />
              <span className="lg:inline-block hidden">Settings</span>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => signOut()}
              active={false}
              className="lg:w-full text-left py-3 px-4 space-x-4"
            >
              <LogOutIcon />
              <span className="lg:inline-block hidden">Logout</span>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
