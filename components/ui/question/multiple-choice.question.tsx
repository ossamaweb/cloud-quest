import { MultipleChoiceQuestion } from "@/lib/interfaces";
import ButtonGame from "../button-game";
import ButtonQuestion from "../button-question";

interface Props {
  question: MultipleChoiceQuestion;
  onAnswer: (optionId: string) => void;
}

export const MultipleChoice = ({ question, onAnswer }: Props) => {
  return (
    <div className="space-y-4">
      {question.options.map((option, index) => (
        <div key={option.id}>
          <ButtonQuestion
            text={option.text}
            label={String(index + 1)}
            answered={index == 2}
            checked={index == 2}
            disabled={false}
            status="incorrect"
            onClick={() => onAnswer(option.id)}
          />
        </div>

        // <label key={option.id} className="flex items-center space-x-2">
        //   <input
        //     type="radio"
        //     name={question.id}
        //     value={option.id}
        //     onChange={() => onAnswer(option.id)}
        //   />
        //   <span>{option.text}</span>
        //   {option.imageUrl && (
        //     <img src={option.imageUrl} alt="" className="h-8 w-8" />
        //   )}
        // </label>
      ))}
    </div>
  );
};
