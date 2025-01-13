import Link from "next/link";
import * as React from "react";

const CoursePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <p>Nothing to see here yet.</p>
      <Link href={"/"} className="text-primary hover:underline">
        Go to Home
      </Link>
    </div>
  );
};

export default CoursePage;
