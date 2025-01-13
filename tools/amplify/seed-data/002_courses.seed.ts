import { CreateCourseInput, CourseStatus } from "@/lib/graphql/API";

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
