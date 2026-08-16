"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://cal.com/jatin-yadav05/15min", "_blank");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Main 2-Column Section */}
        <div className={styles.mainGrid}>
          
          {/* Left Column: Big 1-Word-Per-Line CTA */}
          <div className={styles.leftCol}>
            <nav className={styles.primaryNav}>
              <a
                href="https://cal.com/jatin-yadav05/15min"
                onClick={handleBookCall}
                className={styles.bigCtaLink}
              >
                <span>SHOW</span>
                <span>ME</span>
                <span>WHAT&apos;S</span>
                <span>POSSIBLE →</span>
              </a>
            </nav>
          </div>

          {/* Right Column: Olema Minimal Title */}
          <div className={styles.rightCol}>
            <div className={styles.brandBanner}>
              <h2 className={styles.brandTitle}>Olema</h2>
            </div>
          </div>

        </div>

        {/* Bottom Navigation Row (below HR) */}
        <div className={styles.bottomRow}>
          <Link href="#agents">AGENTS</Link>
          <Link href="#enterprise">ENTERPRISE</Link>
          <Link href="#security">SECURITY &amp; PRIVACY</Link>
          <Link href="#faqs">FAQS</Link>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>

      </div>
    </footer>
  );
}
