import React from "react";

import styles from "./Advantages.module.scss";

const Advantages = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Dlaczego warto nas wybrać</h2>
        <p className={styles.text}>
          Powierz swoje systemy hydrauliczne profesjonalistom z wieloletnim
          doświadczeniem
        </p>
        <ul className={styles.advBox}>
          <li className={styles.advItem}>
            <div className={styles.icon}>36</div>
            <p className={styles.itemTitle}>Lat doświadczenia</p>
            <p className={styles.itemText}>
              36 lat doświadczenia w branży hydrauliki siłowej
            </p>
          </li>
          <li className={styles.advItem}>
            <div className={styles.icon}>24/7</div>
            <p className={styles.itemTitle}>Szybka reakcja</p>
            <p className={styles.itemText}>
              Błyskawiczna odpowiedź na zapytania klientów i profesjonalne
              wsparcie
            </p>
          </li>
          <li className={styles.advItem}>
            <div className={styles.icon}>&#x2713;</div>
            <p className={styles.itemTitle}>Jakość</p>
            <p className={styles.itemText}>
              Wykorzystanie certyfikowanych materiałów i komponentów od
              wiodących producentów
            </p>
          </li>
          <li className={styles.advItem}>
            <div className={styles.icon}>zł</div>
            <p className={styles.itemTitle}>Elastyczne ceny</p>
            <p className={styles.itemText}>
              Indywidualne podejście do kształtowania kosztów usług dla każdego
              klienta
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
