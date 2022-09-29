import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Form } from "../components/Form";
import { QA } from "../components/QA";

export default function Home() {
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
              Мобилизация – страшное дело. <br /> Поможем этническим казахам в
              Российской Федерации переехать в Республику Казахстан
            </h1>
            <div className={styles.quote}>
              <h2 className={styles.title}>Құрметті Ресейдегі қандастар!</h2>
              <p className={styles.text}>
                &quot;Соңғы күндері көрші елде орын алып жатқан жағдайлар бізге
                де ауыр тиіп жатыр. Мобилизация деген сұмдық нәрсе ғой.. Әсіресе
                Орынбор, Омбы, Астрахан өңірлеріндегі майданға жүздеген қазақ
                бауырларымызды да алып кетіп жатыр екен. Жасын да, кәрісін де..
                Обал-ай.. Кеткендердің көбісі аман келмейтіні анық қой..
                <br />
                Сондықтан біз жігіттермен келген әскер жасындағы қазақтарға
                Астана, Атыраудағы жатақханалардан орын мен тамағын беріп,
                көмектесейік деп шештік...
                <br />
                Осындай жағдайдағы бауырларымыз болса, өтініш
                қалдырыңыздар.&quot;
              </p>
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
