import { useState, useCallback } from "react";

export type TeamId = "teamA" | "teamB";

export type GameScores = {
  teamA: number;
  teamB: number;
};

export function useGameScore(initialScores: Partial<GameScores> = {}) {
  const [scores, setScores] = useState<GameScores>({
    teamA: initialScores.teamA ?? 0,
    teamB: initialScores.teamB ?? 0,
  });

  const increment = useCallback((team: TeamId) => {
    setScores((prev) => ({
      ...prev,
      [team]: prev[team] + 1,
    }));
  }, []);

  const decrement = useCallback((team: TeamId) => {
    setScores((prev) => ({
      ...prev,
      [team]: Math.max(0, prev[team] - 1),
    }));
  }, []);

  return { scores, increment, decrement };
}
