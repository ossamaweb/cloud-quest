import {
  ImageIdentificationQuestion,
  LessonQuestionProps,
} from "@/lib/interfaces";

export const ImageIdentification = ({
  data,
}: LessonQuestionProps<ImageIdentificationQuestion>) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{data.question}</h3>
      <img
        src={data.image.url}
        alt={data.image.altText}
        className="max-w-full h-auto"
      />
      <div className="space-y-2">
        {data.options.map((option) => (
          <label key={option.id} className="flex items-center space-x-2">
            <input
              type="radio"
              name={data.id}
              value={option.id}
              //onChange={() => onAnswer(option.id)}
              //onAnswer: (optionId: string) => void;
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
