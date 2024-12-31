"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { ZapIcon, StarIcon } from "lucide-react";
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
        <Button className="text-amber-300 font-bold">
          <ZapIcon fill="currentColor" />
          <span>1</span>
        </Button>
      </li>
      <li>
        <Button className="text-blue-500 font-bold">
          <StarIcon fill="currentColor" />
          <span>1500</span>
        </Button>
      </li>
    </ul>
  );
}
