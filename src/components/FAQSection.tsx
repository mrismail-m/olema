"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    id: "faq-1",
    question: "Will this replace my staff?",
    answer: "No. Your agent takes the repetitive, mind-numbing work off their plate — the data entry, the follow-ups, the copy-pasting — so your team can spend their time on the work that actually needs a human. It's built to make your people faster, not to make them unnecessary.",
  },
  {
    id: "faq-2",
    question: "What happens to my data if I cancel?",
    answer: "It's handed back to you, and then deleted from our systems. Nothing lingers, nothing gets reused. Your data was never ours to keep.",
  },
  {
    id: "faq-3",
    question: "What if the agent gets something wrong?",
    answer: "If it hits a situation it's not confident about, it hands the conversation straight to a human on your team — instantly, with full context. Our team also reviews what happened and retrains the agent within 24 hours, so the same mistake doesn't happen twice.",
  },
  {
    id: "faq-4",
    question: "Is support really available 24/7?",
    answer: "Yes. Whenever you need us, someone's there — not just during business hours.",
  },
  {
    id: "faq-5",
    question: "Do I have to sign a contract?",
    answer: "After your free 7-day trial, yes — but you'll have already seen exactly what the agent does for your business before you commit to anything.",
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.outerGrid}>
        
        {/* Header Row */}
        <div className={styles.gridRow}>
          <div className={styles.cellOuter}></div>
          <div className={styles.cellInner}>
            <div className={styles.header}>
              <h2 className={styles.title}>BEFORE YOU ASK</h2>
              <p className={styles.subtitle}>Real Questions, Straight Answers</p>
            </div>
          </div>
          <div className={styles.cellOuter}></div>
        </div>

        {/* FAQ List Row */}
        <div className={styles.gridRow}>
          <div className={styles.cellOuter}></div>
          <div className={styles.cellInner}>
            <div className={styles.faqList}>
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
                    <div 
                      className={styles.questionBubble} 
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className={styles.questionText}>{faq.question}</span>
                      {!isOpen && (
                        <span className={styles.plusIcon}>+</span>
                      )}
                    </div>
                    {isOpen && (
                      <div className={styles.answerWrapper}>
                        <div className={styles.avatarContainer}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.avatar}>
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <div className={styles.answerBubble}>
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.cellOuter}></div>
        </div>

        {/* Actions Row */}
        <div className={styles.gridRow}>
          <div className={styles.cellOuter}></div>
          <div className={styles.cellInner}>
            <div className={styles.actions}>
              <button className={styles.secondaryButton}>Read all FAQ</button>
              <button className={styles.primaryButton}>Contact Us</button>
            </div>
          </div>
          <div className={styles.cellOuter}></div>
        </div>

      </div>
    </section>
  );
}
