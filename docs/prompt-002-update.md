### Update

#### Prompt:

```
@workspace follow AMPLIFYRULES to add a field called "format" to the question model. The field must be an enum with the following values: " MULTIPLE_CHOICE
DRAG_AND_DROP
SCENARIO_BASED
SHORT_ANSWER
FILL_IN_THE_BLANK
MATCHING
TRUE_FALSE
ORDERING
IMAGE_IDENTIFICATION"
```

---

I'll help you modify the Question model to add the "format" field following the AMPLIFYRULES. Here's the updated Question model:

```
Question: a.model({
    id: a.id(),
    lessonId: a.id(),
    lesson: a.belongsTo("Lesson", "lessonId"),
    questionText: a.string().required(),
    options: a.string().array(),
    correctAnswer: a.string().required(),
    points: a.integer(),
    difficulty: a.enum(["EASY", "MEDIUM", "HARD"]),
    format: a.enum([
      "MULTIPLE_CHOICE",
      "DRAG_AND_DROP",
      "SCENARIO_BASED",
      "SHORT_ANSWER",
      "FILL_IN_THE_BLANK",
      "MATCHING",
      "TRUE_FALSE",
      "ORDERING",
      "IMAGE_IDENTIFICATION"
    ])
  }).authorization((allow) => [
    allow.owner(),
    allow.guest().to(["read"])
  ])

```

Note that following AMPLIFYRULES:

1. The enum is defined without .required() or .defaultValue() as these are not supported for enums in Amplify Gen 2

2. The authorization rules remain the same

3. The relationships and other fields remain unchanged

4. The format field is added as an enum with all the specified question types

This addition will allow you to specify different question formats while creating or updating questions in your gamified learning platform.
