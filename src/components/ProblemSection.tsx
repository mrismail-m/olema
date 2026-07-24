import styles from "./ProblemSection.module.css";
import InboxCard from "./InboxCard";

const fakeChats = Array.from({ length: 30 }).map((_, i) => {
  const hours = Math.floor(i / 2) + 1;
  return { 
    title: i % 3 === 0 ? "John Doe" : i % 3 === 1 ? "Acme Corp" : "Sarah Smith",
    message: i % 3 === 0 ? "I'd like to book a demo..." : i % 3 === 1 ? "What are your pricing plans?" : "Can you help me set up?",
    time: i === 0 ? "just now" : i === 1 ? "2m ago" : i === 2 ? "5m ago" : `${hours}h ago`,
    avatar: `https://i.pravatar.cc/150?u=${i + 100}`,
  };
});

export default function ProblemSection() {
  return (
    <section className={styles.problemSection} id="problem">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>The Problem</div>
          <h2 className={styles.title}>
            You're Not Failing.<br />
            Your Systems Are.
          </h2>
          <p className={styles.description}>
            You didn't build this business to spend your nights untangling WhatsApp threads. 
            Or watching your best salesperson do data entry an intern could do. 
            That 2 AM lead who never got a reply? That's not bad luck — it's a broken system quietly costing you money every single day you don't fix it.
            <br /><br />
            Here's what that's really costing you right now:
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <InboxCard fakeChats={fakeChats} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>You're losing 73% of your leads</h3>
              <p className={styles.cardText}>
                ...in the first hour alone — because nobody replied fast enough. Olema replies in milliseconds, every time, so every dollar you spend on ads actually pays off.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={`${styles.cardVisual} ${styles.cardVisualAdmin}`}>
              <div className={styles.windowApp}>
                <div className={styles.winTitle}>Data.csv</div>
                <div className={styles.winRow}>John Doe</div>
                <div className={styles.winRow}>Jane Smith</div>
                <div className={styles.winRow}>Acme Corp</div>
              </div>
              <div className={styles.cursorArrow}>↗</div>
              <div className={styles.windowApp}>
                <div className={styles.winTitle}>CRM</div>
                <div className={styles.winRowEmpty}></div>
                <div className={styles.winRowEmpty}></div>
                <div className={styles.winRowEmpty}></div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>You could get back 2,400+ hours a year</h3>
              <p className={styles.cardText}>
                That's what mid-market teams reclaim once Olema takes the busywork off their plate.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={`${styles.cardVisual} ${styles.cardVisualErrors}`}>
              <div className={styles.dbBox}>
                <div className={styles.dbTitle}>Stripe</div>
                <div className={styles.dbData}>$1,500.00</div>
              </div>
              <div className={styles.errorArrow}>
                <div className={styles.redX}>❌</div>
              </div>
              <div className={styles.dbBox}>
                <div className={styles.dbTitle}>Quickbooks</div>
                <div className={styles.dbDataErr}>$15.00</div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>You could cut data errors by 99.2%</h3>
              <p className={styles.cardText}>
                No more chasing down a wrong order because someone mistyped a number at 6 PM on a Friday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
