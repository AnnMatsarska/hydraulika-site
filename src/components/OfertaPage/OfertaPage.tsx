"use client";

import React from "react";
import styles from "./OfertaPage.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OfertaPageComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/kontakt");
  };

  return (
    <>
      <div className={styles.headerDiv}></div>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Nasze usługi</h1>
          <p className={styles.text}>
            Oferujemy pełen zakres usług w zakresie naprawy, projektowania i
            obsługi systemów hydraulicznych
          </p>
          <ul className={styles.list}>
            <li id="naprawa" className={styles.item}>
              <div className={styles.imgBox}>
                <Image
                  src="/ofertaPage/content-hydraulika-silowa.webp"
                  alt=" Naprawa i Serwis Hydrauliki Siłowej"
                  fill
                  className={styles.itemImg}
                  unoptimized
                />
              </div>
              <div className={styles.contentBox}>
                {" "}
                <div className={styles.textBox}>
                  <h2 className={styles.subTitle}>
                    Naprawa i Serwis Hydrauliki Siłowej
                  </h2>
                  <p className={styles.subText}>
                    Hydraulika Siłowa Wałcz oferuje profesjonalną regenerację
                    siłowników, rozdzielaczy i innych podzespołów. Doświadczeni
                    mechanicy szybko diagnozują usterki i przywracają sprawność
                    systemów, gwarantując precyzję i trwałość każdej naprawy.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Uzyskaj konsultację"
                  className={`common-button ${styles.button}`}
                  onClick={handleClick}
                >
                  Sprawdź
                </button>
              </div>
            </li>
            <li id="projektowanie" className={styles.item}>
              <div className={styles.imgBox}>
                <Image
                  src="/ofertaPage/hydrauliksysteme-hydraulikblocke-mit-ventilaufbau-600x375.webp"
                  alt="Projektowanie i Budowa Systemów"
                  fill
                  className={styles.itemImg}
                  unoptimized
                />
              </div>
              <div className={styles.contentBox}>
                <div className={styles.textBox}>
                  <h2 className={styles.subTitle}>
                    Projektowanie i Budowa Systemów
                  </h2>
                  <p className={styles.subText}>
                    Tworzymy zaawansowane systemy i unikalne maszyny
                    hydrauliczne szyte na miarę. Realizujemy projekty „pod
                    klucz” — od koncepcji po produkcję siłowników (nawet 7 m
                    długości) — z gwarancją niezawodności i precyzji.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Uzyskaj konsultację"
                  className={`common-button ${styles.button}`}
                  onClick={handleClick}
                >
                  Sprawdź
                </button>
              </div>
            </li>
            <li id="doradztwo" className={styles.item}>
              <div className={styles.imgBox}>
                <Image
                  src="/ofertaPage/Grabs-Wellsford_1.51-Large-1024x576.jpeg"
                  alt="Doradztwo Techniczne"
                  fill
                  className={styles.itemImg}
                  unoptimized
                />
              </div>
              <div className={styles.contentBox}>
                {" "}
                <div className={styles.textBox}>
                  <h2 className={styles.subTitle}>Doradztwo Techniczne</h2>
                  <p className={styles.subText}>
                    Nasi eksperci mogą pomóc zoptymalizować i ulepszyć każdy
                    system hydrauliczny, korzystając z wieloletniego
                    doświadczenia. Zapewniamy dogłębne doradztwo i innowacyjne
                    rozwiązania, które zwiększają wydajność instalacji.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Uzyskaj konsultację"
                  className={`common-button ${styles.button}`}
                  onClick={handleClick}
                >
                  Sprawdź
                </button>
              </div>
            </li>
            <li id="konserwacja" className={styles.item}>
              <div className={styles.imgBox}>
                <Image
                  src="/ofertaPage/ChatGPT Image 14 черв. 2025 р., 17_55_21.png"
                  alt="Konserwacja i Przygotowanie do UDT"
                  fill
                  className={styles.itemImg}
                  unoptimized
                />
              </div>
              <div className={styles.contentBox}>
                <div className={styles.textBox}>
                  <h2 className={styles.subTitle}>
                    Konserwacja i Przygotowanie do UDT
                  </h2>
                  <p className={styles.subText}>
                    Oferujemy przeglądy, remonty i prace serwisowe maszyn
                    hydraulicznych, przedłużające ich żywotność. Przygotowujemy
                    technikę do inspekcji UDT – wykonujemy niezbędną
                    dokumentację, przeprowadzamy przeglądy techniczne i
                    dostosowujemy sprzęt do wymagań dozoru technicznego. Dzięki
                    temu maszyny przejdą kontrolę bez problemu.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Uzyskaj konsultację"
                  className={`common-button ${styles.button}`}
                  onClick={handleClick}
                >
                  Sprawdź
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OfertaPageComponent;
