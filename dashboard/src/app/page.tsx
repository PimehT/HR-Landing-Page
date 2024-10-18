import styles from "./page.module.css";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Promo from './components/Promo';

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Service />
        <Promo />
      </main>
      <Footer />
    </div>
  );
}
