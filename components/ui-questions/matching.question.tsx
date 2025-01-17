import { LessonQuestionProps, MatchingQuestion } from "@/lib/interfaces";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AUTO_CHECK_DURATION,
  gradeQuestion,
  validateMatchAnswer,
} from "@/lib/utils";
import { KeyboardProvider } from "@/hooks/use-keyboard";
import ButtonQuestion from "@/components/ui/button-question";

interface MatchingQuestionState {
  selectedPair: [string | null, string | null];
  pairings: Record<string, string>;
  statuses: Record<string, LessonQuestionProps<MatchingQuestion>["status"]>;
  correctIds: Record<string, boolean>;
  correctAnswersCount: number;
  trials: boolean[];
}

export const Matching = ({
  data,
  points,
  previousMistake,
  onGrade,
}: LessonQuestionProps<MatchingQuestion>) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const [
    {
      selectedPair,
      pairings,
      trials,
      statuses,
      correctIds,
      correctAnswersCount,
    },
    setState,
  ] = useState<MatchingQuestionState>({
    selectedPair: [null, null],
    pairings: {},
    statuses: {},
    correctIds: {},
    correctAnswersCount: 0,
    trials: [],
  });

  const handleOnClick = useCallback(
    (selectedPair: MatchingQuestionState["selectedPair"]) => {
      const [term, definition] = selectedPair;

      // Case 1: Only definition is selected
      if (!term && definition) {
        setState((prev) => ({
          ...prev,
          selectedPair:
            definition === prev.selectedPair[1] // If re-selected then unselect
              ? [null, null]
              : [null, definition],
        }));
        return;
      }

      // Case 2: Either term or definition is missing
      if (!term || !definition) {
        setState((prev) => ({
          ...prev,
          selectedPair,
        }));
        return;
      }

      // Case 3: Both term or definition are selected
      const newPairing = { [term]: definition };
      const correct = validateMatchAnswer(newPairing, data.correctPairings);

      // Update initial status immediately
      setState((prev) => ({
        ...prev,
        selectedPair: [null, null],
        pairings: {
          ...prev.pairings,
          ...(correct ? newPairing : {}),
        },
        trials: [...prev.trials, correct],
        statuses: {
          ...prev.statuses,
          [term]: correct ? "correct" : "incorrect",
          [definition]: correct ? "correct" : "incorrect",
        },
        correctAnswersCount: prev.correctAnswersCount + (correct ? 1 : 0),
      }));

      // Update correct state after animation
      timeoutRef.current = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          correctIds: {
            ...prev.correctIds,
            ...(correct ? { [term]: true, [definition]: true } : {}),
          },
          statuses: {
            ...prev.statuses,
            [term]: "unanswered",
            [definition]: "unanswered",
          },
        }));
      }, AUTO_CHECK_DURATION);
    },
    [data.correctPairings]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (correctAnswersCount === Object.keys(data.correctPairings).length) {
      gradeQuestion({
        onGrade,
        data,
        trials,
        previousMistake,
        totalPoints: points,
        autoCheck: true,
        answersCount: Object.keys(data.correctPairings).length,
      });
    }
  }, [correctAnswersCount, data, onGrade, points, trials, previousMistake]);

  const { definitions, terms } = useMemo(() => {
    return {
      terms: [...data.terms].sort(() => Math.random() - 0.5),
      definitions: [...data.definitions].sort(() => Math.random() - 0.5),
    };
  }, [data.definitions, data.terms]);

  return (
    <KeyboardProvider>
      <div className="grid grid-cols-2 sm:gap-8 gap-4">
        <div className="space-y-4">
          {terms.map((term, index) => (
            <div key={term.id}>
              <ButtonQuestion
                tabIndex={-1}
                className="leading-5 h-16 md:text-base text-sm"
                passive={true}
                text={term.text}
                keyboardShortcut={String(index + 1)}
                selected={selectedPair[0] === term.id}
                disabled={selectedPair[0] === term.id || correctIds[term.id]}
                muted={correctIds[term.id]}
                status={statuses[term.id]}
                onClick={() => handleOnClick([term.id, selectedPair[1]])}
              />
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {definitions.map((def, index) => (
            <div key={def.id}>
              <ButtonQuestion
                tabIndex={-1}
                className="leading-5 h-16 md:text-base text-sm"
                text={def.text}
                passive={true}
                keyboardShortcut={String(terms.length + index + 1)}
                selected={selectedPair[1] === def.id}
                disabled={correctIds[def.id]}
                muted={correctIds[def.id]}
                status={statuses[def.id]}
                onClick={() => handleOnClick([selectedPair[0], def.id])}
              />
            </div>
          ))}
        </div>
      </div>
    </KeyboardProvider>
  );
};
