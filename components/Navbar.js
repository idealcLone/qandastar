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
        <Image src="/logo.svg" width={100} height={50} />
        <div className={styles.right}>
          <SelectLanguage />
          <div className={styles.request} onClick={handleRequestClick}>
            {t("make_request")}
          </div>
        </div>
      </div>
    </nav>
  );
};
