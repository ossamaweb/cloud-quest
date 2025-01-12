import { CreateLessonInput, LessonType } from "@/lib/graphql/API";

// const lessonsSeedData: Array<CreateLessonInput> = [
//   //module-001
//   {
//     id: "lesson-001",
//     slug: "introduction-to-aws",
//     title: "Introduction to AWS",
//     about:
//       "Discover what AWS is, why it's important, and how it provides scalable cloud solutions for businesses of all sizes.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-001",
//   },
//   {
//     id: "lesson-002",
//     slug: "aws-global-infrastructure",
//     title: "AWS Global Infrastructure",
//     about:
//       "Learn about AWS Regions, Availability Zones, and Edge Locations that ensure low latency and high availability.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-001",
//   },
//   {
//     id: "lesson-003",
//     slug: "aws-core-services-overview",
//     title: "AWS Core Services Overview",
//     about:
//       "Get an overview of the core AWS services, including Compute, Storage, Networking, and Security.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-001",
//   },
//   {
//     id: "lesson-004",
//     slug: "aws-management-console",
//     title: "AWS Management Console",
//     about:
//       "Explore the AWS Management Console, learn how to navigate it, and access key services.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-001",
//   },
//   {
//     id: "lesson-005",
//     slug: "aws-shared-responsibility-model",
//     title: "AWS Shared Responsibility Model",
//     about:
//       "Understand the shared responsibility model, which outlines what AWS manages and what the customer is responsible for.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-001",
//   },
//   {
//     id: "lesson-006",
//     slug: "aws-pricing-and-billing",
//     title: "AWS Pricing and Billing",
//     about:
//       "Learn the basics of AWS pricing models, cost management, and how to monitor your AWS usage effectively.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-001",
//   },

//   //module-002
//   {
//     id: "lesson-007",
//     slug: "introduction-to-iam",
//     title: "Introduction to IAM",
//     about:
//       "Learn the basics of AWS Identity and Access Management (IAM) and how it helps control access to AWS resources.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-002",
//   },
//   {
//     id: "lesson-008",
//     slug: "iam-users-and-groups",
//     title: "IAM Users and Groups",
//     about:
//       "Understand how to create and manage IAM users and groups to define access permissions in AWS.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-002",
//   },
//   {
//     id: "lesson-009",
//     slug: "iam-policies",
//     title: "IAM Policies",
//     about:
//       "Learn how to create and attach IAM policies to users, groups, and roles to control their permissions.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-002",
//   },
//   {
//     id: "lesson-010",
//     slug: "iam-roles",
//     title: "IAM Roles",
//     about:
//       "Explore the concept of IAM roles and how they allow AWS services to perform actions on your behalf.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-002",
//   },
//   {
//     id: "lesson-011",
//     slug: "multi-factor-authentication",
//     title: "Multi-Factor Authentication (MFA)",
//     about:
//       "Enhance account security by enabling Multi-Factor Authentication (MFA) for your IAM users.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-002",
//   },
//   {
//     id: "lesson-012",
//     slug: "iam-best-practices",
//     title: "IAM Best Practices",
//     about:
//       "Learn best practices for managing IAM to ensure your AWS account remains secure and well-organized.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-002",
//   },

//   //module-003

//   {
//     id: "lesson-013",
//     slug: "introduction-to-ec2",
//     title: "Introduction to Amazon EC2",
//     about:
//       "Learn what Amazon EC2 is, its key features, and how it provides scalable virtual servers in the cloud.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-003",
//   },
//   {
//     id: "lesson-014",
//     slug: "ec2-instances-types",
//     title: "EC2 Instance Types",
//     about:
//       "Understand the different types of EC2 instances available and how to choose the right one for your workloads.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-003",
//   },
//   {
//     id: "lesson-015",
//     slug: "launching-ec2-instances",
//     title: "Launching EC2 Instances",
//     about:
//       "Learn step-by-step how to launch an EC2 instance using the AWS Management Console.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-003",
//   },
//   {
//     id: "lesson-016",
//     slug: "ec2-security-groups",
//     title: "EC2 Security Groups",
//     about:
//       "Discover how to configure security groups to control inbound and outbound traffic to your EC2 instances.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-003",
//   },
//   {
//     id: "lesson-017",
//     slug: "ec2-storage-options",
//     title: "EC2 Storage Options",
//     about:
//       "Explore the different storage options available for EC2 instances, including EBS and instance store.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-003",
//   },
//   {
//     id: "lesson-018",
//     slug: "ec2-best-practices",
//     title: "EC2 Best Practices",
//     about:
//       "Learn best practices for managing EC2 instances, including monitoring, cost optimization, and security.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-003",
//   },

//   //module-004
//   {
//     id: "lesson-019",
//     slug: "introduction-to-s3",
//     title: "Introduction to Amazon S3",
//     about:
//       "Learn what Amazon S3 is and how it provides scalable, secure, and durable object storage in the cloud.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-004",
//   },
//   {
//     id: "lesson-020",
//     slug: "s3-buckets-and-objects",
//     title: "S3 Buckets and Objects",
//     about:
//       "Understand the concept of S3 buckets and objects, and how to create and manage them.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-004",
//   },
//   {
//     id: "lesson-021",
//     slug: "s3-storage-classes",
//     title: "S3 Storage Classes",
//     about:
//       "Learn about different S3 storage classes and how to optimize costs by choosing the right storage class.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-004",
//   },
//   {
//     id: "lesson-022",
//     slug: "s3-permissions-and-access",
//     title: "S3 Permissions and Access Control",
//     about:
//       "Explore how to configure permissions for S3 buckets and objects using IAM policies and bucket policies.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-004",
//   },
//   {
//     id: "lesson-023",
//     slug: "s3-static-website-hosting",
//     title: "S3 Static Website Hosting",
//     about:
//       "Learn how to host a static website on Amazon S3 and configure it for public access.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-004",
//   },
//   {
//     id: "lesson-024",
//     slug: "s3-best-practices",
//     title: "S3 Best Practices",
//     about:
//       "Discover best practices for managing S3 buckets, optimizing performance, and securing your data.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-004",
//   },

//   //module-005

//   {
//     id: "lesson-025",
//     slug: "introduction-to-rds",
//     title: "Introduction to Amazon RDS",
//     about:
//       "Learn the basics of Amazon Relational Database Service (RDS) and how it simplifies database management in the cloud.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-005",
//   },
//   {
//     id: "lesson-026",
//     slug: "setting-up-rds-instance",
//     title: "Setting Up an RDS Instance",
//     about:
//       "Understand the steps to create and configure an RDS instance using the AWS Management Console.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-005",
//   },
//   {
//     id: "lesson-027",
//     slug: "rds-engine-options",
//     title: "RDS Engine Options",
//     about:
//       "Explore the various database engines supported by RDS, including MySQL, PostgreSQL, SQL Server, and more.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-005",
//   },
//   {
//     id: "lesson-028",
//     slug: "rds-backup-and-recovery",
//     title: "RDS Backup and Recovery",
//     about:
//       "Learn how Amazon RDS handles backups and how to restore your database in case of failure.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-005",
//   },
//   {
//     id: "lesson-029",
//     slug: "scaling-rds-instances",
//     title: "Scaling RDS Instances",
//     about:
//       "Discover how to scale your RDS instances vertically and horizontally to handle increased workloads.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-005",
//   },
//   {
//     id: "lesson-030",
//     slug: "rds-security-best-practices",
//     title: "RDS Security Best Practices",
//     about:
//       "Learn best practices for securing your RDS instances, including encryption, IAM roles, and network configurations.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-005",
//   },

