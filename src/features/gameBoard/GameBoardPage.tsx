import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CATEGORIES, type Category } from "../categorySelection/categoriesData";
import TopNavBar from "./components/TopNavBar";
import CategoriesContainer from "./components/CategoriesContainer";
import BottomGameBar from "./components/BottomGameBar";
import styles from "./GameBoardPage.module.css";

export default function GameBoardPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    teamAName = "الفريق الأول",
    teamBName = "الفريق الثاني",
    helpersA = [0, 1, 2],
    helpersB = [0, 1, 2],
  } = location.state || {};

  const categories: Category[] = CATEGORIES.slice(0, 6);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());

  // حالة وسائل المساعدة المستخدمة أثناء اللعب
  const [usedHelpersA, setUsedHelpersA] = useState<boolean[]>([false, false, false]);
  const [usedHelpersB, setUsedHelpersB] = useState<boolean[]>([false, false, false]);

  const handleQuestionClick = (key: string) => {
    setUsedQuestions((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  };

  // دوال تفعيل وسائل المساعدة
  const handleHelperA = (idx: number) => {
    setUsedHelpersA((prev) => prev.map((v, i) => (i === idx ? true : v)));
  };
  const handleHelperB = (idx: number) => {
    setUsedHelpersB((prev) => prev.map((v, i) => (i === idx ? true : v)));
  };

  return (
    <div className={styles.page}>
      <TopNavBar onBack={() => navigate(-1)} />

      <div className={styles.content}>
        <div className={styles.gameBoardFrame}>
          <CategoriesContainer
            categories={categories}
            usedQuestions={usedQuestions}
            onQuestionClick={handleQuestionClick}
          />
        </div>
      </div>

      <BottomGameBar
        teamAName={teamAName}
        teamBName={teamBName}
        helpersA={helpersA}
        helpersB={helpersB}
        usedHelpersA={usedHelpersA}
        usedHelpersB={usedHelpersB}
        onHelperA={handleHelperA}
        onHelperB={handleHelperB}
      />
    </div>
  );
}
