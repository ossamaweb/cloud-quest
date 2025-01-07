"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";

export default function Logout() {
  const { signOut } = useAuthenticator();

  useEffect(() => {
    signOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
