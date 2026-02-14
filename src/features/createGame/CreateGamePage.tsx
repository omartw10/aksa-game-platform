import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HelperSlots } from "./components/HelperSlots";
import "./CreateGamePage.css";

const TEAM_ONE_LABEL = "الفريق الأول";
const TEAM_TWO_LABEL = "الفريق الثاني";

function createInitialHelpers(): boolean[] {
  return [false, false, false, false];
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
  const [gameName, setGameName] = useState("");
  const [teamAName, setTeamAName] = useState("");
  const [teamBName, setTeamBName] = useState("");
  const [helpersOne, setHelpersOne] = useState(createInitialHelpers);
  const [helpersTwo, setHelpersTwo] = useState(createInitialHelpers);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/categories", {
      state: {
        gameName: gameName.trim() || undefined,
        teamAName: teamAName.trim() || TEAM_ONE_LABEL,
        teamBName: teamBName.trim() || TEAM_TWO_LABEL,
        helpersOne: helpersOne,
        helpersTwo: helpersTwo,
      },
    });
  };

  return (
    <div className="create-game">
      <div className="create-game__card">
        <header className="create-game__header">
          <h1 className="create-game__title">إنشاء لعبة جديدة</h1>
        </header>

        <div className="create-game__game-name-wrap">
          <input
            type="text"
            className="create-game__game-name"
            placeholder="اسم اللعبة"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            autoComplete="off"
            data-testid="game-name-input"
          />
        </div>

        <div className="create-game__teams">
          <div className="create-game__team">
            <div className="create-game__team-header">
              <span className="create-game__team-dot create-game__team-dot--one" />
              <h2 className="create-game__team-label">{TEAM_ONE_LABEL}</h2>
            </div>
            <input
              type="text"
              className="create-game__team-input"
              placeholder="اسم الفريق الأول"
              value={teamAName}
              onChange={(e) => setTeamAName(e.target.value)}
              data-testid="team-a-input"
            />
            <p className="create-game__helpers-text">
              الفريق الأول: اختر 3 وسائل مساعدة
            </p>
            <HelperSlots
              selected={helpersOne}
              onToggle={(i) => setHelpersOne((h) => toggleHelper(h, i))}
              accentColor="#00BFFF"
              data-testid="helper-slots-one"
            />
          </div>

          <div className="create-game__team">
            <div className="create-game__team-header">
              <span className="create-game__team-dot create-game__team-dot--two" />
              <h2 className="create-game__team-label">{TEAM_TWO_LABEL}</h2>
            </div>
            <input
              type="text"
              className="create-game__team-input"
              placeholder="اسم الفريق الثاني"
              value={teamBName}
              onChange={(e) => setTeamBName(e.target.value)}
              data-testid="team-b-input"
            />
            <p className="create-game__helpers-text">
              الفريق الثاني: اختر 3 وسائل مساعدة
            </p>
            <HelperSlots
              selected={helpersTwo}
              onToggle={(i) => setHelpersTwo((h) => toggleHelper(h, i))}
              accentColor="#FFD700"
              data-testid="helper-slots-two"
            />
          </div>
        </div>

        <div className="create-game__actions">
          <button
            type="button"
            className="create-game__btn create-game__btn--orange"
            onClick={handleStart}
          >
            البدء
          </button>
          <button
            type="button"
            className="create-game__btn create-game__btn--purple"
            onClick={handleStart}
          >
            البدء
          </button>
        </div>
      </div>
    </div>
  );
}
