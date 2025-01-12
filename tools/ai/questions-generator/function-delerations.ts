// Copied from tools/ai/questions-generator/llmfc/all.llmfc.json
// Updated types to match FunctionDeclaration types
import { FunctionDeclaration, SchemaType } from "@google/generative-ai/server";

export const functionDeclarations: FunctionDeclaration[] = [
  {
    name: "create_multiple_choice_question",
    description: "Creates a multiple choice question for AWS learning content",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
        },
        order: {
          type: SchemaType.INTEGER,
        },
        question: {
          type: SchemaType.STRING,
        },
        questionData: {
          type: SchemaType.OBJECT,
          properties: {
            options: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: {
                    type: SchemaType.STRING,
                  },
                  text: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["id", "text"],
              },
            },
            correctOptionId: {
              type: SchemaType.STRING,
            },
            explanation: {
              type: SchemaType.STRING,
            },
          },
          required: ["options", "correctOptionId", "explanation"],
        },
        points: {
          type: SchemaType.INTEGER,
        },
        lessonId: {
          type: SchemaType.STRING,
        },
        type: {
          type: SchemaType.STRING,
          enum: ["MULTIPLE_CHOICE"],
        },
        difficulty: {
          type: SchemaType.STRING,
          enum: ["EASY", "MEDIUM", "HARD"],
        },
        tags: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
          },
        },
      },
      required: [
        "id",
        "order",
        "question",
        "questionData",
        "points",
        "lessonId",
        "type",
        "difficulty",
      ],
    },
  },
  {
    name: "create_true_false_question",
    description:
      "Creates a true/false question with an explanation for the correct answer",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
        },
        order: {
          type: SchemaType.INTEGER,
        },
        question: {
          type: SchemaType.STRING,
        },
        questionData: {
          type: SchemaType.OBJECT,
          properties: {
            correctAnswer: {
              type: SchemaType.BOOLEAN,
            },
            explanation: {
              type: SchemaType.STRING,
            },
          },
          required: ["correctAnswer"],
        },
        points: {
          type: SchemaType.INTEGER,
        },
        lessonId: {
          type: SchemaType.STRING,
        },
        type: {
          type: SchemaType.STRING,
          enum: ["TRUE_FALSE"],
        },
        difficulty: {
          type: SchemaType.STRING,
          enum: ["EASY", "MEDIUM", "HARD"],
        },
        tags: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
          },
        },
      },
      required: [
        "id",
        "order",
        "question",
        "questionData",
        "points",
        "lessonId",
        "type",
        "difficulty",
      ],
    },
  },
  {
    name: "create_fill_in_blank_question",
    description:
      "Creates a fill-in-the-blank question with multiple blanks to be filled",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
        },
        order: {
          type: SchemaType.INTEGER,
        },
        question: {
          type: SchemaType.STRING,
        },
        questionData: {
          type: SchemaType.OBJECT,
          properties: {
            blanks: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: {
                    type: SchemaType.STRING,
                  },
                  correctAnswer: {
                    type: SchemaType.STRING,
                  },
                  acceptableAnswers: {
                    type: SchemaType.ARRAY,
                    items: {
                      type: SchemaType.STRING,
                    },
                  },
                },
                required: ["id", "correctAnswer", "acceptableAnswers"],
              },
            },
            explanation: {
              type: SchemaType.STRING,
            },
          },
          required: ["blanks"],
        },
        points: {
          type: SchemaType.INTEGER,
        },
        lessonId: {
          type: SchemaType.STRING,
        },
        type: {
          type: SchemaType.STRING,
          enum: ["FILL_IN_THE_BLANK"],
        },
        difficulty: {
          type: SchemaType.STRING,
          enum: ["EASY", "MEDIUM", "HARD"],
        },
        tags: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
          },
        },
      },
      required: [
        "id",
        "order",
        "question",
        "questionData",
        "points",
        "lessonId",
        "type",
        "difficulty",
      ],
    },
  },
  {
    name: "create_short_answer_question",
    description:
      "Creates a short answer question that accepts brief responses (maximum 30 characters) using exact string matching for validation",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
        },
        order: {
          type: SchemaType.INTEGER,
        },
        question: {
          type: SchemaType.STRING,
        },
        questionData: {
          type: SchemaType.OBJECT,
          properties: {
            correctAnswer: {
              type: SchemaType.STRING,
            },
            acceptableAnswers: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.STRING,
              },
            },
            explanation: {
              type: SchemaType.STRING,
            },
          },
          required: ["correctAnswer", "acceptableAnswers"],
        },
        points: {
          type: SchemaType.INTEGER,
        },
        lessonId: {
          type: SchemaType.STRING,
        },
        type: {
          type: SchemaType.STRING,
          enum: ["SHORT_ANSWER"],
        },
        difficulty: {
          type: SchemaType.STRING,
          enum: ["EASY", "MEDIUM", "HARD"],
        },
        tags: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
          },
        },
      },
      required: [
        "id",
        "order",
        "question",
        "questionData",
        "points",
        "lessonId",
        "type",
        "difficulty",
      ],
    },
  },
  {
    name: "create_drag_drop_question",
    description: "Creates a drag and drop question",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
        },
        order: {
          type: SchemaType.INTEGER,
        },
        question: {
          type: SchemaType.STRING,
        },
        questionData: {
          type: SchemaType.OBJECT,
          properties: {
            categories: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: {
                    type: SchemaType.STRING,
                  },
                  text: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["id", "text"],
              },
            },
            items: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: {
                    type: SchemaType.STRING,
                  },
                  text: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["id", "text"],
              },
            },
            correctPairings: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  categoryId: {
                    type: SchemaType.STRING,
                  },
                  itemId: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["categoryId", "itemId"],
              },
            },
          },
          required: ["categories", "items", "correctPairings"],
        },
        points: {
          type: SchemaType.INTEGER,
        },
        lessonId: {
          type: SchemaType.STRING,
        },
        type: {
          type: SchemaType.STRING,
          enum: ["DRAG_AND_DROP"],
        },
        difficulty: {
          type: SchemaType.STRING,
          enum: ["EASY", "MEDIUM", "HARD"],
        },
        tags: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
          },
        },
      },
      required: [
        "id",
        "order",
        "question",
        "questionData",
        "points",
        "lessonId",
        "type",
        "difficulty",
      ],
    },
  },
  {
    name: "create_matching_question",
    description:
      "Creates a matching question where terms need to be paired with their correct short definitions",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
        },
        order: {
          type: SchemaType.INTEGER,
        },
        question: {
          type: SchemaType.STRING,
        },
        questionData: {
          type: SchemaType.OBJECT,
          properties: {
            terms: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: {
                    type: SchemaType.STRING,
                  },
                  text: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["id", "text"],
              },
            },
            definitions: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: {
                    type: SchemaType.STRING,
                  },
                  text: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["id", "text"],
              },
            },
            correctPairings: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  termId: {
                    type: SchemaType.STRING,
                  },
                  definitionId: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["termId", "definitionId"],
              },
            },
          },
          required: ["terms", "definitions", "correctPairings"],
        },
        points: {
          type: SchemaType.INTEGER,
        },
        lessonId: {
          type: SchemaType.STRING,
        },
        type: {
          type: SchemaType.STRING,
          enum: ["MATCHING"],
        },
        difficulty: {
          type: SchemaType.STRING,
          enum: ["EASY", "MEDIUM", "HARD"],
        },
        tags: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
          },
        },
      },
      required: [
        "id",
        "order",
        "question",
        "questionData",
        "points",
        "lessonId",
        "type",
        "difficulty",
      ],
    },
  },
  {
    name: "create_ordering_question",
    description:
      "Creates a question where items need to be arranged in the correct sequential order",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
        },
        order: {
          type: SchemaType.INTEGER,
        },
        question: {
          type: SchemaType.STRING,
        },
        questionData: {
          type: SchemaType.OBJECT,
          properties: {
            items: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: {
                    type: SchemaType.STRING,
                  },
                  text: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["id", "text"],
              },
            },
            correctOrder: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.STRING,
              },
            },
          },
          required: ["items", "correctOrder"],
        },
        points: {
          type: SchemaType.INTEGER,
        },
        lessonId: {
          type: SchemaType.STRING,
        },
        type: {
          type: SchemaType.STRING,
          enum: ["ORDERING"],
        },
        difficulty: {
          type: SchemaType.STRING,
          enum: ["EASY", "MEDIUM", "HARD"],
        },
        tags: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
          },
        },
      },
      required: [
        "id",
        "order",
        "question",
        "questionData",
        "points",
        "lessonId",
        "type",
        "difficulty",
      ],
    },
  },
  {
    name: "create_image_identification_question",
    description:
      "Creates an image identification question where users select the correct answer based on an image",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
        },
        order: {
          type: SchemaType.INTEGER,
        },
        question: {
          type: SchemaType.STRING,
        },
        questionData: {
          type: SchemaType.OBJECT,
          properties: {
            image: {
              type: SchemaType.OBJECT,
              properties: {
                url: {
                  type: SchemaType.STRING,
                },
                altText: {
                  type: SchemaType.STRING,
                },
              },
              required: ["url", "altText"],
            },
            options: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: {
                    type: SchemaType.STRING,
                  },
                  text: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["id", "text"],
              },
            },
            correctOptionId: {
              type: SchemaType.STRING,
            },
            explanation: {
              type: SchemaType.STRING,
            },
          },
          required: ["image", "options", "correctOptionId"],
        },
        points: {
          type: SchemaType.INTEGER,
        },
        lessonId: {
          type: SchemaType.STRING,
        },
        type: {
          type: SchemaType.STRING,
          enum: ["IMAGE_IDENTIFICATION"],
        },
        difficulty: {
          type: SchemaType.STRING,
          enum: ["EASY", "MEDIUM", "HARD"],
        },
        tags: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
          },
        },
      },
      required: [
        "id",
        "order",
        "question",
        "questionData",
        "points",
        "lessonId",
        "type",
        "difficulty",
      ],
    },
  },
];
