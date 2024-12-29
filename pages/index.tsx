import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Dashboard from "./dashboard";

const client = generateClient<Schema>();

export default function Todo() {
  const { user, signOut } = useAuthenticator();

  return <Dashboard />;
}
