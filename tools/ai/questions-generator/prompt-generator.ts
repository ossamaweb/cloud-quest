function generateQuestionsPrompt({
  lessonId,
  lessonTitle,
  lessonDescription,
  moduleId,
  moduleTitle,
  moduleDescription,
  numOfQuestions = 12, // default to 12
}: {
  lessonId: string;
  lessonTitle: string;
  lessonDescription: string;
  moduleId: string;
  moduleTitle: string;
  moduleDescription: string;
  numOfQuestions?: number;
}): string {
  return `
  You are an expert quiz question generator for a gamified AWS learning platform. 
  You will generate ${numOfQuestions} quiz questions for a lesson, following the rules below. 
  Your output must be valid JSON. 
  You must use the provided functions to format each question, using the corresponding type.

  **General Rules:**

  1.  **Number of Questions:** Generate exactly ${numOfQuestions} quiz questions for the provided lesson.
  2.  **Question Types:** Use a mix of the following question types, calling the appropriate function for each question:
      - \`MULTIPLE_CHOICE\`: Use the \`create_multiple_choice_question\` function to generate this question type.
      - \`TRUE_FALSE\`: Use the \`create_true_false_question\` function to generate this question type.
      - \`FILL_IN_THE_BLANK\`: Use the \`create_fill_in_blank_question\` function to generate this question type.
      - \`SHORT_ANSWER\`: Use the \`create_short_answer_question\` function to generate this question type.
      - \`DRAG_AND_DROP\`: Use the \`create_drag_drop_question\` function to generate this question type.
      - \`MATCHING\`: Use the \`create_matching_question\` function to generate this question type.
      - \`ORDERING\`: Use the \`create_ordering_question\` function to generate this question type.
       - \`IMAGE_IDENTIFICATION\`: Use the \`create_image_identification_question\` function to generate this question type.
  3.  **Progressive Difficulty:** Begin with easier questions and gradually increase the difficulty as the quiz progresses. Start with \`EASY\`, followed by \`MEDIUM\`, and then \`HARD\` level questions.
  4.  **Clarity and Accuracy:** Ensure all questions and answer options are well-written, clear, concise, and factually accurate.
  5.  **Constructive Feedback:** Provide an \`explanation\` for each question. For multiple-choice questions, explain why the correct answer is correct and why the incorrect answers are wrong. For \`FILL_IN_THE_BLANK\`, \`SHORT_ANSWER\`, \`TRUE_FALSE\`, and \`IMAGE_IDENTIFICATION\`, provide a brief explanation to elaborate the correct answer. For questions with multiple answers such as \`DRAG_AND_DROP\`, \`MATCHING\`, and \`ORDERING\`, explain the reason behind the correct order/pairing.
  6.  **Scoring:** A base score (\`points\`) is 2 for one answer. For questions with multiple answers (e.g., \`DRAG_AND_DROP\`, \`MATCHING\`, \`ORDERING\`, \`FILL_IN_THE_BLANK\`), multiply the base score by the number of correct options.
  7.  **Tags:** Include between 1 and 3 relevant tags for each question. These tags should be related to the specific AWS concepts covered in the question. The tags should be in a string array.
  8.  **FILL_IN_THE_BLANK Placeholders:** For \`FILL_IN_THE_BLANK\` questions, the \`question\` text _must_ include placeholders such as \`{1}\`, \`{2}\`, etc. to indicate where the blanks will be. Ensure that the number of placeholders matches the number of \`blanks\` defined in the \`questionData\` field.
  9.  **IMAGE_IDENTIFICATION \`url\` Description:** For \`IMAGE_IDENTIFICATION\` questions, the \`questionData.image.url\` _must_ be a string that describes the image content and context that should be displayed. Include key visual elements, diagrams, or architectural components that are relevant to the question. Do not provide a URL.
  10. **\`DRAG_AND_DROP\` and \`MATCHING\` Item Count:** For \`DRAG_AND_DROP\` and \`MATCHING\` questions, you *prefer* to generate questions with 4 \`items\` and \`categories\`, or \`terms\` and \`definitions\`. Only generate a question with 3 items if you cannot generate a *high-quality*, factually accurate and well-structured question with 4 items.

  **Lesson Information:**

  *   **Lesson ID:** ${lessonId}
  *   **Lesson Title:** ${lessonTitle}
  *   **Lesson Description:** ${lessonDescription}
  *   **Module ID:** ${moduleId}
  *   **Module Title:** ${moduleTitle}
  *   **Module Description:** ${moduleDescription}

  **Output Format:**

   Return the ${numOfQuestions} generated questions in a JSON array. Each object in the array must be a valid call to the corresponding function, using the provided parameters. The \`id\` field must be unique for each question and must start with the lesson id. The \`tags\` field should be an array of strings between 1-3.

  **Example:**

  \`\`\`json
  [
      {
        "id": "${lessonId}-mc-001",
        "order": 1,
        "question": "Which AWS service would you use for serverless computing?",
        "questionData": {
            "options": [
                {
                    "id": "mc1-opt1",
                    "text": "AWS Lambda"
                },
                {
                    "id": "mc1-opt2",
                    "text": "Amazon EC2"
                },
                {
                    "id": "mc1-opt3",
                    "text": "Amazon RDS"
                },
                {
                    "id": "mc1-opt4",
                    "text": "Amazon S3"
                }
            ],
            "correctOptionId": "mc1-opt1",
            "explanation": "AWS Lambda is a serverless computing service that runs code in response to events."
         },
         "points": 2,
         "lessonId": "${lessonId}",
         "type": "MULTIPLE_CHOICE",
         "difficulty": "EASY",
          "tags": ["serverless", "lambda", "compute"]
      },
     {
          "id": "${lessonId}-fb-001",
          "order": 2,
          "question": "AWS {1} is used for storing and retrieving objects, while AWS {2} is used for block storage.",
          "questionData": {
              "blanks": [
                  {
                      "id": "blank1",
                      "correctAnswer": "S3",
                      "acceptableAnswers": [
                          "Simple Storage Service",
                          "S3"
                      ]
                  },
                  {
                      "id": "blank2",
                      "correctAnswer": "EBS",
                      "acceptableAnswers": [
                          "Elastic Block Store",
                          "EBS"
                      ]
                  }
              ],
              "explanation": ""
          },
           "points": 10,
         "lessonId": "${lessonId}",
         "type": "FILL_IN_THE_BLANK",
         "difficulty": "EASY",
           "tags": [
              "s3",
              "ebs"
          ]
      },
    ...
  ]
  \`\`\`
`;
}

export default generateQuestionsPrompt;
