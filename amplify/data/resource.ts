import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a
    .model({
      id: a.id(),
      username: a.string().required(),
      email: a.string().required(),
      points: a.integer(),
      level: a.integer(),
      achievements: a.string().array(),
      modules: a.hasMany("UserModuleProgress", "userId"),
      leaderboardEntries: a.hasMany("LeaderboardEntry", "userId"),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),

  Module: a
    .model({
      id: a.id(),
      title: a.string().required(),
      description: a.string(),
      order: a.integer(),
      difficulty: a.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
      lessons: a.hasMany("Lesson", "moduleId"),
      userProgress: a.hasMany("UserModuleProgress", "moduleId"),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),

  Lesson: a
    .model({
      id: a.id(),
      title: a.string().required(),
      content: a.string().required(),
      order: a.integer(),
      moduleId: a.id(),
      module: a.belongsTo("Module", "moduleId"),
      questions: a.hasMany("Question", "lessonId"),
      media: a.hasMany("Media", "lessonId"),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),

  Question: a
    .model({
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
        "IMAGE_IDENTIFICATION",
      ]),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),

  UserModuleProgress: a
    .model({
      id: a.id(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      moduleId: a.id(),
      module: a.belongsTo("Module", "moduleId"),
      completedLessons: a.integer(),
      totalLessons: a.integer(),
      score: a.integer(),
      lastAccessedAt: a.string(),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),

  LeaderboardEntry: a
    .model({
      id: a.id(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      score: a.integer().required(),
      rank: a.integer(),
      period: a.enum(["DAILY", "WEEKLY", "MONTHLY", "ALL_TIME"]),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),

  Media: a
    .model({
      id: a.id(),
      lessonId: a.id(),
      lesson: a.belongsTo("Lesson", "lessonId"),
      type: a.enum(["IMAGE", "VIDEO", "AUDIO"]),
      url: a.string().required(),
      caption: a.string(),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
