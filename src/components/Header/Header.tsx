"use client";

import React, { useState } from "react";

import styles from "./Header.module.scss";
import { NavBar } from "../NavBar";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src="/Logo.png"
              alt="Logo"
              width={90}
              height={90}
              className={styles.logoImg}
              unoptimized
            />
            <p className={styles.logoText}>
              Hydraulika siłowa <span className={styles.logoSpan}>Walcz</span>
            </p>
          </div>
        </Link>
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={styles.desktopNav}>
          <NavBar />
        </div>
      </div>
      <div className={`${styles.mobileNav} ${menuOpen ? styles.show : ""}`}>
        <NavBar onLinkClick={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
