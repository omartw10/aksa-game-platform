import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HelperSlots } from "./components/HelperSlots";
import CategorySelectionPage from "../categorySelection/CategorySelectionPage";
import "./CreateGamePage.css";
import type { Category } from "../categorySelection/categoriesData";


const TEAM_ONE_LABEL = "الفريق الأول";
const TEAM_TWO_LABEL = "الفريق الثاني";

function createInitialHelpers(): boolean[] {
  return [true, true, true, false];
}

function toggleHelper(helpers: boolean[], index: number): boolean[] {
  const next = [...helpers];
  next[index] = !next[index];
  const count = next.filter(Boolean).length;
  if (count <= 3) return next;
  next[index] = false;
  return next;
}

export default function CreateGamePage() {
  // مرجع لقسم اختيار الفئات
  const categorySectionRef = useRef<HTMLDivElement>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const navigate = useNavigate();

  const [gameName, setGameName] = useState("");
  const [teamAName, setTeamAName] = useState("");
  const [teamBName, setTeamBName] = useState("");
  const [helpersOne, setHelpersOne] = useState(createInitialHelpers);
  const [helpersTwo, setHelpersTwo] = useState(createInitialHelpers);
  const [showValidation, setShowValidation] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  // Removed unused hideSidebar state

  const isReady =
    gameName.trim() !== "" &&
    teamAName.trim() !== "" &&
    teamBName.trim() !== "" &&
    helpersOne.filter(Boolean).length === 3 &&
    helpersTwo.filter(Boolean).length === 3 &&
    selectedCategories.length === 6;

  const handleStart = () => {
    if (!isReady) {
      setShowValidation(true);
      return;
    }

    setShowValidation(false);
    // استخراج وسائل المساعدة المختارة لكل فريق
    const helpersA = helpersOne
      .map((v, i) => (v ? i : -1))
      .filter((i) => i !== -1);
    const helpersB = helpersTwo
      .map((v, i) => (v ? i : -1))
      .filter((i) => i !== -1);

    navigate("/game", {
      state: {
        teamAName,
        teamBName,
        helpersA,
        helpersB,
      },
    });

  };

  // Removed useEffect related to hideSidebar since it is unused

  // مراقبة التمرير لإظهار/إخفاء الشريط الجانبي
  useEffect(() => {
    function handleScroll() {
      if (!categorySectionRef.current) return;
      const rect = categorySectionRef.current.getBoundingClientRect();
      // إذا كان القسم ظاهرًا في أعلى الشاشة (مثلاً أعلى 60%) نظهر الشريط
      setShowSidebar(rect.bottom > window.innerHeight * 0.3);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="create-game">
      {/* قسم اختيار الفئات */}
      <div ref={categorySectionRef}>
        <CategorySelectionPage
          selected={selectedCategories}
          onChange={setSelectedCategories}
          hideSidebar={!showSidebar}
        />
      </div>

      <div className="create-game__container">
        <header className="create-game__header">
          <h1 className="create-game__title">إنشاء لعبة جديدة</h1>
        </header>

        {/* اسم اللعبة */}
        <div className="create-game__game-name-wrap">
          <input
            type="text"
            className={`create-game__game-name ${
              showValidation && !gameName.trim()
                ? "create-game__game-name--invalid"
                : ""
            }`}
            placeholder="اسم اللعبة"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* الفرق */}
        <div className="create-game__teams">
          {/* الفريق الأول */}
          <div
            className={`create-game__team create-game__team--one ${
              showValidation && helpersOne.filter(Boolean).length < 3
                ? "create-game__team--invalid"
                : ""
            }`}
          >
            <div className="create-game__team-header">
              <span className="create-game__team-dot create-game__team-dot--one" />
              <h2 className="create-game__team-label">{TEAM_ONE_LABEL}</h2>
            </div>

            <input
              type="text"
              className={`create-game__team-input ${
                showValidation && !teamAName.trim()
                  ? "create-game__team-input--invalid"
                  : ""
              }`}
              placeholder="اسم الفريق الأول"
              value={teamAName}
              onChange={(e) => setTeamAName(e.target.value)}
            />

            <p className="create-game__helpers-text">
              اختر 3 وسائل مساعدة للفريق الأول
            </p>

            <HelperSlots
              selected={helpersOne}
              onToggle={(i) => setHelpersOne((h) => toggleHelper(h, i))}
              teamVariant="one"
            />
          </div>

          {/* الفريق الثاني */}
          <div
            className={`create-game__team create-game__team--two ${
              showValidation && helpersTwo.filter(Boolean).length < 3
                ? "create-game__team--invalid"
                : ""
            }`}
          >
            <div className="create-game__team-header">
              <span className="create-game__team-dot create-game__team-dot--two" />
              <h2 className="create-game__team-label">{TEAM_TWO_LABEL}</h2>
            </div>

            <input
              type="text"
              className={`create-game__team-input ${
                showValidation && !teamBName.trim()
                  ? "create-game__team-input--invalid"
                  : ""
              }`}
              placeholder="اسم الفريق الثاني"
              value={teamBName}
              onChange={(e) => setTeamBName(e.target.value)}
            />

            <p className="create-game__helpers-text">
              اختر 3 وسائل مساعدة للفريق الثاني
            </p>

            <HelperSlots
              selected={helpersTwo}
              onToggle={(i) => setHelpersTwo((h) => toggleHelper(h, i))}
              teamVariant="two"
            />
          </div>
        </div>

        {/* اختيار الفئات يظهر في نفس الصفحة */}

        {/* شريط الفئات المختارة */}
        {selectedCategories.length > 0 && (
          <div className="create-game__selected-bar">
            {selectedCategories.map((cat) => (
              <div key={cat.id} className="create-game__selected-card">
                
                <button
                  type="button"
                  className="create-game__remove-btn"
                  onClick={() =>
                    setSelectedCategories((prev) =>
                      prev.filter((c) => c.id !== cat.id)
                    )
                  }
                >
                  
                </button>

                <img
                  src={cat.image}
                  alt={cat.title}
                  className="create-game__selected-img"
                />

                <span className="create-game__selected-title">
                  {cat.title}
                </span>

              </div>
            ))}

          </div>
        )}


        {/* زر البدء */}
        <div className="create-game__actions">
          <button
            type="button"
            className={`create-game__btn ${
              isReady
                ? "create-game__btn--enabled"
                : "create-game__btn--disabled"
            }`}
            onClick={handleStart}
          >
            

            البدء
          </button>
        </div>
      </div>
    </div>
  );
}
