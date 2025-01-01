import { ShortAnswerQuestion } from "@/lib/interfaces";

interface Props {
  question: ShortAnswerQuestion;
  onAnswer: (answer: string) => void;
}

export const ShortAnswer = ({ question, onAnswer }: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.question}</h3>
      <input
        type="text"
        className="w-full p-2 border rounded"
        onChange={(e) => onAnswer(e.target.value)}
        placeholder="Enter your answer"
      />
    </div>
  );
};
