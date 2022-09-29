import { useTranslations } from "../hooks/useTranslations";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslations();
  return (
    <footer className={styles.footer}>
      {t("build_happiness")} &copy; BI Group
    </footer>
  );
};
