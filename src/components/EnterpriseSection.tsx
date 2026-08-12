"use client";

import styles from './EnterpriseSection.module.css';
import { motion } from 'motion/react';

export default function EnterpriseSection() {
  const features = [
    {
      title: "Keep Everything You Already Use.",
      description: "You don't have to rip out your CRM, your ERP, or any tool your team already knows. Your agent simply plugs in and starts working alongside what you've already got."
    },
    {
      title: "See Exactly What You're Getting.",
      description: "You'll never wonder if this is working. Your own dashboard shows you, in real time, every lead qualified, every ticket closed, every task done."
    },
    {
      title: "Your Data Stays Yours. Full Stop.",
      description: "Everything is encrypted, access-controlled, and built to meet enterprise standards. Your data is never used to train anything outside your business. Ever."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className={styles.section} id="enterprise">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.mainTitle}>Enterprise Friction Reducers</h2>
        </motion.div>
        
        <div className={styles.stackContainer}>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.stackedCard} 
              style={{ top: `calc(15vh + ${index * 30}px)` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardLeft}>
                  <h3 className={styles.title}>{feature.title}</h3>
                  <p className={styles.description}>{feature.description}</p>
                </div>
                <div className={styles.cardRight}>
                  <div className={`${styles.illustration} ${styles[`ill${index + 1}`]}`}>
                    {index === 0 ? (
                      <div className={styles.puzzleContainer}>
                        <div 
                          className={styles.puzzlePiece}
                          style={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-60px', marginLeft: '-90px' }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="var(--primary)" style={{opacity:1}}>
                            <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.65 1.65 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003c-.215.283-.401.604-.401.959c0 .332.278.598.61.578q2.867-.173 5.632-.676a.75.75 0 0 1 .878.645a49 49 0 0 1 .376 5.452a.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.65 1.65 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349c.283-.215.604-.401.959-.401c.31 0 .557.262.534.571a49 49 0 0 1-.595 4.845a.75.75 0 0 1-.61.61q-2.731.477-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959c.221-.29.349-.634.349-1.003c0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003c.215.283.401.604.401.959a.64.64 0 0 1-.658.643a49 49 0 0 1-4.708-.36a.75.75 0 0 1-.645-.878q.44-2.422.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401c-.29.221-.634.349-1.003.349c-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349c.283.215.604.401.959.401a.656.656 0 0 0 .659-.663a48 48 0 0 0-.31-4.82a.75.75 0 0 1 .83-.832q2.015.233 4.077.294a.64.64 0 0 0 .657-.642"/>
                          </svg>
                        </div>
                        <div 
                          className={styles.puzzlePiece}
                          style={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-60px', marginLeft: '0px', rotate: '90deg' }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="var(--secondary)" style={{opacity:1}}>
                            <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.65 1.65 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003c-.215.283-.401.604-.401.959c0 .332.278.598.61.578q2.867-.173 5.632-.676a.75.75 0 0 1 .878.645a49 49 0 0 1 .376 5.452a.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.65 1.65 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349c.283-.215.604-.401.959-.401c.31 0 .557.262.534.571a49 49 0 0 1-.595 4.845a.75.75 0 0 1-.61.61q-2.731.477-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959c.221-.29.349-.634.349-1.003c0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003c.215.283.401.604.401.959a.64.64 0 0 1-.658.643a49 49 0 0 1-4.708-.36a.75.75 0 0 1-.645-.878q.44-2.422.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401c-.29.221-.634.349-1.003.349c-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349c.283.215.604.401.959.401a.656.656 0 0 0 .659-.663a48 48 0 0 0-.31-4.82a.75.75 0 0 1 .83-.832q2.015.233 4.077.294a.64.64 0 0 0 .657-.642"/>
                          </svg>
                        </div>
                        <div 
                          className={styles.puzzlePiece}
                          style={{ position: 'absolute', top: '50%', left: '50%', marginTop: '30px', marginLeft: '-45px', rotate: '180deg' }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="#4b5563" style={{opacity:1}}>
                            <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.65 1.65 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003c-.215.283-.401.604-.401.959c0 .332.278.598.61.578q2.867-.173 5.632-.676a.75.75 0 0 1 .878.645a49 49 0 0 1 .376 5.452a.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.65 1.65 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349c.283-.215.604-.401.959-.401c.31 0 .557.262.534.571a49 49 0 0 1-.595 4.845a.75.75 0 0 1-.61.61q-2.731.477-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959c.221-.29.349-.634.349-1.003c0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003c.215.283.401.604.401.959a.64.64 0 0 1-.658.643a49 49 0 0 1-4.708-.36a.75.75 0 0 1-.645-.878q.44-2.422.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401c-.29.221-.634.349-1.003.349c-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349c.283.215.604.401.959.401a.656.656 0 0 0 .659-.663a48 48 0 0 0-.31-4.82a.75.75 0 0 1 .83-.832q2.015.233 4.077.294a.64.64 0 0 0 .657-.642"/>
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.illShape}></div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
