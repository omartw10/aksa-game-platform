import type { Category } from "../categoriesData";
import styles from "./SelectedCategoriesBar.module.css";

type SelectedCategoriesBarProps = {
  selected: Category[];
  onRemove: (id: string) => void;
  maxCount: number;
  className?: string; // 👈 نضيف هذا
};

export function SelectedCategoriesBar({
  selected,
  onRemove,
  maxCount,
  className = "",
}: SelectedCategoriesBarProps) {
  return (
    <div className={`${styles.bar} ${className}`}>
      <h4 className={styles.label}>
        الفئات المختارة ({selected.length}/{maxCount})
      </h4>

      <div className={styles.list}>
        {selected.map((cat) => (
          <div key={cat.id} className={styles.chip}>
            <span className={styles.chipTitle}>{cat.title}</span>

            <button
              type="button"
              className={styles.removeBtn}
              onClick={() => onRemove(cat.id)}
              aria-label={`إزالة ${cat.title}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
