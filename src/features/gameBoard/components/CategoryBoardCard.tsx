import type { Category } from "../../categorySelection/categoriesData";
import styles from "./CategoryBoardCard.module.css";

const QUESTION_VALUES = [150, 150, 300, 300, 600, 600];

type Props = {
  category: Category;
  usedQuestions: Set<string>;
  onQuestionClick: (key: string) => void;
};

export default function CategoryBoardCard({
  category,
  usedQuestions,
  onQuestionClick,
}: Props) {
  return (
    <div className={styles.card}>
      <img src={category.image} className={styles.image} />
      <h3 className={styles.title}>{category.title}</h3>

      <div className={styles.questions}>
        {QUESTION_VALUES.map((value, index) => {
          const key = `${category.id}-${index}`;
          const used = usedQuestions.has(key);

          return (
            <button
              key={key}
              disabled={used}
              onClick={() => onQuestionClick(key)}
              className={`${styles.qBtn} ${used ? styles.used : ""}`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
