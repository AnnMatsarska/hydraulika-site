"use client";

import React from "react";

import styles from "./Hero.module.scss";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/kontakt");
  };
  return (
    <section className={styles.hero}>
      <div className={styles.textBox}>
        <h1 className={`${styles.heroTitle} `}>
          Profesjonalne rozwiązania w hydraulice siłowej
        </h1>
        <p className={styles.heroText}>
          38 lat doświadczenia w hydraulice siłowej
        </p>
        <button
          type="button"
          aria-label="Uzyskaj konsultację"
          className={`common-button ${styles.button}`}
          onClick={handleClick}
        >
          Uzyskaj konsultację
        </button>
      </div>
    </section>
  );
};

export default Hero;
