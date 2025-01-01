import { DragAndDropQuestion, LessonQuestionProps } from "@/lib/interfaces";
import { useState } from "react";

export const DragAndDrop = ({
  data,
  onAnswer,
}: LessonQuestionProps<DragAndDropQuestion>) => {
  const [pairings, setPairings] = useState<Record<string, string>>({});

  const handleDrop = (itemId: string, categoryId: string) => {
    const newPairings = { ...pairings, [itemId]: categoryId };
    setPairings(newPairings);
    // onAnswer(newPairings);
    //onAnswer: (pairings: Record<string, string>) => void;
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        {data.items.map((item) => (
          <div
            key={item.id}
            draggable
            className="p-2 border rounded cursor-move"
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {data.categories.map((category) => (
          <div
            key={category.id}
            className="p-2 border rounded"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const itemId = e.dataTransfer.getData("text/plain");
              handleDrop(itemId, category.id);
            }}
          >
            {category.text}
          </div>
        ))}
      </div>
    </div>
  );
};
