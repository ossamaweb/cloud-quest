import { CreateAchievementInput } from "@/lib/graphql/API";

const achievementsSeedData: Array<CreateAchievementInput> = [
  {
    name: "AWS Explorer",
    description: "Complete your first AWS course",
    pointValue: 100,
    icon: "",
  },
];

export default achievementsSeedData;
