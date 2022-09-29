import { useLanguageContext } from "../contexts/LanguageContext";
import styles from "../styles/SelectLanguage.module.scss";

export const SelectLanguage = () => {
  const { language, setLanguage } = useLanguageContext();

  const toggleLanguageClick = () => {
    setLanguage(language === "ru" ? "kz" : "ru");
  };

  return (
    <div className={styles.select}>
      <div onClick={toggleLanguageClick} className={styles.selected}>
        {language === "kz" ? "ҚАЗ" : "РУС"}
      </div>
    </div>
  );
};
