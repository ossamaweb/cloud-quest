import { LessonQuestionProps, OrderingQuestion } from "@/lib/interfaces";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ButtonQuestion from "../button-question";
import {
  AUTO_CHECK_DURATION,
  gradeQuestion,
  validateOrderingAnswer,
} from "@/lib/utils";
import { KeyboardProvider } from "@/hooks/use-keyboard";

interface OrderingQuestionState {
  selectedId: string | null;
  userOrder: string[];
  statuses: Record<string, LessonQuestionProps<OrderingQuestion>["status"]>;
  correctIds: Record<string, boolean>;
  correctAnswersCount: number;
}
export const Ordering = ({
  data,
  checked,
  onGrade,
}: LessonQuestionProps<OrderingQuestion>) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [
    { selectedId, userOrder, statuses, correctIds, correctAnswersCount },
    setState,
  ] = useState<OrderingQuestionState>({
    selectedId: null,
    userOrder: [],
    statuses: {},
    correctIds: {},
    correctAnswersCount: 0,
  });

  const handleOnClick = useCallback(
    (selectedId: string, userOrder: string[]) => {
      if (userOrder.includes(selectedId)) {
        return;
      }

      // Get the current position in the ordering sequence based on how many items user has already ordered
      const orderPosition = userOrder.length;

      // Create a temporary answer array by copying the correct order array and replacing the item at current position
      // with the newly selected item. This allows us to validate each selection as it's made.
      const tempUserAnswer = data.correctOrder.map((originalId, index) =>
        index === orderPosition ? selectedId : originalId
      );

      // Check if the current selection is correct by comparing the temporary answer against the correct order
      const correct = validateOrderingAnswer(tempUserAnswer, data.correctOrder);

      // Update initial status immediately
      setState((prev) => ({
        ...prev,
        selectedId: null,
        userOrder: correct
          ? [...new Set([...prev.userOrder, selectedId])]
          : prev.userOrder,
        statuses: {
          ...prev.statuses,
          [selectedId]: correct ? "correct" : "incorrect",
        },
        correctAnswersCount: prev.correctAnswersCount + (correct ? 1 : 0),
      }));

      // Update final state after animation
      timeoutRef.current = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          correctIds: {
            ...prev.correctIds,
            ...(correct ? { [selectedId]: true } : {}),
          },
          statuses: {
            ...prev.statuses,
            [selectedId]: "unanswered",
          },
        }));
      }, AUTO_CHECK_DURATION);
    },
    [data.correctOrder]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (correctAnswersCount === data.correctOrder.length) {
      gradeQuestion(data, userOrder, onGrade);
    }
  }, [data, onGrade, userOrder, correctAnswersCount]);

  const { items } = useMemo(() => {
    return {
      items: [...data.items].sort(() => Math.random() - 0.5),
    };
  }, [data.items]);

  return (
    <KeyboardProvider>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id}>
            <ButtonQuestion
              tabIndex={-1}
              className="leading-5 h-16"
              text={item.text}
              keyboardShortcut={String(index + 1)}
              passive={true}
              selected={selectedId === item.id}
              disabled={selectedId === item.id || correctIds[item.id]}
              muted={correctIds[item.id]}
              status={statuses[item.id]}
              onClick={() => handleOnClick(item.id, userOrder)}
            />
          </div>
        ))}
      </div>
    </KeyboardProvider>
  );
};
