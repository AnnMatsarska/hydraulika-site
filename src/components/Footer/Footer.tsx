import React from "react";

import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.contentBox}>
            <div className={styles.footerBlock}>
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21 3 13.93 3 5.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.43 2.3z" />
              </svg>
              <p className={styles.text}>ZADZWOŃ DO NAS</p>
            </div>
            <p className={`${styles.text} ${styles.infoText}`}>
              <a href="tel:+48604305267">+48 604‑305‑267</a>{" "}
            </p>
            <p className={`${styles.text} ${styles.infoText}`}>
              <a href="tel:+48786340140">+48 786‑340‑140</a>{" "}
            </p>
          </div>
          <div className={styles.separator} />
          <div className={styles.contentBox}>
            <div className={styles.footerBlock}>
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <p className={styles.text}>NAPISZ DO NAS</p>
            </div>
            <p className={`${styles.text} ${styles.infoText}`}>
              <a href="mailto:hswalcz@gmail.com"> hswalcz@gmail.com</a>
            </p>
          </div>
          <div className={styles.separator} />
          <div className={styles.contentBox}>
            <div className={styles.footerBlock}>
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <p className={styles.text}>ZNAJDŹ NAS</p>
            </div>
            <p className={`${styles.text} ${styles.infoText}`}>
              <a
                href="https://maps.app.goo.gl/dJJEbVPYbTL3EugS9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bydgoska 80, Walcz 78-600 Polska
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.bottomFooterBox}>
            <h4>
              Hydraulika <span>Siłowa</span>
            </h4>
            <p>
              Profesjonalne rozwiązania w dziedzinie hydrauliki siłowej dla
              przemysłu, budownictwa i rolnictwa.
            </p>
          </div>
          <div className={styles.bottomFooterBox}>
            <h5>Usługi</h5>
            <ul>
              <li>
                <Link href="/oferta#naprawa">Naprawa hydrauliki</Link>
              </li>
              <li>
                <Link href="/oferta#projektowanie">Projektowanie systemów</Link>
              </li>
              <li>
                <Link href="/oferta#doradztwo">Serwis i diagnostyka</Link>
              </li>
              <li>
                <Link href="/oferta#konserwacja">Konserwacja</Link>
              </li>
            </ul>
          </div>
          <div className={styles.bottomFooterBox}>
            <h5>Firma</h5>
            <ul>
              <li>
                <Link href="/oferta">Oferta</Link>
              </li>
              <li>
                <Link href="/o-nas">O Nas</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomLine}>
          <Link
            href="https://www.linkedin.com/in/anna-matsarska"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2025 by Anna Matsarska.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
