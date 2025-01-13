"use client";

import TopBar from "@/components/top-bar";
import SidebarRight from "@/components/sidebar-right";
import MainContent from "@/components/main-content";
import PageLoading from "@/components/page-loading";
import SidebarLeft from "@/components/sidebar-left";
import BottomBar from "@/components/bottom-bar";
import UserMenu from "@/components/user-menu";
import CourseModules from "@/components/course-modules";
import useCurrentUserQuery from "@/hooks/use-current-user-query";
import SidebarLeaderboard from "@/components/sidebar-leaderboard";
import { useIsMobile } from "@/hooks/use-mobile";
import MetaTags from "@/components/meta-tags";
import MainMenu from "@/components/main-menu";

export default function Dashboard() {
  const isMobile = useIsMobile();
  const { currentUser, isError, error } = useCurrentUserQuery();

  if (isError) {
    return <div>Error loading user: {error?.message}</div>;
  }

  if (!currentUser) {
    return <PageLoading />;
  }

  return (
    <>
      <MetaTags />
      <div className="flex flex-col">
        {isMobile && (
          <TopBar className="sticky top-0 z-50">
            <UserMenu currentUser={currentUser} />
          </TopBar>
        )}

        <div className="flex flex-1">
          <SidebarLeft>
            <MainMenu />
          </SidebarLeft>
          <MainContent>
            <CourseModules
              userId={currentUser.id}
              courseId={currentUser.courses[0]?.courseId}
              courseSlug={currentUser.courses[0]?.course?.slug}
            />
          </MainContent>
          {!isMobile && (
            <SidebarRight>
              <UserMenu currentUser={currentUser} />
              <SidebarLeaderboard currentUserId={currentUser.id} />
            </SidebarRight>
          )}
        </div>

        <BottomBar>
          <MainMenu horizontal={true} />
        </BottomBar>
      </div>
    </>
  );
}
