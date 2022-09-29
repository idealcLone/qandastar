import styles from "../styles/QA.module.scss";
import { useTranslations } from "../hooks/useTranslations";

export const QA = () => {
  const { t } = useTranslations();

  return (
    <div className={styles.container}>
      <h2>{t("qa")}</h2>
      <div className={styles.qa}>
        <label htmlFor="q1">
          <span>{t("question1")}</span>
          <span>+</span>
        </label>
        <input type="checkbox" name="q1" id="q1" />
        <p>{t("answer1")}</p>
      </div>
      <div className={styles.qa}>
        <label htmlFor="q2">
          <span>{t("question2")}</span>
          <span>+</span>
        </label>
        <input type="checkbox" name="q2" id="q2" />
        <p>{t("answer2")}</p>
      </div>
      <div className={styles.qa}>
        <label htmlFor="q3">
          <span>{t("question3")}</span>
          <span>+</span>
        </label>
        <input type="checkbox" name="q3" id="q3" />
        <p>{t("answer3")}</p>
      </div>
      <div className={styles.qa}>
        <label htmlFor="q4">
          <span>{t("question4")}</span>
          <span>+</span>
        </label>
        <input type="checkbox" name="q4" id="q4" />
        <p>{t("answer4")}</p>
      </div>
      <div className={styles.qa}>
        <label htmlFor="q5">
          <span>{t("question5")}</span>
          <span>+</span>
        </label>
        <input type="checkbox" name="q5" id="q5" />
        <p>{t("answer5")}</p>
      </div>
    </div>
  );
};
