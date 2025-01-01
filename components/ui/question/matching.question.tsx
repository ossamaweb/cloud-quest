import { MatchingQuestion } from "@/lib/interfaces";

interface Props {
  question: MatchingQuestion;
  onAnswer: (pairings: Record<string, string>) => void;
}

export const Matching = ({ question, onAnswer }: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.question}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {question.terms.map((term) => (
            <div key={term.id} className="p-2 border rounded">
              {term.text}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {question.definitions.map((def) => (
            <div key={def.id} className="p-2 border rounded">
              {def.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