//   //module-007

//   {
//     id: "lesson-031",
//     slug: "introduction-to-aws-iam",
//     title: "Introduction to AWS IAM",
//     about:
//       "Learn the fundamentals of AWS Identity and Access Management (IAM) and how it helps you securely control access to AWS resources.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-006",
//   },
//   {
//     id: "lesson-032",
//     slug: "iam-users-and-groups",
//     title: "IAM Users and Groups",
//     about:
//       "Understand how to create and manage IAM users and groups to organize access permissions effectively.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-006",
//   },
//   {
//     id: "lesson-033",
//     slug: "iam-policies",
//     title: "IAM Policies",
//     about:
//       "Learn about IAM policies, their structure, and how to use them to define permissions for AWS resources.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-006",
//   },
//   {
//     id: "lesson-034",
//     slug: "multi-factor-authentication",
//     title: "Multi-Factor Authentication (MFA)",
//     about:
//       "Explore how to enhance the security of your AWS account by enabling multi-factor authentication (MFA).",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-006",
//   },
//   {
//     id: "lesson-035",
//     slug: "role-based-access",
//     title: "Role-Based Access Control",
//     about:
//       "Discover how to create IAM roles and use them to grant temporary access to AWS services.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-006",
//   },
//   {
//     id: "lesson-036",
//     slug: "iam-best-practices",
//     title: "IAM Best Practices",
//     about:
//       "Learn best practices for managing IAM, including the principle of least privilege, password policies, and auditing.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-006",
//   },

//   //module-007
//   {
//     id: "lesson-037",
//     slug: "introduction-to-networking",
//     title: "Introduction to Networking in AWS",
//     about:
//       "Gain an overview of basic networking concepts in AWS, including VPCs, subnets, and IP addressing.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-007",
//   },
//   {
//     id: "lesson-038",
//     slug: "creating-a-vpc",
//     title: "Understanding VPC Creation",
//     about:
//       "Learn the concepts of creating a Virtual Private Cloud (VPC) in AWS to isolate and secure your resources. Understand how VPCs isolate your AWS resources.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-007",
//   },
//   {
//     id: "lesson-039",
//     slug: "subnets-and-ip-addressing",
//     title: "Subnets and IP Addressing",
//     about:
//       "Understand the structure of subnets and IP addressing within an AWS VPC.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-007",
//   },
//   {
//     id: "lesson-040",
//     slug: "route-tables-and-internet-gateways",
//     title: "Route Tables and Internet Gateways",
//     about:
//       "Explore how route tables and internet gateways work together to manage traffic flow in a VPC.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-007",
//   },
//   {
//     id: "lesson-041",
//     slug: "network-access-control",
//     title: "Network Access Control Lists (ACLs)",
//     about:
//       "Learn about Network ACLs and how they can be used to manage inbound and outbound traffic to your resources.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-007",
//   },
//   {
//     id: "lesson-042",
//     slug: "security-groups-vs-acls",
//     title: "Security Groups vs. Network ACLs",
//     about:
//       "Compare Security Groups and Network ACLs to understand their roles in securing your network.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-007",
//   },

//   //module-008

//   {
//     id: "lesson-043",
//     slug: "aws-shared-responsibility-model",
//     title: "AWS Shared Responsibility Model",
//     about:
//       "Understand the AWS Shared Responsibility Model and what security tasks are managed by AWS versus the customer.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-008",
//   },
//   {
//     id: "lesson-044",
//     slug: "identity-and-access-management",
//     title: "Identity and Access Management (IAM)",
//     about:
//       "Learn the basics of AWS IAM, including users, roles, policies, and groups, and how they help manage access to AWS resources.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-008",
//   },
//   {
//     id: "lesson-045",
//     slug: "creating-iam-policies",
//     title: "Understanding IAM Policy Creation",
//     about:
//       "Discover how to create and attach IAM policies to securely control access to AWS services and resources. Learn about policy structure, syntax and scope.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-008",
//   },
//   {
//     id: "lesson-046",
//     slug: "multi-factor-authentication",
//     title: "Multi-Factor Authentication (MFA)",
//     about:
//       "Understand the importance of Multi-Factor Authentication and how to enable it to secure AWS accounts.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-008",
//   },
//   {
//     id: "lesson-047",
//     slug: "aws-kms-overview",
//     title: "AWS Key Management Service (KMS) Overview",
//     about:
//       "Learn how AWS Key Management Service (KMS) helps manage cryptographic keys securely.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-008",
//   },
//   {
//     id: "lesson-048",
//     slug: "best-practices-for-security",
//     title: "Best Practices for Security in AWS",
//     about:
//       "Explore best practices for securing your AWS account, resources, and data through policies, monitoring, and encryption.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-008",
//   },

//   //module-009

//   {
//     id: "lesson-049",
//     slug: "introduction-to-vpc",
//     title: "Introduction to VPC",
//     about:
//       "Learn about Amazon Virtual Private Cloud (VPC) and how it allows you to launch AWS resources in a logically isolated network.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-009",
//   },
//   {
//     id: "lesson-050",
//     slug: "subnets-and-routing",
//     title: "Subnets and Routing",
//     about:
//       "Understand the concept of subnets, route tables, and how routing works within a VPC to manage network traffic.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-009",
//   },
//   {
//     id: "lesson-051",
//     slug: "security-groups-and-nacl",
//     title: "Security Groups and Network ACLs",
//     about:
//       "Learn how to use security groups and Network Access Control Lists (NACLs) to control inbound and outbound traffic in your VPC.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-009",
//   },
//   {
//     id: "lesson-052",
//     slug: "elastic-load-balancing",
//     title: "Elastic Load Balancing",
//     about:
//       "Explore Elastic Load Balancing (ELB) and how it distributes incoming application traffic across multiple targets.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-009",
//   },
//   {
//     id: "lesson-053",
//     slug: "aws-route-53-basics",
//     title: "AWS Route 53 Basics",
//     about:
//       "Get an overview of AWS Route 53, a scalable Domain Name System (DNS) web service, and how to manage domain names and routing policies.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-009",
//   },
//   {
//     id: "lesson-054",
//     slug: "cloudfront-and-cdn",
//     title: "CloudFront and Content Delivery Networks",
//     about:
//       "Learn about Amazon CloudFront, AWS’s content delivery network (CDN) service, and how it improves performance by distributing content globally.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-009",
//   },

