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

  //module-005

  {
    id: "lesson-025",
    slug: "introduction-to-rds",
    title: "Introduction to Amazon RDS",
    content:
      "Learn the basics of Amazon Relational Database Service (RDS) and how it simplifies database management in the cloud.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-005",
  },
  {
    id: "lesson-026",
    slug: "setting-up-rds-instance",
    title: "Setting Up an RDS Instance",
    content:
      "Understand the steps to create and configure an RDS instance using the AWS Management Console.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-005",
  },
  {
    id: "lesson-027",
    slug: "rds-engine-options",
    title: "RDS Engine Options",
    content:
      "Explore the various database engines supported by RDS, including MySQL, PostgreSQL, SQL Server, and more.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-005",
  },
  {
    id: "lesson-028",
    slug: "rds-backup-and-recovery",
    title: "RDS Backup and Recovery",
    content:
      "Learn how Amazon RDS handles backups and how to restore your database in case of failure.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-005",
  },
  {
    id: "lesson-029",
    slug: "scaling-rds-instances",
    title: "Scaling RDS Instances",
    content:
      "Discover how to scale your RDS instances vertically and horizontally to handle increased workloads.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-005",
  },
  {
    id: "lesson-030",
    slug: "rds-security-best-practices",
    title: "RDS Security Best Practices",
    content:
      "Learn best practices for securing your RDS instances, including encryption, IAM roles, and network configurations.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-005",
  },

  //module-007

  {
    id: "lesson-031",
    slug: "introduction-to-aws-iam",
    title: "Introduction to AWS IAM",
    content:
      "Learn the fundamentals of AWS Identity and Access Management (IAM) and how it helps you securely control access to AWS resources.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-006",
  },
  {
    id: "lesson-032",
    slug: "iam-users-and-groups",
    title: "IAM Users and Groups",
    content:
      "Understand how to create and manage IAM users and groups to organize access permissions effectively.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-006",
  },
  {
    id: "lesson-033",
    slug: "iam-policies",
    title: "IAM Policies",
    content:
      "Learn about IAM policies, their structure, and how to use them to define permissions for AWS resources.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-006",
  },
  {
    id: "lesson-034",
    slug: "multi-factor-authentication",
    title: "Multi-Factor Authentication (MFA)",
    content:
      "Explore how to enhance the security of your AWS account by enabling multi-factor authentication (MFA).",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-006",
  },
  {
    id: "lesson-035",
    slug: "role-based-access",
    title: "Role-Based Access Control",
    content:
      "Discover how to create IAM roles and use them to grant temporary access to AWS services.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-006",
  },
  {
    id: "lesson-036",
    slug: "iam-best-practices",
    title: "IAM Best Practices",
    content:
      "Learn best practices for managing IAM, including the principle of least privilege, password policies, and auditing.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-006",
  },

  //module-007
  {
    id: "lesson-037",
    slug: "introduction-to-networking",
    title: "Introduction to Networking in AWS",
    content:
      "Gain an overview of basic networking concepts in AWS, including VPCs, subnets, and IP addressing.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-007",
  },
  {
    id: "lesson-038",
    slug: "creating-a-vpc",
    title: "Understanding VPC Creation",
    content:
      "Learn the concepts of creating a Virtual Private Cloud (VPC) in AWS to isolate and secure your resources. Understand how VPCs isolate your AWS resources.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-007",
  },
  {
    id: "lesson-039",
    slug: "subnets-and-ip-addressing",
    title: "Subnets and IP Addressing",
    content:
      "Understand the structure of subnets and IP addressing within an AWS VPC.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-007",
  },
  {
    id: "lesson-040",
    slug: "route-tables-and-internet-gateways",
    title: "Route Tables and Internet Gateways",
    content:
      "Explore how route tables and internet gateways work together to manage traffic flow in a VPC.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-007",
  },
  {
    id: "lesson-041",
    slug: "network-access-control",
    title: "Network Access Control Lists (ACLs)",
    content:
      "Learn about Network ACLs and how they can be used to manage inbound and outbound traffic to your resources.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-007",
  },
  {
    id: "lesson-042",
    slug: "security-groups-vs-acls",
    title: "Security Groups vs. Network ACLs",
    content:
      "Compare Security Groups and Network ACLs to understand their roles in securing your network.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-007",
  },

  //module-008

  {
    id: "lesson-043",
    slug: "aws-shared-responsibility-model",
    title: "AWS Shared Responsibility Model",
    content:
      "Understand the AWS Shared Responsibility Model and what security tasks are managed by AWS versus the customer.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-008",
  },
  {
    id: "lesson-044",
    slug: "identity-and-access-management",
    title: "Identity and Access Management (IAM)",
    content:
      "Learn the basics of AWS IAM, including users, roles, policies, and groups, and how they help manage access to AWS resources.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-008",
  },
  {
    id: "lesson-045",
    slug: "creating-iam-policies",
    title: "Understanding IAM Policy Creation",
    content:
      "Discover how to create and attach IAM policies to securely control access to AWS services and resources. Learn about policy structure, syntax and scope.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-008",
  },
  {
    id: "lesson-046",
    slug: "multi-factor-authentication",
    title: "Multi-Factor Authentication (MFA)",
    content:
      "Understand the importance of Multi-Factor Authentication and how to enable it to secure AWS accounts.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-008",
  },
  {
    id: "lesson-047",
    slug: "aws-kms-overview",
    title: "AWS Key Management Service (KMS) Overview",
    content:
      "Learn how AWS Key Management Service (KMS) helps manage cryptographic keys securely.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-008",
  },
  {
    id: "lesson-048",
    slug: "best-practices-for-security",
    title: "Best Practices for Security in AWS",
    content:
      "Explore best practices for securing your AWS account, resources, and data through policies, monitoring, and encryption.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-008",
  },

  //module-009

  {
    id: "lesson-049",
    slug: "introduction-to-vpc",
    title: "Introduction to VPC",
    content:
      "Learn about Amazon Virtual Private Cloud (VPC) and how it allows you to launch AWS resources in a logically isolated network.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-009",
  },
  {
    id: "lesson-050",
    slug: "subnets-and-routing",
    title: "Subnets and Routing",
    content:
      "Understand the concept of subnets, route tables, and how routing works within a VPC to manage network traffic.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-009",
  },
  {
    id: "lesson-051",
    slug: "security-groups-and-nacl",
    title: "Security Groups and Network ACLs",
    content:
      "Learn how to use security groups and Network Access Control Lists (NACLs) to control inbound and outbound traffic in your VPC.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-009",
  },
  {
    id: "lesson-052",
    slug: "elastic-load-balancing",
    title: "Elastic Load Balancing",
    content:
      "Explore Elastic Load Balancing (ELB) and how it distributes incoming application traffic across multiple targets.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-009",
  },
  {
    id: "lesson-053",
    slug: "aws-route-53-basics",
    title: "AWS Route 53 Basics",
    content:
      "Get an overview of AWS Route 53, a scalable Domain Name System (DNS) web service, and how to manage domain names and routing policies.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-009",
  },
  {
    id: "lesson-054",
    slug: "cloudfront-and-cdn",
    title: "CloudFront and Content Delivery Networks",
    content:
      "Learn about Amazon CloudFront, AWS’s content delivery network (CDN) service, and how it improves performance by distributing content globally.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-009",
  },

  //module-010
  {
    id: "lesson-055",
    slug: "introduction-to-serverless",
    title: "Introduction to Serverless",
    content:
      "Discover the serverless architecture model, its benefits, and how it allows you to build applications without managing servers.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-010",
  },
  {
    id: "lesson-056",
    slug: "aws-lambda-basics",
    title: "AWS Lambda Basics",
    content:
      "Learn about AWS Lambda, its core concepts, and how to run code in response to events with automatic scaling.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-010",
  },
  {
    id: "lesson-057",
    slug: "api-gateway-integration",
    title: "API Gateway Integration",
    content:
      "Explore how to use Amazon API Gateway to create, publish, maintain, and secure APIs that integrate with AWS Lambda.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-010",
  },
  {
    id: "lesson-058",
    slug: "event-driven-architecture",
    title: "Event-Driven Architecture",
    content:
      "Understand the event-driven architecture pattern and how AWS services like SNS, SQS, and EventBridge play a crucial role.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-010",
  },
  {
    id: "lesson-059",
    slug: "serverless-storage-with-s3",
    title: "Serverless Storage with S3",
    content:
      "Learn how to use Amazon S3 as a serverless storage solution and integrate it with AWS Lambda for various use cases.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-010",
  },
  {
    id: "lesson-060",
    slug: "hands-on-serverless-project",
    title: "Serverless Project Overview",
    content:
      "Explore the process of building a serverless application using AWS Lambda, API Gateway, and S3. This lesson will cover the main steps and concepts.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-010",
  },

  //module-011

  {
    id: "lesson-061",
    slug: "intro-to-cloud-computing",
    title: "Introduction to Cloud Computing",
    content:
      "Gain a foundational understanding of cloud computing, including its benefits, service models, and deployment types.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-011",
  },
  {
    id: "lesson-062",
    slug: "understanding-iaas-paas-saas",
    title: "Understanding IaaS, PaaS, and SaaS",
    content:
      "Learn about the three main cloud service models: Infrastructure as a Service, Platform as a Service, and Software as a Service.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-011",
  },
  {
    id: "lesson-063",
    slug: "public-vs-private-cloud",
    title: "Public vs Private Cloud",
    content:
      "Explore the differences between public, private, and hybrid cloud environments, and understand their use cases.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-011",
  },
  {
    id: "lesson-064",
    slug: "cloud-security-best-practices",
    title: "Cloud Security Best Practices",
    content:
      "Understand the key best practices for securing cloud environments, including identity management, encryption, and compliance.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-011",
  },
  {
    id: "lesson-065",
    slug: "multi-cloud-strategy",
    title: "Multi-Cloud Strategy",
    content:
      "Learn how businesses leverage multiple cloud providers to improve resilience, performance, and flexibility.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-011",
  },
  {
    id: "lesson-066",
    slug: "hands-on-cloud-deployment",
    title: "Cloud Deployment Concepts",
    content:
      "Learn the concepts for deploying a sample application to a cloud platform, focusing on security and scalability.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-011",
  },

  //module-12

  {
    id: "lesson-067",
    slug: "intro-to-ai-ml",
    title: "Introduction to AI and Machine Learning",
    content:
      "Understand the core concepts of Artificial Intelligence (AI) and Machine Learning (ML), their history, and real-world applications.",
    order: 1,
    type: LessonType.LESSON,
    moduleId: "module-012",
  },
  {
    id: "lesson-068",
    slug: "supervised-vs-unsupervised-learning",
    title: "Supervised vs Unsupervised Learning",
    content:
      "Learn the differences between supervised and unsupervised learning methods and explore their respective use cases.",
    order: 2,
    type: LessonType.LESSON,
    moduleId: "module-012",
  },
  {
    id: "lesson-069",
    slug: "building-ml-models",
    title: "Building Your First ML Model",
    content:
      "Step through the process of building a simple machine learning model using a popular ML library like Scikit-learn. Understand the key processes and considerations.",
    order: 3,
    type: LessonType.LESSON,
    moduleId: "module-012",
  },
  {
    id: "lesson-070",
    slug: "understanding-neural-networks",
    title: "Understanding Neural Networks",
    content:
      "Dive into the architecture of neural networks, including layers, nodes, and activation functions.",
    order: 4,
    type: LessonType.LESSON,
    moduleId: "module-012",
  },
  {
    id: "lesson-071",
    slug: "common-ml-algorithms",
    title: "Common Machine Learning Algorithms",
    content:
      "Explore popular machine learning algorithms such as decision trees, support vector machines, and clustering algorithms.",
    order: 5,
    type: LessonType.LESSON,
    moduleId: "module-012",
  },
  {
    id: "lesson-072",
    slug: "hands-on-model-tuning",
    title: "Model Tuning and Evaluation",
    content:
      "Practice tuning and evaluating your machine learning model for better accuracy and performance. Learn key metrics for model performance and how to optimize these.",
    order: 6,
    type: LessonType.LESSON,
    moduleId: "module-012",
  },
];

export default lessonsSeedData;
