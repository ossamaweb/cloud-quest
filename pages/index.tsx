import TopBar from "@/components/top-bar";
import SidebarRight from "@/components/sidebar-right";
import MainContent from "@/components/main-content";
import PageLoading from "@/components/page-loading";
import SidebarLeft from "@/components/sidebar-left";
import BottomBar from "@/components/bottom-bar";
import UserMenu from "@/components/user-menu";
import useCurrentUserQuery from "@/hooks/use-current-user-query";
import CourseModules from "@/components/course-modules";

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
        <UserMenu currentUser={currentUser} />
      </TopBar>
      <div className="flex flex-1">
        <SidebarLeft />
        <MainContent>
          <CourseModules
            userId={currentUser.id}
            courseId={currentUser.courses[0]?.courseId}
            courseSlug={currentUser.courses[0]?.course.slug}
          />
        </MainContent>
        <SidebarRight>
          <UserMenu currentUser={currentUser} />
        </SidebarRight>
      </div>
      <BottomBar />
    </div>
  );
}
