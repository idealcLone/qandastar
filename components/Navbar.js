import styles from "../styles/Navbar.module.scss";
import Image from "next/image";

export const Navbar = () => {
  const handleRequestClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <nav className={styles.nav}>
      <div>
        <Image src="/logo.svg" width={100} height={50} />
        <div className={styles.request} onClick={handleRequestClick}>
          Өтініш қалдыру
        </div>
      </div>
    </nav>
  );
};
