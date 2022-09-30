import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Form } from "../components/Form";
import { QA } from "../components/QA";
import { useTranslations } from "../hooks/useTranslations";

export default function Home() {
  const { t } = useTranslations();
  return (
    <>
      <Head>
        <title>Қандастар</title>
        <meta name="description" content="Qandastar" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1>
              {t("mobilization")}
              <br />
              {t("title")}
            </h1>
            <div className={styles.quote}>
              <h2 className={styles.title}>{t("subtitle")}</h2>
              <p className={styles.text}>&quot;{t("subtext")}&quot;</p>
              <h2 className={styles.author}>
                <a
                  href="https://www.instagram.com/p/Ci9__ZHrzXb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Айдын Рахимбаев
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <QA />
          <Form />
        </div>
      </main>
    </>
  );
}
