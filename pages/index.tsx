import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useIsMobile } from "@/hooks/use-mobile";

const client = generateClient<Schema>();

export default function Dashboard() {
  const { user, signOut } = useAuthenticator();

  return (
    <div>
      <div className="hidden xs:block">TopBar Mobile</div>
      <div className="flex">
        <div className="bg-red-500 w-64 xs:hidden">Sidebar right</div>
        <div className="bg-blue-600 flex-1">Main Content</div>
        <div className="bg-green-600  w-64">SideBar left</div>
      </div>

      <div className="hidden xs:block">Bottom Menu Mobile</div>
    </div>
  );
}
