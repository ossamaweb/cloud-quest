import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Profile() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>
      <h1>Profile</h1>
      <div>
        <h2>User Profile</h2>
        <p>Email: {user?.signInDetails?.loginId}</p>
        <button onClick={signOut}>Sign out</button>
      </div>
    </main>
  );
}