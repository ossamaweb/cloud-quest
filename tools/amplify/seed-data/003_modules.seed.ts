import { CreateModuleInput, ModuleDifficulty } from "@/lib/graphql/API";

const modulesSeedData: [CreateModuleInput, ...CreateModuleInput[]] = [
  {
    id: "module-001",
    courseId: "aws-fundamentals",
    slug: "aws-foundations",
    title: "AWS Foundations",
    description:
      "Learn the basics of AWS, including core concepts, account setup, and global infrastructure.",
    order: 1,
    difficulty: ModuleDifficulty.BEGINNER,
  },
  {
    id: "module-002",
    courseId: "aws-fundamentals",
    slug: "identity-access-management",
    title: "Identity & Access Management (IAM)",
    description:
      "Understand how to manage access to your AWS resources using IAM roles, policies, and users.",
    order: 2,
    difficulty: ModuleDifficulty.BEGINNER,
  },
  {
    id: "module-003",
    courseId: "aws-fundamentals",
    slug: "compute-services",
    title: "Compute Services",
    description:
      "Explore AWS compute services such as EC2, Lambda, and Auto Scaling to deploy and manage workloads.",
    order: 3,
    difficulty: ModuleDifficulty.BEGINNER,
  },
  {
    id: "module-004",
    courseId: "aws-fundamentals",
    slug: "storage-services",
    title: "Storage Services",
    description:
      "Dive into AWS storage services like S3, EFS, and Glacier to store, manage, and back up data.",
    order: 4,
    difficulty: ModuleDifficulty.BEGINNER,
  },
  {
    id: "module-005",
    courseId: "aws-fundamentals",
    slug: "networking-vpc",
    title: "Networking & VPC",
    description:
      "Learn how to configure secure and scalable networks using VPC, subnets, and Route 53.",
    order: 5,
    difficulty: ModuleDifficulty.INTERMEDIATE,
  },
  {
    id: "module-006",
    courseId: "aws-fundamentals",
    slug: "security-and-encryption",
    title: "Security & Encryption",
    description:
      "Understand AWS security best practices, including using KMS, Security Groups, and NACLs.",
    order: 6,
    difficulty: ModuleDifficulty.INTERMEDIATE,
  },
  {
    id: "module-007",
    courseId: "aws-fundamentals",
    slug: "databases",
    title: "Databases",
    description:
      "Explore AWS database services such as RDS, DynamoDB, and Redshift for scalable data management.",
    order: 7,
    difficulty: ModuleDifficulty.INTERMEDIATE,
  },
  {
    id: "module-008",
    courseId: "aws-fundamentals",
    slug: "serverless-architecture",
    title: "Serverless Architecture",
    description:
      "Learn how to build scalable and cost-effective serverless applications using Lambda, API Gateway, and DynamoDB.",
    order: 8,
    difficulty: ModuleDifficulty.INTERMEDIATE,
  },
  {
    id: "module-009",
    courseId: "aws-fundamentals",
    slug: "monitoring-and-logging",
    title: "Monitoring & Logging",
    description:
      "Understand how to monitor your AWS infrastructure using CloudWatch, CloudTrail, and AWS Config.",
    order: 9,
    difficulty: ModuleDifficulty.INTERMEDIATE,
  },
  {
    id: "module-010",
    courseId: "aws-fundamentals",
    slug: "ci-cd-pipelines",
    title: "CI/CD Pipelines",
    description:
      "Learn how to automate deployments using AWS CodePipeline, CodeBuild, and CodeDeploy.",
    order: 10,
    difficulty: ModuleDifficulty.ADVANCED,
  },
  {
    id: "module-011",
    courseId: "aws-fundamentals",
    slug: "infrastructure-as-code",
    title: "Infrastructure as Code",
    description:
      "Discover how to manage AWS infrastructure using tools like CloudFormation and Terraform.",
    order: 11,
    difficulty: ModuleDifficulty.ADVANCED,
  },
  {
    id: "module-012",
    courseId: "aws-fundamentals",
    slug: "cost-management",
    title: "Cost Management & Optimization",
    description:
      "Learn how to optimize your AWS costs using tools like AWS Cost Explorer and Trusted Advisor.",
    order: 12,
    difficulty: ModuleDifficulty.ADVANCED,
  },
];
export default modulesSeedData;
