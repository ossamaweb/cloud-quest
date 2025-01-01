import { ImageIdentificationQuestion } from "@/lib/interfaces";

interface Props {
  question: ImageIdentificationQuestion;
  onAnswer: (optionId: string) => void;
}

export const ImageIdentification = ({ question, onAnswer }: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.question}</h3>
      <img
        src={question.image.url}
        alt={question.image.altText}
        className="max-w-full h-auto"
      />
      <div className="space-y-2">
        {question.options.map((option) => (
          <label key={option.id} className="flex items-center space-x-2">
            <input
              type="radio"
              name={question.id}
              value={option.id}
              onChange={() => onAnswer(option.id)}
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
