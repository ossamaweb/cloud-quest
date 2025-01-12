/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Achievement = {
  __typename: "Achievement",
  category?: AchievementCategory | null,
  createdAt: string,
  description: string,
  icon?: string | null,
  id: string,
  name: string,
  owner?: string | null,
  pointValue?: number | null,
  updatedAt: string,
  userAchievements?: ModelUserAchievementConnection | null,
};

export enum AchievementCategory {
  COURSE = "COURSE",
  LESSON = "LESSON",
  POINTS = "POINTS",
  SPECIAL = "SPECIAL",
  STREAK = "STREAK",
}


export type ModelUserAchievementConnection = {
  __typename: "ModelUserAchievementConnection",
  items:  Array<UserAchievement | null >,
  nextToken?: string | null,
};

export type UserAchievement = {
  __typename: "UserAchievement",
  achievement?: Achievement | null,
  achievementId?: string | null,
  createdAt: string,
  earnedAt?: string | null,
  id: string,
  owner?: string | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export type User = {
  __typename: "User",
  achievements?: ModelUserAchievementConnection | null,
  courses?: ModelUserCourseEnrollmentConnection | null,
  createdAt: string,
  email: string,
  id: string,
  lessons?: ModelUserLessonCompletionConnection | null,
  owner?: string | null,
  profilePicture?: string | null,
  stats?: UserStats | null,
  status?: UserStatus | null,
  updatedAt: string,
  username: string,
};

export type ModelUserCourseEnrollmentConnection = {
  __typename: "ModelUserCourseEnrollmentConnection",
  items:  Array<UserCourseEnrollment | null >,
  nextToken?: string | null,
};

export type UserCourseEnrollment = {
  __typename: "UserCourseEnrollment",
  completionDate?: string | null,
  course?: Course | null,
  courseId?: string | null,
  createdAt: string,
  enrollmentDate: string,
  id: string,
  owner?: string | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export type Course = {
  __typename: "Course",
  createdAt: string,
  description?: string | null,
  enrolledUsers?: ModelUserCourseEnrollmentConnection | null,
  id: string,
  modules?: ModelModuleConnection | null,
  owner?: string | null,
  slug: string,
  status?: CourseStatus | null,
  title: string,
  updatedAt: string,
};

export type ModelModuleConnection = {
  __typename: "ModelModuleConnection",
  items:  Array<Module | null >,
  nextToken?: string | null,
};

export type Module = {
  __typename: "Module",
  course?: Course | null,
  courseId?: string | null,
  createdAt: string,
  description?: string | null,
  difficulty?: ModuleDifficulty | null,
  id: string,
  lessons?: ModelLessonConnection | null,
  order: number,
  owner?: string | null,
  slug: string,
  title: string,
  updatedAt: string,
};

export enum ModuleDifficulty {
  ADVANCED = "ADVANCED",
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
}


export type ModelLessonConnection = {
  __typename: "ModelLessonConnection",
  items:  Array<Lesson | null >,
  nextToken?: string | null,
};

export type Lesson = {
  __typename: "Lesson",
  about: string,
  createdAt: string,
  description: string,
  id: string,
  module?: Module | null,
  moduleId?: string | null,
  order: number,
  owner?: string | null,
  questions?: ModelQuestionConnection | null,
  slug: string,
  title: string,
  type?: LessonType | null,
  updatedAt: string,
  userCompletions?: ModelUserLessonCompletionConnection | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type Question = {
  __typename: "Question",
  createdAt: string,
  difficulty?: QuestionDifficulty | null,
  id: string,
  lesson?: Lesson | null,
  lessonId?: string | null,
  order: number,
  owner?: string | null,
  points: number,
  question: string,
  questionData: string,
  tags?: Array< string | null > | null,
  type?: QuestionType | null,
  updatedAt: string,
  version?: number | null,
};

export enum QuestionDifficulty {
  EASY = "EASY",
  HARD = "HARD",
  MEDIUM = "MEDIUM",
}


export enum QuestionType {
  DRAG_AND_DROP = "DRAG_AND_DROP",
  FILL_IN_THE_BLANK = "FILL_IN_THE_BLANK",
  IMAGE_IDENTIFICATION = "IMAGE_IDENTIFICATION",
  MATCHING = "MATCHING",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  ORDERING = "ORDERING",
  SCENARIO_BASED = "SCENARIO_BASED",
  SHORT_ANSWER = "SHORT_ANSWER",
  TRUE_FALSE = "TRUE_FALSE",
}


export enum LessonType {
  LESSON = "LESSON",
  PRACTICE = "PRACTICE",
}


export type ModelUserLessonCompletionConnection = {
  __typename: "ModelUserLessonCompletionConnection",
  items:  Array<UserLessonCompletion | null >,
  nextToken?: string | null,
};

export type UserLessonCompletion = {
  __typename: "UserLessonCompletion",
  accuracy: number,
  createdAt: string,
  duration: number,
  id: string,
  lesson?: Lesson | null,
  lessonId?: string | null,
  owner?: string | null,
  points: number,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export enum CourseStatus {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
  DRAFT = "DRAFT",
}


export type UserStats = {
  __typename: "UserStats",
  achievementsUnlocked?: number | null,
  coursesCompleted?: number | null,
  createdAt: string,
  id: string,
  lessonsCompleted?: number | null,
  longestStreak?: number | null,
  modulesCompleted?: number | null,
  owner?: string | null,
  points?: number | null,
  streak?: number | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}


export type ModelAchievementFilterInput = {
  and?: Array< ModelAchievementFilterInput | null > | null,
  category?: ModelAchievementCategoryInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelAchievementFilterInput | null,
  or?: Array< ModelAchievementFilterInput | null > | null,
  owner?: ModelStringInput | null,
  pointValue?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelAchievementCategoryInput = {
  eq?: AchievementCategory | null,
  ne?: AchievementCategory | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAchievementConnection = {
  __typename: "ModelAchievementConnection",
  items:  Array<Achievement | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  and?: Array< ModelCourseFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCourseFilterInput | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  owner?: ModelStringInput | null,
  slug?: ModelIDInput | null,
  status?: ModelCourseStatusInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCourseStatusInput = {
  eq?: CourseStatus | null,
  ne?: CourseStatus | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelLessonFilterInput = {
  about?: ModelStringInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  moduleId?: ModelIDInput | null,
  not?: ModelLessonFilterInput | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  slug?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelLessonTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelLessonTypeInput = {
  eq?: LessonType | null,
  ne?: LessonType | null,
};

export type ModelModuleFilterInput = {
  and?: Array< ModelModuleFilterInput | null > | null,
  courseId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  difficulty?: ModelModuleDifficultyInput | null,
  id?: ModelIDInput | null,
  not?: ModelModuleFilterInput | null,
  or?: Array< ModelModuleFilterInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  slug?: ModelIDInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelModuleDifficultyInput = {
  eq?: ModuleDifficulty | null,
  ne?: ModuleDifficulty | null,
};

export type ModelQuestionFilterInput = {
  and?: Array< ModelQuestionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  difficulty?: ModelQuestionDifficultyInput | null,
  id?: ModelIDInput | null,
  lessonId?: ModelIDInput | null,
  not?: ModelQuestionFilterInput | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  question?: ModelStringInput | null,
  questionData?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  type?: ModelQuestionTypeInput | null,
  updatedAt?: ModelStringInput | null,
  version?: ModelIntInput | null,
};

export type ModelQuestionDifficultyInput = {
  eq?: QuestionDifficulty | null,
  ne?: QuestionDifficulty | null,
};

export type ModelQuestionTypeInput = {
  eq?: QuestionType | null,
  ne?: QuestionType | null,
};

export type ModelUserAchievementFilterInput = {
  achievementId?: ModelIDInput | null,
  and?: Array< ModelUserAchievementFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  earnedAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserAchievementFilterInput | null,
  or?: Array< ModelUserAchievementFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelUserCourseEnrollmentFilterInput = {
  and?: Array< ModelUserCourseEnrollmentFilterInput | null > | null,
  completionDate?: ModelStringInput | null,
  courseId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  enrollmentDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserCourseEnrollmentFilterInput | null,
  or?: Array< ModelUserCourseEnrollmentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelUserLessonCompletionFilterInput = {
  accuracy?: ModelIntInput | null,
  and?: Array< ModelUserLessonCompletionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  id?: ModelIDInput | null,
  lessonId?: ModelIDInput | null,
  not?: ModelUserLessonCompletionFilterInput | null,
  or?: Array< ModelUserLessonCompletionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelUserStatsFilterInput = {
  achievementsUnlocked?: ModelIntInput | null,
  and?: Array< ModelUserStatsFilterInput | null > | null,
  coursesCompleted?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lessonsCompleted?: ModelIntInput | null,
  longestStreak?: ModelIntInput | null,
  modulesCompleted?: ModelIntInput | null,
  not?: ModelUserStatsFilterInput | null,
  or?: Array< ModelUserStatsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  streak?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelUserStatsConnection = {
  __typename: "ModelUserStatsConnection",
  items:  Array<UserStats | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserStatusInput = {
  eq?: UserStatus | null,
  ne?: UserStatus | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAchievementConditionInput = {
  and?: Array< ModelAchievementConditionInput | null > | null,
  category?: ModelAchievementCategoryInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelAchievementConditionInput | null,
  or?: Array< ModelAchievementConditionInput | null > | null,
  owner?: ModelStringInput | null,
  pointValue?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAchievementInput = {
  category?: AchievementCategory | null,
  description: string,
  icon?: string | null,
  id?: string | null,
  name: string,
  pointValue?: number | null,
};

export type ModelCourseConditionInput = {
  and?: Array< ModelCourseConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelCourseConditionInput | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  owner?: ModelStringInput | null,
  slug?: ModelIDInput | null,
  status?: ModelCourseStatusInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCourseInput = {
  description?: string | null,
  id?: string | null,
  slug: string,
  status?: CourseStatus | null,
  title: string,
};

export type ModelLessonConditionInput = {
  about?: ModelStringInput | null,
  and?: Array< ModelLessonConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  moduleId?: ModelIDInput | null,
  not?: ModelLessonConditionInput | null,
  or?: Array< ModelLessonConditionInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  slug?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelLessonTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateLessonInput = {
  about: string,
  description: string,
  id?: string | null,
  moduleId?: string | null,
  order: number,
  slug: string,
  title: string,
  type?: LessonType | null,
};

export type ModelModuleConditionInput = {
  and?: Array< ModelModuleConditionInput | null > | null,
  courseId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  difficulty?: ModelModuleDifficultyInput | null,
  not?: ModelModuleConditionInput | null,
  or?: Array< ModelModuleConditionInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  slug?: ModelIDInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateModuleInput = {
  courseId?: string | null,
  description?: string | null,
  difficulty?: ModuleDifficulty | null,
  id?: string | null,
  order: number,
  slug: string,
  title: string,
};

export type ModelQuestionConditionInput = {
  and?: Array< ModelQuestionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  difficulty?: ModelQuestionDifficultyInput | null,
  lessonId?: ModelIDInput | null,
  not?: ModelQuestionConditionInput | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  question?: ModelStringInput | null,
  questionData?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  type?: ModelQuestionTypeInput | null,
  updatedAt?: ModelStringInput | null,
  version?: ModelIntInput | null,
};

export type CreateQuestionInput = {
  difficulty?: QuestionDifficulty | null,
  id?: string | null,
  lessonId?: string | null,
  order: number,
  points: number,
  question: string,
  questionData: string,
  tags?: Array< string | null > | null,
  type?: QuestionType | null,
  version?: number | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  email: string,
  id?: string | null,
  profilePicture?: string | null,
  status?: UserStatus | null,
  username: string,
};

export type ModelUserAchievementConditionInput = {
  achievementId?: ModelIDInput | null,
  and?: Array< ModelUserAchievementConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  earnedAt?: ModelStringInput | null,
  not?: ModelUserAchievementConditionInput | null,
  or?: Array< ModelUserAchievementConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateUserAchievementInput = {
  achievementId?: string | null,
  earnedAt?: string | null,
  id?: string | null,
  userId?: string | null,
};

export type ModelUserCourseEnrollmentConditionInput = {
  and?: Array< ModelUserCourseEnrollmentConditionInput | null > | null,
  completionDate?: ModelStringInput | null,
  courseId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  enrollmentDate?: ModelStringInput | null,
  not?: ModelUserCourseEnrollmentConditionInput | null,
  or?: Array< ModelUserCourseEnrollmentConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateUserCourseEnrollmentInput = {
  completionDate?: string | null,
  courseId?: string | null,
  enrollmentDate: string,
  id?: string | null,
  userId?: string | null,
};

export type ModelUserLessonCompletionConditionInput = {
  accuracy?: ModelIntInput | null,
  and?: Array< ModelUserLessonCompletionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  lessonId?: ModelIDInput | null,
  not?: ModelUserLessonCompletionConditionInput | null,
  or?: Array< ModelUserLessonCompletionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateUserLessonCompletionInput = {
  accuracy: number,
  duration: number,
  id?: string | null,
  lessonId?: string | null,
  points: number,
  userId?: string | null,
};

export type ModelUserStatsConditionInput = {
  achievementsUnlocked?: ModelIntInput | null,
  and?: Array< ModelUserStatsConditionInput | null > | null,
  coursesCompleted?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  lessonsCompleted?: ModelIntInput | null,
  longestStreak?: ModelIntInput | null,
  modulesCompleted?: ModelIntInput | null,
  not?: ModelUserStatsConditionInput | null,
  or?: Array< ModelUserStatsConditionInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  streak?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateUserStatsInput = {
  achievementsUnlocked?: number | null,
  coursesCompleted?: number | null,
  id?: string | null,
  lessonsCompleted?: number | null,
  longestStreak?: number | null,
  modulesCompleted?: number | null,
  points?: number | null,
  streak?: number | null,
  userId?: string | null,
};

export type DeleteAchievementInput = {
  id: string,
};

export type DeleteCourseInput = {
  id: string,
};

export type DeleteLessonInput = {
  id: string,
};

export type DeleteModuleInput = {
  id: string,
};

export type DeleteQuestionInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type DeleteUserAchievementInput = {
  id: string,
};

export type DeleteUserCourseEnrollmentInput = {
  id: string,
};

export type DeleteUserLessonCompletionInput = {
  id: string,
};

export type DeleteUserStatsInput = {
  id: string,
};

export type UpdateAchievementInput = {
  category?: AchievementCategory | null,
  description?: string | null,
  icon?: string | null,
  id: string,
  name?: string | null,
  pointValue?: number | null,
};

export type UpdateCourseInput = {
  description?: string | null,
  id: string,
  slug?: string | null,
  status?: CourseStatus | null,
  title?: string | null,
};

export type UpdateLessonInput = {
  about?: string | null,
  description?: string | null,
  id: string,
  moduleId?: string | null,
  order?: number | null,
  slug?: string | null,
  title?: string | null,
  type?: LessonType | null,
};

export type UpdateModuleInput = {
  courseId?: string | null,
  description?: string | null,
  difficulty?: ModuleDifficulty | null,
  id: string,
  order?: number | null,
  slug?: string | null,
  title?: string | null,
};

export type UpdateQuestionInput = {
  difficulty?: QuestionDifficulty | null,
  id: string,
  lessonId?: string | null,
  order?: number | null,
  points?: number | null,
  question?: string | null,
  questionData?: string | null,
  tags?: Array< string | null > | null,
  type?: QuestionType | null,
  version?: number | null,
};

export type UpdateUserInput = {
  email?: string | null,
  id: string,
  profilePicture?: string | null,
  status?: UserStatus | null,
  username?: string | null,
};

export type UpdateUserAchievementInput = {
  achievementId?: string | null,
  earnedAt?: string | null,
  id: string,
  userId?: string | null,
};

export type UpdateUserCourseEnrollmentInput = {
  completionDate?: string | null,
  courseId?: string | null,
  enrollmentDate?: string | null,
  id: string,
  userId?: string | null,
};

export type UpdateUserLessonCompletionInput = {
  accuracy?: number | null,
  duration?: number | null,
  id: string,
  lessonId?: string | null,
  points?: number | null,
  userId?: string | null,
};

export type UpdateUserStatsInput = {
  achievementsUnlocked?: number | null,
  coursesCompleted?: number | null,
  id: string,
  lessonsCompleted?: number | null,
  longestStreak?: number | null,
  modulesCompleted?: number | null,
  points?: number | null,
  streak?: number | null,
  userId?: string | null,
};

export type ModelSubscriptionAchievementFilterInput = {
  and?: Array< ModelSubscriptionAchievementFilterInput | null > | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAchievementFilterInput | null > | null,
  owner?: ModelStringInput | null,
  pointValue?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCourseFilterInput = {
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  owner?: ModelStringInput | null,
  slug?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionLessonFilterInput = {
  about?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLessonFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  moduleId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionLessonFilterInput | null > | null,
  order?: ModelSubscriptionIntInput | null,
  owner?: ModelStringInput | null,
  slug?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionModuleFilterInput = {
  and?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  courseId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  order?: ModelSubscriptionIntInput | null,
  owner?: ModelStringInput | null,
  slug?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lessonId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  order?: ModelSubscriptionIntInput | null,
  owner?: ModelStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  question?: ModelSubscriptionStringInput | null,
  questionData?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  version?: ModelSubscriptionIntInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserAchievementFilterInput = {
  achievementId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserAchievementFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  earnedAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserAchievementFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserCourseEnrollmentFilterInput = {
  and?: Array< ModelSubscriptionUserCourseEnrollmentFilterInput | null > | null,
  completionDate?: ModelSubscriptionStringInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  enrollmentDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserCourseEnrollmentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserLessonCompletionFilterInput = {
  accuracy?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserLessonCompletionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  lessonId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserLessonCompletionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserStatsFilterInput = {
  achievementsUnlocked?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserStatsFilterInput | null > | null,
  coursesCompleted?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lessonsCompleted?: ModelSubscriptionIntInput | null,
  longestStreak?: ModelSubscriptionIntInput | null,
  modulesCompleted?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionUserStatsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  streak?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type GetAchievementQueryVariables = {
  id: string,
};

export type GetAchievementQuery = {
  getAchievement?:  {
    __typename: "Achievement",
    category?: AchievementCategory | null,
    createdAt: string,
    description: string,
    icon?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    pointValue?: number | null,
    updatedAt: string,
    userAchievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    enrolledUsers?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    slug: string,
    status?: CourseStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetLessonQueryVariables = {
  id: string,
};

export type GetLessonQuery = {
  getLesson?:  {
    __typename: "Lesson",
    about: string,
    createdAt: string,
    description: string,
    id: string,
    module?:  {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null,
    moduleId?: string | null,
    order: number,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    slug: string,
    title: string,
    type?: LessonType | null,
    updatedAt: string,
    userCompletions?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetModuleQueryVariables = {
  id: string,
};

export type GetModuleQuery = {
  getModule?:  {
    __typename: "Module",
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    description?: string | null,
    difficulty?: ModuleDifficulty | null,
    id: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    owner?: string | null,
    slug: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    createdAt: string,
    difficulty?: QuestionDifficulty | null,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    order: number,
    owner?: string | null,
    points: number,
    question: string,
    questionData: string,
    tags?: Array< string | null > | null,
    type?: QuestionType | null,
    updatedAt: string,
    version?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    achievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    lessons?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    stats?:  {
      __typename: "UserStats",
      achievementsUnlocked?: number | null,
      coursesCompleted?: number | null,
      createdAt: string,
      id: string,
      lessonsCompleted?: number | null,
      longestStreak?: number | null,
      modulesCompleted?: number | null,
      owner?: string | null,
      points?: number | null,
      streak?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    status?: UserStatus | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type GetUserAchievementQueryVariables = {
  id: string,
};

export type GetUserAchievementQuery = {
  getUserAchievement?:  {
    __typename: "UserAchievement",
    achievement?:  {
      __typename: "Achievement",
      category?: AchievementCategory | null,
      createdAt: string,
      description: string,
      icon?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      pointValue?: number | null,
      updatedAt: string,
    } | null,
    achievementId?: string | null,
    createdAt: string,
    earnedAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetUserCourseEnrollmentQueryVariables = {
  id: string,
};

export type GetUserCourseEnrollmentQuery = {
  getUserCourseEnrollment?:  {
    __typename: "UserCourseEnrollment",
    completionDate?: string | null,
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    enrollmentDate: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetUserLessonCompletionQueryVariables = {
  id: string,
};

export type GetUserLessonCompletionQuery = {
  getUserLessonCompletion?:  {
    __typename: "UserLessonCompletion",
    accuracy: number,
    createdAt: string,
    duration: number,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    owner?: string | null,
    points: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetUserStatsQueryVariables = {
  id: string,
};

export type GetUserStatsQuery = {
  getUserStats?:  {
    __typename: "UserStats",
    achievementsUnlocked?: number | null,
    coursesCompleted?: number | null,
    createdAt: string,
    id: string,
    lessonsCompleted?: number | null,
    longestStreak?: number | null,
    modulesCompleted?: number | null,
    owner?: string | null,
    points?: number | null,
    streak?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type ListAchievementsQueryVariables = {
  filter?: ModelAchievementFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAchievementsQuery = {
  listAchievements?:  {
    __typename: "ModelAchievementConnection",
    items:  Array< {
      __typename: "Achievement",
      category?: AchievementCategory | null,
      createdAt: string,
      description: string,
      icon?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      pointValue?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCourseBySlugQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  slug: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListCourseBySlugQuery = {
  listCourseBySlug?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLessonBySlugQueryVariables = {
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  slug: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListLessonBySlugQuery = {
  listLessonBySlug?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLessonsQueryVariables = {
  filter?: ModelLessonFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLessonsQuery = {
  listLessons?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListModuleBySlugQueryVariables = {
  filter?: ModelModuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  slug: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListModuleBySlugQuery = {
  listModuleBySlug?:  {
    __typename: "ModelModuleConnection",
    items:  Array< {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListModulesQueryVariables = {
  filter?: ModelModuleFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListModulesQuery = {
  listModules?:  {
    __typename: "ModelModuleConnection",
    items:  Array< {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      createdAt: string,
      difficulty?: QuestionDifficulty | null,
      id: string,
      lessonId?: string | null,
      order: number,
      owner?: string | null,
      points: number,
      question: string,
      questionData: string,
      tags?: Array< string | null > | null,
      type?: QuestionType | null,
      updatedAt: string,
      version?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserAchievementsQueryVariables = {
  filter?: ModelUserAchievementFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserAchievementsQuery = {
  listUserAchievements?:  {
    __typename: "ModelUserAchievementConnection",
    items:  Array< {
      __typename: "UserAchievement",
      achievementId?: string | null,
      createdAt: string,
      earnedAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserCourseEnrollmentsQueryVariables = {
  filter?: ModelUserCourseEnrollmentFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserCourseEnrollmentsQuery = {
  listUserCourseEnrollments?:  {
    __typename: "ModelUserCourseEnrollmentConnection",
    items:  Array< {
      __typename: "UserCourseEnrollment",
      completionDate?: string | null,
      courseId?: string | null,
      createdAt: string,
      enrollmentDate: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserLessonCompletionsQueryVariables = {
  filter?: ModelUserLessonCompletionFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserLessonCompletionsQuery = {
  listUserLessonCompletions?:  {
    __typename: "ModelUserLessonCompletionConnection",
    items:  Array< {
      __typename: "UserLessonCompletion",
      accuracy: number,
      createdAt: string,
      duration: number,
      id: string,
      lessonId?: string | null,
      owner?: string | null,
      points: number,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserStatsQueryVariables = {
  filter?: ModelUserStatsFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserStatsQuery = {
  listUserStats?:  {
    __typename: "ModelUserStatsConnection",
    items:  Array< {
      __typename: "UserStats",
      achievementsUnlocked?: number | null,
      coursesCompleted?: number | null,
      createdAt: string,
      id: string,
      lessonsCompleted?: number | null,
      longestStreak?: number | null,
      modulesCompleted?: number | null,
      owner?: string | null,
      points?: number | null,
      streak?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAchievementMutationVariables = {
  condition?: ModelAchievementConditionInput | null,
  input: CreateAchievementInput,
};

export type CreateAchievementMutation = {
  createAchievement?:  {
    __typename: "Achievement",
    category?: AchievementCategory | null,
    createdAt: string,
    description: string,
    icon?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    pointValue?: number | null,
    updatedAt: string,
    userAchievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCourseMutationVariables = {
  condition?: ModelCourseConditionInput | null,
  input: CreateCourseInput,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    enrolledUsers?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    slug: string,
    status?: CourseStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type CreateLessonMutationVariables = {
  condition?: ModelLessonConditionInput | null,
  input: CreateLessonInput,
};

export type CreateLessonMutation = {
  createLesson?:  {
    __typename: "Lesson",
    about: string,
    createdAt: string,
    description: string,
    id: string,
    module?:  {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null,
    moduleId?: string | null,
    order: number,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    slug: string,
    title: string,
    type?: LessonType | null,
    updatedAt: string,
    userCompletions?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateModuleMutationVariables = {
  condition?: ModelModuleConditionInput | null,
  input: CreateModuleInput,
};

export type CreateModuleMutation = {
  createModule?:  {
    __typename: "Module",
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    description?: string | null,
    difficulty?: ModuleDifficulty | null,
    id: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    owner?: string | null,
    slug: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: CreateQuestionInput,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    createdAt: string,
    difficulty?: QuestionDifficulty | null,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    order: number,
    owner?: string | null,
    points: number,
    question: string,
    questionData: string,
    tags?: Array< string | null > | null,
    type?: QuestionType | null,
    updatedAt: string,
    version?: number | null,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    achievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    lessons?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    stats?:  {
      __typename: "UserStats",
      achievementsUnlocked?: number | null,
      coursesCompleted?: number | null,
      createdAt: string,
      id: string,
      lessonsCompleted?: number | null,
      longestStreak?: number | null,
      modulesCompleted?: number | null,
      owner?: string | null,
      points?: number | null,
      streak?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    status?: UserStatus | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type CreateUserAchievementMutationVariables = {
  condition?: ModelUserAchievementConditionInput | null,
  input: CreateUserAchievementInput,
};

export type CreateUserAchievementMutation = {
  createUserAchievement?:  {
    __typename: "UserAchievement",
    achievement?:  {
      __typename: "Achievement",
      category?: AchievementCategory | null,
      createdAt: string,
      description: string,
      icon?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      pointValue?: number | null,
      updatedAt: string,
    } | null,
    achievementId?: string | null,
    createdAt: string,
    earnedAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateUserCourseEnrollmentMutationVariables = {
  condition?: ModelUserCourseEnrollmentConditionInput | null,
  input: CreateUserCourseEnrollmentInput,
};

export type CreateUserCourseEnrollmentMutation = {
  createUserCourseEnrollment?:  {
    __typename: "UserCourseEnrollment",
    completionDate?: string | null,
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    enrollmentDate: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateUserLessonCompletionMutationVariables = {
  condition?: ModelUserLessonCompletionConditionInput | null,
  input: CreateUserLessonCompletionInput,
};

export type CreateUserLessonCompletionMutation = {
  createUserLessonCompletion?:  {
    __typename: "UserLessonCompletion",
    accuracy: number,
    createdAt: string,
    duration: number,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    owner?: string | null,
    points: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateUserStatsMutationVariables = {
  condition?: ModelUserStatsConditionInput | null,
  input: CreateUserStatsInput,
};

export type CreateUserStatsMutation = {
  createUserStats?:  {
    __typename: "UserStats",
    achievementsUnlocked?: number | null,
    coursesCompleted?: number | null,
    createdAt: string,
    id: string,
    lessonsCompleted?: number | null,
    longestStreak?: number | null,
    modulesCompleted?: number | null,
    owner?: string | null,
    points?: number | null,
    streak?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteAchievementMutationVariables = {
  condition?: ModelAchievementConditionInput | null,
  input: DeleteAchievementInput,
};

export type DeleteAchievementMutation = {
  deleteAchievement?:  {
    __typename: "Achievement",
    category?: AchievementCategory | null,
    createdAt: string,
    description: string,
    icon?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    pointValue?: number | null,
    updatedAt: string,
    userAchievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteCourseMutationVariables = {
  condition?: ModelCourseConditionInput | null,
  input: DeleteCourseInput,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    enrolledUsers?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    slug: string,
    status?: CourseStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteLessonMutationVariables = {
  condition?: ModelLessonConditionInput | null,
  input: DeleteLessonInput,
};

export type DeleteLessonMutation = {
  deleteLesson?:  {
    __typename: "Lesson",
    about: string,
    createdAt: string,
    description: string,
    id: string,
    module?:  {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null,
    moduleId?: string | null,
    order: number,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    slug: string,
    title: string,
    type?: LessonType | null,
    updatedAt: string,
    userCompletions?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteModuleMutationVariables = {
  condition?: ModelModuleConditionInput | null,
  input: DeleteModuleInput,
};

export type DeleteModuleMutation = {
  deleteModule?:  {
    __typename: "Module",
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    description?: string | null,
    difficulty?: ModuleDifficulty | null,
    id: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    owner?: string | null,
    slug: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: DeleteQuestionInput,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    createdAt: string,
    difficulty?: QuestionDifficulty | null,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    order: number,
    owner?: string | null,
    points: number,
    question: string,
    questionData: string,
    tags?: Array< string | null > | null,
    type?: QuestionType | null,
    updatedAt: string,
    version?: number | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    achievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    lessons?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    stats?:  {
      __typename: "UserStats",
      achievementsUnlocked?: number | null,
      coursesCompleted?: number | null,
      createdAt: string,
      id: string,
      lessonsCompleted?: number | null,
      longestStreak?: number | null,
      modulesCompleted?: number | null,
      owner?: string | null,
      points?: number | null,
      streak?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    status?: UserStatus | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type DeleteUserAchievementMutationVariables = {
  condition?: ModelUserAchievementConditionInput | null,
  input: DeleteUserAchievementInput,
};

export type DeleteUserAchievementMutation = {
  deleteUserAchievement?:  {
    __typename: "UserAchievement",
    achievement?:  {
      __typename: "Achievement",
      category?: AchievementCategory | null,
      createdAt: string,
      description: string,
      icon?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      pointValue?: number | null,
      updatedAt: string,
    } | null,
    achievementId?: string | null,
    createdAt: string,
    earnedAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteUserCourseEnrollmentMutationVariables = {
  condition?: ModelUserCourseEnrollmentConditionInput | null,
  input: DeleteUserCourseEnrollmentInput,
};

export type DeleteUserCourseEnrollmentMutation = {
  deleteUserCourseEnrollment?:  {
    __typename: "UserCourseEnrollment",
    completionDate?: string | null,
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    enrollmentDate: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteUserLessonCompletionMutationVariables = {
  condition?: ModelUserLessonCompletionConditionInput | null,
  input: DeleteUserLessonCompletionInput,
};

export type DeleteUserLessonCompletionMutation = {
  deleteUserLessonCompletion?:  {
    __typename: "UserLessonCompletion",
    accuracy: number,
    createdAt: string,
    duration: number,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    owner?: string | null,
    points: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteUserStatsMutationVariables = {
  condition?: ModelUserStatsConditionInput | null,
  input: DeleteUserStatsInput,
};

export type DeleteUserStatsMutation = {
  deleteUserStats?:  {
    __typename: "UserStats",
    achievementsUnlocked?: number | null,
    coursesCompleted?: number | null,
    createdAt: string,
    id: string,
    lessonsCompleted?: number | null,
    longestStreak?: number | null,
    modulesCompleted?: number | null,
    owner?: string | null,
    points?: number | null,
    streak?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateAchievementMutationVariables = {
  condition?: ModelAchievementConditionInput | null,
  input: UpdateAchievementInput,
};

export type UpdateAchievementMutation = {
  updateAchievement?:  {
    __typename: "Achievement",
    category?: AchievementCategory | null,
    createdAt: string,
    description: string,
    icon?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    pointValue?: number | null,
    updatedAt: string,
    userAchievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateCourseMutationVariables = {
  condition?: ModelCourseConditionInput | null,
  input: UpdateCourseInput,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    enrolledUsers?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    slug: string,
    status?: CourseStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateLessonMutationVariables = {
  condition?: ModelLessonConditionInput | null,
  input: UpdateLessonInput,
};

export type UpdateLessonMutation = {
  updateLesson?:  {
    __typename: "Lesson",
    about: string,
    createdAt: string,
    description: string,
    id: string,
    module?:  {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null,
    moduleId?: string | null,
    order: number,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    slug: string,
    title: string,
    type?: LessonType | null,
    updatedAt: string,
    userCompletions?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateModuleMutationVariables = {
  condition?: ModelModuleConditionInput | null,
  input: UpdateModuleInput,
};

export type UpdateModuleMutation = {
  updateModule?:  {
    __typename: "Module",
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    description?: string | null,
    difficulty?: ModuleDifficulty | null,
    id: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    owner?: string | null,
    slug: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: UpdateQuestionInput,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    createdAt: string,
    difficulty?: QuestionDifficulty | null,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    order: number,
    owner?: string | null,
    points: number,
    question: string,
    questionData: string,
    tags?: Array< string | null > | null,
    type?: QuestionType | null,
    updatedAt: string,
    version?: number | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    achievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    lessons?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    stats?:  {
      __typename: "UserStats",
      achievementsUnlocked?: number | null,
      coursesCompleted?: number | null,
      createdAt: string,
      id: string,
      lessonsCompleted?: number | null,
      longestStreak?: number | null,
      modulesCompleted?: number | null,
      owner?: string | null,
      points?: number | null,
      streak?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    status?: UserStatus | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type UpdateUserAchievementMutationVariables = {
  condition?: ModelUserAchievementConditionInput | null,
  input: UpdateUserAchievementInput,
};

export type UpdateUserAchievementMutation = {
  updateUserAchievement?:  {
    __typename: "UserAchievement",
    achievement?:  {
      __typename: "Achievement",
      category?: AchievementCategory | null,
      createdAt: string,
      description: string,
      icon?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      pointValue?: number | null,
      updatedAt: string,
    } | null,
    achievementId?: string | null,
    createdAt: string,
    earnedAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateUserCourseEnrollmentMutationVariables = {
  condition?: ModelUserCourseEnrollmentConditionInput | null,
  input: UpdateUserCourseEnrollmentInput,
};

export type UpdateUserCourseEnrollmentMutation = {
  updateUserCourseEnrollment?:  {
    __typename: "UserCourseEnrollment",
    completionDate?: string | null,
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    enrollmentDate: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateUserLessonCompletionMutationVariables = {
  condition?: ModelUserLessonCompletionConditionInput | null,
  input: UpdateUserLessonCompletionInput,
};

export type UpdateUserLessonCompletionMutation = {
  updateUserLessonCompletion?:  {
    __typename: "UserLessonCompletion",
    accuracy: number,
    createdAt: string,
    duration: number,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    owner?: string | null,
    points: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateUserStatsMutationVariables = {
  condition?: ModelUserStatsConditionInput | null,
  input: UpdateUserStatsInput,
};

export type UpdateUserStatsMutation = {
  updateUserStats?:  {
    __typename: "UserStats",
    achievementsUnlocked?: number | null,
    coursesCompleted?: number | null,
    createdAt: string,
    id: string,
    lessonsCompleted?: number | null,
    longestStreak?: number | null,
    modulesCompleted?: number | null,
    owner?: string | null,
    points?: number | null,
    streak?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateAchievementSubscriptionVariables = {
  filter?: ModelSubscriptionAchievementFilterInput | null,
  owner?: string | null,
};

export type OnCreateAchievementSubscription = {
  onCreateAchievement?:  {
    __typename: "Achievement",
    category?: AchievementCategory | null,
    createdAt: string,
    description: string,
    icon?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    pointValue?: number | null,
    updatedAt: string,
    userAchievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    enrolledUsers?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    slug: string,
    status?: CourseStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
  owner?: string | null,
};

export type OnCreateLessonSubscription = {
  onCreateLesson?:  {
    __typename: "Lesson",
    about: string,
    createdAt: string,
    description: string,
    id: string,
    module?:  {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null,
    moduleId?: string | null,
    order: number,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    slug: string,
    title: string,
    type?: LessonType | null,
    updatedAt: string,
    userCompletions?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
  owner?: string | null,
};

export type OnCreateModuleSubscription = {
  onCreateModule?:  {
    __typename: "Module",
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    description?: string | null,
    difficulty?: ModuleDifficulty | null,
    id: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    owner?: string | null,
    slug: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
  owner?: string | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    createdAt: string,
    difficulty?: QuestionDifficulty | null,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    order: number,
    owner?: string | null,
    points: number,
    question: string,
    questionData: string,
    tags?: Array< string | null > | null,
    type?: QuestionType | null,
    updatedAt: string,
    version?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    achievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    lessons?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    stats?:  {
      __typename: "UserStats",
      achievementsUnlocked?: number | null,
      coursesCompleted?: number | null,
      createdAt: string,
      id: string,
      lessonsCompleted?: number | null,
      longestStreak?: number | null,
      modulesCompleted?: number | null,
      owner?: string | null,
      points?: number | null,
      streak?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    status?: UserStatus | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnCreateUserAchievementSubscriptionVariables = {
  filter?: ModelSubscriptionUserAchievementFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserAchievementSubscription = {
  onCreateUserAchievement?:  {
    __typename: "UserAchievement",
    achievement?:  {
      __typename: "Achievement",
      category?: AchievementCategory | null,
      createdAt: string,
      description: string,
      icon?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      pointValue?: number | null,
      updatedAt: string,
    } | null,
    achievementId?: string | null,
    createdAt: string,
    earnedAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateUserCourseEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionUserCourseEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserCourseEnrollmentSubscription = {
  onCreateUserCourseEnrollment?:  {
    __typename: "UserCourseEnrollment",
    completionDate?: string | null,
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    enrollmentDate: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateUserLessonCompletionSubscriptionVariables = {
  filter?: ModelSubscriptionUserLessonCompletionFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserLessonCompletionSubscription = {
  onCreateUserLessonCompletion?:  {
    __typename: "UserLessonCompletion",
    accuracy: number,
    createdAt: string,
    duration: number,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    owner?: string | null,
    points: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserStatsSubscription = {
  onCreateUserStats?:  {
    __typename: "UserStats",
    achievementsUnlocked?: number | null,
    coursesCompleted?: number | null,
    createdAt: string,
    id: string,
    lessonsCompleted?: number | null,
    longestStreak?: number | null,
    modulesCompleted?: number | null,
    owner?: string | null,
    points?: number | null,
    streak?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteAchievementSubscriptionVariables = {
  filter?: ModelSubscriptionAchievementFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAchievementSubscription = {
  onDeleteAchievement?:  {
    __typename: "Achievement",
    category?: AchievementCategory | null,
    createdAt: string,
    description: string,
    icon?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    pointValue?: number | null,
    updatedAt: string,
    userAchievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    enrolledUsers?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    slug: string,
    status?: CourseStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLessonSubscription = {
  onDeleteLesson?:  {
    __typename: "Lesson",
    about: string,
    createdAt: string,
    description: string,
    id: string,
    module?:  {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null,
    moduleId?: string | null,
    order: number,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    slug: string,
    title: string,
    type?: LessonType | null,
    updatedAt: string,
    userCompletions?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteModuleSubscription = {
  onDeleteModule?:  {
    __typename: "Module",
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    description?: string | null,
    difficulty?: ModuleDifficulty | null,
    id: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    owner?: string | null,
    slug: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    createdAt: string,
    difficulty?: QuestionDifficulty | null,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    order: number,
    owner?: string | null,
    points: number,
    question: string,
    questionData: string,
    tags?: Array< string | null > | null,
    type?: QuestionType | null,
    updatedAt: string,
    version?: number | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    achievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    lessons?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    stats?:  {
      __typename: "UserStats",
      achievementsUnlocked?: number | null,
      coursesCompleted?: number | null,
      createdAt: string,
      id: string,
      lessonsCompleted?: number | null,
      longestStreak?: number | null,
      modulesCompleted?: number | null,
      owner?: string | null,
      points?: number | null,
      streak?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    status?: UserStatus | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnDeleteUserAchievementSubscriptionVariables = {
  filter?: ModelSubscriptionUserAchievementFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserAchievementSubscription = {
  onDeleteUserAchievement?:  {
    __typename: "UserAchievement",
    achievement?:  {
      __typename: "Achievement",
      category?: AchievementCategory | null,
      createdAt: string,
      description: string,
      icon?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      pointValue?: number | null,
      updatedAt: string,
    } | null,
    achievementId?: string | null,
    createdAt: string,
    earnedAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteUserCourseEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionUserCourseEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserCourseEnrollmentSubscription = {
  onDeleteUserCourseEnrollment?:  {
    __typename: "UserCourseEnrollment",
    completionDate?: string | null,
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    enrollmentDate: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteUserLessonCompletionSubscriptionVariables = {
  filter?: ModelSubscriptionUserLessonCompletionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserLessonCompletionSubscription = {
  onDeleteUserLessonCompletion?:  {
    __typename: "UserLessonCompletion",
    accuracy: number,
    createdAt: string,
    duration: number,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    owner?: string | null,
    points: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserStatsSubscription = {
  onDeleteUserStats?:  {
    __typename: "UserStats",
    achievementsUnlocked?: number | null,
    coursesCompleted?: number | null,
    createdAt: string,
    id: string,
    lessonsCompleted?: number | null,
    longestStreak?: number | null,
    modulesCompleted?: number | null,
    owner?: string | null,
    points?: number | null,
    streak?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateAchievementSubscriptionVariables = {
  filter?: ModelSubscriptionAchievementFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAchievementSubscription = {
  onUpdateAchievement?:  {
    __typename: "Achievement",
    category?: AchievementCategory | null,
    createdAt: string,
    description: string,
    icon?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    pointValue?: number | null,
    updatedAt: string,
    userAchievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    enrolledUsers?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    modules?:  {
      __typename: "ModelModuleConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    slug: string,
    status?: CourseStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLessonSubscription = {
  onUpdateLesson?:  {
    __typename: "Lesson",
    about: string,
    createdAt: string,
    description: string,
    id: string,
    module?:  {
      __typename: "Module",
      courseId?: string | null,
      createdAt: string,
      description?: string | null,
      difficulty?: ModuleDifficulty | null,
      id: string,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      updatedAt: string,
    } | null,
    moduleId?: string | null,
    order: number,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    slug: string,
    title: string,
    type?: LessonType | null,
    updatedAt: string,
    userCompletions?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateModuleSubscription = {
  onUpdateModule?:  {
    __typename: "Module",
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    description?: string | null,
    difficulty?: ModuleDifficulty | null,
    id: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    owner?: string | null,
    slug: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    createdAt: string,
    difficulty?: QuestionDifficulty | null,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    order: number,
    owner?: string | null,
    points: number,
    question: string,
    questionData: string,
    tags?: Array< string | null > | null,
    type?: QuestionType | null,
    updatedAt: string,
    version?: number | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    achievements?:  {
      __typename: "ModelUserAchievementConnection",
      nextToken?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelUserCourseEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    lessons?:  {
      __typename: "ModelUserLessonCompletionConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    stats?:  {
      __typename: "UserStats",
      achievementsUnlocked?: number | null,
      coursesCompleted?: number | null,
      createdAt: string,
      id: string,
      lessonsCompleted?: number | null,
      longestStreak?: number | null,
      modulesCompleted?: number | null,
      owner?: string | null,
      points?: number | null,
      streak?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    status?: UserStatus | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnUpdateUserAchievementSubscriptionVariables = {
  filter?: ModelSubscriptionUserAchievementFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserAchievementSubscription = {
  onUpdateUserAchievement?:  {
    __typename: "UserAchievement",
    achievement?:  {
      __typename: "Achievement",
      category?: AchievementCategory | null,
      createdAt: string,
      description: string,
      icon?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      pointValue?: number | null,
      updatedAt: string,
    } | null,
    achievementId?: string | null,
    createdAt: string,
    earnedAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateUserCourseEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionUserCourseEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserCourseEnrollmentSubscription = {
  onUpdateUserCourseEnrollment?:  {
    __typename: "UserCourseEnrollment",
    completionDate?: string | null,
    course?:  {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      owner?: string | null,
      slug: string,
      status?: CourseStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    courseId?: string | null,
    createdAt: string,
    enrollmentDate: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateUserLessonCompletionSubscriptionVariables = {
  filter?: ModelSubscriptionUserLessonCompletionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserLessonCompletionSubscription = {
  onUpdateUserLessonCompletion?:  {
    __typename: "UserLessonCompletion",
    accuracy: number,
    createdAt: string,
    duration: number,
    id: string,
    lesson?:  {
      __typename: "Lesson",
      about: string,
      createdAt: string,
      description: string,
      id: string,
      moduleId?: string | null,
      order: number,
      owner?: string | null,
      slug: string,
      title: string,
      type?: LessonType | null,
      updatedAt: string,
    } | null,
    lessonId?: string | null,
    owner?: string | null,
    points: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserStatsSubscription = {
  onUpdateUserStats?:  {
    __typename: "UserStats",
    achievementsUnlocked?: number | null,
    coursesCompleted?: number | null,
    createdAt: string,
    id: string,
    lessonsCompleted?: number | null,
    longestStreak?: number | null,
    modulesCompleted?: number | null,
    owner?: string | null,
    points?: number | null,
    streak?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      owner?: string | null,
      profilePicture?: string | null,
      status?: UserStatus | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};
