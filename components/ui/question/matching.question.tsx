import { LessonQuestionProps, MatchingQuestion } from "@/lib/interfaces";
import ButtonQuestion from "../button-question";
import { useCallback, useEffect, useState } from "react";
import { gradeQuestion } from "@/lib/utils";

interface MatchingQuestionState {
  selected: [string | null, string | null];
  pairings: Record<string, string>;
}

export const Matching = ({
  data,
  checked,
  status,
  onGrade,
}: LessonQuestionProps<MatchingQuestion>) => {
  const [{ selected, pairings }, setState] = useState<MatchingQuestionState>({
    selected: [null, null],
    pairings: {},
  });

  const handleOnClick = useCallback(
    (selected: MatchingQuestionState["selected"]) => {
      if (selected[0] && selected[1]) {
        const newPairing = { [selected[0]]: selected[1] };
        setState((prev) => ({
          ...prev,
          selected: [null, null],
          pairings: {
            ...prev.pairings,
            ...newPairing,
          },
        }));
      } else {
        setState((prev) => ({
          ...prev,
          selected,
        }));
      }
    },
    []
  );

  useEffect(() => {
    if (
      Object.keys(pairings).length === Object.keys(data.correctPairings).length
    ) {
      console.log({ pairings });
      gradeQuestion(data, pairings, onGrade);
    }
  }, [data, onGrade, pairings]);

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-2">
        {data.terms.map((term, index) => (
          <div key={term.id}>
            <ButtonQuestion
              text={term.text}
              label={String(index + 1)}
              selected={selected[0] === term.id}
              checked={checked}
              disabled={checked || selected[0] === term.id}
              status={checked ? status : undefined}
              onClick={() => handleOnClick([term.id, selected[1]])}
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {data.definitions.map((def, index) => (
          <div key={def.id}>
            <ButtonQuestion
              text={def.text}
              label={String(data.terms.length + index + 1)}
              selected={selected[1] === def.id}
              checked={checked}
              disabled={checked || selected[1] === def.id}
              status={checked ? status : undefined}
              onClick={() => handleOnClick([selected[0], def.id])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
