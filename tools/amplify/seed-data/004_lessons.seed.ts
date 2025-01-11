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

  //module-003

  {
    id: "lesson-013",
    slug: "introduction-to-ec2",
    title: "Introduction to Amazon EC2",
    content:
      "Learn what Amazon EC2 is, its key features, and how it provides scalable virtual servers in the cloud.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-003",
  },
  {
    id: "lesson-014",
    slug: "ec2-instances-types",
    title: "EC2 Instance Types",
    content:
      "Understand the different types of EC2 instances available and how to choose the right one for your workloads.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-003",
  },
  {
    id: "lesson-015",
    slug: "launching-ec2-instances",
    title: "Launching EC2 Instances",
    content:
      "Learn step-by-step how to launch an EC2 instance using the AWS Management Console.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-003",
  },
  {
    id: "lesson-016",
    slug: "ec2-security-groups",
    title: "EC2 Security Groups",
    content:
      "Discover how to configure security groups to control inbound and outbound traffic to your EC2 instances.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-003",
  },
  {
    id: "lesson-017",
    slug: "ec2-storage-options",
    title: "EC2 Storage Options",
    content:
      "Explore the different storage options available for EC2 instances, including EBS and instance store.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-003",
  },
  {
    id: "lesson-018",
    slug: "ec2-best-practices",
    title: "EC2 Best Practices",
    content:
      "Learn best practices for managing EC2 instances, including monitoring, cost optimization, and security.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-003",
  },

  //module-004
  {
    id: "lesson-019",
    slug: "introduction-to-s3",
    title: "Introduction to Amazon S3",
    content:
      "Learn what Amazon S3 is and how it provides scalable, secure, and durable object storage in the cloud.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-004",
  },
  {
    id: "lesson-020",
    slug: "s3-buckets-and-objects",
    title: "S3 Buckets and Objects",
    content:
      "Understand the concept of S3 buckets and objects, and how to create and manage them.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-004",
  },
  {
    id: "lesson-021",
    slug: "s3-storage-classes",
    title: "S3 Storage Classes",
    content:
      "Learn about different S3 storage classes and how to optimize costs by choosing the right storage class.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-004",
  },
  {
    id: "lesson-022",
    slug: "s3-permissions-and-access",
    title: "S3 Permissions and Access Control",
    content:
      "Explore how to configure permissions for S3 buckets and objects using IAM policies and bucket policies.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-004",
  },
  {
    id: "lesson-023",
    slug: "s3-static-website-hosting",
    title: "S3 Static Website Hosting",
    content:
      "Learn how to host a static website on Amazon S3 and configure it for public access.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-004",
  },
  {
    id: "lesson-024",
    slug: "s3-best-practices",
    title: "S3 Best Practices",
    content:
      "Discover best practices for managing S3 buckets, optimizing performance, and securing your data.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-004",
  },
];

export default lessonsSeedData;
