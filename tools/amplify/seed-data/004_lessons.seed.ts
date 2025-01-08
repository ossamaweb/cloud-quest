import { CreateLessonInput, LessonType } from "@/lib/graphql/API";

const lessonsSeedData: Array<CreateLessonInput> = [
  //module-001
  {
    id: "lesson-001",
    slug: "introduction-to-aws",
    title: "Introduction to AWS",
    content:
      "Discover what AWS is, why it's important, and how it provides scalable cloud solutions for businesses of all sizes.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-001",
  },
  {
    id: "lesson-002",
    slug: "aws-global-infrastructure",
    title: "AWS Global Infrastructure",
    content:
      "Learn about AWS Regions, Availability Zones, and Edge Locations that ensure low latency and high availability.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-001",
  },
  {
    id: "lesson-003",
    slug: "aws-core-services-overview",
    title: "AWS Core Services Overview",
    content:
      "Get an overview of the core AWS services, including Compute, Storage, Networking, and Security.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-001",
  },
  {
    id: "lesson-004",
    slug: "aws-management-console",
    title: "AWS Management Console",
    content:
      "Explore the AWS Management Console, learn how to navigate it, and access key services.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-001",
  },
  {
    id: "lesson-005",
    slug: "aws-shared-responsibility-model",
    title: "AWS Shared Responsibility Model",
    content:
      "Understand the shared responsibility model, which outlines what AWS manages and what the customer is responsible for.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-001",
  },
  {
    id: "lesson-006",
    slug: "aws-pricing-and-billing",
    title: "AWS Pricing and Billing",
    content:
      "Learn the basics of AWS pricing models, cost management, and how to monitor your AWS usage effectively.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-001",
  },

  //module-002
  {
    id: "lesson-007",
    slug: "introduction-to-iam",
    title: "Introduction to IAM",
    content:
      "Learn the basics of AWS Identity and Access Management (IAM) and how it helps control access to AWS resources.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-002",
  },
  {
    id: "lesson-008",
    slug: "iam-users-and-groups",
    title: "IAM Users and Groups",
    content:
      "Understand how to create and manage IAM users and groups to define access permissions in AWS.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-002",
  },
  {
    id: "lesson-009",
    slug: "iam-policies",
    title: "IAM Policies",
    content:
      "Learn how to create and attach IAM policies to users, groups, and roles to control their permissions.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-002",
  },
  {
    id: "lesson-010",
    slug: "iam-roles",
    title: "IAM Roles",
    content:
      "Explore the concept of IAM roles and how they allow AWS services to perform actions on your behalf.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-002",
  },
  {
    id: "lesson-011",
    slug: "multi-factor-authentication",
    title: "Multi-Factor Authentication (MFA)",
    content:
      "Enhance account security by enabling Multi-Factor Authentication (MFA) for your IAM users.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-002",
  },
  {
    id: "lesson-012",
    slug: "iam-best-practices",
    title: "IAM Best Practices",
    content:
      "Learn best practices for managing IAM to ensure your AWS account remains secure and well-organized.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-002",
  },
];
export default lessonsSeedData;
