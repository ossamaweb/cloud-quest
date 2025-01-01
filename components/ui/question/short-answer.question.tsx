import { LessonQuestionProps, ShortAnswerQuestion } from "@/lib/interfaces";

export const ShortAnswer = ({
  data,
  onAnswer,
}: LessonQuestionProps<ShortAnswerQuestion>) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{data.question}</h3>
      <input
        type="text"
        className="w-full p-2 border rounded"
        //onChange={(e) => onAnswer(e.target.value)}
        //onAnswer: (answer: string) => void;
        placeholder="Enter your answer"
      />
    </div>
  );
};
