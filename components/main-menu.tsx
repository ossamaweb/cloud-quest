"use client";

import * as React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { HouseIcon, UserIcon, SettingsIcon, LogOutIcon } from "lucide-react";
import Button from "./ui/button";
import { cn } from "@/lib/utils";

interface MainMenuProps {
  className?: string;
  horizontal?: boolean;
}

export default function MainMenu({
  className = "",
  horizontal = false,
}: MainMenuProps) {
  const { signOut } = useAuthenticator();
  return (
    <nav className={cn("w-full", className)}>
      <ul
        className={cn(
          "flex flex-col gap-2",
          horizontal && "flex-row w-full justify-between"
        )}
      >
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
  );
}