//   //module-010
//   {
//     id: "lesson-055",
//     slug: "introduction-to-serverless",
//     title: "Introduction to Serverless",
//     about:
//       "Discover the serverless architecture model, its benefits, and how it allows you to build applications without managing servers.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-010",
//   },
//   {
//     id: "lesson-056",
//     slug: "aws-lambda-basics",
//     title: "AWS Lambda Basics",
//     about:
//       "Learn about AWS Lambda, its core concepts, and how to run code in response to events with automatic scaling.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-010",
//   },
//   {
//     id: "lesson-057",
//     slug: "api-gateway-integration",
//     title: "API Gateway Integration",
//     about:
//       "Explore how to use Amazon API Gateway to create, publish, maintain, and secure APIs that integrate with AWS Lambda.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-010",
//   },
//   {
//     id: "lesson-058",
//     slug: "event-driven-architecture",
//     title: "Event-Driven Architecture",
//     about:
//       "Understand the event-driven architecture pattern and how AWS services like SNS, SQS, and EventBridge play a crucial role.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-010",
//   },
//   {
//     id: "lesson-059",
//     slug: "serverless-storage-with-s3",
//     title: "Serverless Storage with S3",
//     about:
//       "Learn how to use Amazon S3 as a serverless storage solution and integrate it with AWS Lambda for various use cases.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-010",
//   },
//   {
//     id: "lesson-060",
//     slug: "hands-on-serverless-project",
//     title: "Serverless Project Overview",
//     about:
//       "Explore the process of building a serverless application using AWS Lambda, API Gateway, and S3. This lesson will cover the main steps and concepts.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-010",
//   },

//   //module-011

//   {
//     id: "lesson-061",
//     slug: "intro-to-cloud-computing",
//     title: "Introduction to Cloud Computing",
//     about:
//       "Gain a foundational understanding of cloud computing, including its benefits, service models, and deployment types.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-011",
//   },
//   {
//     id: "lesson-062",
//     slug: "understanding-iaas-paas-saas",
//     title: "Understanding IaaS, PaaS, and SaaS",
//     about:
//       "Learn about the three main cloud service models: Infrastructure as a Service, Platform as a Service, and Software as a Service.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-011",
//   },
//   {
//     id: "lesson-063",
//     slug: "public-vs-private-cloud",
//     title: "Public vs Private Cloud",
//     about:
//       "Explore the differences between public, private, and hybrid cloud environments, and understand their use cases.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-011",
//   },
//   {
//     id: "lesson-064",
//     slug: "cloud-security-best-practices",
//     title: "Cloud Security Best Practices",
//     about:
//       "Understand the key best practices for securing cloud environments, including identity management, encryption, and compliance.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-011",
//   },
//   {
//     id: "lesson-065",
//     slug: "multi-cloud-strategy",
//     title: "Multi-Cloud Strategy",
//     about:
//       "Learn how businesses leverage multiple cloud providers to improve resilience, performance, and flexibility.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-011",
//   },
//   {
//     id: "lesson-066",
//     slug: "hands-on-cloud-deployment",
//     title: "Cloud Deployment Concepts",
//     about:
//       "Learn the concepts for deploying a sample application to a cloud platform, focusing on security and scalability.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-011",
//   },

//   //module-12

//   {
//     id: "lesson-067",
//     slug: "intro-to-ai-ml",
//     title: "Introduction to AI and Machine Learning",
//     about:
//       "Understand the core concepts of Artificial Intelligence (AI) and Machine Learning (ML), their history, and real-world applications.",
//     order: 1,
//     type: LessonType.LESSON,
//     moduleId: "module-012",
//   },
//   {
//     id: "lesson-068",
//     slug: "supervised-vs-unsupervised-learning",
//     title: "Supervised vs Unsupervised Learning",
//     about:
//       "Learn the differences between supervised and unsupervised learning methods and explore their respective use cases.",
//     order: 2,
//     type: LessonType.LESSON,
//     moduleId: "module-012",
//   },
//   {
//     id: "lesson-069",
//     slug: "building-ml-models",
//     title: "Building Your First ML Model",
//     about:
//       "Step through the process of building a simple machine learning model using a popular ML library like Scikit-learn. Understand the key processes and considerations.",
//     order: 3,
//     type: LessonType.LESSON,
//     moduleId: "module-012",
//   },
//   {
//     id: "lesson-070",
//     slug: "understanding-neural-networks",
//     title: "Understanding Neural Networks",
//     about:
//       "Dive into the architecture of neural networks, including layers, nodes, and activation functions.",
//     order: 4,
//     type: LessonType.LESSON,
//     moduleId: "module-012",
//   },
//   {
//     id: "lesson-071",
//     slug: "common-ml-algorithms",
//     title: "Common Machine Learning Algorithms",
//     about:
//       "Explore popular machine learning algorithms such as decision trees, support vector machines, and clustering algorithms.",
//     order: 5,
//     type: LessonType.LESSON,
//     moduleId: "module-012",
//   },
//   {
//     id: "lesson-072",
//     slug: "hands-on-model-tuning",
//     title: "Model Tuning and Evaluation",
//     about:
//       "Practice tuning and evaluating your machine learning model for better accuracy and performance. Learn key metrics for model performance and how to optimize these.",
//     order: 6,
//     type: LessonType.LESSON,
//     moduleId: "module-012",
//   },
// ];

