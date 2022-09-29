import { useLanguageContext } from "../contexts/LanguageContext";
import styles from "../styles/SelectLanguage.module.scss";

export const SelectLanguage = () => {
  const { language, setLanguage } = useLanguageContext();

  const handleLanguageClick = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className={styles.select}>
      <div
        onClick={() => handleLanguageClick("kz")}
        className={language === "kz" ? styles.selected : ""}
      >
        ҚАЗ
      </div>
      <div
        onClick={() => handleLanguageClick("ru")}
        className={language === "ru" ? styles.selected : ""}
      >
        РУС
      </div>
    </div>
  );
};
