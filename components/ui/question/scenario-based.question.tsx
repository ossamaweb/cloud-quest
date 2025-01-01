import { ScenarioBasedQuestion } from "@/lib/interfaces";

interface Props {
  question: ScenarioBasedQuestion;
  onAnswer: (answer: string) => void;
}

export const ScenarioBased = ({ question, onAnswer }: Props) => {
  return (
    <div className="space-y-4">
      <div className="p-4 border-2 border-border rounded-lg">
        <pre className="whitespace-pre-wrap">{question.scenario}</pre>
      </div>
      <textarea
        className="w-full p-2 border-2 border-border bg-muted rounded-lg"
        rows={6}
        onChange={(e) => onAnswer(e.target.value)}
        placeholder="Enter your answer here..."
      />
    </div>
  );
};
