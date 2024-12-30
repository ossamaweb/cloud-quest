"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import Button from "./ui/button";

interface UserMenuProps {
  className?: string;
}

export default function UserMenu({ className = "" }: UserMenuProps) {
  return (
    <ul className={cn("space-x-2 w-full flex justify-between", className)}>
      <li>
        <Button className="text-primary font-bold">Co</Button>
      </li>
      <li>
        <Button className="text-yellow-500 font-bold">
          Str <span>1</span>
        </Button>
      </li>
      <li>
        <Button className="text-blue-500 font-bold">
          Xp <span>1500</span>
        </Button>
      </li>
    </ul>
  );
}
