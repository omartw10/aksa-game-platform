import type { HelperId } from "../helpersData";
import type { LucideIcon } from "lucide-react";
import { InfoTooltip } from "./InfoTooltip";
import styles from "./HelperCard.module.css";

type HelperCardProps = {
  helperId: HelperId;
  icon: LucideIcon;
  name: string;
  description: string;
  selected: boolean;
  teamVariant: "one" | "two";
  onToggle: () => void;
  "data-testid"?: string;
};

export function HelperCard({
  helperId,
  icon: Icon,
  name,
  description,
  selected,
  teamVariant,
  onToggle,
  "data-testid": testId = "helper-card",
}: HelperCardProps) {
  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const iconClass = styles[`icon--${helperId}` as keyof typeof styles] ?? "";
  const selectedClass = selected ? (styles[`cardSelected--${teamVariant}` as keyof typeof styles] ?? "") : "";

  return (
    <button
      type="button"
      className={`${styles.card} ${iconClass} ${selected ? styles.cardSelected : ""} ${selectedClass}`}
      onClick={onToggle}
      aria-pressed={selected}
      aria-label={name}
      data-testid={testId}
    >
      <div className={styles.infoWrapper} onClick={handleInfoClick}>
        <InfoTooltip title={name} description={description} />
      </div>
      <div className={styles.content}>
        <div className={styles.iconWrap}>
          <Icon size={28} strokeWidth={2} aria-hidden />
        </div>
        <span className={styles.name}>{name}</span>
      </div>
    </button>
  );
}
