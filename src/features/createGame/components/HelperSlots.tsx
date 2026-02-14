import { HELPERS } from "../helpersData";
import { HelperCard } from "./HelperCard";
import styles from "./HelperSlots.module.css";

const MAX_SELECTED = 3;

type HelperSlotsProps = {
  selected: boolean[];
  onToggle: (index: number) => void;
  teamVariant: "one" | "two";
  "data-testid"?: string;
};

export function HelperSlots({
  selected,
  onToggle,
  teamVariant,
  "data-testid": testId = "helper-slots",
}: HelperSlotsProps) {
  const handleToggle = (index: number) => {
    const isSelected = selected[index];
    if (isSelected) {
      onToggle(index);
    } else if (selected.filter(Boolean).length < MAX_SELECTED) {
      onToggle(index);
    }
  };

  return (
    <div className={styles.slots} data-testid={testId}>
      {HELPERS.map((helper, index) => (
        <HelperCard
          key={helper.id}
          helperId={helper.id}
          icon={helper.icon}
          name={helper.name}
          description={helper.description}
          selected={selected[index]}
          teamVariant={teamVariant}
          onToggle={() => handleToggle(index)}
          data-testid={`${testId}-${index}`}
        />
      ))}
    </div>
  );
}
