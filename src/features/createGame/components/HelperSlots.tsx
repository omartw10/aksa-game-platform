import "./HelperSlots.css";

const SLOT_COUNT = 4;
const MAX_SELECTED = 3;

type HelperSlotsProps = {
  selected: boolean[];
  onToggle: (index: number) => void;
  accentColor: string;
  "data-testid"?: string;
};

export function HelperSlots({
  selected,
  onToggle,
  accentColor,
  "data-testid": testId = "helper-slots",
}: HelperSlotsProps) {
  const handleClick = (index: number) => {
    const isSelected = selected[index];
    if (isSelected) {
      onToggle(index);
    } else if (selected.filter(Boolean).length < MAX_SELECTED) {
      onToggle(index);
    }
  };

  return (
    <div className="helper-slots" data-testid={testId}>
      {Array.from({ length: SLOT_COUNT }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`helper-slots__box ${selected[i] ? "helper-slots__box--selected" : ""}`}
          style={
            selected[i]
              ? ({ "--helper-accent": accentColor } as React.CSSProperties)
              : undefined
          }
          onClick={() => handleClick(i)}
          aria-pressed={selected[i]}
          aria-label={`وسيلة مساعدة ${i + 1}`}
        />
      ))}
    </div>
  );
}
