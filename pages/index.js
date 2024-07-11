// pages/index.js

import Head from 'next/head';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Comic from '../components/XkcdComic';
import styles from '../styles/Home.module.css';  // Import CSS module
import '../styles/styles.css';  // Import global CSS

const Home = () => {
  const email = 'i.kalmykov@innopolis.university';
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Inal Kalmykov's Portfolio" />
        <meta name="author" content="Inal Kalmykov" />
      </Head>

      <header className={styles.header}> {/* Apply header styles */}
        <h1>Inal Kalmykov</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <About />
        <Projects />
        <Comic email={email} />
        <Contact />
      </main>

    </div>
  );
};

export default Home;
