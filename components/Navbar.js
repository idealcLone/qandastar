import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import { SelectLanguage } from "./SelectLanguage";
import { useTranslations } from "../hooks/useTranslations";

export const Navbar = () => {
  const { t } = useTranslations();

  const handleRequestClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <nav className={styles.nav}>
      <div>
        <img src="/logo.svg" alt="Logo Icon" className={styles.logo} />
        <div className={styles.right}>
          <div className={styles.request} onClick={handleRequestClick}>
            {t("make_request")}
          </div>
          <SelectLanguage />
        </div>
      </div>
    </nav>
  );
};
