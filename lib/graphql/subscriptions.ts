/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAchievement = /* GraphQL */ `subscription OnCreateAchievement(
  $filter: ModelSubscriptionAchievementFilterInput
  $owner: String
) {
  onCreateAchievement(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAchievementSubscriptionVariables,
  APITypes.OnCreateAchievementSubscription
>;
export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse(
  $filter: ModelSubscriptionCourseFilterInput
  $owner: String
) {
  onCreateCourse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onCreateLesson = /* GraphQL */ `subscription OnCreateLesson(
  $filter: ModelSubscriptionLessonFilterInput
  $owner: String
) {
  onCreateLesson(filter: $filter, owner: $owner) {
    about
    createdAt
    description
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
` as GeneratedSubscription<
  APITypes.OnCreateLessonSubscriptionVariables,
  APITypes.OnCreateLessonSubscription
>;
export const onCreateModule = /* GraphQL */ `subscription OnCreateModule(
  $filter: ModelSubscriptionModuleFilterInput
  $owner: String
) {
  onCreateModule(filter: $filter, owner: $owner) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateModuleSubscriptionVariables,
  APITypes.OnCreateModuleSubscription
>;
export const onCreateQuestion = /* GraphQL */ `subscription OnCreateQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onCreateQuestion(filter: $filter, owner: $owner) {
    createdAt
    difficulty
    id
    lesson {
      about
      createdAt
      description
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionSubscriptionVariables,
  APITypes.OnCreateQuestionSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateUserAchievement = /* GraphQL */ `subscription OnCreateUserAchievement(
  $filter: ModelSubscriptionUserAchievementFilterInput
  $owner: String
) {
  onCreateUserAchievement(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserAchievementSubscriptionVariables,
  APITypes.OnCreateUserAchievementSubscription
>;
export const onCreateUserCourseEnrollment = /* GraphQL */ `subscription OnCreateUserCourseEnrollment(
  $filter: ModelSubscriptionUserCourseEnrollmentFilterInput
  $owner: String
) {
  onCreateUserCourseEnrollment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserCourseEnrollmentSubscriptionVariables,
  APITypes.OnCreateUserCourseEnrollmentSubscription
>;
export const onCreateUserLessonCompletion = /* GraphQL */ `subscription OnCreateUserLessonCompletion(
  $filter: ModelSubscriptionUserLessonCompletionFilterInput
  $owner: String
) {
  onCreateUserLessonCompletion(filter: $filter, owner: $owner) {
    accuracy
    createdAt
    duration
    id
    lesson {
      about
      createdAt
      description
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
` as GeneratedSubscription<
  APITypes.OnCreateUserLessonCompletionSubscriptionVariables,
  APITypes.OnCreateUserLessonCompletionSubscription
>;
export const onCreateUserStats = /* GraphQL */ `subscription OnCreateUserStats(
  $filter: ModelSubscriptionUserStatsFilterInput
  $owner: String
) {
  onCreateUserStats(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserStatsSubscriptionVariables,
  APITypes.OnCreateUserStatsSubscription
>;
export const onDeleteAchievement = /* GraphQL */ `subscription OnDeleteAchievement(
  $filter: ModelSubscriptionAchievementFilterInput
  $owner: String
) {
  onDeleteAchievement(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAchievementSubscriptionVariables,
  APITypes.OnDeleteAchievementSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse(
  $filter: ModelSubscriptionCourseFilterInput
  $owner: String
) {
  onDeleteCourse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onDeleteLesson = /* GraphQL */ `subscription OnDeleteLesson(
  $filter: ModelSubscriptionLessonFilterInput
  $owner: String
) {
  onDeleteLesson(filter: $filter, owner: $owner) {
    about
    createdAt
    description
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
` as GeneratedSubscription<
  APITypes.OnDeleteLessonSubscriptionVariables,
  APITypes.OnDeleteLessonSubscription
>;
export const onDeleteModule = /* GraphQL */ `subscription OnDeleteModule(
  $filter: ModelSubscriptionModuleFilterInput
  $owner: String
) {
  onDeleteModule(filter: $filter, owner: $owner) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteModuleSubscriptionVariables,
  APITypes.OnDeleteModuleSubscription
>;
export const onDeleteQuestion = /* GraphQL */ `subscription OnDeleteQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onDeleteQuestion(filter: $filter, owner: $owner) {
    createdAt
    difficulty
    id
    lesson {
      about
      createdAt
      description
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionSubscriptionVariables,
  APITypes.OnDeleteQuestionSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onDeleteUserAchievement = /* GraphQL */ `subscription OnDeleteUserAchievement(
  $filter: ModelSubscriptionUserAchievementFilterInput
  $owner: String
) {
  onDeleteUserAchievement(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserAchievementSubscriptionVariables,
  APITypes.OnDeleteUserAchievementSubscription
>;
export const onDeleteUserCourseEnrollment = /* GraphQL */ `subscription OnDeleteUserCourseEnrollment(
  $filter: ModelSubscriptionUserCourseEnrollmentFilterInput
  $owner: String
) {
  onDeleteUserCourseEnrollment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserCourseEnrollmentSubscriptionVariables,
  APITypes.OnDeleteUserCourseEnrollmentSubscription
>;
export const onDeleteUserLessonCompletion = /* GraphQL */ `subscription OnDeleteUserLessonCompletion(
  $filter: ModelSubscriptionUserLessonCompletionFilterInput
  $owner: String
) {
  onDeleteUserLessonCompletion(filter: $filter, owner: $owner) {
    accuracy
    createdAt
    duration
    id
    lesson {
      about
      createdAt
      description
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserLessonCompletionSubscriptionVariables,
  APITypes.OnDeleteUserLessonCompletionSubscription
>;
export const onDeleteUserStats = /* GraphQL */ `subscription OnDeleteUserStats(
  $filter: ModelSubscriptionUserStatsFilterInput
  $owner: String
) {
  onDeleteUserStats(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserStatsSubscriptionVariables,
  APITypes.OnDeleteUserStatsSubscription
>;
export const onUpdateAchievement = /* GraphQL */ `subscription OnUpdateAchievement(
  $filter: ModelSubscriptionAchievementFilterInput
  $owner: String
) {
  onUpdateAchievement(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAchievementSubscriptionVariables,
  APITypes.OnUpdateAchievementSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse(
  $filter: ModelSubscriptionCourseFilterInput
  $owner: String
) {
  onUpdateCourse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onUpdateLesson = /* GraphQL */ `subscription OnUpdateLesson(
  $filter: ModelSubscriptionLessonFilterInput
  $owner: String
) {
  onUpdateLesson(filter: $filter, owner: $owner) {
    about
    createdAt
    description
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
` as GeneratedSubscription<
  APITypes.OnUpdateLessonSubscriptionVariables,
  APITypes.OnUpdateLessonSubscription
>;
export const onUpdateModule = /* GraphQL */ `subscription OnUpdateModule(
  $filter: ModelSubscriptionModuleFilterInput
  $owner: String
) {
  onUpdateModule(filter: $filter, owner: $owner) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateModuleSubscriptionVariables,
  APITypes.OnUpdateModuleSubscription
>;
export const onUpdateQuestion = /* GraphQL */ `subscription OnUpdateQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onUpdateQuestion(filter: $filter, owner: $owner) {
    createdAt
    difficulty
    id
    lesson {
      about
      createdAt
      description
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionSubscriptionVariables,
  APITypes.OnUpdateQuestionSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onUpdateUserAchievement = /* GraphQL */ `subscription OnUpdateUserAchievement(
  $filter: ModelSubscriptionUserAchievementFilterInput
  $owner: String
) {
  onUpdateUserAchievement(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserAchievementSubscriptionVariables,
  APITypes.OnUpdateUserAchievementSubscription
>;
export const onUpdateUserCourseEnrollment = /* GraphQL */ `subscription OnUpdateUserCourseEnrollment(
  $filter: ModelSubscriptionUserCourseEnrollmentFilterInput
  $owner: String
) {
  onUpdateUserCourseEnrollment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserCourseEnrollmentSubscriptionVariables,
  APITypes.OnUpdateUserCourseEnrollmentSubscription
>;
export const onUpdateUserLessonCompletion = /* GraphQL */ `subscription OnUpdateUserLessonCompletion(
  $filter: ModelSubscriptionUserLessonCompletionFilterInput
  $owner: String
) {
  onUpdateUserLessonCompletion(filter: $filter, owner: $owner) {
    accuracy
    createdAt
    duration
    id
    lesson {
      about
      createdAt
      description
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserLessonCompletionSubscriptionVariables,
  APITypes.OnUpdateUserLessonCompletionSubscription
>;
export const onUpdateUserStats = /* GraphQL */ `subscription OnUpdateUserStats(
  $filter: ModelSubscriptionUserStatsFilterInput
  $owner: String
) {
  onUpdateUserStats(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserStatsSubscriptionVariables,
  APITypes.OnUpdateUserStatsSubscription
>;
