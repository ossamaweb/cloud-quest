import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
import ThemeToggle from "@/components/theme-toggle";
import TopBar from "@/components/top-bar";
import SidebarRight from "@/components/sidebar-right";
import MainContent from "@/components/main-content";
import SidebarLeft from "@/components/sidebar-left";
import BottomBar from "@/components/bottom-bar";
import UserMenu from "@/components/user-menu";

const client = generateClient<Schema>();

export default function Dashboard() {
  const { user, signOut } = useAuthenticator();

  return (
    <div className="flex flex-col">
      <TopBar>
        <UserMenu />
      </TopBar>
      <div className="flex flex-1">
        <SidebarLeft />
        <MainContent />
        <SidebarRight>
          <UserMenu />
        </SidebarRight>
      </div>
      <BottomBar />
    </div>
  );
}
