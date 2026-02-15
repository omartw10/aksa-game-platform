import { useState } from "react";
import styles from "./TeamPanel.module.css";

type Props = {
  team: string;
};

export default function TeamPanel({ team }: Props) {
  const [score, setScore] = useState(0);

  return (
    <div className={styles.panel}>
      <h3>{team}</h3>

      <div className={styles.scoreRow}>
        <button onClick={() => setScore((s) => s - 1)}>-</button>
        <span>{score}</span>
        <button onClick={() => setScore((s) => s + 1)}>+</button>
      </div>

      <div className={styles.helpers}>
        <button>H1</button>
        <button>H2</button>
        <button>H3</button>
      </div>
    </div>
  );
}
