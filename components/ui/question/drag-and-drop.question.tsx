import { DragAndDropQuestion } from "@/lib/interfaces";
import { useState } from "react";

interface Props {
  question: DragAndDropQuestion;
  onAnswer: (pairings: Record<string, string>) => void;
}

export const DragAndDrop = ({ question, onAnswer }: Props) => {
  const [pairings, setPairings] = useState<Record<string, string>>({});

  const handleDrop = (itemId: string, categoryId: string) => {
    const newPairings = { ...pairings, [itemId]: categoryId };
    setPairings(newPairings);
    onAnswer(newPairings);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        {question.items.map((item) => (
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
        {question.categories.map((category) => (
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
