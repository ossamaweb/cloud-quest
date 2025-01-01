import { LessonQuestionProps, TrueFalseQuestion } from "@/lib/interfaces";

export const TrueFalse = ({
  data,
  onAnswer,
}: LessonQuestionProps<TrueFalseQuestion>) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{data.question}</h3>
      <div className="space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={data.id}
            value="true"
            // onChange={() => onAnswer(true)}
            // onAnswer: (answer: boolean) => void;
          />
          <span className="ml-2">True</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={data.id}
            value="false"
            // onChange={() => onAnswer(false)}
            // onAnswer: (answer: boolean) => void;
          />
          <span className="ml-2">False</span>
        </label>
      </div>
    </div>
  );
};
