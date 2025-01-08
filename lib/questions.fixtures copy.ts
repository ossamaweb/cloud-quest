import { QUESTION_TYPE } from "./enums";
import { Question } from "./interfaces";

export const questionFixtures: Question[] = [
  // Image Identification Question
  {
    id: "use-001",
    type: QUESTION_TYPE.IMAGE_IDENTIFICATION,
    question:
      "Which AWS service would you use for serverless real-time data processing?",
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
    points: 10,
  },

  // Matching Question
  {
    id: "match-001",
    type: QUESTION_TYPE.MATCHING,
    question: "Match each AWS service with its primary use case:",
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
    points: 20,
  },

  // Drag and Drop Question
  {
    id: "dd-001",
    type: QUESTION_TYPE.DRAG_AND_DROP,
    question: "Drag each AWS service to its corresponding category.",
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
    points: 20,
  },

  // Ordering Question
  {
    id: "ord-001",
    type: QUESTION_TYPE.ORDERING,
    question: "Order the following steps to launch an EC2 instance:",
    items: [
      { id: "step1", text: "Choose an Amazon Machine Image (AMI)" },
      { id: "step2", text: "Choose an Instance Type" },
      { id: "step3", text: "Configure Security Groups" },
      { id: "step4", text: "Launch the Instance" },
    ],
    correctOrder: ["step1", "step2", "step3", "step4"],
    points: 15,
  },

  // Fill in the Blank Question
  {
    id: "fb-001",
    type: QUESTION_TYPE.FILL_IN_THE_BLANK,
    question:
      "AWS {1} is used for storing and retrieving objects, while AWS {2} is used for block storage.",
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
    points: 10,
  },

  // Short Answer Question
  {
    id: "sa-001",
    type: QUESTION_TYPE.SHORT_ANSWER,
    question: "What does the acronym EBS stand for in AWS?",
    correctAnswer: "Elastic Block Store",
    acceptableAnswers: ["Elastic Block Storage", "Amazon Elastic Block Store"],
    points: 5,
  },

  // Multiple Choice Question
  {
    id: "mc-001",
    type: QUESTION_TYPE.MULTIPLE_CHOICE,
    question: "Which AWS service would you use for serverless computing?",
    options: [
      { id: "mc1-opt1", text: "AWS Lambda" },
      { id: "mc1-opt2", text: "Amazon EC2" },
      { id: "mc1-opt3", text: "Amazon RDS" },
      { id: "mc1-opt4", text: "Amazon S3" },
    ],
    correctOptionId: "mc1-opt1",
    explanation:
      "AWS Lambda is a serverless computing service that runs code in response to events.",
    points: 10,
  },

  // True False Question
  {
    id: "tf-001",
    type: QUESTION_TYPE.TRUE_FALSE,
    question: "Amazon S3 can be used to host static websites.",
    correctAnswer: true,
    explanation:
      "S3 provides static website hosting capabilities with custom domain support.",
    points: 5,
  },
];
