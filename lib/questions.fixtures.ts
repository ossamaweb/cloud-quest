import { QUESTION_TYPE } from "./enums";
import { Question } from "./interfaces";

export const questionFixtures: Question[] = [
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

  // Scenario Based Question
  {
    id: "sb-001",
    type: QUESTION_TYPE.SCENARIO_BASED,
    question: "Design a Disaster Recovery Solution",
    scenario: `A financial company requires a disaster recovery solution with:
      - RPO of 15 minutes
      - RTO of 1 hour
      - Data must be encrypted at rest
      - Must comply with financial regulations
      
      Design an appropriate AWS solution.`,
    correctAnswer: "A proper solution would include...",
    rubric: [
      {
        id: "r1",
        criterion: "RPO/RTO Requirements",
        points: 10,
        description: "Meeting the specified RPO and RTO requirements",
        performanceLevels: {
          excellent: {
            points: 10,
            description: "Fully meets RPO/RTO with pilot light or hot standby",
          },
          good: {
            points: 7,
            description: "Mostly meets requirements with some gaps",
          },
          fair: {
            points: 5,
            description: "Partially meets requirements",
          },
          poor: {
            points: 2,
            description: "Does not meet RPO/RTO requirements",
          },
        },
      },
      // Additional rubric criteria would follow...
    ],
  },

  // Short Answer Question
  {
    id: "sa-001",
    type: QUESTION_TYPE.SHORT_ANSWER,
    question: "What does the acronym EBS stand for in AWS?",
    correctAnswer: "Elastic Block Store",
    acceptableAnswers: ["Elastic Block Storage", "Amazon Elastic Block Store"],
    caseSensitive: false,
    points: 5,
  },

  // Fill in the Blank Question
  {
    id: "fb-001",
    type: QUESTION_TYPE.FILL_IN_THE_BLANK,
    question:
      "AWS _____ is used for storing and retrieving objects, while AWS _____ is used for block storage.",
    questionText:
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

  // Image Identification Question
  {
    id: "img-001",
    type: QUESTION_TYPE.IMAGE_IDENTIFICATION,
    question: "Identify the AWS service represented by this architecture icon:",
    image: {
      url: "/images/aws-services/lambda-icon.png",
      altText: "AWS service architecture icon",
    },
    options: [
      { id: "img1", text: "AWS Lambda" },
      { id: "img2", text: "AWS EC2" },
      { id: "img3", text: "AWS ECS" },
      { id: "img4", text: "AWS Batch" },
    ],
    correctOptionId: "img1",
    points: 10,
  },
];
