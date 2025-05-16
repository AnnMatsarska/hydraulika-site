import React from "react";
import styles from "./LocationSection.module.scss";
import { useRouter } from "next/navigation";

const LocationSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/kontakt");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mapWrapper}>
          <iframe
            title="Hydraulika Siłowa Wałcz"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.2403629349923!2d16.471122515854888!3d53.27026177995878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701a86b02b6e3a1%3A0xd0d0a58f73b7f1f0!2sBydgoska%2080%2C%2078-600%20Wa%C5%82cz%2C%20Polska!5e0!3m2!1spl!2spl!4v1683123000000!5m2!1spl!2spl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <button
          type="button"
          aria-label="Uzyskaj konsultację"
          className={`common-button ${styles.button}`}
          onClick={handleClick}
        >
          Skontaktuj się z nami
        </button>
      </div>
    </section>
  );
};

export default LocationSection;
