import type { Category } from "../categoriesData";
import styles from "./CategoryCard.module.css";

type CategoryCardProps = {
  category: Category;
  selected: boolean;
  onToggle: () => void;
};

export function CategoryCard({ category, selected, onToggle }: CategoryCardProps) {
  return (
    <button className={`${styles.card} ${selected ? styles.cardSelected : ""}`} onClick={onToggle}>
      <div className={styles.imageWrap}>
        <img
          src={category.image}
          alt=""
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.questionCount}>
        {category.questionCount ?? (category as { questions?: number }).questions ?? (category as { remaining?: number }).remaining ?? 0} لعبة متبقية
      </div>

      <h3 className={styles.title}>{category.title}</h3>
    </button>
  );
}
