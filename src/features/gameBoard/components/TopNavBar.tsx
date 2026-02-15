import styles from "./TopNavBar.module.css";

type Props = {
  onBack: () => void;
};

export default function TopNavBar({ onBack }: Props) {
  const handleExit = () => {
    const confirmed = confirm("هل تريد الخروج من اللعبة؟");
    if (confirmed) window.location.href = "/";
  };

  return (
    <div className={styles.nav}>
      <button onClick={onBack} className={styles.btn}>
        رجوع
      </button>

      <button onClick={handleExit} className={styles.exit}>
        خروج
      </button>
    </div>
  );
}
