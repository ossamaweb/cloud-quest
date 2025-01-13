"use client";

import { useGetLeaderboardQuery } from "@/hooks/use-get-leaderboard-query";
import { cn } from "@/lib/utils";
import { EllipsisIcon } from "lucide-react";
import * as React from "react";

interface LeaderboardInterface {
  rank: number;
  userId: string;
  username: string;
  points: number;
}
const leaderboardPlaceholderData: LeaderboardInterface[] = [
  { rank: 1, userId: "1", username: "CloudMaster", points: 2500 },
  { rank: 2, userId: "2", username: "AWSPro", points: 2100 },
  {
    rank: 6,
    userId: "3",
    username: "ServerlessGuru",
    points: 1800,
  },
  { rank: 4, userId: "4", username: "LambdaHero", points: 1500 },
  { rank: 5, userId: "5", username: "S3Warrior", points: 1200 },
  {
    rank: 3,
    userId: "61eb65a0-0001-700b-3bbd-24ccd44591ac",
    username: "ossama",
    points: 1200,
  },
];

interface SidebarLeaderboardProps {
  className?: string;
  currentUserId: string | null;
}

export default function SidebarLeaderboard({
  className = "",
  currentUserId,
}: SidebarLeaderboardProps) {
  const { getLeaderboard, error, isError, isLoading } =
    useGetLeaderboardQuery();

  const leaderboardDisplay = React.useMemo(() => {
    if (!getLeaderboard) {
      return [];
    }

    // Ranked users
    // const rankedUsers = getLeaderboard.map(
    //   (user, index): LeaderboardInterface => ({
    //     rank: index + 1,
    //     userId: user.id ?? "NONE",
    //     username: user.username,
    //     points: user.stats?.points ?? 0,
    //   })
    // );

    const rankedUsers = [...leaderboardPlaceholderData];
    // Top 5 users
    const topFive = rankedUsers.slice(0, 5);

    // Find current user
    const currentUser = rankedUsers.find(
      (user) => user.userId === currentUserId
    );

    // Create the final leaderboard display
    let leaderboardDisplay = [...topFive];

    // If current user is not in top 5, add them at the end
    if (currentUser && !topFive.some((item) => item.userId === currentUserId)) {
      // Add a separator if needed
      if (currentUser.rank > 6) {
        leaderboardDisplay.push({
          userId: "separator",
          username: "...",
          points: 0,
          rank: -1,
        });
      }

      leaderboardDisplay.push({
        ...currentUser,
        username: `${currentUser.username} (You)`,
      });
    }

    return leaderboardDisplay;
  }, [getLeaderboard, currentUserId]);

  return (
    <div
      className={cn(
        "border-border py-2 border-2 rounded-lg overflow-hidden cursor-default",
        className
      )}
    >
      <div className="px-4">
        <h3 className="font-bold text-lg">Leaderboard</h3>
        {isLoading && (
          <p className="text-sm text-muted-foreground mt-1">loading...</p>
        )}
        {isError && (
          <p className="text-sm text-muted-foreground mt-1">
            Error loading leaderboard: {error?.message}
          </p>
        )}
      </div>
      <div className="mt-2">
        {leaderboardDisplay.map(({ userId, rank, username, points }) => (
          <div
            key={userId}
            className={cn(
              "flex items-center justify-start gap-4 truncate py-2 px-4 ",
              userId === currentUserId && "bg-primary/10"
            )}
          >
            {userId === "separator" ? (
              <div className="w-full flex items-center justify-center text-foreground/50">
                <EllipsisIcon />
              </div>
            ) : (
              <>
                <span
                  className={cn(
                    "inline-flex flex-shrink-0 justify-center items-center rounded-full w-8 h-8 font-bold",
                    rank === 1 && "bg-[#FFD700] text-[#ca8a04]",
                    rank === 2 && "bg-[#C0C0C0] text-[#4b5563]",
                    rank === 3 && "bg-[#CD7F32] text-[#8B4513]",
                    rank > 3 && "bg-muted font-normal"
                  )}
                >
                  <span>{rank}</span>
                </span>
                <span className="flex-1 truncate">{username}</span>
                <span className="flex-shrink-0 font-semibold">{points}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
