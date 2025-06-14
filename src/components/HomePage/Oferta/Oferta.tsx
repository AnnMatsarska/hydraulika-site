import React from "react";

import styles from "./Oferta.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Oferta = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/oferta");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <div className={styles.textBox}>
            <h2 className={styles.title}>Oferta</h2>
            <p className={styles.text}>
              Hydraulika Siłowa Wałcz to gwarancja niezawodności i precyzji w
              naprawie hydrauliki siłowej. Specjalizujemy się w regeneracji
              siłowników, rozdzielaczy i innych komponentów, oferując nowoczesne
              zaplecze techniczne i doświadczony zespół mechaników.
            </p>
            <p className={styles.text}>
              Każde zlecenie realizujemy z pełnym zaangażowaniem, dostosowując
              rozwiązania do indywidualnych potrzeb klientów. Stawiamy na
              profesjonalizm, solidność i innowacyjne podejście, zapewniając
              sprawność i trwałość systemów hydraulicznych.
            </p>
          </div>

          <div className={styles.imageGrid}>
            {[
              {
                src: "/homePage/oferta/oferta1.PNG",
                label: "Siłowniki",
                textImg:
                  "Regenerujemy i serwisujemy siłowniki hydrauliczne wszystkich typów i zastosowań.",
              },
              {
                src: "/homePage/oferta/oferta4.PNG",
                label: "Rozdzielacze",
                textImg:
                  "Zapewniamy pełną diagnostykę i naprawę zaworów i rozdzielaczy hydraulicznych.",
              },
              {
                src: "/homePage/oferta/oferta2.PNG",
                label: "Nowoczesne zaplecze",
                textImg:
                  "Pracujemy na wysokiej klasy sprzęcie, co gwarantuje dokładność i jakość.",
              },
              {
                src: "/homePage/oferta/oferta3.PNG",
                label: "Doświadczony zespół",
                textImg:
                  "Nasi mechanicy to wykwalifikowani specjaliści z wieloletnią praktyką.",
              },
            ].map(({ src, label, textImg }) => (
              <div key={label} className={styles.imageCard}>
                <Image
                  src={src}
                  alt={label}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={label === "Siłowniki"}
                />
                <div className={styles.overlay}>
                  <span className={styles.label}>{label}</span>
                  <p className={styles.textImg}>{textImg}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Uzyskaj konsultację"
            className={`common-button ${styles.button}`}
            onClick={handleClick}
          >
            Dowiedz się więcej
          </button>
        </div>
      </div>
    </section>
  );
};

export default Oferta;
