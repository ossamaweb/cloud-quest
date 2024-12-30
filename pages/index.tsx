import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useIsMobile } from "@/hooks/use-mobile";

const client = generateClient<Schema>();

export default function Dashboard() {
  const { user, signOut } = useAuthenticator();

  return (
    <div className="flex flex-col h-screen w-screen divide-x divide-y divide-border">
      <div className="sm:hidden">TopBar Mobile</div>
      <div className="flex flex-1 divide-x divide-y">
        <div className="w-64 hidden sm:block">Sidebar right</div>
        <div className="flex-1">Main Content</div>
        <div className="w-64 hidden sm:block">SideBar left</div>
      </div>

      <div className="sm:hidden">Bottom Menu Mobile</div>
    </div>
  );
}
