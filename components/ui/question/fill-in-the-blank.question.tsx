import { FillInTheBlankQuestion } from "@/lib/interfaces";

interface Props {
  question: FillInTheBlankQuestion;
  onAnswer: (answers: Record<string, string>) => void;
}

export const FillInTheBlank = ({ question, onAnswer }: Props) => {
  const handleChange = (blankId: string, value: string) => {
    onAnswer({ [blankId]: value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.question}</h3>
      <div>
        {question.blanks.map((blank) => (
          <input
            key={blank.id}
            type="text"
            className="mx-2 p-1 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
            onChange={(e) => handleChange(blank.id, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};
