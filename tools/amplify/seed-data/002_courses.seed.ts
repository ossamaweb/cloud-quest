import { v4 as uuidv4 } from "uuid";
import { CreateCourseInput, CourseStatus } from "@/lib/graphql/API";

// const coursesSeedData: Array<CreateCourseInput> = [
//   {
//     id: "aws-fundamentals",
//     slug: "aws-fundamentals",
//     title: "AWS Fundamentals",
//     description:
//       "Test your understanding of Amazon Web Services (AWS) with our interactive quizzes. Covering foundational, intermediate, and advanced topics, these quizzes are a great way to gauge your AWS expertise and identify areas for improvement.",
//     status: CourseStatus.ACTIVE,
//   },
// ];

const coursesSeedData: Array<CreateCourseInput> = [
  {
    id: "aws-cloud-essentials",
    slug: "aws-cloud-essentials",
    title: "AWS Cloud Essentials",
    description:
      "A comprehensive introduction to Amazon Web Services (AWS), covering fundamental concepts, core services, and practical skills to get started in the cloud.",
    status: CourseStatus.ACTIVE,
  },
];

export default coursesSeedData;
