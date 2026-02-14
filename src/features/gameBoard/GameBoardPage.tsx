import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CATEGORIES, type Category } from "../categorySelection/categoriesData";
import { QUESTION_VALUES } from "./constants";
import { QuestionCard } from "./components/QuestionCard";
import { ScorePanel } from "./components/ScorePanel";
import { useGameScore } from "./hooks/useGameScore";
import styles from "./GameBoardPage.module.css";


const DEFAULT_TEAM_A = "الفريق الأول";
const DEFAULT_TEAM_B = "الفريق الثاني";

function getSlotKey(categoryId: string, value: number): string {
  return `${categoryId}-${value}`;
}

export default function GameBoardPage() {
  const location = useLocation();
  const state = location.state as {
    selectedCategories?: Category[];
    teamAName?: string;
    teamBName?: string;
  } | undefined;

  const categories: Category[] =
    state?.selectedCategories?.length === 6
      ? state.selectedCategories
      : CATEGORIES.slice(0, 6);

  const teamAName = state?.teamAName ?? DEFAULT_TEAM_A;
  const teamBName = state?.teamBName ?? DEFAULT_TEAM_B;

  const [usedSlots, setUsedSlots] = useState<Set<string>>(new Set());
  const { scores, increment, decrement } = useGameScore();

  const handleSlotClick = (categoryId: string, value: number) => {
    const key = getSlotKey(categoryId, value);
    setUsedSlots((prev) => new Set(prev).add(key));
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>لوحة اللعبة</h1>
        </header>

        <div className={styles.board}>
          {categories.map((category) => (
            <div key={category.id} className={styles.column}>
              <h2 className={styles.columnTitle}>{category.title}</h2>
              <div className={styles.slots}>
                {QUESTION_VALUES.map((value) => {
                  const key = getSlotKey(category.id, value);
                  const used = usedSlots.has(key);
                  return (
                    <QuestionCard
                      key={key}
                      value={value}
                      used={used}
                      onClick={() => handleSlotClick(category.id, value)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.scoreSection}>
          <ScorePanel
            teamName={teamAName}
            score={scores.teamA}
            onIncrement={() => increment("teamA")}
            onDecrement={() => decrement("teamA")}
          />
          <ScorePanel
            teamName={teamBName}
            score={scores.teamB}
            onIncrement={() => increment("teamB")}
            onDecrement={() => decrement("teamB")}
          />
        </div>
      </div>
    </div>
  );
}
