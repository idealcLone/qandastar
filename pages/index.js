import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { Form } from '../components/Form';

export default function Home() {
	return (
		<>
			<Head>
				<title>Қандастар</title>
				<meta name="description" content="Qandastar"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className={styles.main}>
				<div className={styles.hero}>
					<div className={styles.textContainer}>
						<h1 className={styles.title}>Қандастарға арналған өтiнiш қалдыру web платформасы</h1>
						<div>
							<div>
								Ресей үкіметінің зұлым шешімдерінен зардап шеккен қандастарымызды туған еліне қайтаруға арналған жоба.
							</div>
							<div>
								Орыстар білсін - <span className={styles.highlight}>Біз, қазақ халқы, өз қандастарымызды озбырлыққа қалдырмаймыз!</span>
							</div>
							<div className={styles.cta}>
								Төменде бекітілген сауалнамаға өз аты-жөнізді және басқа да ақпараттарды толтырыныз. Біз сізбен тез
								арада хабарласуға тырысамыз!
							</div>
						</div>
					</div>
				</div>
				<Form/>
			</main>
		</>
	)
}
