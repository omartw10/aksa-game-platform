import { CATEGORIES, type Category } from "./categoriesData";
import { CategoryCard } from "./components/CategoryCard";
import { SelectedCategoriesBar } from "./components/SelectedCategoriesBar";
import styles from "./CategorySelectionPage.module.css";

type CategorySelectionPageProps = {
  selected: Category[];
  onChange: (categories: Category[]) => void;
  hideSidebar?: boolean;
};

const MAX_SELECTED = 6;

export default function CategorySelectionPage({
  selected,
  onChange,
  hideSidebar = false,
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

  // تجميع الفئات
  type GroupableCategory = Category & {
    group?: string;
    category?: string;
    parent?: string;
  };

  const groups = Array.from(
    CATEGORIES.reduce((map, cat) => {
      const groupCat = cat as GroupableCategory;
      const key =
        groupCat.group ??
        groupCat.category ??
        groupCat.parent ??
        "عام";

      if (!map.has(key)) map.set(key, [] as Category[]);
      map.get(key)!.push(cat);
      return map;
    }, new Map<string, Category[]>())
  );

  return (
    <div className={styles.page}>

      {/* Sidebar */}
      <div
        className={`${styles.selectedSidebar} ${
          hideSidebar ? styles.hidden : ""
        }`}
      >
        <SelectedCategoriesBar
          selected={selected}
          onRemove={handleRemove}
          maxCount={MAX_SELECTED}
        />
      </div>

      {/* Content */}
      <div className={styles.container}>
        <h2 className={styles.title}>اختر الفئات</h2>

        <div className={styles.grid}>
          {groups.map(([groupName, cats]) => (
            <section key={groupName} className={styles.groupContainer}>
              <h3 className={styles.groupTitle}>{groupName}</h3>
              <div className={styles.groupGrid}>
                {cats.map((category) => (
                  <div key={category.id} className={styles.cardFrame}>
                    <CategoryCard
                      category={category}
                      selected={selectedIds.has(category.id)}
                      onToggle={() => handleToggle(category)}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
