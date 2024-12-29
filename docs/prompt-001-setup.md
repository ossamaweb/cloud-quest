### Setup

#### Prompt:

```
@workspace follow AMPLIFYRULES to develop a data model schema for a gamified learning platform using Amplify Gen 2. Include models for users, modules, lessons, questions, user progress, leaderboards and media. Use Amplify Gen 2 to fetch a user's progress and leaderboard rank.
```

---

I'll help you create a data schema for a gamified learning platform following the AMPLIFYRULES from the provided context. Here's a comprehensive schema design:

```
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a.model({
    id: a.id(),
    username: a.string().required(),
    email: a.string().required(),
    points: a.integer(),
    level: a.integer(),
    achievements: a.string().array(),
    modules: a.hasMany("UserModuleProgress", "userId"),
    leaderboardEntries: a.hasMany("LeaderboardEntry", "userId")
  }).authorization((allow) => [
    allow.owner(),
    allow.guest().to(["read"])
  ]),

  Module: a.model({
    id: a.id(),
    title: a.string().required(),
    description: a.string(),
    order: a.integer(),
    difficulty: a.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
    lessons: a.hasMany("Lesson", "moduleId"),
    userProgress: a.hasMany("UserModuleProgress", "moduleId")
  }).authorization((allow) => [
    allow.owner(),
    allow.guest().to(["read"])
  ]),

  Lesson: a.model({
    id: a.id(),
    title: a.string().required(),
    content: a.string().required(),
    order: a.integer(),
    moduleId: a.id(),
    module: a.belongsTo("Module", "moduleId"),
    questions: a.hasMany("Question", "lessonId"),
    media: a.hasMany("Media", "lessonId")
  }).authorization((allow) => [
    allow.owner(),
    allow.guest().to(["read"])
  ]),

  Question: a.model({
    id: a.id(),
    lessonId: a.id(),
    lesson: a.belongsTo("Lesson", "lessonId"),
    questionText: a.string().required(),
    options: a.string().array(),
    correctAnswer: a.string().required(),
    points: a.integer(),
    difficulty: a.enum(["EASY", "MEDIUM", "HARD"])
  }).authorization((allow) => [
    allow.owner(),
    allow.guest().to(["read"])
  ]),

  UserModuleProgress: a.model({
    id: a.id(),
    userId: a.id(),
    user: a.belongsTo("User", "userId"),
    moduleId: a.id(),
    module: a.belongsTo("Module", "moduleId"),
    completedLessons: a.integer(),
    totalLessons: a.integer(),
    score: a.integer(),
    lastAccessedAt: a.string()
  }).authorization((allow) => [
    allow.owner(),
    allow.guest().to(["read"])
  ]),

  LeaderboardEntry: a.model({
    id: a.id(),
    userId: a.id(),
    user: a.belongsTo("User", "userId"),
    score: a.integer().required(),
    rank: a.integer(),
    period: a.enum(["DAILY", "WEEKLY", "MONTHLY", "ALL_TIME"])
  }).authorization((allow) => [
    allow.owner(),
    allow.guest().to(["read"])
  ]),

  Media: a.model({
    id: a.id(),
    lessonId: a.id(),
    lesson: a.belongsTo("Lesson", "lessonId"),
    type: a.enum(["IMAGE", "VIDEO", "AUDIO"]),
    url: a.string().required(),
    caption: a.string()
  }).authorization((allow) => [
    allow.owner(),
    allow.guest().to(["read"])
  ])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool"
  }
});
```

To fetch a user's progress and leaderboard rank, here's how you can use the schema:

```
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

// Fetch user's progress for a specific module
async function getUserModuleProgress(userId: string, moduleId: string) {
  const progress = await client.models.UserModuleProgress.get({
    userId: userId,
    moduleId: moduleId
  });
  return progress;
}

// Fetch user's leaderboard position
async function getUserLeaderboardRank(userId: string, period: "DAILY" | "WEEKLY" | "MONTHLY" | "ALL_TIME") {
  const leaderboardEntry = await client.models.LeaderboardEntry.get({
    userId: userId,
    period: period
  });
  return leaderboardEntry;
}

// Get all leaderboard entries for a specific period
async function getLeaderboard(period: "DAILY" | "WEEKLY" | "MONTHLY" | "ALL_TIME") {
  const leaderboard = await client.models.LeaderboardEntry.list({
    filter: {
      period: {
        eq: period
      }
    },
    sort: {
      field: "score",
      order: "desc"
    }
  });
  return leaderboard;
}

```

Key features of this schema:

1. Follows all AMPLIFYRULES including proper authorization and relationships

2. Uses .guest() instead of .public() for public access

3. Properly defines relationships using .belongsTo() and .hasMany() with required relatedField IDs

4. Uses enums without .required() or .defaultValue()

5. Implements proper authorization rules using the correct syntax

6. Includes all necessary models for a gamified learning platform

7. Supports tracking user progress, achievements, and leaderboard rankings

8. Includes media support for lessons

9. Implements proper data relationships between models

The schema supports features like:

- User progress tracking

- Module and lesson management

- Question bank with different difficulty levels

- Leaderboard system with different time periods

- Media attachments for lessons

- Achievement tracking

- Points and leveling system
