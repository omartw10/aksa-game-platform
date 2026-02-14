import styles from "./QuestionCard.module.css";

type QuestionCardProps = {
  value: number;
  used: boolean;
  onClick: () => void;
};

export function QuestionCard({ value, used, onClick }: QuestionCardProps) {
  return (
    <button
      type="button"
      className={`${styles.card} ${used ? styles.cardUsed : ""}`}
      onClick={onClick}
      disabled={used}
      aria-label={`سؤال ${value} نقطة`}
      aria-disabled={used}
    >
      <span className={styles.value}>{value}</span>
    </button>
  );
}
