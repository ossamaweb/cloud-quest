import { QUESTION_TYPE } from "./enums";
import { BaseQuestion, ID } from "./interfaces";

// A rubric in a ScenarioBasedQuestion is a scoring guide that lists specific criteria for evaluating the student's answer to a scenario-based question. Let me expand the ScenarioBasedQuestion interface with a more detailed rubric structure:
interface RubricCriterion {
  id: ID;
  criterion: string;
  points: number;
  description: string;
  performanceLevels: {
    excellent: {
      points: number;
      description: string;
    };
    good: {
      points: number;
      description: string;
    };
    fair: {
      points: number;
      description: string;
    };
    poor: {
      points: number;
      description: string;
    };
  };
}

interface ScenarioBasedQuestion extends BaseQuestion {
  type: QUESTION_TYPE.SCENARIO_BASED;
  scenario: string;
  correctAnswer: string;
  rubric: RubricCriterion[];
  totalPoints: number;
}

// Example usage:
const scenarioQuestion: ScenarioBasedQuestion = {
  id: "scenario1",
  type: QUESTION_TYPE.SCENARIO_BASED,
  question: "Design a High-Availability Architecture for an E-commerce Website",
  scenario: `A retail company wants to migrate their e-commerce platform to AWS. 
    They require:
    - 99.99% availability
    - Ability to handle sudden traffic spikes
    - Secure payment processing
    - Global content delivery
    
    Design and explain an AWS architecture that meets these requirements.`,
  correctAnswer: "A sample solution would include...", // Sample answer for reference
  totalPoints: 20,
  rubric: [
    {
      id: "r1",
      criterion: "High Availability Design",
      points: 5,
      description: "Implementation of redundancy and fault tolerance",
      performanceLevels: {
        excellent: {
          points: 5,
          description:
            "Properly implements multi-AZ deployment with auto-scaling groups, load balancers, and considers disaster recovery",
        },
        good: {
          points: 4,
          description:
            "Implements multi-AZ deployment with some redundancy measures",
        },
        fair: {
          points: 3,
          description: "Basic redundancy implementation with some gaps",
        },
        poor: {
          points: 1,
          description: "Missing critical high-availability components",
        },
      },
    },
    {
      id: "r2",
      criterion: "Scalability Solution",
      points: 5,
      description: "Handling of traffic spikes and load management",
      performanceLevels: {
        excellent: {
          points: 5,
          description:
            "Comprehensive auto-scaling solution with proper metrics and triggers",
        },
        good: {
          points: 4,
          description:
            "Basic auto-scaling implementation with standard metrics",
        },
        fair: {
          points: 3,
          description: "Manual scaling or incomplete auto-scaling solution",
        },
        poor: {
          points: 1,
          description: "No clear scaling strategy",
        },
      },
    },
    {
      id: "r3",
      criterion: "Security Implementation",
      points: 5,
      description:
        "Security measures for payment processing and data protection",
      performanceLevels: {
        excellent: {
          points: 5,
          description:
            "Comprehensive security with encryption, WAF, security groups, and PCI-DSS considerations",
        },
        good: {
          points: 4,
          description: "Basic security measures with some advanced features",
        },
        fair: {
          points: 3,
          description: "Basic security implementation with gaps",
        },
        poor: {
          points: 1,
          description: "Insufficient security measures",
        },
      },
    },
    {
      id: "r4",
      criterion: "Global Content Delivery",
      points: 5,
      description: "Implementation of global content delivery solution",
      performanceLevels: {
        excellent: {
          points: 5,
          description:
            "CloudFront implementation with proper origin configuration and edge optimization",
        },
        good: {
          points: 4,
          description: "Basic CloudFront implementation",
        },
        fair: {
          points: 3,
          description: "Partial content delivery solution",
        },
        poor: {
          points: 1,
          description: "No content delivery solution",
        },
      },
    },
  ],
};

// Helper function to grade a scenario-based answer
function gradeScenarioAnswer(
  question: ScenarioBasedQuestion,
  evaluations: Array<{
    criterionId: ID;
    performanceLevel: keyof RubricCriterion["performanceLevels"];
  }>
): number {
  return evaluations.reduce((total, evaluation) => {
    const criterion = question.rubric.find(
      (r) => r.id === evaluation.criterionId
    );
    if (!criterion) return total;
    return (
      total + criterion.performanceLevels[evaluation.performanceLevel].points
    );
  }, 0);
}

// Example usage of grading
const score = gradeScenarioAnswer(scenarioQuestion, [
  { criterionId: "r1", performanceLevel: "excellent" },
  { criterionId: "r2", performanceLevel: "good" },
  { criterionId: "r3", performanceLevel: "excellent" },
  { criterionId: "r4", performanceLevel: "good" },
]);

/*

The rubric structure provides:

  Clear Evaluation Criteria : Each aspect of the answer has specific criteria

  Performance Levels : Different levels of achievement (excellent, good, fair, poor)

  Point Distribution : Clear point allocation for each criterion and performance level

  Detailed Descriptions : Clear descriptions of what constitutes each performance level

  Objective Grading : Makes grading more consistent and objective

  Feedback Support : Can be used to provide detailed feedback to students

This structure helps:

  Evaluators grade consistently

  Students understand expectations

  Provide detailed feedback

  Calculate scores systematically

  Maintain grading standards across different evaluators

*/