const lessonsSeedData: Array<CreateLessonInput> = [
  {
    id: "lesson-001",
    slug: "introduction-to-cloud-computing",
    title: "Introduction to Cloud Computing",
    description: "Learn the basic concepts of cloud computing.",
    about:
      "This lesson introduces fundamental concepts of cloud computing. It covers the definition of cloud computing, its key characteristics (on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service), and the different types of cloud deployment models (public, private, hybrid). It also discusses the benefits of cloud computing, including cost savings, scalability, and increased agility. You should understand the core differences between traditional IT infrastructure and cloud-based solutions, and how they impact business operations.",
    order: 1,
    moduleId: "module-001",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-002",
    slug: "cloud-service-models",
    title: "Cloud Service Models",
    description: "Explore different cloud service models.",
    about:
      "This lesson explores the three main cloud service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). It covers the responsibilities of the cloud provider and the customer in each model. It also discusses examples of services that fall into each category. You should be able to differentiate between IaaS, PaaS, and SaaS, and understand the benefits and use cases of each.",
    order: 2,
    moduleId: "module-001",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-003",
    slug: "cloud-deployment-models",
    title: "Cloud Deployment Models",
    description: "Understand public, private, and hybrid cloud deployments.",
    about:
      "This lesson examines the different cloud deployment models: public cloud, private cloud, and hybrid cloud. It explores the characteristics of each model, including ownership, management, and security considerations. It also covers the use cases and advantages of each model. You should be able to differentiate between public, private, and hybrid cloud models, and understand the scenarios in which each model is most suitable.",
    order: 3,
    moduleId: "module-001",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-004",
    slug: "benefits-of-cloud-computing",
    title: "Benefits of Cloud Computing",
    description: "Learn about the advantages of using cloud services.",
    about:
      "This lesson focuses on the key benefits of adopting cloud computing. It covers advantages such as cost savings, scalability, elasticity, increased agility, and global reach. It also discusses the impact of cloud computing on business innovation and transformation. You should be able to articulate the various benefits of cloud computing and how they can impact business operations and outcomes.",
    order: 4,
    moduleId: "module-001",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-005",
    slug: "cloud-computing-security",
    title: "Cloud Computing Security",
    description: "Learn about the security considerations in the cloud.",
    about:
      "This lesson introduces the fundamental security considerations in cloud computing. It covers the shared responsibility model, which outlines the security responsibilities of both the cloud provider and the customer. It also discusses key security concepts such as identity and access management (IAM), data encryption, network security, and compliance. You should be able to understand the shared responsibility model and the basic security practices in the cloud.",
    order: 5,
    moduleId: "module-001",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-006",
    slug: "cloud-computing-best-practices",
    title: "Cloud Computing Best Practices",
    description: "Explore best practices for cloud adoption and management.",
    about:
      "This lesson provides an overview of best practices for cloud adoption and management. It covers topics such as planning, governance, cost optimization, performance monitoring, and disaster recovery. It also discusses the importance of continuous learning and adaptation in the cloud environment. You should be able to understand and apply best practices for cloud adoption and management to ensure successful cloud operations.",
    order: 6,
    moduleId: "module-001",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-007",
    slug: "creating-an-aws-account",
    title: "Creating an AWS Account",
    description: "Learn how to create a new AWS account.",
    about:
      "This lesson guides you through the process of creating a new AWS account. It covers the required information, payment methods, and the initial steps for setting up your account. It also discusses the free tier and its limitations. You should be able to create a new AWS account and understand the basic account setup process.",
    order: 1,
    moduleId: "module-002",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-008",
    slug: "navigating-the-aws-console",
    title: "Navigating the AWS Console",
    description: "Explore the AWS Management Console.",
    about:
      "This lesson introduces the AWS Management Console and its key features. It covers how to navigate the console, access different services, and use the search functionality. It also discusses the preferences and settings available in the console. You should be able to navigate the AWS Management Console effectively and access the services you need.",
    order: 2,
    moduleId: "module-002",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-009",
    slug: "setting-up-multi-factor-authentication",
    title: "Setting Up Multi-Factor Authentication (MFA)",
    description: "Learn how to enable MFA for your AWS account.",
    about:
      "This lesson explains the importance of Multi-Factor Authentication (MFA) and how to enable it for your AWS account. It covers the different types of MFA devices and the steps to configure MFA for your root user and IAM users. You should be able to enable MFA for your AWS account and understand its benefits for security.",
    order: 3,
    moduleId: "module-002",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-010",
    slug: "configuring-billing-alerts",
    title: "Configuring Billing Alerts",
    description: "Learn how to set up billing alerts for your AWS account.",
    about:
      "This lesson focuses on how to set up billing alerts for your AWS account to monitor your spending and avoid unexpected costs. It covers how to configure billing alarms using CloudWatch and how to receive notifications when your usage exceeds certain thresholds. You should be able to set up billing alerts and understand how to monitor your AWS costs effectively.",
    order: 4,
    moduleId: "module-002",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-011",
    slug: "understanding-aws-free-tier",
    title: "Understanding the AWS Free Tier",
    description: "Explore the AWS Free Tier and its benefits.",
    about:
      "This lesson explains the AWS Free Tier program and its benefits for new AWS users. It covers the different types of free tier offers, including always free, 12-month free, and trials. It also discusses the limitations and usage guidelines of the free tier. You should be able to understand the AWS Free Tier program and how to use it effectively.",
    order: 5,
    moduleId: "module-002",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-012",
    slug: "creating-iam-users",
    title: "Creating IAM Users",
    description: "Learn how to create IAM users for your AWS account.",
    about:
      "This lesson covers how to create IAM users for your AWS account. It explains the importance of using IAM users instead of the root user for daily tasks. It also covers how to create IAM users, assign them permissions, and manage their access keys. You should be able to create IAM users and understand how to manage their access to AWS resources.",
    order: 6,
    moduleId: "module-002",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-013",
    slug: "aws-regions",
    title: "Understanding AWS Regions",
    description: "Learn about AWS Regions and their purpose.",
    about:
      "This lesson introduces the concept of AWS Regions. It explains what AWS Regions are, how they are geographically dispersed, and why they are important for latency and data sovereignty. It also covers how to choose the right region for your resources. You should be able to understand what AWS Regions are, their importance, and how to select the appropriate region for your needs.",
    order: 1,
    moduleId: "module-003",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-014",
    slug: "availability-zones",
    title: "Understanding Availability Zones",
    description: "Explore AWS Availability Zones and their role.",
    about:
      "This lesson explores AWS Availability Zones (AZs) and their role in ensuring high availability and fault tolerance. It explains what AZs are, how they are located within a region, and how they provide redundancy. It also discusses best practices for deploying resources across multiple AZs. You should be able to understand what Availability Zones are, how they provide redundancy, and how to deploy resources across multiple AZs.",
    order: 2,
    moduleId: "module-003",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-015",
    slug: "edge-locations-and-content-delivery",
    title: "Edge Locations and Content Delivery",
    description: "Learn about AWS Edge Locations and content delivery.",
    about:
      "This lesson introduces AWS Edge Locations and their role in content delivery. It explains what Edge Locations are, how they are used to cache content, and how they improve performance for end-users. It also discusses Amazon CloudFront and its integration with Edge Locations. You should be able to understand what Edge Locations are, their purpose, and how they improve content delivery.",
    order: 3,
    moduleId: "module-003",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-016",
    slug: "choosing-the-right-region-and-az",
    title: "Choosing the Right Region and AZ",
    description:
      "Learn how to select the appropriate AWS Region and Availability Zone.",
    about:
      "This lesson focuses on how to choose the right AWS Region and Availability Zone for your specific needs. It covers factors such as latency, data sovereignty, service availability, and cost. It also discusses best practices for deploying resources across multiple regions and AZs. You should be able to select the appropriate AWS Region and Availability Zone based on your requirements.",
    order: 4,
    moduleId: "module-003",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-017",
    slug: "aws-global-infrastructure-best-practices",
    title: "AWS Global Infrastructure Best Practices",
    description: "Explore best practices for using AWS global infrastructure.",
    about:
      "This lesson provides an overview of best practices for using the AWS global infrastructure. It covers topics such as designing for high availability, disaster recovery, and global content delivery. It also discusses the importance of understanding the AWS shared responsibility model and how it applies to infrastructure. You should be able to understand and apply best practices for using the AWS global infrastructure to ensure reliable and scalable applications.",
    order: 5,
    moduleId: "module-003",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-018",
    slug: "aws-global-infrastructure-pricing",
    title: "AWS Global Infrastructure Pricing",
    description:
      "Learn about pricing considerations for AWS global infrastructure.",
    about:
      "This lesson focuses on the pricing considerations for using the AWS global infrastructure. It covers the different pricing models for regions, availability zones, and edge locations. It also discusses how to optimize costs by choosing the right infrastructure components. You should be able to understand the pricing models for AWS global infrastructure and how to optimize costs.",
    order: 6,
    moduleId: "module-003",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-019",
    slug: "introduction-to-amazon-ec2",
    title: "Introduction to Amazon EC2",
    description: "Learn the basics of Amazon EC2.",
    about:
      "This lesson introduces Amazon Elastic Compute Cloud (EC2) and its role in providing scalable compute capacity in the cloud. It covers the key concepts of EC2, including virtual machines (instances), instance types, and operating systems. It also discusses the benefits of using EC2 for various workloads. You should be able to understand what EC2 is, its key features, and how it provides virtual servers in the cloud.",
    order: 1,
    moduleId: "module-004",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-020",
    slug: "ec2-instance-types",
    title: "EC2 Instance Types",
    description: "Explore different EC2 instance types.",
    about:
      "This lesson explores the different types of EC2 instances available, categorized by their use cases (e.g., general purpose, compute optimized, memory optimized, storage optimized). It covers the characteristics of each instance type, including CPU, memory, storage, and networking capabilities. It also discusses how to choose the right instance type for your specific needs. You should be able to understand the different types of EC2 instances and how to choose the appropriate one for your workloads.",
    order: 2,
    moduleId: "module-004",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-021",
    slug: "launching-ec2-instances",
    title: "Launching EC2 Instances",
    description: "Learn how to launch EC2 instances.",
    about:
      "This lesson guides you through the process of launching EC2 instances using the AWS Management Console. It covers the steps involved in selecting an Amazon Machine Image (AMI), choosing an instance type, configuring storage, setting up security groups, and launching the instance. It also discusses how to connect to your launched instance. You should be able to launch an EC2 instance using the AWS Management Console and connect to it.",
    order: 3,
    moduleId: "module-004",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-022",
    slug: "introduction-to-aws-lambda",
    title: "Introduction to AWS Lambda",
    description: "Learn the basics of AWS Lambda.",
    about:
      "This lesson introduces AWS Lambda, a serverless compute service that allows you to run code without provisioning or managing servers. It covers the key concepts of Lambda, including functions, triggers, and event sources. It also discusses the benefits of using Lambda for serverless applications. You should be able to understand what AWS Lambda is, its key features, and how it enables serverless computing.",
    order: 4,
    moduleId: "module-004",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-023",
    slug: "lambda-functions-and-triggers",
    title: "Lambda Functions and Triggers",
    description: "Explore Lambda functions and triggers.",
    about:
      "This lesson explores Lambda functions and event triggers in detail. It covers how to create and configure Lambda functions, how to define event triggers, and how to integrate Lambda with other AWS services. It also discusses the different types of event sources that can trigger Lambda functions. You should be able to create Lambda functions, configure event triggers, and integrate Lambda with other AWS services.",
    order: 5,
    moduleId: "module-004",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-024",
    slug: "other-compute-options",
    title: "Other Compute Options",
    description: "Learn about other compute options in AWS.",
    about:
      "This lesson provides an overview of other compute options in AWS, such as AWS Fargate, Amazon ECS, and AWS Batch. It covers the use cases for each service and how they differ from EC2 and Lambda. It also discusses when to use each service based on your specific needs. You should be able to understand the different compute options in AWS and when to use each one.",
    order: 6,
    moduleId: "module-004",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-025",
    slug: "introduction-to-amazon-s3",
    title: "Introduction to Amazon S3",
    description: "Learn the basics of Amazon S3.",
    about:
      "This lesson introduces Amazon Simple Storage Service (S3) and its role in providing scalable object storage in the cloud. It covers the key concepts of S3, including buckets, objects, and storage classes. It also discusses the benefits of using S3 for various storage needs. You should be able to understand what S3 is, its key features, and how it provides object storage in the cloud.",
    order: 1,
    moduleId: "module-005",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-026",
    slug: "s3-buckets-and-objects",
    title: "S3 Buckets and Objects",
    description: "Explore S3 buckets and objects.",
    about:
      "This lesson explores S3 buckets and objects in detail. It covers how to create and manage S3 buckets, how to upload and download objects, and how to configure bucket policies. It also discusses the different ways to access S3 objects. You should be able to understand how S3 buckets and objects work and how to manage them effectively.",
    order: 2,
    moduleId: "module-005",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-027",
    slug: "s3-storage-classes",
    title: "S3 Storage Classes",
    description: "Learn about different S3 storage classes.",
    about:
      "This lesson introduces the different S3 storage classes, including S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, S3 One Zone-IA, S3 Glacier, and S3 Glacier Deep Archive. It covers the characteristics of each storage class, including cost, availability, and retrieval time. It also discusses how to choose the right storage class for your specific data. You should be able to understand the different S3 storage classes and how to optimize costs by choosing the right one.",
    order: 3,
    moduleId: "module-005",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-028",
    slug: "introduction-to-amazon-ebs",
    title: "Introduction to Amazon EBS",
    description: "Learn the basics of Amazon EBS.",
    about:
      "This lesson introduces Amazon Elastic Block Store (EBS) and its role in providing block storage for EC2 instances. It covers the key concepts of EBS, including volumes, snapshots, and volume types. It also discusses the benefits of using EBS for persistent storage. You should be able to understand what EBS is, its key features, and how it provides block storage for EC2 instances.",
    order: 4,
    moduleId: "module-005",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-029",
    slug: "ebs-volume-types",
    title: "EBS Volume Types",
    description: "Explore different EBS volume types.",
    about:
      "This lesson explores the different types of EBS volumes available, including SSD-backed volumes (gp2, gp3, io1, io2) and HDD-backed volumes (st1, sc1). It covers the characteristics of each volume type, including performance, cost, and use cases. It also discusses how to choose the right volume type for your specific workloads. You should be able to understand the different EBS volume types and how to choose the appropriate one for your needs.",
    order: 5,
    moduleId: "module-005",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-030",
    slug: "other-storage-options",
    title: "Other Storage Options",
    description: "Learn about other storage options in AWS.",
    about:
      "This lesson provides an overview of other storage options in AWS, such as Amazon EFS, Amazon FSx, and Amazon Glacier. It covers the use cases for each service and how they differ from S3 and EBS. It also discusses when to use each service based on your specific needs. You should be able to understand the different storage options in AWS and when to use each one.",
    order: 6,
    moduleId: "module-005",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-031",
    slug: "introduction-to-amazon-rds",
    title: "Introduction to Amazon RDS",
    description: "Learn the basics of Amazon RDS.",
    about:
      "This lesson introduces Amazon Relational Database Service (RDS) and its role in providing managed relational databases in the cloud. It covers the key concepts of RDS, including database engines, instance types, and storage options. It also discusses the benefits of using RDS for various database workloads. You should be able to understand what RDS is, its key features, and how it simplifies database management in the cloud.",
    order: 1,
    moduleId: "module-006",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-032",
    slug: "rds-database-engines",
    title: "RDS Database Engines",
    description: "Explore different RDS database engines.",
    about:
      "This lesson explores the different database engines supported by RDS, including MySQL, PostgreSQL, SQL Server, Oracle, and MariaDB. It covers the characteristics of each database engine, including their features, performance, and use cases. It also discusses how to choose the right database engine for your specific needs. You should be able to understand the different RDS database engines and how to choose the appropriate one for your workloads.",
    order: 2,
    moduleId: "module-006",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-033",
    slug: "rds-backup-and-recovery",
    title: "RDS Backup and Recovery",
    description: "Learn about RDS backup and recovery options.",
    about:
      "This lesson focuses on how Amazon RDS handles backups and how to restore your database in case of failure. It covers the different backup options available, including automated backups, manual snapshots, and point-in-time recovery. It also discusses best practices for database backup and recovery. You should be able to understand how Amazon RDS handles backups and how to restore your database effectively.",
    order: 3,
    moduleId: "module-006",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-034",
    slug: "introduction-to-amazon-dynamodb",
    title: "Introduction to Amazon DynamoDB",
    description: "Learn the basics of Amazon DynamoDB.",
    about:
      "This lesson introduces Amazon DynamoDB, a fully managed NoSQL database service. It covers the key concepts of DynamoDB, including tables, items, and attributes. It also discusses the benefits of using DynamoDB for scalable and flexible data storage. You should be able to understand what DynamoDB is, its key features, and how it provides a NoSQL database service.",
    order: 4,
    moduleId: "module-006",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-035",
    slug: "dynamodb-tables-and-items",
    title: "DynamoDB Tables and Items",
    description: "Explore DynamoDB tables and items.",
    about:
      "This lesson explores DynamoDB tables and items in detail. It covers how to create and manage DynamoDB tables, how to add and retrieve items, and how to configure indexes. It also discusses the different data types supported by DynamoDB. You should be able to understand how DynamoDB tables and items work and how to manage them effectively.",
    order: 5,
    moduleId: "module-006",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-036",
    slug: "other-database-options",
    title: "Other Database Options",
    description: "Learn about other database options in AWS.",
    about:
      "This lesson provides an overview of other database options in AWS, such as Amazon Aurora, Amazon DocumentDB, and Amazon Redshift. It covers the use cases for each service and how they differ from RDS and DynamoDB. It also discusses when to use each service based on your specific needs. You should be able to understand the different database options in AWS and when to use each one.",
    order: 6,
    moduleId: "module-006",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-037",
    slug: "introduction-to-amazon-vpc",
    title: "Introduction to Amazon VPC",
    description: "Learn the basics of Amazon VPC.",
    about:
      "This lesson introduces Amazon Virtual Private Cloud (VPC) and its role in providing isolated networks in the cloud. It covers the key concepts of VPC, including virtual networks, subnets, and IP addressing. It also discusses the benefits of using VPC for network security and control. You should be able to understand what VPC is, its key features, and how it provides isolated networks in the cloud.",
    order: 1,
    moduleId: "module-007",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-038",
    slug: "vpcs-and-subnets",
    title: "VPCs and Subnets",
    description: "Explore VPCs and subnets in detail.",
    about:
      "This lesson explores VPCs and subnets in detail. It covers how to create and manage VPCs, how to create public and private subnets, and how to configure IP addressing within your VPC. It also discusses the importance of proper subnetting for network segmentation. You should be able to understand how VPCs and subnets work and how to configure them effectively.",
    order: 2,
    moduleId: "module-007",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-039",
    slug: "route-tables-and-internet-gateways",
    title: "Route Tables and Internet Gateways",
    description: "Learn about route tables and internet gateways.",
    about:
      "This lesson introduces route tables and internet gateways and their role in managing network traffic in a VPC. It covers how to create and configure route tables, how to set up internet gateways, and how to control traffic flow in and out of your VPC. It also discusses the different types of routes. You should be able to understand how route tables and internet gateways work and how to configure them to manage network traffic.",
    order: 3,
    moduleId: "module-007",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-040",
    slug: "network-access-control-lists",
    title: "Network Access Control Lists (NACLs)",
    description: "Explore NACLs and their role in network security.",
    about:
      "This lesson explores Network Access Control Lists (NACLs) and their role in providing network security. It covers how to create and configure NACLs, how to define inbound and outbound rules, and how NACLs differ from security groups. It also discusses best practices for using NACLs to protect your VPC. You should be able to understand what NACLs are, how they work, and how to use them to control network traffic.",
    order: 4,
    moduleId: "module-007",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-041",
    slug: "security-groups-for-ec2-instances",
    title: "Security Groups for EC2 Instances",
    description: "Learn about security groups for EC2 instances.",
    about:
      "This lesson focuses on security groups and how they are used to control inbound and outbound traffic to EC2 instances. It covers how to create and configure security groups, how to define rules for allowing and denying traffic, and how security groups differ from NACLs. It also discusses best practices for using security groups to protect your EC2 instances. You should be able to understand how security groups work and how to use them to control traffic to your EC2 instances.",
    order: 5,
    moduleId: "module-007",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-042",
    slug: "vpc-peering-and-endpoints",
    title: "VPC Peering and Endpoints",
    description: "Explore VPC peering and endpoints.",
    about:
      "This lesson introduces VPC peering and endpoints and how they enable communication between different VPCs and AWS services. It covers how to create and configure VPC peering connections, how to use VPC endpoints to access AWS services privately, and the benefits of using these features. You should be able to understand what VPC peering and endpoints are, how they work, and how they enable secure communication.",
    order: 6,
    moduleId: "module-007",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-043",
    slug: "introduction-to-aws-iam",
    title: "Introduction to AWS IAM",
    description: "Learn the fundamentals of AWS IAM.",
    about:
      "This lesson introduces AWS Identity and Access Management (IAM) and its role in controlling access to AWS resources. It covers the key concepts of IAM, including users, groups, roles, and policies. It also discusses the benefits of using IAM for managing access securely. You should be able to understand what IAM is, its key components, and how it helps control access to AWS resources.",
    order: 1,
    moduleId: "module-008",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-044",
    slug: "iam-users-and-groups",
    title: "IAM Users and Groups",
    description: "Explore IAM users and groups.",
    about:
      "This lesson explores IAM users and groups in detail. It covers how to create and manage IAM users, how to create and manage IAM groups, and how to assign users to groups. It also discusses the benefits of using groups to manage permissions. You should be able to understand how IAM users and groups work and how to use them to organize access permissions effectively.",
    order: 2,
    moduleId: "module-008",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-045",
    slug: "iam-policies",
    title: "IAM Policies",
    description: "Learn about IAM policies and their structure.",
    about:
      "This lesson focuses on IAM policies and how they are used to define permissions for AWS resources. It covers the structure of IAM policies, including actions, resources, and conditions. It also discusses how to create and attach IAM policies to users, groups, and roles. You should be able to understand IAM policies, their structure, and how to use them to control access to AWS resources.",
    order: 3,
    moduleId: "module-008",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-046",
    slug: "iam-roles",
    title: "IAM Roles",
    description: "Explore IAM roles and their use cases.",
    about:
      "This lesson explores IAM roles and how they are used to grant permissions to AWS services and applications. It covers how to create and configure IAM roles, how to assign permissions to roles, and how to use roles for cross-account access. It also discusses the benefits of using roles for granting temporary access. You should be able to understand IAM roles, their use cases, and how to use them to grant temporary access to AWS services.",
    order: 4,
    moduleId: "module-008",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-047",
    slug: "security-groups-for-ec2",
    title: "Security Groups for EC2",
    description: "Learn about security groups for EC2 instances.",
    about:
      "This lesson focuses on security groups and how they are used to control inbound and outbound traffic to EC2 instances. It covers how to create and configure security groups, how to define rules for allowing and denying traffic, and how security groups differ from NACLs. It also discusses best practices for using security groups to protect your EC2 instances. You should be able to understand how security groups work and how to use them to control traffic to your EC2 instances.",
    order: 5,
    moduleId: "module-008",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-048",
    slug: "security-best-practices",
    title: "AWS Security Best Practices",
    description: "Explore best practices for security in AWS.",
    about:
      "This lesson provides an overview of best practices for security in AWS. It covers topics such as the principle of least privilege, password policies, multi-factor authentication, encryption, and compliance. It also discusses the importance of continuous monitoring and auditing for maintaining a secure AWS environment. You should be able to understand and apply best practices for security in AWS to protect your resources and data.",
    order: 6,
    moduleId: "module-008",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-049",
    slug: "introduction-to-serverless-computing",
    title: "Introduction to Serverless Computing",
    description: "Learn the basics of serverless computing.",
    about:
      "This lesson introduces the concept of serverless computing and its benefits. It covers the definition of serverless, how it differs from traditional computing, and its key characteristics (no server management, automatic scaling, pay-per-use). It also discusses the advantages of serverless architecture, such as reduced operational overhead and increased agility. You should be able to understand what serverless computing is, its key features, and its benefits.",
    order: 1,
    moduleId: "module-009",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-050",
    slug: "aws-lambda-fundamentals",
    title: "AWS Lambda Fundamentals",
    description: "Explore AWS Lambda and its core components.",
    about:
      "This lesson explores AWS Lambda, a serverless compute service that allows you to run code without provisioning or managing servers. It covers the key concepts of Lambda, including functions, triggers, and event sources. It also discusses the benefits of using Lambda for serverless applications. You should be able to understand what AWS Lambda is, its key components, and how it enables serverless computing.",
    order: 2,
    moduleId: "module-009",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-051",
    slug: "lambda-functions-and-triggers",
    title: "Lambda Functions and Triggers",
    description:
      "Learn how to create and configure Lambda functions and triggers.",
    about:
      "This lesson focuses on how to create and configure Lambda functions, how to define event triggers, and how to integrate Lambda with other AWS services. It also discusses the different types of event sources that can trigger Lambda functions. You should be able to create Lambda functions, configure event triggers, and integrate Lambda with other AWS services.",
    order: 3,
    moduleId: "module-009",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-052",
    slug: "introduction-to-api-gateway",
    title: "Introduction to Amazon API Gateway",
    description: "Learn the basics of Amazon API Gateway.",
    about:
      "This lesson introduces Amazon API Gateway, a fully managed service that allows you to create, publish, maintain, and secure APIs. It covers the key concepts of API Gateway, including APIs, resources, methods, and integrations. It also discusses the benefits of using API Gateway for building and managing APIs. You should be able to understand what API Gateway is, its key features, and how it enables API management.",
    order: 4,
    moduleId: "module-009",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-053",
    slug: "api-gateway-integrations",
    title: "API Gateway Integrations",
    description: "Explore API Gateway integrations with Lambda.",
    about:
      "This lesson explores how to integrate API Gateway with AWS Lambda functions to create serverless APIs. It covers how to configure API Gateway to invoke Lambda functions, how to pass data between API Gateway and Lambda, and how to secure your APIs. You should be able to integrate API Gateway with Lambda functions and build serverless APIs.",
    order: 5,
    moduleId: "module-009",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-054",
    slug: "serverless-application-patterns",
    title: "Serverless Application Patterns",
    description: "Learn about common serverless application patterns.",
    about:
      "This lesson introduces common serverless application patterns, such as event-driven architectures, microservices, and web applications. It covers how to design and build serverless applications using Lambda, API Gateway, and other AWS services. It also discusses best practices for building scalable and resilient serverless applications. You should be able to understand common serverless application patterns and how to apply them in your projects.",
    order: 6,
    moduleId: "module-009",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-055",
    slug: "introduction-to-aws-cloudwatch",
    title: "Introduction to AWS CloudWatch",
    description: "Learn the basics of AWS CloudWatch.",
    about:
      "This lesson introduces Amazon CloudWatch and its role in monitoring AWS resources and applications. It covers the key concepts of CloudWatch, including metrics, alarms, and dashboards. It also discusses the benefits of using CloudWatch for monitoring performance and health. You should be able to understand what CloudWatch is, its key features, and how it helps monitor your AWS environment.",
    order: 1,
    moduleId: "module-010",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-056",
    slug: "cloudwatch-metrics-and-alarms",
    title: "CloudWatch Metrics and Alarms",
    description: "Explore CloudWatch metrics and alarms.",
    about:
      "This lesson explores CloudWatch metrics and alarms in detail. It covers how to collect and view metrics, how to create CloudWatch alarms based on metrics, and how to configure notifications for alarms. It also discusses the different types of metrics available in CloudWatch. You should be able to understand how CloudWatch metrics and alarms work and how to use them to monitor your resources.",
    order: 2,
    moduleId: "module-010",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-057",
    slug: "cloudwatch-dashboards",
    title: "CloudWatch Dashboards",
    description: "Learn how to create CloudWatch dashboards.",
    about:
      "This lesson focuses on how to create and use CloudWatch dashboards to visualize your monitoring data. It covers how to add widgets to dashboards, how to customize the layout, and how to share dashboards with other users. It also discusses best practices for creating effective monitoring dashboards. You should be able to create and use CloudWatch dashboards to monitor your AWS environment.",
    order: 3,
    moduleId: "module-010",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-058",
    slug: "introduction-to-aws-cloudtrail",
    title: "Introduction to AWS CloudTrail",
    description: "Learn the basics of AWS CloudTrail.",
    about:
      "This lesson introduces AWS CloudTrail and its role in logging API calls and user activity in your AWS account. It covers the key concepts of CloudTrail, including trails, event history, and log files. It also discusses the benefits of using CloudTrail for auditing and compliance. You should be able to understand what CloudTrail is, its key features, and how it helps track user activity in your AWS account.",
    order: 4,
    moduleId: "module-010",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-059",
    slug: "cloudtrail-logs-and-event-history",
    title: "CloudTrail Logs and Event History",
    description: "Explore CloudTrail logs and event history.",
    about:
      "This lesson explores CloudTrail logs and event history in detail. It covers how to configure CloudTrail to log events, how to access and analyze CloudTrail logs, and how to use the event history for auditing and troubleshooting. It also discusses the different types of events logged by CloudTrail. You should be able to understand how CloudTrail logs work and how to use them to track API calls and user activity.",
    order: 5,
    moduleId: "module-010",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-060",
    slug: "other-monitoring-and-logging-tools",
    title: "Other Monitoring and Logging Tools",
    description: "Learn about other monitoring and logging tools in AWS.",
    about:
      "This lesson provides an overview of other monitoring and logging tools in AWS, such as AWS X-Ray, Amazon CloudWatch Logs, and AWS Config. It covers the use cases for each service and how they differ from CloudWatch and CloudTrail. It also discusses when to use each service based on your specific needs. You should be able to understand the different monitoring and logging tools in AWS and when to use each one.",
    order: 6,
    moduleId: "module-010",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-061",
    slug: "introduction-to-aws-cost-management",
    title: "Introduction to AWS Cost Management",
    description: "Learn the basics of AWS cost management.",
    about:
      "This lesson introduces the core concepts of AWS cost management. It covers the importance of understanding your AWS spending, the different pricing models for AWS services, and the tools available for monitoring and optimizing costs. It also discusses the benefits of cost management for controlling expenses and maximizing ROI. You should be able to understand the fundamental concepts of AWS cost management and its importance.",
    order: 1,
    moduleId: "module-011",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-062",
    slug: "aws-cost-explorer",
    title: "AWS Cost Explorer",
    description: "Explore AWS Cost Explorer and its features.",
    about:
      "This lesson explores AWS Cost Explorer and its features for analyzing your AWS spending. It covers how to access and navigate Cost Explorer, how to view cost and usage data, and how to use filters and groupings to analyze your costs. It also discusses how to use Cost Explorer to identify cost optimization opportunities. You should be able to use AWS Cost Explorer to analyze your AWS spending effectively.",
    order: 2,
    moduleId: "module-011",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-063",
    slug: "aws-budgets",
    title: "AWS Budgets",
    description: "Learn how to set up AWS Budgets.",
    about:
      "This lesson focuses on how to set up AWS Budgets to track your spending and receive notifications when your usage exceeds certain thresholds. It covers how to create and configure budgets, how to set up budget alerts, and how to use budgets to manage your AWS costs proactively. You should be able to set up AWS Budgets and understand how to use them to control your spending.",
    order: 3,
    moduleId: "module-011",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-064",
    slug: "aws-trusted-advisor",
    title: "AWS Trusted Advisor",
    description: "Explore AWS Trusted Advisor and its recommendations.",
    about:
      "This lesson introduces AWS Trusted Advisor and its role in providing recommendations for optimizing your AWS environment, including cost optimization, security, fault tolerance, and performance. It covers how to access and review Trusted Advisor recommendations, how to implement the recommended actions, and how to use Trusted Advisor to improve your AWS setup. You should be able to understand what AWS Trusted Advisor is and how to use it to optimize your AWS environment.",
    order: 4,
    moduleId: "module-011",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-065",
    slug: "cost-optimization-strategies",
    title: "Cost Optimization Strategies",
    description: "Learn about cost optimization strategies in AWS.",
    about:
      "This lesson focuses on various cost optimization strategies in AWS, including rightsizing instances, using reserved instances, leveraging spot instances, and implementing storage lifecycle policies. It covers how to identify cost optimization opportunities and how to implement these strategies to reduce your AWS spending. You should be able to understand and apply various cost optimization strategies to reduce your AWS costs.",
    order: 5,
    moduleId: "module-011",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-066",
    slug: "tagging-and-cost-allocation",
    title: "Tagging and Cost Allocation",
    description: "Learn how to use tagging for cost allocation.",
    about:
      "This lesson explores the importance of tagging and cost allocation in AWS. It covers how to use tags to organize and categorize your AWS resources, how to use cost allocation tags to track your spending by different categories, and how to use cost allocation reports to understand your costs. You should be able to understand how tagging and cost allocation work and how to use them to manage your AWS spending effectively.",
    order: 6,
    moduleId: "module-011",
    type: LessonType.LESSON,
  },

  {
    id: "lesson-067",
    slug: "introduction-to-devops",
    title: "Introduction to DevOps",
    description: "Learn the fundamentals of DevOps.",
    about:
      "This lesson introduces the core concepts of DevOps and its benefits. It covers the definition of DevOps, its key principles (collaboration, automation, continuous integration, continuous delivery), and its impact on software development lifecycles. It also discusses the benefits of DevOps, such as faster delivery, improved quality, and increased agility. You should be able to understand what DevOps is, its key principles, and its benefits for software development.",
    order: 1,
    moduleId: "module-012",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-068",
    slug: "introduction-to-ci-cd",
    title: "Introduction to CI/CD",
    description: "Explore Continuous Integration and Continuous Delivery.",
    about:
      "This lesson explores the concepts of Continuous Integration (CI) and Continuous Delivery (CD) and their role in DevOps. It covers the benefits of CI/CD, such as faster feedback loops, reduced integration issues, and automated deployments. It also discusses the key steps in a CI/CD pipeline. You should be able to understand what CI/CD is, its key principles, and its benefits for software development.",
    order: 2,
    moduleId: "module-012",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-069",
    slug: "aws-codepipeline",
    title: "AWS CodePipeline",
    description: "Learn about AWS CodePipeline for CI/CD.",
    about:
      "This lesson introduces AWS CodePipeline, a fully managed CI/CD service. It covers the key concepts of CodePipeline, including pipelines, stages, and actions. It also discusses how to use CodePipeline to automate your software release process. You should be able to understand what CodePipeline is, its key features, and how it helps automate software deployments.",
    order: 3,
    moduleId: "module-012",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-070",
    slug: "aws-codebuild",
    title: "AWS CodeBuild",
    description: "Explore AWS CodeBuild for building code.",
    about:
      "This lesson explores AWS CodeBuild, a fully managed build service that compiles source code, runs tests, and produces software packages. It covers how to configure CodeBuild projects, how to define build specifications, and how to integrate CodeBuild with other AWS services. You should be able to understand what CodeBuild is, its key features, and how it helps automate the build process.",
    order: 4,
    moduleId: "module-012",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-071",
    slug: "infrastructure-as-code",
    title: "Infrastructure as Code (IaC)",
    description: "Learn about Infrastructure as Code (IaC) and its benefits.",
    about:
      "This lesson introduces the concept of Infrastructure as Code (IaC) and its role in automating infrastructure management. It covers the benefits of using IaC, such as increased consistency, reduced errors, and improved version control. It also discusses popular IaC tools, such as AWS CloudFormation and Terraform. You should be able to understand what IaC is, its key benefits, and how it helps automate infrastructure management.",
    order: 5,
    moduleId: "module-012",
    type: LessonType.LESSON,
  },
  {
    id: "lesson-072",
    slug: "aws-cloudformation",
    title: "AWS CloudFormation",
    description: "Explore AWS CloudFormation for IaC.",
    about:
      "This lesson explores AWS CloudFormation, a service that allows you to model and provision AWS resources using code. It covers how to create and manage CloudFormation templates, how to use CloudFormation to automate infrastructure deployments, and how to integrate CloudFormation with other AWS services. You should be able to understand what CloudFormation is, its key features, and how it helps automate infrastructure deployments.",
    order: 6,
    moduleId: "module-012",
    type: LessonType.LESSON,
  },
];

export default lessonsSeedData;
