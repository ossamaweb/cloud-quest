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

export const userModulesSelectionSet = [
  "id",
  "slug",
  "order",
  "title",
  "description",
  "courseId",
  "difficulty",
  "lessons.*",
] as const;

export type UserModulesSelectionSet = typeof userModulesSelectionSet;

export type UserModule = SelectionSet<
  Schema["Module"]["type"],
  UserModulesSelectionSet
>;
