import type { Category } from "../categoriesData";
import styles from "./SelectedCategoriesBar.module.css";

type SelectedCategoriesBarProps = {
  selected: Category[];
  onRemove: (id: string) => void;
  maxCount: number;
};

export function SelectedCategoriesBar({
  selected,
  onRemove,
  maxCount,
}: SelectedCategoriesBarProps) {
  return (
    <div className={styles.bar}>
      <h4 className={styles.label}>
        الفئات المختارة ({selected.length}/{maxCount})
      </h4>
      <div className={styles.list}>
        {selected.map((cat) => (
          <span key={cat.id} className={styles.chip}>
            {cat.title}
            <button
              type="button"
              className={styles.removeBtn}
              onClick={() => onRemove(cat.id)}
              aria-label={`إزالة ${cat.title}`}
            >
              
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
