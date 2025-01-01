import { OrderingQuestion } from "@/lib/interfaces";
import { useState } from "react";

interface Props {
  question: OrderingQuestion;
  onAnswer: (order: string[]) => void;
}

export const Ordering = ({ question, onAnswer }: Props) => {
  const [items, setItems] = useState(question.items);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
    onAnswer(newItems.map((item) => item.id));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.question}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={item.id} className="p-2 border rounded cursor-move">
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
