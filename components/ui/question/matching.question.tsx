import { LessonQuestionProps, MatchingQuestion } from "@/lib/interfaces";
import ButtonQuestion from "../button-question";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gradeQuestion, validateMatchAnswer } from "@/lib/utils";

interface MatchingQuestionState {
  selectedPair: [string | null, string | null];
  pairings: Record<string, string>;
  statuses: Record<string, LessonQuestionProps<MatchingQuestion>["status"]>;
  correctIds: Record<string, boolean>;
}

export const Matching = ({
  data,
  checked,
  status,
  onGrade,
}: LessonQuestionProps<MatchingQuestion>) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const [{ selectedPair, pairings, statuses, correctIds }, setState] =
    useState<MatchingQuestionState>({
      selectedPair: [null, null],
      pairings: {},
      statuses: {},
      correctIds: {},
    });

  const handleOnClick = useCallback(
    (selectedPair: MatchingQuestionState["selectedPair"]) => {
      // Clear any existing timeout

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
        statuses: {
          ...prev.statuses,
          [term]: correct ? "correct" : "incorrect",
          [definition]: correct ? "correct" : "incorrect",
        },
      }));

      // Update final state after animation
      timeoutRef.current = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          pairings: {
            ...prev.pairings,
            ...(correct ? newPairing : {}),
          },
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
      }, 300);
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
    if (
      Object.keys(pairings).length === Object.keys(data.correctPairings).length
    ) {
      gradeQuestion(data, pairings, onGrade);
    }
  }, [data, onGrade, pairings]);

  const { definitions, terms } = useMemo(() => {
    return {
      terms: [...data.terms].sort(() => Math.random() - 0.5),
      definitions: [...data.definitions].sort(() => Math.random() - 0.5),
    };
  }, [data.definitions, data.terms]);

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-2">
        {terms.map((term, index) => (
          <div key={term.id}>
            <ButtonQuestion
              tabIndex={-1}
              className="leading-5"
              passive={true}
              text={term.text}
              label={String(index + 1)}
              selected={selectedPair[0] === term.id}
              disabled={
                checked || selectedPair[0] === term.id || correctIds[term.id]
              }
              muted={correctIds[term.id]}
              status={statuses[term.id]}
              onClick={() => handleOnClick([term.id, selectedPair[1]])}
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {definitions.map((def, index) => (
          <div key={def.id}>
            <ButtonQuestion
              tabIndex={-1}
              className="leading-"
              text={def.text}
              passive={true}
              label={String(terms.length + index + 1)}
              selected={selectedPair[1] === def.id}
              disabled={checked || correctIds[def.id]}
              muted={correctIds[def.id]}
              status={statuses[def.id]}
              onClick={() => handleOnClick([selectedPair[0], def.id])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
