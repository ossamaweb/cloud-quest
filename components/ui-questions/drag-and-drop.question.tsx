import {
  LessonQuestionProps,
  DragAndDropQuestion,
  QuestionOption,
} from "@/lib/interfaces";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AUTO_CHECK_DURATION, cn, gradeQuestion } from "@/lib/utils";

interface CategoryItemProps {
  id: string;
  text: string;
  handleDragOver: (e: React.DragEvent, categoryId: string) => void;
  handleDragLeave: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent, categoryId: string) => void;
  droppedIds: string[] | undefined;
  droppedId: string | null;
  draggingId: string | null;
  dragOverId: string | null;
  incorrect: boolean;
  correct: boolean;
  options: QuestionOption[];
}

const CategoryItem = ({
  id,
  text,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  droppedIds,
  droppedId,
  draggingId,
  dragOverId,
  incorrect,
  correct,
  options,
}: CategoryItemProps) => {
  const droppedItems = useMemo(() => {
    if (!droppedIds || droppedIds.length === 0) {
      return [];
    }
    return options.filter(({ id }) => droppedIds.includes(id));
  }, [droppedIds, options]);

  return (
    <div
      onDragOver={(e) => handleDragOver(e, id)}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, id)}
      className="select-none"
    >
      <div
        className={cn(
          "transition-all duration-250 ease-in-out",
          "no-scrollbar overflow-auto scale-100 rounded-lg px-2 py-1 h-32 border-2 border-dashed border-border text-foreground/50 bg-muted/30",
          draggingId && "bg-blue-400/20 border-blue-400/50",
          dragOverId === id && "scale-105",
          correct &&
            "border-solid bg-zinc-50 dark:bg-zinc-900 border-green-500/50",
          incorrect && "bg-red-500/20 border-red-500/50"
        )}
      >
        <div className="leading-2 text-sm font-bold uppercase">{text}</div>

        <div className="flex flex-wrap gap-2 mt-2">
          {droppedItems.map((itemData) => (
            <div
              key={itemData.id}
              className={cn(
                "motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-150"
              )}
            >
              <DraggableItem
                id={itemData.id}
                text={itemData.text}
                draggable={false}
                incorrect={undefined}
                correct={itemData.id === droppedId ? correct : undefined}
                droppedId=""
                handleDragStart={() => null}
                handleDragEnd={() => null}
              />
            </div>
          ))}
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
  incorrect?: boolean;
  correct?: boolean;
  className?: string;
  handleDragStart: (e: React.DragEvent, itemId: string) => void;
  handleDragEnd: () => void;
}

const DraggableItem = ({
  id,
  text,
  droppedId,
  incorrect,
  correct,
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
    <div className="bg-muted rounded-lg w-fit">
      <div
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className={cn(
          "transition-all duration-250 ease-in-out",
          "text-sm max-w-48  bg-background border-2 border-b-4 border-border rounded-lg px-4 py-2 select-none",
          isDragging ? "opacity-0" : "bg-background",
          draggable && "cursor-move",
          correct &&
            "bg-green-100 dark:bg-zinc-950 border-green-500 dark:border-green-700 dark:text-green-500 text-green-700",
          incorrect &&
            "bg-red-100 dark:bg-zinc-950 border-red-500 dark:border-red-600 dark:text-red-500 text-red-700",
          droppedId && "opacity-0",
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
  correct: { categoryId: string; itemId: string };
  draggingId: string | null;
  dragOverId: string | null;
  droppedId: string | null;
  categoryItems: Record<string, Array<string> | undefined>;

  trials: boolean[];
  correctAnswersCount: number;
}

export const DragAndDrop = ({
  data,
  points,
  checked,
  onGrade,
}: LessonQuestionProps<DragAndDropQuestion>) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const [
    {
      pairings,
      incorrect,
      correct,
      draggingId,
      dragOverId,
      droppedId,
      categoryItems,
      trials,
      correctAnswersCount,
    },
    setState,
  ] = useState<DragAndDropQuestionState>({
    pairings: {},
    incorrect: { categoryId: "", itemId: "" },
    correct: { categoryId: "", itemId: "" },
    draggingId: null,
    dragOverId: null,
    droppedId: null,
    categoryItems: {},
    trials: [],
    correctAnswersCount: 0,
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

      const correct =
        data.correctPairings.findIndex(
          (cp) => cp.itemId === itemId && cp.categoryId === categoryId
        ) > -1;

      if (correct) {
        setState((prev) => ({
          pairings: { ...prev.pairings, [itemId]: categoryId },
          incorrect: { categoryId: "", itemId: "" },
          correct: { categoryId, itemId },
          draggingId: null,
          dragOverId: null,
          droppedId: itemId,
          categoryItems: {
            ...prev.categoryItems,
            [categoryId]: prev.categoryItems[categoryId]
              ? [...new Set([...prev.categoryItems[categoryId], itemId])]
              : [itemId],
          },
          trials: [...prev.trials, true],
          correctAnswersCount: prev.correctAnswersCount + (correct ? 1 : 0),
        }));
      } else {
        setState((prev) => ({
          ...prev,
          dragOverId: null,
          trials: [...prev.trials, false],
          incorrect: { categoryId, itemId },
          correct: { categoryId: "", itemId: "" },
        }));
      }

      timeoutRef.current = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          dragOverId: null,
          incorrect: { categoryId: "", itemId: "" },
          correct: { categoryId: "", itemId: "" },
        }));
      }, AUTO_CHECK_DURATION);
    },
    [data]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleDragStart = useCallback((e: React.DragEvent, itemId: string) => {
    e.dataTransfer.setData("text/plain", itemId);

    setState((prev) => ({
      ...prev,
      incorrect: { categoryId: "", itemId: "" },
      correct: { categoryId: "", itemId: "" },
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
    if (correctAnswersCount === data.correctPairings.length) {
      gradeQuestion({
        onGrade,
        data,
        trials,
        totalPoints: points,
        autoCheck: true,
        answersCount: data.correctPairings.length,
      });
    }
  }, [correctAnswersCount, data, onGrade, points, trials]);

  const { categories, items } = useMemo(() => {
    return {
      items: [...data.items].sort(() => Math.random() - 0.5),
      categories: [...data.categories].sort(() => Math.random() - 0.5),
    };
  }, [data.categories, data.items]);

  return (
    <div className="flex flex-col justify-around sm:gap-16 gap-8">
      <div
        className={cn(
          "grid  gap-4",
          categories.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"
        )}
      >
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            text={category.text}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            droppedIds={categoryItems[category.id]}
            draggingId={draggingId}
            dragOverId={dragOverId}
            droppedId={droppedId}
            incorrect={incorrect.categoryId === category.id}
            correct={correct.categoryId === category.id}
            options={data.items}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {items.map((item) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            text={item.text}
            draggable={!pairings[item.id]}
            droppedId={pairings[item.id]}
            incorrect={incorrect.itemId === item.id}
            correct={correct.itemId === item.id}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
};
