import {
  DragAndDropQuestion,
  LessonQuestionProps,
  QuestionOption,
} from "@/lib/interfaces";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn, gradeQuestion } from "@/lib/utils";

interface CategoryItemProps {
  id: string;
  text: string;
  handleDragOver: (e: React.DragEvent, categoryId: string) => void;
  handleDragLeave: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent, categoryId: string) => void;
  droppedId: string;
  draggingId: string | null;
  dragOverId: string | null;
  incorrect: boolean;
  checked: boolean;
  itemData?: QuestionOption | undefined;
}

const CategoryItem = ({
  id,
  text,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  droppedId,
  draggingId,
  dragOverId,
  incorrect,
  checked,
  itemData,
}: CategoryItemProps) => {
  return (
    <div
      onDragOver={(e) => handleDragOver(e, id)}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, id)}
      className="flex-1"
    >
      <div
        className={cn(
          "rounded-lg px-2 py-1 h-32 border-2 border-dashed border-border text-foreground/70 bg-muted/30 transition-all",
          draggingId && !droppedId && "border-blue-500/50",
          dragOverId === id && "border-blue-500 bg-blue-500/10",
          droppedId && "bg-green-600/10 border-green-600",
          incorrect && "bg-red-500/10 border-red-500"
        )}
      >
        <div className="leading-2 text-sm font-bold uppercase">{text}</div>

        <div className="flex gap-2 mt-2">
          {droppedId && itemData && (
            <DraggableItem
              key={droppedId}
              id={itemData.id}
              text={itemData.text}
              draggable={false}
              incorrect={false}
              droppedId=""
              handleDragStart={() => null}
              handleDragEnd={() => null}
              className={cn(
                "animate-in fade-in-0 zoom-in-0 duration-150",
                checked && "bg-green-600/10 border-green-600 cursor-default"
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

interface DraggableItemProps {
  id: string;
  text: string;
  draggable: boolean;
  droppedId: string;
  incorrect: boolean;
  className?: string;
  handleDragStart: (e: React.DragEvent, itemId: string) => void;
  handleDragEnd: () => void;
}

const DraggableItem = ({
  id,
  text,
  droppedId,
  incorrect,
  draggable,
  className,
  handleDragStart,
  handleDragEnd,
}: DraggableItemProps) => {
  return (
    <div
      key={id}
      draggable={draggable}
      onDragStart={(e) => handleDragStart(e, id)}
      onDragEnd={handleDragEnd}
      className={cn(
        "w-auto border-2 border-b-4 border-border rounded-lg px-4 py-2 bg-background transition-colors",
        droppedId && "invisible",
        draggable &&
          "opacity-100 cursor-move hover:bg-border/40 focus:bg-border/40",
        incorrect && "bg-red-500/10 border-red-500",
        className
      )}
    >
      {text}
    </div>
  );
};

interface DragAndDropQuestionState {
  pairings: Record<string, string>;
  incorrect: { categoryId: string; itemId: string };
  draggingId: string | null;
  dragOverId: string | null;
  categoryItem: Record<string, string>;
}

export const DragAndDrop = ({
  data,
  checked,
  onAnswer,
}: LessonQuestionProps<DragAndDropQuestion>) => {
  const [
    { pairings, incorrect, draggingId, dragOverId, categoryItem },
    setState,
  ] = useState<DragAndDropQuestionState>({
    pairings: {},
    incorrect: { categoryId: "", itemId: "" },
    draggingId: null,
    dragOverId: null,
    categoryItem: {},
  });

  const handleDragStart = useCallback((e: React.DragEvent, itemId: string) => {
    e.dataTransfer.setData("text/plain", itemId);
    setState((prev) => ({
      ...prev,
      incorrect: { categoryId: "", itemId: "" },
      draggingId: itemId,
    }));
  }, []);

  const handleDragOver = useCallback(
    (e: React.DragEvent, categoryId: string) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";

      setState((prev) => {
        if (prev.dragOverId === categoryId) {
          return prev; // Return existing state if no change
        }
        return {
          ...prev,
          dragOverId: categoryId,
        };
      });
    },
    []
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();

    setState((prev) => ({
      ...prev,
      dragOverId: null,
    }));
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, categoryId: string) => {
      e.preventDefault();

      const itemId = e.dataTransfer.getData("text/plain");

      // already dropped in
      if (categoryItem[categoryId]) {
        setState((prev) => ({
          ...prev,
          draggingId: null,
        }));
        return;
      }

      if (
        data.correctPairings[itemId] &&
        data.correctPairings[itemId] === categoryId
      ) {
        // correct
        setState((prev) => ({
          pairings: { ...prev.pairings, [itemId]: categoryId },
          incorrect: { categoryId: "", itemId: "" },
          draggingId: null,
          dragOverId: null,
          categoryItem: {
            ...prev.categoryItem,
            [categoryId]: itemId,
          },
        }));
      } else {
        // uncorrect
        setState((prev) => ({
          ...prev,
          dragOverId: null,
          incorrect: { categoryId, itemId },
        }));
      }
    },
    [categoryItem, data]
  );

  const handleDragEnd = useCallback(() => {
    setState((prev) => ({
      ...prev,
      draggingId: null,
      dragOverId: null,
    }));
  }, []);

  useEffect(() => {
    if (
      Object.keys(pairings).length === Object.keys(data.correctPairings).length
    ) {
      const timeout = setTimeout(() => {
        gradeQuestion(data, pairings, onAnswer);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [data, onAnswer, pairings]);

  useEffect(() => {
    if (incorrect.categoryId) {
      const handleClick = () => {
        setState((prev) => ({
          ...prev,
          incorrect: { categoryId: "", itemId: "" },
        }));
      };

      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  }, [incorrect.categoryId]);

  const { itemsLookup, categories, items } = useMemo(() => {
    return {
      items: [...data.items].sort(() => Math.random() - 0.5),
      categories: [...data.categories].sort(() => Math.random() - 0.5),
      itemsLookup: Object.fromEntries(
        data.items.map((item) => [item.id, item])
      ),
    };
  }, [data.categories, data.items]);

  return (
    <div className="flex flex-col justify-around gap-8 h-full">
      <div className="gap-4 flex items-center justify-between flex-wrap">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            text={category.text}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            droppedId={categoryItem[category.id]}
            draggingId={draggingId}
            dragOverId={dragOverId}
            checked={checked}
            incorrect={incorrect.categoryId === category.id}
            itemData={itemsLookup[categoryItem[category.id]]}
          />
        ))}
      </div>

      <div className="flex items-end gap-4 flex-wrap">
        {items.map((item) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            text={item.text}
            draggable={!pairings[item.id]}
            droppedId={pairings[item.id]}
            incorrect={incorrect.itemId === item.id}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
};
