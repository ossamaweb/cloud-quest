"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import Button from "./ui/button";

const leaderboardData = [
  { position: 1, username: "CloudMaster", points: 2500 },
  { position: 2, username: "AWSPro", points: 2100 },
  { position: 3, username: "ServerlessGuru", points: 1800 },
  { position: 4, username: "LambdaHero", points: 1500 },
  { position: 5, username: "S3Warrior", points: 1200 },
];

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
      <div className="sticky top-4 space-y-6">
        {children}

        <div className="p-3 border-border border-2 rounded-lg">
          <h3 className="font-medium">Leaderboard</h3>

          {leaderboardData.length > 0 ? (
            <div className="mt-3 space-y-2">
              {leaderboardData.map((player) => (
                <div
                  key={player.position}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">
                      {player.position}
                    </span>
                    <span>{player.username}</span>
                  </div>
                  <span className="font-medium">{player.points}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mt-1">
              No recent activity
            </p>
          )}
        </div>

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
