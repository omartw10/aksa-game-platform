import styles from "./ScorePanel.module.css";

type ScorePanelProps = {
  teamName: string;
  score: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function ScorePanel({
  teamName,
  score,
  onIncrement,
  onDecrement,
}: ScorePanelProps) {
  return (
    <div className={styles.panel}>
      <span className={styles.teamName}>{teamName}</span>
      <div className={styles.scoreRow}>
        <button
          type="button"
          className={styles.scoreBtn}
          onClick={onDecrement}
          aria-label="إنقاص النقاط"
        >
          −
        </button>
        <span className={styles.score}>{score}</span>
        <button
          type="button"
          className={styles.scoreBtn}
          onClick={onIncrement}
          aria-label="إضافة النقاط"
        >
          +
        </button>
      </div>
    </div>
  );
}
