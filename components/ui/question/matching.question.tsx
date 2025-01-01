import { LessonQuestionProps, MatchingQuestion } from "@/lib/interfaces";

export const Matching = ({ data }: LessonQuestionProps<MatchingQuestion>) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{data.question}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {data.terms.map((term) => (
            <div key={term.id} className="p-2 border rounded">
              {term.text}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {data.definitions.map((def) => (
            <div key={def.id} className="p-2 border rounded">
              {def.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
