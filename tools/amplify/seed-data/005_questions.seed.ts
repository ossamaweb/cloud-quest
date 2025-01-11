import {
  CreateQuestionInput,
  QuestionType,
  QuestionDifficulty,
} from "@/lib/graphql/API";

const questionsSeedData: Array<CreateQuestionInput> = [
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
    tags: ["serverless", "compute"],
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
    tags: ["data processing", "serverless", "analytics"],
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
    tags: ["aws services", "fundamentals"],
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
    tags: ["storage", "s3"],
  },
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
    tags: ["storage", "fundamentals"],
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
    tags: ["storage", "ebs"],
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
    tags: ["aws services", "categories"],
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
    tags: ["ec2", "compute"],
  },
];

export default questionsSeedData;
