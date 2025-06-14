import React from "react";

import styles from "./Onas.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ONas = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/o-nas");
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <div className={styles.textBox}>
            <h2 className={styles.title}>O firmie Hydraulika Siłowa Wałcz </h2>
            <p className={styles.text}>
              Od 38 lat Hydraulika Siłowa Wałcz dostarcza niezawodne rozwiązania
              w hydraulice siłowej. Zaczynaliśmy jako mały warsztat, a dziś
              jesteśmy cenionym specjalistą w naprawie siłowników, rozdzielaczy
              i projektowaniu systemów hydraulicznych.
            </p>
            <p className={styles.text}>
              Nasze doświadczenie, pasja i ciągły rozwój pozwalają nam oferować
              innowacyjne i trwałe rozwiązania dla różnych branż.
            </p>
            <button
              type="button"
              aria-label="Uzyskaj konsultację"
              className={`common-button ${styles.button}`}
              onClick={handleClick}
            >
              Dowiedz się więcej
            </button>
          </div>
          <div className={styles.imgBox}>
            <Image
              src="/onas.jpeg"
              alt="Logo"
              fill
              className={styles.logoImg}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ONas;
