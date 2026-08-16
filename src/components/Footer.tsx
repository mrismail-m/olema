"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Section: Brand & Nav Columns */}
        <div className={styles.topSection}>
          
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              Olema
            </Link>
            <p className={styles.tagline}>
              Agentic AI. Done for you. We build, deploy, and guarantee custom AI agents tailored to your business operations.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className={styles.navGrid}>
            
            {/* Column 1: Navigation */}
            <div className={styles.navCol}>
              <h4 className={styles.colTitle}>Navigation</h4>
              <ul className={styles.linkList}>
                <li><Link href="#agents">Custom Agents</Link></li>
                <li><Link href="#how-it-works">How It Works</Link></li>
                <li><Link href="#security">Security & Privacy</Link></li>
                <li><Link href="#faqs">Frequently Asked</Link></li>
                <li><Link href="#cta">Free 7-Day Trial</Link></li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div className={styles.navCol}>
              <h4 className={styles.colTitle}>Solutions</h4>
              <ul className={styles.linkList}>
                <li><Link href="#enterprise">Enterprise AI</Link></li>
                <li><Link href="#agents">Workflow Automation</Link></li>
                <li><Link href="#security">SOC2 Governance</Link></li>
                <li><Link href="#contact">Custom Deployment</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact & Direct */}
            <div className={styles.navCol}>
              <h4 className={styles.colTitle}>Get In Touch</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="mailto:hello@olema.ai" className={styles.emailLink}>
                    hello@olema.ai <ArrowUpRight className={styles.linkIcon} />
                  </a>
                </li>
                <li>
                  <a href="https://cal.com/jatin-yadav05/15min" target="_blank" rel="noopener noreferrer" className={styles.emailLink}>
                    Book Intro Call <ArrowUpRight className={styles.linkIcon} />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Olema AI. All rights reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <span className={styles.dotSeparator}>•</span>
            <Link href="#">Terms of Service</Link>
            <span className={styles.dotSeparator}>•</span>
            <Link href="#">Security</Link>
          </div>

          <div className={styles.socials}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              X / TWITTER
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LINKEDIN
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GITHUB
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
