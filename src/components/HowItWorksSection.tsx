"use client";

import { useState } from "react";
import styles from "./HowItWorksSection.module.css";
import { GradientWave } from "./GradientWave";

const steps = [
  {
    id: "step-1",
    num: "01",
    title: "We Learn Your Business",
    description: "You tell us where things are breaking. We map every place leads slip through, orders stall, or your team's time gets wasted. No forms to fill out, no prep work on your end — just a conversation.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    gradientColors: ["#C1FF72", "#FFFFFF", "#C1FF72", "#FFFFFF"],
  },
  {
    id: "step-2",
    num: "02",
    title: "We Build It For You",
    description: "You don't touch a single line of code. Our team builds and connects your agent to whatever you already use — CRM, ERP, calendar, WhatsApp. You give feedback, we polish it.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    gradientColors: ["#72C1FF", "#FFFFFF", "#72C1FF", "#FFFFFF"],
  },
  {
    id: "step-3",
    num: "03",
    title: "You Try It, Completely Free",
    description: "Your agent goes live and gets to work for a full 7 days — no cost, no card, no commitment. We track exactly how it performs, fine-tune it in real time, and hand you a clear report so you can see, in numbers, what it's doing for you. After 7 days, you decide if you're ready to scale up. We'll never auto-charge you.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
    gradientColors: ["#B472FF", "#FFFFFF", "#B472FF", "#FFFFFF"],
  },
  {
    id: "step-4",
    num: "04",
    title: "We Stay With You",
    description: "Once you're in, we don't disappear. You get a direct line to the team who built your agent, plus continuous support, ongoing optimization, and regular reporting — so it keeps getting sharper long after day one, and you always know it's working for you.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    gradientColors: ["#FF72B4", "#FFFFFF", "#FF72B4", "#FFFFFF"],
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(steps[1].id);

  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Process</h2>
        </div>
        <div className={styles.cardsContainer}>
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <div
                key={step.id}
                className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
                onMouseEnter={() => setActiveStep(step.id)}
                onClick={() => setActiveStep(step.id)}
              >
                {isActive ? (
                  <>
                    <div 
                      className={styles.cardImage} 
                    >
                      {step.gradientColors && <GradientWave colors={step.gradientColors} />}
                    </div>
                    <div className={styles.cardContentActive}>
                      <div className={styles.iconContainer}>{step.icon}</div>
                      <h3 className={styles.cardTitle}>{step.title}</h3>
                      <p className={styles.cardDescription}>{step.description}</p>
                    </div>
                  </>
                ) : (
                  <div className={styles.cardContentInactive}>
                    <span className={styles.stepNum}>{step.num}</span>
                    <div className={styles.cardBottom}>
                      <div className={styles.iconContainer}>{step.icon}</div>
                      <h3 className={styles.cardTitleInactive}>{step.title}</h3>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
