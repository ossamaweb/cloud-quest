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
      className="flex-1 select-none"
    >
      <div
        className={cn(
          "transition-all scale-100 rounded-lg px-2 py-1 overflow-hidden h-32 border-2 border-dashed border-border text-foreground/70 bg-muted/30",
          draggingId && !droppedId && "bg-blue-500/20 border-blue-300",
          dragOverId === id && !droppedId && "scale-105",
          droppedId && "border-solid bg-green-500/20 border-green-300",
          droppedId && "bg-green-500/20 border-green-300",
          incorrect && "bg-red-500/20 border-red-300"
        )}
      >
        <div className="leading-2 text-sm font-bold uppercase text-foreground/50">
          {text}
        </div>

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
                "motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-150",
                droppedId && "bg-green-500/20 border-green-300",
                incorrect && "bg-red-500/20 border-red-300"
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
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = useCallback(
    (e: React.DragEvent) => {
      handleDragStart(e, id);
      // Use setTimeout to prevent immediate hiding which could interfere with drag initialization
      setTimeout(() => setIsDragging(true), 0);
    },
    [handleDragStart, id]
  );

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
    handleDragEnd();
  }, [handleDragEnd]);

  return (
    <div className="bg-muted rounded-lg">
      <div
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className={cn(
          "truncate  bg-background border-2 border-b-4 border-border rounded-lg px-4 py-2 select-none",
          isDragging ? "opacity-0" : "bg-background",
          draggable && "cursor-move",
          incorrect && "bg-red-500/20 border-red-300",
          droppedId && "bg-muted border-transparent text-muted",
          className
        )}
      >
        {text}
      </div>
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
  onGrade,
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

  const handleDragStart = useCallback((e: React.DragEvent, itemId: string) => {
    e.dataTransfer.setData("text/plain", itemId);

    setState((prev) => ({
      ...prev,
      incorrect: { categoryId: "", itemId: "" },
      draggingId: itemId,
    }));
  }, []);

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
        gradeQuestion(data, pairings, onGrade);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [data, onGrade, pairings]);

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
    <div className="flex flex-col justify-around sm:gap-16 gap-8">
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
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

      <div className="flex justify-center items-end gap-4 flex-wrap">
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
