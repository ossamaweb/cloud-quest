import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Lesson() {
  const { user } = useAuthenticator();

  return (
    <main>
      <h1>Lesson Page</h1>
      <div>
        <h2>Current Lesson</h2>
        <p>This page will display lesson content and learning materials.</p>
      </div>
    </main>
  );
}