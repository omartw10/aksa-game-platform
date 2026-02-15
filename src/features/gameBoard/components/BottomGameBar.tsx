import styles from "./BottomGameBar.module.css";

import { HelperSlots } from "../../createGame/components/HelperSlots";
import { HELPERS } from "../../createGame/helpersData";
import { useState } from "react";

type Props = {
  teamAName: string;
  teamBName: string;
  helpersA: number[];
  helpersB: number[];
  usedHelpersA: boolean[];
  usedHelpersB: boolean[];
  onHelperA: (idx: number) => void;
  onHelperB: (idx: number) => void;
};

export default function BottomGameBar({
  teamAName,
  teamBName,
  helpersA,
  helpersB,
  usedHelpersA,
  usedHelpersB,
  onHelperA,
  onHelperB,
}: Props) {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  return (
    <div className={styles.bar}>
      {/* يسار — نقاط الفريق الثاني */}
      <div className={styles.scorePanel}>
        <h3>{teamBName}</h3>
        <div className={styles.scoreControls}>
          <button onClick={() => setScoreB(scoreB + 100)}>+</button>
          <span>{scoreB}</span>
          <button onClick={() => setScoreB(scoreB - 100)}>-</button>
        </div>
      </div>

      {/* المنتصف — البطاقات */}
      <div className={styles.helpersCenter}>
        <div className={styles.teamHelpers}>
          {helpersA.map((helperIdx, i) => {
            const helper = HELPERS[helperIdx];
            return (
              <button
                key={helper.id}
                className={styles.helperBtn + (usedHelpersA[i] ? ' ' + styles.helperUsed : '')}
                onClick={() => !usedHelpersA[i] && onHelperA(i)}
                disabled={usedHelpersA[i]}
                title={helper.description}
              >
                <helper.icon size={22} />
                <span>{helper.name}</span>
              </button>
            );
          })}
        </div>
        <div className={styles.teamHelpers}>
          {helpersB.map((helperIdx, i) => {
            const helper = HELPERS[helperIdx];
            return (
              <button
                key={helper.id}
                className={styles.helperBtn + (usedHelpersB[i] ? ' ' + styles.helperUsed : '')}
                onClick={() => !usedHelpersB[i] && onHelperB(i)}
                disabled={usedHelpersB[i]}
                title={helper.description}
              >
                <helper.icon size={22} />
                <span>{helper.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* يمين — نقاط الفريق الأول */}
      <div className={styles.scorePanel}>
        <h3>{teamAName}</h3>
        <div className={styles.scoreControls}>
          <button onClick={() => setScoreA(scoreA + 100)}>+</button>
          <span>{scoreA}</span>
          <button onClick={() => setScoreA(scoreA - 100)}>-</button>
        </div>
      </div>
    </div>
  );
}
