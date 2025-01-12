import { type ClientSchema, a } from "@aws-amplify/backend";

export const schema = a.schema({
  User: a
    .model({
      id: a.id(),
      username: a.string().required(),
      email: a.string().required(),
      profilePicture: a.string(),
      status: a.enum(["ACTIVE", "INACTIVE", "SUSPENDED"]),
      stats: a.hasOne("UserStats", "userId"),
      courses: a.hasMany("UserCourseEnrollment", "userId"),
      lessons: a.hasMany("UserLessonCompletion", "userId"),
      achievements: a.hasMany("UserAchievement", "userId"),
    })
    .authorization((allow) => [allow.owner()]),

  UserStats: a
    .model({
      id: a.id(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      points: a.integer().default(0),
      streak: a.integer().default(0),
      longestStreak: a.integer().default(0),
      lessonsCompleted: a.integer().default(0),
      modulesCompleted: a.integer().default(0),
      coursesCompleted: a.integer().default(0),
      achievementsUnlocked: a.integer().default(0),
    })
    .authorization((allow) => [allow.owner()]),

  Achievement: a
    .model({
      id: a.id(),
      name: a.string().required(),
      description: a.string().required(),
      category: a.enum(["COURSE", "LESSON", "STREAK", "POINTS", "SPECIAL"]),
      icon: a.string(),
      pointValue: a.integer(),
      userAchievements: a.hasMany("UserAchievement", "achievementId"),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["read"]),
    ]),

  UserAchievement: a
    .model({
      id: a.id(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      achievementId: a.id(),
      achievement: a.belongsTo("Achievement", "achievementId"),
      earnedAt: a.datetime(),
    })
    .authorization((allow) => [allow.owner()]),

  Course: a
    .model({
      id: a.id(),
      slug: a.id().required(),
      title: a.string().required(),
      description: a.string(),
      status: a.enum(["ACTIVE", "DRAFT", "ARCHIVED"]),
      modules: a.hasMany("Module", "courseId"),
      enrolledUsers: a.hasMany("UserCourseEnrollment", "courseId"),
    })
    .secondaryIndexes((index) => [index("slug")])
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["read"]),
    ]),

  UserCourseEnrollment: a
    .model({
      id: a.id(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      courseId: a.id(),
      course: a.belongsTo("Course", "courseId"),
      enrollmentDate: a.datetime().required(),
      completionDate: a.datetime(),
    })
    .authorization((allow) => [allow.owner()]),

  Module: a
    .model({
      id: a.id(),
      slug: a.id().required(),
      title: a.string().required(),
      description: a.string(),
      order: a.integer().required(),
      difficulty: a.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
      courseId: a.id(),
      course: a.belongsTo("Course", "courseId"),
      lessons: a.hasMany("Lesson", "moduleId"),
    })
    .secondaryIndexes((index) => [index("slug")])
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["read"]),
    ]),

  Lesson: a
    .model({
      id: a.id(),
      slug: a.id().required(),
      title: a.string().required(),
      description: a.string().required(),
      about: a.string().required(),
      order: a.integer().required(),
      type: a.enum(["LESSON", "PRACTICE"]),
      moduleId: a.id(),
      module: a.belongsTo("Module", "moduleId"),
      questions: a.hasMany("Question", "lessonId"),
      userCompletions: a.hasMany("UserLessonCompletion", "lessonId"),
    })
    .secondaryIndexes((index) => [index("slug")])
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["read"]),
    ]),

  UserLessonCompletion: a
    .model({
      id: a.id(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      lessonId: a.id(),
      lesson: a.belongsTo("Lesson", "lessonId"),
      points: a.integer().required(),
      accuracy: a.integer().required(),
      duration: a.integer().required(),
    })
    .authorization((allow) => [allow.owner()]),

  Question: a
    .model({
      id: a.id(),
      lessonId: a.id(),
      lesson: a.belongsTo("Lesson", "lessonId"),
      order: a.integer().required(),
      type: a.enum([
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
      question: a.string().required(),
      questionData: a.json().required(),
      points: a.integer().required(),
      difficulty: a.enum(["EASY", "MEDIUM", "HARD"]),
      version: a.integer().default(1), // For tracking questionData schema changes
      tags: a.string().array(), // For categorization and filtering
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["read"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;
