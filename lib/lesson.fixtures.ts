import { QuestionDifficulty, QuestionType } from "./graphql/API";
import { GetLesson } from "./types";
import modulesSeedData from "../tools/amplify/seed-data/003_modules.seed";

const moduleFixture = modulesSeedData[0];

export const lessonFixture: GetLesson = {
  id: "lesson-001",
  slug: "lesson-001",
  title: "AWS Test",
  order: 1,
  moduleId: moduleFixture.id!,
  content: "",
  type: "LESSON",
  questions: [
    // Fill in the Blank Question
    {
      id: "fb-001",
      order: 4,
      question:
        "AWS {1} is used for storing and retrieving objects, while AWS {2} is used for block storage.",
      questionData: JSON.stringify({
        blanks: [
          {
            id: "blank1",
            correctAnswer: "S3",
            acceptableAnswers: ["Simple Storage Service", "S3"],
          },
          {
            id: "blank2",
            correctAnswer: "EBS",
            acceptableAnswers: ["Elastic Block Store", "EBS"],
          },
        ],
        explanation: "",
      }),
      points: 10,
      lessonId: "lesson-001",
      type: QuestionType.FILL_IN_THE_BLANK,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // Multiple Choice Question
    {
      id: "mc-001",
      order: 1,
      question: "Which AWS service would you use for serverless computing?",
      questionData: JSON.stringify({
        options: [
          { id: "mc1-opt1", text: "AWS Lambda" },
          { id: "mc1-opt2", text: "Amazon EC2" },
          { id: "mc1-opt3", text: "Amazon RDS" },
          { id: "mc1-opt4", text: "Amazon S3" },
        ],
        correctOptionId: "mc1-opt1",
        explanation:
          "AWS Lambda is a serverless computing service that runs code in response to events.",
      }),
      points: 5,
      lessonId: "lesson-001",
      type: QuestionType.MULTIPLE_CHOICE,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // Drag and Drop Question
    {
      id: "dd-001",
      order: 6,
      question: "Drag each AWS service to its corresponding category.",
      questionData: JSON.stringify({
        categories: [
          { id: "cat1", text: "Compute" },
          { id: "cat2", text: "Storage" },
          { id: "cat3", text: "Database" },
          { id: "cat4", text: "Networking" },
        ],
        items: [
          { id: "item1", text: "EC2" },
          { id: "item2", text: "S3" },
          { id: "item3", text: "RDS" },
          { id: "item4", text: "CloudFront" },
        ],
        correctPairings: {
          item1: "cat1",
          item2: "cat2",
          item3: "cat3",
          item4: "cat4",
        },
      }),
      points: 20,
      lessonId: "lesson-001",
      type: QuestionType.DRAG_AND_DROP,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },

    // Matching Question
    {
      id: "match-001",
      order: 2,
      question: "Match each AWS service with its primary use case:",
      questionData: JSON.stringify({
        terms: [
          { id: "term1", text: "Amazon EC2" },
          { id: "term2", text: "Amazon S3" },
          { id: "term3", text: "Amazon RDS" },
          { id: "term4", text: "Amazon Route 53" },
        ],
        definitions: [
          { id: "def1", text: "Virtual servers in the cloud" },
          { id: "def2", text: "Object storage service" },
          { id: "def3", text: "Managed relational database service" },
          { id: "def4", text: "DNS web service" },
        ],
        correctPairings: {
          term1: "def1",
          term2: "def2",
          term3: "def3",
          term4: "def4",
        },
      }),
      points: 20,
      lessonId: "lesson-001",
      type: QuestionType.MATCHING,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // Image Identification Question
    {
      id: "use-001",
      order: 1,
      question:
        "Which AWS service would you use for serverless real-time data processing?",
      questionData: JSON.stringify({
        image: {
          url: "/imgs/weird.png",
          altText: "Data processing workflow diagram",
        },
        options: [
          { id: "opt1", text: "Amazon Kinesis" },
          { id: "opt2", text: "Amazon RDS" },
          { id: "opt3", text: "Amazon DynamoDB" },
          { id: "opt4", text: "Amazon Redshift" },
        ],
        correctOptionId: "opt1",
        explanation: "",
      }),
      points: 5,
      lessonId: "lesson-001",
      type: QuestionType.IMAGE_IDENTIFICATION,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },

    // True False Question
    {
      id: "tf-001",
      order: 3,
      question: "Amazon S3 can be used to host static websites.",
      questionData: JSON.stringify({
        correctAnswer: true,
        explanation:
          "S3 provides static website hosting capabilities with custom domain support.",
      }),
      points: 5,
      lessonId: "lesson-001",
      type: QuestionType.TRUE_FALSE,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },

    // Short Answer Question
    {
      id: "sa-001",
      order: 5,
      question: "What does the acronym EBS stand for in AWS?",
      questionData: JSON.stringify({
        correctAnswer: "Elastic Block Store",
        acceptableAnswers: [
          "Elastic Block Storage",
          "Amazon Elastic Block Store",
        ],
        explanation: "",
      }),
      points: 10,
      lessonId: "lesson-001",
      type: QuestionType.SHORT_ANSWER,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },

    // Ordering Question
    {
      id: "ord-001",
      order: 7,
      question: "Order the following steps to launch an EC2 instance:",
      questionData: JSON.stringify({
        items: [
          { id: "step1", text: "Choose an Amazon Machine Image (AMI)" },
          { id: "step2", text: "Choose an Instance Type" },
          { id: "step3", text: "Configure Security Groups" },
          { id: "step4", text: "Launch the Instance" },
        ],
        correctOrder: ["step1", "step2", "step3", "step4"],
      }),
      points: 20,
      lessonId: "lesson-001",
      type: QuestionType.ORDERING,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
  ],
};

export const lesson02Fixture: GetLesson = {
  id: "lesson-002",
  slug: "aws-global-infrastructure",
  title: "AWS Global Infrastructure",
  content:
    "Learn about AWS Regions, Availability Zones, and Edge Locations that ensure low latency and high availability.",
  order: 2,
  type: "LESSON",
  moduleId: "module-001",
  questions: [
    // Multiple Choice Question
    {
      id: "mc-002",
      order: 1,
      question: "What are AWS Regions?",
      questionData: JSON.stringify({
        options: [
          { id: "mc2-opt1", text: "Physical data centers around the world" },
          { id: "mc2-opt2", text: "Logical groupings of AWS resources" },
          { id: "mc2-opt3", text: "Virtual networks within AWS" },
          { id: "mc2-opt4", text: "A collection of AWS user accounts" },
        ],
        correctOptionId: "mc2-opt1",
        explanation:
          "AWS Regions are physical locations around the world where AWS has data centers.",
      }),
      points: 5,
      lessonId: "lesson-002",
      type: QuestionType.MULTIPLE_CHOICE,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // Matching Question
    {
      id: "match-002",
      order: 2,
      question: "Match each AWS infrastructure component with its description:",
      questionData: JSON.stringify({
        terms: [
          { id: "term1", text: "Region" },
          { id: "term2", text: "Availability Zone" },
          { id: "term3", text: "Edge Location" },
        ],
        definitions: [
          {
            id: "def1",
            text: "A distinct location within a region that is insulated from failures in other zones.",
          },
          {
            id: "def2",
            text: "A geographical area containing two or more availability zones.",
          },
          {
            id: "def3",
            text: "A point of presence that provides content to users with low latency",
          },
        ],
        correctPairings: {
          term1: "def2",
          term2: "def1",
          term3: "def3",
        },
      }),
      points: 20,
      lessonId: "lesson-002",
      type: QuestionType.MATCHING,
      difficulty: QuestionDifficulty.MEDIUM,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // True False Question
    {
      id: "tf-002",
      order: 3,
      question:
        "Availability Zones are typically located in different countries.",
      questionData: JSON.stringify({
        correctAnswer: false,
        explanation:
          "Availability Zones are in the same region and are designed to be isolated from failures in other zones within the same country.",
      }),
      points: 5,
      lessonId: "lesson-002",
      type: QuestionType.TRUE_FALSE,
      difficulty: QuestionDifficulty.EASY,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // Fill in the Blank Question
    {
      id: "fb-002",
      order: 4,
      question:
        "AWS uses {1} to provide low latency content delivery to end users, these are also called point of {2}. ",
      questionData: JSON.stringify({
        blanks: [
          {
            id: "blank1",
            correctAnswer: "Edge Locations",
            acceptableAnswers: ["Edge Locations"],
          },
          {
            id: "blank2",
            correctAnswer: "presence",
            acceptableAnswers: ["presence"],
          },
        ],
        explanation:
          "Edge locations are used to cache content and deliver it closer to the user for low-latency access.",
      }),
      points: 10,
      lessonId: "lesson-002",
      type: QuestionType.FILL_IN_THE_BLANK,
      difficulty: QuestionDifficulty.MEDIUM,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // Short Answer Question
    {
      id: "sa-002",
      order: 5,
      question: "What does the acronym AZ stand for in AWS?",
      questionData: JSON.stringify({
        correctAnswer: "Availability Zone",
        acceptableAnswers: ["Availability Zone", "Availability Zones"],
        explanation:
          "AZ stands for Availability Zone, which is a distinct location within an AWS Region.",
      }),
      points: 10,
      lessonId: "lesson-002",
      type: QuestionType.SHORT_ANSWER,
      difficulty: QuestionDifficulty.MEDIUM,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // Drag and Drop Question
    {
      id: "dd-002",
      order: 6,
      question:
        "Drag the options into the correct order based on their geographic scope. (Smallest to Largest)",
      questionData: JSON.stringify({
        items: [
          { id: "item1", text: "Availability Zone" },
          { id: "item2", text: "Region" },
          { id: "item3", text: "Edge Location" },
        ],
        correctOrder: ["item3", "item1", "item2"],
      }),
      points: 20,
      lessonId: "lesson-002",
      type: QuestionType.ORDERING,
      difficulty: QuestionDifficulty.MEDIUM,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },

    // Ordering Question
    {
      id: "ord-002",
      order: 7,
      question:
        "Order the following items based on the level of availability they provide (Highest to Lowest)",
      questionData: JSON.stringify({
        items: [
          { id: "step1", text: "Multi-AZ Deployment" },
          { id: "step2", text: "Single-AZ Deployment" },
          { id: "step3", text: "On-Premises Deployment" },
        ],
        correctOrder: ["step1", "step2", "step3"],
      }),
      points: 20,
      lessonId: "lesson-002",
      type: QuestionType.ORDERING,
      difficulty: QuestionDifficulty.HARD,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    // Image Identification Question
    {
      id: "use-002",
      order: 8,
      question: "Identify the AWS component displayed in the image.",
      questionData: JSON.stringify({
        image: {
          url: "/imgs/aws-region.png",
          altText: "AWS Region Diagram",
        },
        options: [
          { id: "opt1", text: "AWS Region" },
          { id: "opt2", text: "Availability Zone" },
          { id: "opt3", text: "Edge Location" },
          { id: "opt4", text: "VPC" },
        ],
        correctOptionId: "opt1",
        explanation:
          "The image shows a diagram of an AWS Region with multiple Availability Zones.",
      }),
      points: 5,
      lessonId: "lesson-002",
      type: QuestionType.IMAGE_IDENTIFICATION,
      difficulty: QuestionDifficulty.MEDIUM,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "mc-003",
      order: 9,
      question:
        "Which of the following is NOT a benefit of using multiple Availability Zones?",
      questionData: JSON.stringify({
        options: [
          { id: "mc3-opt1", text: "Increased fault tolerance" },
          { id: "mc3-opt2", text: "Improved application performance" },
          { id: "mc3-opt3", text: "Reduced complexity of management" },
          { id: "mc3-opt4", text: "Enhanced disaster recovery" },
        ],
        correctOptionId: "mc3-opt3",
        explanation:
          "Using multiple availability zones increases management complexity, but this enables improved fault tolerance and disaster recovery.",
      }),
      points: 5,
      lessonId: "lesson-002",
      type: QuestionType.MULTIPLE_CHOICE,
      difficulty: QuestionDifficulty.HARD,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "tf-003",
      order: 10,
      question: "Edge locations only provide caching services.",
      questionData: JSON.stringify({
        correctAnswer: false,
        explanation:
          "Edge locations provide a variety of services, including caching, but also Lambda@Edge for custom logic, and other services.",
      }),
      points: 5,
      lessonId: "lesson-002",
      type: QuestionType.TRUE_FALSE,
      difficulty: QuestionDifficulty.MEDIUM,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "sa-003",
      order: 11,
      question:
        "Explain in a sentence what is the core purpose of an AWS region",
      questionData: JSON.stringify({
        correctAnswer:
          "To provide a geographical region for deploying and hosting resources",
        acceptableAnswers: [
          "A region allows you to deploy resources in a specific geographical location",
          "It enables hosting resources in a specific geography",
        ],
        explanation:
          "A region is a physical location in the world where AWS has its data centers, it is the core location for hosting resources.",
      }),
      points: 10,
      lessonId: "lesson-002",
      type: QuestionType.SHORT_ANSWER,
      difficulty: QuestionDifficulty.HARD,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "fb-003",
      order: 12,
      question:
        "AWS regions have multiple {1} to provide redundancy and fault tolerance.",
      questionData: JSON.stringify({
        blanks: [
          {
            id: "blank1",
            correctAnswer: "Availability Zones",
            acceptableAnswers: ["Availability Zones", "AZs"],
          },
        ],
        explanation:
          "AWS regions contain multiple Availability Zones to provide redundancy and fault tolerance, with independent power, cooling, and physical security.",
      }),
      points: 10,
      lessonId: "lesson-002",
      type: QuestionType.FILL_IN_THE_BLANK,
      difficulty: QuestionDifficulty.MEDIUM,
      version: 1,
      tags: null,
      owner: null,
      createdAt: "",
      updatedAt: "",
    },
  ],
};
export default lesson02Fixture;
