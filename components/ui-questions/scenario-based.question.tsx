import { LessonQuestionProps, ScenarioBasedQuestion } from "@/lib/interfaces";

export const ScenarioBased = ({
  data,
}: LessonQuestionProps<ScenarioBasedQuestion>) => {
  return (
    <div className="space-y-4">
      <div className="p-4 border-2 border-border rounded-lg">
        <pre className="whitespace-pre-wrap">{data.scenario}</pre>
      </div>
      <textarea
        className="w-full p-2 border-2 border-border bg-muted rounded-lg"
        rows={6}
        // onChange={(e) => onGrade(e.target.value)}
        // onGrade: (answer: string) => void;
        placeholder="Enter your answer here..."
      />
    </div>
  );
};
