/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAchievement = /* GraphQL */ `query GetAchievement($id: ID!) {
  getAchievement(id: $id) {
    category
    createdAt
    description
    icon
    id
    name
    owner
    pointValue
    updatedAt
    userAchievements {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAchievementQueryVariables,
  APITypes.GetAchievementQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
    createdAt
    description
    enrolledUsers {
      nextToken
      __typename
    }
    id
    modules {
      nextToken
      __typename
    }
    owner
    slug
    status
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const getLesson = /* GraphQL */ `query GetLesson($id: ID!) {
  getLesson(id: $id) {
    content
    createdAt
    id
    module {
      courseId
      createdAt
      description
      difficulty
      id
      order
      owner
      slug
      title
      updatedAt
      __typename
    }
    moduleId
    order
    owner
    questions {
      nextToken
      __typename
    }
    slug
    title
    type
    updatedAt
    userCompletions {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLessonQueryVariables, APITypes.GetLessonQuery>;
export const getModule = /* GraphQL */ `query GetModule($id: ID!) {
  getModule(id: $id) {
    course {
      createdAt
      description
      id
      owner
      slug
      status
      title
      updatedAt
      __typename
    }
    courseId
    createdAt
    description
    difficulty
    id
    lessons {
      nextToken
      __typename
    }
    order
    owner
    slug
    title
    updatedAt
    userProgress {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetModuleQueryVariables, APITypes.GetModuleQuery>;
export const getQuestion = /* GraphQL */ `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    createdAt
    difficulty
    id
    lesson {
      content
      createdAt
      id
      moduleId
      order
      owner
      slug
      title
      type
      updatedAt
      __typename
    }
    lessonId
    order
    owner
    points
    question
    questionData
    tags
    type
    updatedAt
    version
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetQuestionQueryVariables,
  APITypes.GetQuestionQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    achievements {
      nextToken
      __typename
    }
    courses {
      nextToken
      __typename
    }
    createdAt
    email
    id
    lessons {
      nextToken
      __typename
    }
    modules {
      nextToken
      __typename
    }
    owner
    profilePicture
    stats {
      achievementsUnlocked
      coursesCompleted
      createdAt
      id
      lessonsCompleted
      longestStreak
      modulesCompleted
      owner
      points
      streak
      updatedAt
      userId
      __typename
    }
    status
    updatedAt
    username
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getUserAchievement = /* GraphQL */ `query GetUserAchievement($id: ID!) {
  getUserAchievement(id: $id) {
    achievement {
      category
      createdAt
      description
      icon
      id
      name
      owner
      pointValue
      updatedAt
      __typename
    }
    achievementId
    createdAt
    earnedAt
    id
    owner
    updatedAt
    user {
      createdAt
      email
      id
      owner
      profilePicture
      status
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserAchievementQueryVariables,
  APITypes.GetUserAchievementQuery
>;
export const getUserCourseEnrollment = /* GraphQL */ `query GetUserCourseEnrollment($id: ID!) {
  getUserCourseEnrollment(id: $id) {
    completionDate
    course {
      createdAt
      description
      id
      owner
      slug
      status
      title
      updatedAt
      __typename
    }
    courseId
    createdAt
    enrollmentDate
    id
    owner
    updatedAt
    user {
      createdAt
      email
      id
      owner
      profilePicture
      status
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserCourseEnrollmentQueryVariables,
  APITypes.GetUserCourseEnrollmentQuery
>;
export const getUserLessonCompletion = /* GraphQL */ `query GetUserLessonCompletion($id: ID!) {
  getUserLessonCompletion(id: $id) {
    accuracy
    createdAt
    duration
    id
    lesson {
      content
      createdAt
      id
      moduleId
      order
      owner
      slug
      title
      type
      updatedAt
      __typename
    }
    lessonId
    owner
    points
    updatedAt
    user {
      createdAt
      email
      id
      owner
      profilePicture
      status
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserLessonCompletionQueryVariables,
  APITypes.GetUserLessonCompletionQuery
>;
export const getUserModuleProgress = /* GraphQL */ `query GetUserModuleProgress($id: ID!) {
  getUserModuleProgress(id: $id) {
    completionDate
    createdAt
    id
    module {
      courseId
      createdAt
      description
      difficulty
      id
      order
      owner
      slug
      title
      updatedAt
      __typename
    }
    moduleId
    owner
    startDate
    updatedAt
    user {
      createdAt
      email
      id
      owner
      profilePicture
      status
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserModuleProgressQueryVariables,
  APITypes.GetUserModuleProgressQuery
>;
export const getUserStats = /* GraphQL */ `query GetUserStats($id: ID!) {
  getUserStats(id: $id) {
    achievementsUnlocked
    coursesCompleted
    createdAt
    id
    lessonsCompleted
    longestStreak
    modulesCompleted
    owner
    points
    streak
    updatedAt
    user {
      createdAt
      email
      id
      owner
      profilePicture
      status
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserStatsQueryVariables,
  APITypes.GetUserStatsQuery
>;
export const listAchievements = /* GraphQL */ `query ListAchievements(
  $filter: ModelAchievementFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAchievements(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      category
      createdAt
      description
      icon
      id
      name
      owner
      pointValue
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAchievementsQueryVariables,
  APITypes.ListAchievementsQuery
>;
export const listCourseBySlug = /* GraphQL */ `query ListCourseBySlug(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
  $slug: ID!
  $sortDirection: ModelSortDirection
) {
  listCourseBySlug(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    slug: $slug
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      id
      owner
      slug
      status
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseBySlugQueryVariables,
  APITypes.ListCourseBySlugQuery
>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCourses(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      id
      owner
      slug
      status
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const listLessonBySlug = /* GraphQL */ `query ListLessonBySlug(
  $filter: ModelLessonFilterInput
  $limit: Int
  $nextToken: String
  $slug: ID!
  $sortDirection: ModelSortDirection
) {
  listLessonBySlug(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    slug: $slug
    sortDirection: $sortDirection
  ) {
    items {
      content
      createdAt
      id
      moduleId
      order
      owner
      slug
      title
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLessonBySlugQueryVariables,
  APITypes.ListLessonBySlugQuery
>;
export const listLessons = /* GraphQL */ `query ListLessons(
  $filter: ModelLessonFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLessons(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      content
      createdAt
      id
      moduleId
      order
      owner
      slug
      title
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLessonsQueryVariables,
  APITypes.ListLessonsQuery
>;
export const listModuleBySlug = /* GraphQL */ `query ListModuleBySlug(
  $filter: ModelModuleFilterInput
  $limit: Int
  $nextToken: String
  $slug: ID!
  $sortDirection: ModelSortDirection
) {
  listModuleBySlug(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    slug: $slug
    sortDirection: $sortDirection
  ) {
    items {
      courseId
      createdAt
      description
      difficulty
      id
      order
      owner
      slug
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModuleBySlugQueryVariables,
  APITypes.ListModuleBySlugQuery
>;
export const listModules = /* GraphQL */ `query ListModules(
  $filter: ModelModuleFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listModules(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      courseId
      createdAt
      description
      difficulty
      id
      order
      owner
      slug
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModulesQueryVariables,
  APITypes.ListModulesQuery
>;
export const listQuestions = /* GraphQL */ `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listQuestions(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      difficulty
      id
      lessonId
      order
      owner
      points
      question
      questionData
      tags
      type
      updatedAt
      version
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
>;
export const listUserAchievements = /* GraphQL */ `query ListUserAchievements(
  $filter: ModelUserAchievementFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserAchievements(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      achievementId
      createdAt
      earnedAt
      id
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserAchievementsQueryVariables,
  APITypes.ListUserAchievementsQuery
>;
export const listUserCourseEnrollments = /* GraphQL */ `query ListUserCourseEnrollments(
  $filter: ModelUserCourseEnrollmentFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserCourseEnrollments(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      completionDate
      courseId
      createdAt
      enrollmentDate
      id
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserCourseEnrollmentsQueryVariables,
  APITypes.ListUserCourseEnrollmentsQuery
>;
export const listUserLessonCompletions = /* GraphQL */ `query ListUserLessonCompletions(
  $filter: ModelUserLessonCompletionFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserLessonCompletions(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      accuracy
      createdAt
      duration
      id
      lessonId
      owner
      points
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserLessonCompletionsQueryVariables,
  APITypes.ListUserLessonCompletionsQuery
>;
export const listUserModuleProgresses = /* GraphQL */ `query ListUserModuleProgresses(
  $filter: ModelUserModuleProgressFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserModuleProgresses(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      completionDate
      createdAt
      id
      moduleId
      owner
      startDate
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserModuleProgressesQueryVariables,
  APITypes.ListUserModuleProgressesQuery
>;
export const listUserStats = /* GraphQL */ `query ListUserStats(
  $filter: ModelUserStatsFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserStats(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      achievementsUnlocked
      coursesCompleted
      createdAt
      id
      lessonsCompleted
      longestStreak
      modulesCompleted
      owner
      points
      streak
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserStatsQueryVariables,
  APITypes.ListUserStatsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      email
      id
      owner
      profilePicture
      status
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
