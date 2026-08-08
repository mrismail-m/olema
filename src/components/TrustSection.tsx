"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./TrustSection.module.css";
import Image from "next/image";
import SplitText from "./SplitText";

export default function TrustSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className={styles.scrollSection}>
      <div className={styles.stickyContainer}>
        <motion.div style={{ x }} className={styles.horizontalScroll}>
          {/* Card 1 */}
          <div className={styles.contentContainer}>
            <div className={styles.backgroundWrapper}>
              <Image 
                src="/images/bg1.jpg"
                alt="Background 1"
                fill
                className={styles.backgroundImage}
                priority
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.sectionContent}>
              <SplitText
                text="It Actually Understands What You Need."
                className={styles.title}
                delay={50}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <SplitText
                text="You've probably dealt with clunky chatbots that break the second someone asks something unexpected. This isn't that. Your Olema agent understands what's actually being asked, checks your own data, and makes the right call — just like your best employee would."
                className={styles.description}
                delay={20}
                duration={0.4}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.contentContainer}>
            <div className={styles.backgroundWrapper}>
              <Image 
                src="/images/bg2.jpg"
                alt="Background 2"
                fill
                className={styles.backgroundImage}
                priority
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.sectionContent}>
              <SplitText
                text="You're Always In Control."
                className={styles.title}
                delay={50}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <SplitText
                text="Your agent knows exactly where its job ends. The moment something needs a human touch, it hands the conversation straight to your team — with full context, so nobody has to repeat themselves."
                className={styles.description}
                delay={20}
                duration={0.4}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
