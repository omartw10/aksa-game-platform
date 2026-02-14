import { CATEGORIES, type Category } from "./categoriesData";
import { CategoryCard } from "./components/CategoryCard";
import { SelectedCategoriesBar } from "./components/SelectedCategoriesBar";
import styles from "./CategorySelectionPage.module.css";

type CategorySelectionPageProps = {
  selected: Category[];
  onChange: (categories: Category[]) => void;
};

const MAX_SELECTED = 6;

export default function CategorySelectionPage({
  selected,
  onChange,
}: CategorySelectionPageProps) {

  const selectedIds = new Set(selected.map((c) => c.id));

  const handleToggle = (category: Category) => {
    const next = new Set(selectedIds);

    if (next.has(category.id)) {
      next.delete(category.id);
    } else if (next.size < MAX_SELECTED) {
      next.add(category.id);
    }

    const nextCategories = CATEGORIES.filter((c) =>
      next.has(c.id)
    );

    onChange(nextCategories);
  };

  const handleRemove = (id: string) => {
    const next = selected.filter((c) => c.id !== id);
    onChange(next);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <h2 className={styles.title}>اختر الفئات</h2>

        <div className={styles.grid}>
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              selected={selectedIds.has(category.id)}
              onToggle={() => handleToggle(category)}
            />
          ))}
        </div>

        <SelectedCategoriesBar
          selected={selected}
          onRemove={handleRemove}
          maxCount={MAX_SELECTED}
        />
      </div>
    </div>
  );
}
