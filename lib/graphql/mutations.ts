/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAchievement = /* GraphQL */ `mutation CreateAchievement(
  $condition: ModelAchievementConditionInput
  $input: CreateAchievementInput!
) {
  createAchievement(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAchievementMutationVariables,
  APITypes.CreateAchievementMutation
>;
export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $condition: ModelCourseConditionInput
  $input: CreateCourseInput!
) {
  createCourse(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const createLesson = /* GraphQL */ `mutation CreateLesson(
  $condition: ModelLessonConditionInput
  $input: CreateLessonInput!
) {
  createLesson(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateLessonMutationVariables,
  APITypes.CreateLessonMutation
>;
export const createModule = /* GraphQL */ `mutation CreateModule(
  $condition: ModelModuleConditionInput
  $input: CreateModuleInput!
) {
  createModule(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateModuleMutationVariables,
  APITypes.CreateModuleMutation
>;
export const createQuestion = /* GraphQL */ `mutation CreateQuestion(
  $condition: ModelQuestionConditionInput
  $input: CreateQuestionInput!
) {
  createQuestion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateQuestionMutationVariables,
  APITypes.CreateQuestionMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createUserAchievement = /* GraphQL */ `mutation CreateUserAchievement(
  $condition: ModelUserAchievementConditionInput
  $input: CreateUserAchievementInput!
) {
  createUserAchievement(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserAchievementMutationVariables,
  APITypes.CreateUserAchievementMutation
>;
export const createUserCourseEnrollment = /* GraphQL */ `mutation CreateUserCourseEnrollment(
  $condition: ModelUserCourseEnrollmentConditionInput
  $input: CreateUserCourseEnrollmentInput!
) {
  createUserCourseEnrollment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserCourseEnrollmentMutationVariables,
  APITypes.CreateUserCourseEnrollmentMutation
>;
export const createUserLessonCompletion = /* GraphQL */ `mutation CreateUserLessonCompletion(
  $condition: ModelUserLessonCompletionConditionInput
  $input: CreateUserLessonCompletionInput!
) {
  createUserLessonCompletion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserLessonCompletionMutationVariables,
  APITypes.CreateUserLessonCompletionMutation
>;
export const createUserModuleProgress = /* GraphQL */ `mutation CreateUserModuleProgress(
  $condition: ModelUserModuleProgressConditionInput
  $input: CreateUserModuleProgressInput!
) {
  createUserModuleProgress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserModuleProgressMutationVariables,
  APITypes.CreateUserModuleProgressMutation
>;
export const createUserStats = /* GraphQL */ `mutation CreateUserStats(
  $condition: ModelUserStatsConditionInput
  $input: CreateUserStatsInput!
) {
  createUserStats(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserStatsMutationVariables,
  APITypes.CreateUserStatsMutation
>;
export const deleteAchievement = /* GraphQL */ `mutation DeleteAchievement(
  $condition: ModelAchievementConditionInput
  $input: DeleteAchievementInput!
) {
  deleteAchievement(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAchievementMutationVariables,
  APITypes.DeleteAchievementMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $condition: ModelCourseConditionInput
  $input: DeleteCourseInput!
) {
  deleteCourse(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
export const deleteLesson = /* GraphQL */ `mutation DeleteLesson(
  $condition: ModelLessonConditionInput
  $input: DeleteLessonInput!
) {
  deleteLesson(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteLessonMutationVariables,
  APITypes.DeleteLessonMutation
>;
export const deleteModule = /* GraphQL */ `mutation DeleteModule(
  $condition: ModelModuleConditionInput
  $input: DeleteModuleInput!
) {
  deleteModule(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteModuleMutationVariables,
  APITypes.DeleteModuleMutation
>;
export const deleteQuestion = /* GraphQL */ `mutation DeleteQuestion(
  $condition: ModelQuestionConditionInput
  $input: DeleteQuestionInput!
) {
  deleteQuestion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteQuestionMutationVariables,
  APITypes.DeleteQuestionMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const deleteUserAchievement = /* GraphQL */ `mutation DeleteUserAchievement(
  $condition: ModelUserAchievementConditionInput
  $input: DeleteUserAchievementInput!
) {
  deleteUserAchievement(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserAchievementMutationVariables,
  APITypes.DeleteUserAchievementMutation
>;
export const deleteUserCourseEnrollment = /* GraphQL */ `mutation DeleteUserCourseEnrollment(
  $condition: ModelUserCourseEnrollmentConditionInput
  $input: DeleteUserCourseEnrollmentInput!
) {
  deleteUserCourseEnrollment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserCourseEnrollmentMutationVariables,
  APITypes.DeleteUserCourseEnrollmentMutation
>;
export const deleteUserLessonCompletion = /* GraphQL */ `mutation DeleteUserLessonCompletion(
  $condition: ModelUserLessonCompletionConditionInput
  $input: DeleteUserLessonCompletionInput!
) {
  deleteUserLessonCompletion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserLessonCompletionMutationVariables,
  APITypes.DeleteUserLessonCompletionMutation
>;
export const deleteUserModuleProgress = /* GraphQL */ `mutation DeleteUserModuleProgress(
  $condition: ModelUserModuleProgressConditionInput
  $input: DeleteUserModuleProgressInput!
) {
  deleteUserModuleProgress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserModuleProgressMutationVariables,
  APITypes.DeleteUserModuleProgressMutation
>;
export const deleteUserStats = /* GraphQL */ `mutation DeleteUserStats(
  $condition: ModelUserStatsConditionInput
  $input: DeleteUserStatsInput!
) {
  deleteUserStats(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserStatsMutationVariables,
  APITypes.DeleteUserStatsMutation
>;
export const updateAchievement = /* GraphQL */ `mutation UpdateAchievement(
  $condition: ModelAchievementConditionInput
  $input: UpdateAchievementInput!
) {
  updateAchievement(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAchievementMutationVariables,
  APITypes.UpdateAchievementMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $condition: ModelCourseConditionInput
  $input: UpdateCourseInput!
) {
  updateCourse(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const updateLesson = /* GraphQL */ `mutation UpdateLesson(
  $condition: ModelLessonConditionInput
  $input: UpdateLessonInput!
) {
  updateLesson(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateLessonMutationVariables,
  APITypes.UpdateLessonMutation
>;
export const updateModule = /* GraphQL */ `mutation UpdateModule(
  $condition: ModelModuleConditionInput
  $input: UpdateModuleInput!
) {
  updateModule(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateModuleMutationVariables,
  APITypes.UpdateModuleMutation
>;
export const updateQuestion = /* GraphQL */ `mutation UpdateQuestion(
  $condition: ModelQuestionConditionInput
  $input: UpdateQuestionInput!
) {
  updateQuestion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateQuestionMutationVariables,
  APITypes.UpdateQuestionMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const updateUserAchievement = /* GraphQL */ `mutation UpdateUserAchievement(
  $condition: ModelUserAchievementConditionInput
  $input: UpdateUserAchievementInput!
) {
  updateUserAchievement(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserAchievementMutationVariables,
  APITypes.UpdateUserAchievementMutation
>;
export const updateUserCourseEnrollment = /* GraphQL */ `mutation UpdateUserCourseEnrollment(
  $condition: ModelUserCourseEnrollmentConditionInput
  $input: UpdateUserCourseEnrollmentInput!
) {
  updateUserCourseEnrollment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserCourseEnrollmentMutationVariables,
  APITypes.UpdateUserCourseEnrollmentMutation
>;
export const updateUserLessonCompletion = /* GraphQL */ `mutation UpdateUserLessonCompletion(
  $condition: ModelUserLessonCompletionConditionInput
  $input: UpdateUserLessonCompletionInput!
) {
  updateUserLessonCompletion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserLessonCompletionMutationVariables,
  APITypes.UpdateUserLessonCompletionMutation
>;
export const updateUserModuleProgress = /* GraphQL */ `mutation UpdateUserModuleProgress(
  $condition: ModelUserModuleProgressConditionInput
  $input: UpdateUserModuleProgressInput!
) {
  updateUserModuleProgress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserModuleProgressMutationVariables,
  APITypes.UpdateUserModuleProgressMutation
>;
export const updateUserStats = /* GraphQL */ `mutation UpdateUserStats(
  $condition: ModelUserStatsConditionInput
  $input: UpdateUserStatsInput!
) {
  updateUserStats(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserStatsMutationVariables,
  APITypes.UpdateUserStatsMutation
>;
