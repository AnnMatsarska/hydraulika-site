"use client";

import React from "react";
import styles from "./ONasPage.module.scss";

import { useRouter } from "next/navigation";
import Image from "next/image";

const ONasPageComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/kontakt");
  };

  return (
    <>
      <div className={styles.headerDiv}></div>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>O Nas</h1>
          <ul className={styles.cards}>
            <li className={styles.card}>
              <h3>7-metrowy siłownik</h3>
              <p>
                Największy projekt – specjalny siłownik hydrauliczny wykonany na
                indywidualne zamówienie.
              </p>
            </li>
            <li className={styles.card}>
              {" "}
              <h3>Zespół ekspertów</h3>
              <p>
                Hydraulika Siłowa Wałcz to pasjonaci hydrauliki – technologia to
                nasza codzienność i ambicja.
              </p>
            </li>
            <li className={styles.card}>
              {" "}
              <h3>Wysoka jakość</h3>
              <p>
                Wszystkie nasze usługi oparte są na rzetelności, doświadczeniu i
                najwyższych standardach technicznych.
              </p>
            </li>
          </ul>
          <div className={styles.contentBox}>
            <div style={{ width: "100%" }}>
              <h2 className={styles.subTitle}>Nasza Historia</h2>
              <p className={styles.text}>
                Hydraulika Siłowa to doświadczony warsztat specjalizujący się w
                naprawie hydrauliki siłowej, który od lat obsługuje klientów z
                różnych sektorów. Nasza firma powstała z pasji do technologii
                hydraulicznych, a naszym celem jest dostarczanie innowacyjnych
                rozwiązań dostosowanych do potrzeb klientów.
              </p>
              <p className={styles.text}>
                Specjalizujemy się w naprawie siłowników hydraulicznych oraz
                rozdzielaczy, a także projektujemy systemy hydrauliczne na
                zamówienie. Dzięki zaawansowanemu zapleczu technicznemu i
                zespołowi wykwalifikowanych inżynierów, jesteśmy w stanie
                realizować najbardziej wymagające projekty.
              </p>
            </div>
            <div className={styles.imgBox}>
              <Image
                src="/oNasPage/oNasPage1.PNG"
                alt="Nasza Historia"
                fill
                className={styles.itemImg}
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.bottomContainer}>
            <p className={styles.bottomText}>
              Zainteresowany współpracą lub konsultacją?
            </p>
            <button
              type="button"
              aria-label="Uzyskaj konsultację"
              className={`common-button ${styles.button}`}
              onClick={handleClick}
            >
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ONasPageComponent;
