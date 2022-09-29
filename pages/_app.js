import "../styles/globals.scss";
import { Navbar } from "../components/Navbar";
import { LanguageProvider } from "../contexts/LanguageContext";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}

export default MyApp;
