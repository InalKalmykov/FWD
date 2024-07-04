import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className={styles.socialIcons}>
        <a href="https://github.com/InalKalmykov"><img src={require('./images/github-icon.png')} alt="GitHub" /></a>
        <a href="https://t.me/@Fluffy_sn0wy"><img src={require('./images/telegram-icon.png')} alt="Telegram" /></a>
        <a href="mailto:i.kalmykov@innopolis.university"><img src={require('./images/email-icon.png')} alt="Email" /></a>
      </div>
    </section>
  );
};

export default Contact;
