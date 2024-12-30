import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { ModeToggle } from "@/components/mode-toggle";

const client = generateClient<Schema>();

export default function Todo() {
  const { user, signOut } = useAuthenticator();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello {user.signInDetails?.loginId}!
      </h1>
      <ModeToggle />
    </div>
  );
}
