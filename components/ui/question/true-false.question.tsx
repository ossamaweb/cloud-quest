import { TrueFalseQuestion } from "@/lib/interfaces";

interface Props {
  question: TrueFalseQuestion;
  onAnswer: (answer: boolean) => void;
}

export const TrueFalse = ({ question, onAnswer }: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.question}</h3>
      <div className="space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={question.id}
            value="true"
            onChange={() => onAnswer(true)}
          />
          <span className="ml-2">True</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={question.id}
            value="false"
            onChange={() => onAnswer(false)}
          />
          <span className="ml-2">False</span>
        </label>
      </div>
    </div>
  );
};
