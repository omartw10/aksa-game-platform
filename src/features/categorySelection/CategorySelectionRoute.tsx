import { useState } from "react";
import CategorySelectionPage from "./CategorySelectionPage";
import type { Category } from "./categoriesData";

export default function CategorySelectionRoute() {
  const [selected, setSelected] = useState<Category[]>([]);

  return (
    <CategorySelectionPage
      selected={selected}
      onChange={setSelected}
      /* عند العرض كصفحة مستقلة نريد إظهار الشريط */
    />
  );
}
