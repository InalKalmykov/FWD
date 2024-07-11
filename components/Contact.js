// components/Contact.js

import Image from 'next/image';
import styles from '../styles/Home.module.css';

import githubIcon from '../public/images/github-icon.png';
import telegramIcon from '../public/images/telegram-icon.png';
import emailIcon from '../public/images/email-icon.png';

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact Me</h2>
      <div className={styles['social-icons']}>
        <a id="gh-link" href="https://github.com/InalKalmykov">
          <Image src={githubIcon} width={40} height={40} alt="GitHub" />
        </a>
        <a id="tg-link" href="https://t.me/@Fluffy_sn0wy">
          <Image src={telegramIcon} width={40} height={40} alt="Telegram" />
        </a>
        <a id="email" href="mailto:i.kalmykov@innopolis.university">
          <Image src={emailIcon} width={40} height={40} alt="Email" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
