import React from "react";

import styles from "./KontaktPage.module.scss";

const KontaktPageComponent = () => {
  return (
    <>
      <div className={styles.headerDiv}></div>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Skontaktuj się z nami</h1>
          <div className={styles.contactBox}>
            <div className={styles.contactInfo}>
              <h2>Dane kontaktowe</h2>
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <a
                  href="https://maps.app.goo.gl/dJJEbVPYbTL3EugS9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bydgoska 80, 78-600 Wałcz, Polska
                </a>
              </div>
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21 3 13.93 3 5.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.43 2.3z" />
                </svg>
                <a href="tel:+48604‑305‑267">+48 604‑305‑267</a>
              </div>
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="hswalcz@gmail.com">hswalcz@gmail.com</a>
              </div>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.123456789!2d16.4712345!3d53.2723456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a1c1234567890%3A0xabcdef1234567890!2sBydgoska%2080%2C%2078-600%20Wa%C5%82cz%2C%20Polska!5e0!3m2!1sen!2sus!4v0000000000000"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className={styles.contactSeparator}></div>
            <div className={styles.contactForm}>
              <h2>Formularz kontaktowy</h2>
              <form>
                <label htmlFor="name">Imię i nazwisko</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Twoje imię i nazwisko"
                  required
                />
                <label htmlFor="phone">Email</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="example@mail.com"
                  required
                />
                <label htmlFor="email">Numer telefonu</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="+48 123‑456‑789"
                  required
                />
                <label htmlFor="message">Wiadomość</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Wpisz swoją wiadomość..."
                  required
                ></textarea>
                <button
                  type="submit"
                  aria-label="Uzyskaj konsultację"
                  className={`common-button ${styles.button}`}
                >
                  Wyślij
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KontaktPageComponent;
