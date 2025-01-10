import { type Schema } from "@/amplify/data/schema";
import { SelectionSet } from "aws-amplify/api";

export const currentUserSelectionSet = [
  "id",
  "status",
  "email",
  "username",
  "profilePicture",
  "stats.*",
  "courses.*",
  "courses.course.*",
] as const;
export type CurrentUserSelectionSet = typeof currentUserSelectionSet;
export type UserWithStats = SelectionSet<
  Schema["User"]["type"],
  CurrentUserSelectionSet
>;

export const listModulesSelectionSet = [
  "id",
  "slug",
  "order",
  "title",
  "description",
  "courseId",
  "difficulty",
  "lessons.*",
  "userProgress.*",
] as const;
export type ListModulesSelectionSet = typeof listModulesSelectionSet;
export type ListModule = SelectionSet<
  Schema["Module"]["type"],
  ListModulesSelectionSet
>;

export const getLessonSelectionSet = [
  "id",
  "slug",
  "title",
  "content",
  "order",
  "type",
  "moduleId",
  "questions.*",
  "module.userProgress.*",
] as const;
export type GetLessonSelectionSet = typeof getLessonSelectionSet;
export type GetLesson = SelectionSet<
  Schema["Lesson"]["type"],
  GetLessonSelectionSet
>;

export const createUserLessonCompletionSet = [
  "id",
  "userId",
  "lessonId",
  "lesson.*",
] as const;
export type CreateUserLessonCompletionSet =
  typeof createUserLessonCompletionSet;
export type CreateUserLessonCompletion = SelectionSet<
  Schema["UserLessonCompletion"]["type"],
  CreateUserLessonCompletionSet
>;

export type UserLessonCompletion = Schema["UserLessonCompletion"]["type"];
export type UserModuleProgressCreate =
  Schema["UserModuleProgress"]["createType"];
export type UserModuleProgressUpdate =
  Schema["UserModuleProgress"]["updateType"];
