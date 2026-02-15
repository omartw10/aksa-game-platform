import type { Category } from "../../categorySelection/categoriesData";
import CategoryBoardCard from "./CategoryBoardCard";
import styles from "./CategoriesContainer.module.css";

type Props = {
  categories: Category[];
  usedQuestions: Set<string>;
  onQuestionClick: (key: string) => void;
};

export default function CategoriesContainer({
  categories,
  usedQuestions,
  onQuestionClick,
}: Props) {
  return (
    <div className={styles.grid}>
      {categories.map((category) => (
        <CategoryBoardCard
          key={category.id}
          category={category}
          usedQuestions={usedQuestions}
          onQuestionClick={onQuestionClick}
        />
      ))}
    </div>
  );
}
