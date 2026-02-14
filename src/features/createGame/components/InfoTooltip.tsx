import { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";
import styles from "./InfoTooltip.module.css";

type InfoTooltipProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function InfoTooltip({ title, description }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={handleInfoClick}
        aria-label="عرض التفاصيل"
        aria-expanded={isOpen}
      >
        <Info size={12} strokeWidth={2.5} aria-hidden />
      </button>
      {isOpen && (
        <div className={styles.popover} role="tooltip">
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </div>
  );
}
