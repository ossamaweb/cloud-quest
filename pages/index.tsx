import { useAuthenticator } from "@aws-amplify/ui-react";
import TopBar from "@/components/top-bar";
import SidebarRight from "@/components/sidebar-right";
import MainContent from "@/components/main-content";
import PageLoading from "@/components/page-loading";
import SidebarLeft from "@/components/sidebar-left";
import BottomBar from "@/components/bottom-bar";
import UserMenu from "@/components/user-menu";
import ModuleContainer from "@/components/module-container";
import { useCurrentUserQuery } from "@/hooks/use-current-user-query";

export default function Dashboard() {
  const { currentUser, isError, error } = useCurrentUserQuery();

  if (isError) {
    return <div>Error loading user: {error?.message}</div>;
  }

  if (!currentUser) {
    return <PageLoading />;
  }

  console.log({ currentUser });

  return (
    <div className="flex flex-col">
      <TopBar>
        <UserMenu
          course={currentUser.courses[0]?.course}
          streak={currentUser.stats.streak}
          points={currentUser.stats.points}
        />
      </TopBar>
      <div className="flex flex-1">
        <SidebarLeft />
        <MainContent>
          <div className="space-y-16 mb-16">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <ModuleContainer key={index} index={index} />
              ))}
          </div>
        </MainContent>
        <SidebarRight>
          <UserMenu
            course={currentUser.courses[0]?.course}
            streak={currentUser.stats.streak}
            points={currentUser.stats.points}
          />
        </SidebarRight>
      </div>
      <BottomBar />
    </div>
  );
}
