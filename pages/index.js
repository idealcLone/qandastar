import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Form } from "../components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Қандастар</title>
        <meta name="description" content="Qandastar" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Құрметті Ресейдегі қандастар!</h1>
            <p>
              &quot;Соңғы күндері көрші елде орын алып жатқан жағдайлар бізге де
              ауыр тиіп жатыр. Мобилизация деген сұмдық нәрсе ғой.. Әсіресе
              Орынбор, Омбы, Астрахан өңірлеріндегі майданға жүздеген қазақ
              бауырларымызды да алып кетіп жатыр екен. Жасын да, кәрісін де..
              Обал-ай.. Кеткендердің көбісі аман келмейтіні анық қой..
              <br />
              Сондықтан біз жігіттермен келген әскер жасындағы қазақтарға
              Астана, Атыраудағы жатақханалардан орын мен тамағын беріп,
              көмектесейік деп шештік. Елге қарай жетсе болды ғой..
              <br />
              Ағайындар, қазір сөз бен дау көп, бірақ көп дауласпай, өзіміздің
              қарапайым қазақтарымызды құтқарып қалайықшы.. Осындай жағдайларда
              бір-бірімізге қолдау көрсетпесек, қашан және кім көрсетеді.. Осы
              жағдайдағы бауырларымыз болса, өтініш қалдырыңыздыр. Көмекшілерім
              қажетті ақпаратты береді.&quot;
            </p>
            <h2 className={styles.author}>Айдын Рахимбаев</h2>
          </div>
        </div>
        <Form />
      </main>
    </>
  );
}
