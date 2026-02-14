import type { Category } from "../categoriesData";
import styles from "./CategoryCard.module.css";

type CategoryCardProps = {
  category: Category;
  selected: boolean;
  onToggle: () => void;
};

export function CategoryCard({ category, selected, onToggle }: CategoryCardProps) {
  return (
    <button
      type="button"
      className={`${styles.card} ${selected ? styles.cardSelected : ""}`}
      onClick={onToggle}
      aria-pressed={selected}
      aria-label={category.title}
    >
      <div className={styles.imageWrap}>
        <img
          src={category.image}
          alt=""
          className={styles.image}
          loading="lazy"
        />
      </div>
      <h3 className={styles.title}>{category.title}</h3>
      <span className={styles.questionCount}>{category.questionCount} سؤال</span>
    </button>
  );
}
