import { FillInTheBlankQuestion, LessonQuestionProps } from "@/lib/interfaces";

export const FillInTheBlank = ({
  data,
  onAnswer,
}: LessonQuestionProps<FillInTheBlankQuestion>) => {
  const handleChange = (blankId: string, value: string) => {
    //onAnswer({ [blankId]: value });
    //onAnswer: (answers: Record<string, string>) => void;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{data.question}</h3>
      <div>
        {data.blanks.map((blank) => (
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
