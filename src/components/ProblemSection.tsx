import styles from "./ProblemSection.module.css";

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
            <div className={styles.cardVisual}>
              <div className={styles.cardNumber}>01</div>
              
              {/* Wireframe Diagram for Card 1 */}
              <div className={styles.diagramLeads}>
                <div className={styles.nodeApp}>
                  <div className={styles.nodeIcon}>⬡</div>
                  <span>Your App</span>
                </div>
                <div className={styles.connectionLines}>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
                  <div className={styles.pulseDot}></div>
                </div>
                <div className={styles.nodeGroup}>
                  <div className={styles.nodeAppSmall}>
                    <span>WhatsApp</span>
                  </div>
                  <div className={styles.nodeAppSmall}>
                    <span>Slack</span>
                  </div>
                  <div className={styles.nodeAppSmall}>
                    <span>Gmail</span>
                  </div>
                </div>
              </div>

            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>You're losing 73% of your leads</h3>
              <p className={styles.cardText}>
                ...in the first hour alone — because nobody replied fast enough. Olema replies in milliseconds, every time, so every dollar you spend on ads actually pays off.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardVisual}>
              <div className={styles.cardNumber}>02</div>
              
              {/* Wireframe Terminal for Card 2 */}
              <div className={styles.diagramTerminal}>
                <div className={styles.terminalHeader}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.terminalBody}>
                  <div className={styles.termLine}>
                    <span className={styles.termTime}>18:02:52</span> <span className={styles.termCmd}>POST /send</span> <span className={styles.termError}>303 Failed</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termTime}>18:02:53</span> <span className={styles.termCmd}>POST /send</span> <span className={styles.termDots}>...</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termTime}>18:02:54</span> <span className={styles.termCmd}>POST /send</span> <span className={styles.termDots}>...</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termTime}>18:02:55</span> <span className={styles.termCmd}>POST /send</span> <span className={styles.termDots}>...</span>
                  </div>
                </div>
                <div className={styles.errorPopup}>
                  <span className={styles.errorIcon}>⚠</span> Delivery Error
                </div>
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
            <div className={styles.cardVisual}>
              <div className={styles.cardNumber}>03</div>
              
              {/* Wireframe Network for Card 3 */}
              <div className={styles.diagramNetwork}>
                <div className={styles.hubContainer}>
                  <div className={styles.hubNode}>👤</div>
                  <div className={styles.spokeLine} style={{ transform: 'rotate(0deg)' }}></div>
                  <div className={styles.spokeLine} style={{ transform: 'rotate(120deg)' }}></div>
                  <div className={styles.spokeLine} style={{ transform: 'rotate(240deg)' }}></div>
                  
                  <div className={styles.spokeNode} style={{ transform: 'translate(50px, -40px)' }}>
                    <span>Twilio</span>
                  </div>
                  <div className={styles.spokeNode} style={{ transform: 'translate(60px, 40px)' }}>
                    <span>WhatsApp</span>
                  </div>
                  <div className={styles.spokeNode} style={{ transform: 'translate(-50px, 20px)' }}>
                    <span>Slack</span>
                  </div>
                </div>
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
