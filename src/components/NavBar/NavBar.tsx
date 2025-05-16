"use client";
import React from "react";
import Link from "next/link";

import styles from "./NavBar.module.scss";
import { usePathname } from "next/navigation";

interface NavBarProps {
  onLinkClick?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onLinkClick }) => {
  const path = usePathname();

  const buildLink = (href: string, label: string) => (
    <Link
      href={href}
      onClick={onLinkClick}
      className={
        path === href ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {label}
    </Link>
  );

  return (
    <nav className={styles.nav}>
      {buildLink("/", "Strona Główna")}
      {buildLink("/oferta", "Oferta")}
      {buildLink("/o-nas", "O Nas")}
      {buildLink("/kontakt", "Kontakt")}
    </nav>
  );
};

export default NavBar;
