"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [splashFinished, setSplashFinished] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Hide splash overlay after all CSS animations complete
    const splashTimeout = setTimeout(() => {
      setSplashFinished(true);
    }, 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <>
      <div className={`${styles.splashOverlay} ${splashFinished ? styles.hiddenOverlay : ""}`}></div>
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <div className={styles.wordMask}>
              <div className={styles.wordTrack}>
                <div className={styles.logo}>Agentic AI</div>
                <div className={styles.logo}>Done</div>
                <div className={styles.logo}>For</div>
                <div className={styles.logo}>You</div>
                <div className={styles.logo}>
                  <Link href="/">Olema</Link>
                </div>
              </div>
            </div>
          </div>
          
          <nav className={styles.navLinks}>
            <Link href="#agents">Agents</Link>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#security">Security</Link>
            <Link href="#faqs">FAQs</Link>
          </nav>
          
          <div className={styles.actions}>
            {!splashFinished && (
              <div className={styles.progressTrack}>
                <div className={styles.progressBar}></div>
              </div>
            )}
            <Link href="#contact" className={styles.contactBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
