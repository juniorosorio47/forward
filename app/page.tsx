import styles from "./page.module.css";
import { identity, receiptItems, cases, storeInfo } from "@/data/content";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <a href="#work" className={styles.skipLink}>
        Skip to work
      </a>

      <header className={styles.topBar}>
        <span className={styles.topName}>{identity.name.toUpperCase()}</span>
        <span className={styles.topLinks}>
          <a href="resume.pdf" target="_blank" rel="noreferrer">
            RESUME ↗
          </a>
          <a href={`mailto:${identity.email}`} className={styles.topHire}>
            AVAILABLE FOR REMOTE — HIRE ME →
          </a>
        </span>
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{identity.role.toUpperCase()}</p>
            <h1 className={styles.heroTitle}>
              I build the <span className={styles.heroAccent}>checkout</span>.
            </h1>
            <p className={styles.heroSub}>
              POS terminals, self-service kiosks and the B2B SaaS behind them.
              Seven years of React, React Native, Node and Python — shipped
              where people actually pay.
            </p>
            <div className={styles.heroActions}>
              <a href={`mailto:${identity.email}`} className={styles.btnFill}>
                Hire me
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.btnGhost}
              >
                LinkedIn
              </a>
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className={styles.btnGhost}
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className={styles.receipt} aria-label="Career summary, styled as a store receipt">
            <p className={styles.receiptHead}>
              E-DEPLOY * STEFANINI * SOLO
              <br />
              FOZ DO IGUAÇU — BR · {identity.timezone}
            </p>
            <div className={styles.receiptRule} />
            <table className={styles.receiptTable}>
              <thead>
                <tr>
                  <th scope="col">QTY</th>
                  <th scope="col">ITEM</th>
                </tr>
              </thead>
              <tbody>
                {receiptItems.map((r) => (
                  <tr key={r.item}>
                    <td>{r.qty}</td>
                    <td>{r.item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.receiptRule} />
            <p className={styles.receiptTotal}>
              <span>TOTAL</span>
              <span className={styles.receiptDots} aria-hidden="true" />
              <span>7 YEARS</span>
            </p>
            <p className={styles.receiptFoot}>** SHIPPED TO PRODUCTION **</p>
            <span className={styles.stamp} aria-hidden="true">
              PAID
            </span>
          </aside>
        </section>

        {/* ============ WORK ============ */}
        <section id="work" className={styles.section}>
          <p className={styles.sectionLabel}>ORDERS — SELECTED WORK</p>
          <h2 className={styles.sectionTitle}>Three systems people pay through.</h2>

          <div className={styles.tickets}>
            {cases.map((c) => (
              <article key={c.order} className={styles.ticket}>
                <header className={styles.ticketHead}>
                  <span className={styles.ticketOrder}>{c.order}</span>
                  <span>{c.client}</span>
                  <span className={styles.ticketPeriod}>{c.period}</span>
                </header>
                <h3 className={styles.ticketTitle}>{c.title}</h3>
                <div className={styles.ticketBody}>
                  <div>
                    <p className={styles.ticketLabel}>THE PROBLEM</p>
                    <p className={styles.ticketProse}>{c.problem}</p>
                  </div>
                  <div>
                    <p className={styles.ticketLabel}>WHAT I DID</p>
                    <ul className={styles.ticketList}>
                      {c.work.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <footer className={styles.ticketFoot}>
                  <span className={styles.ticketStack}>
                    {c.stack.join(" · ")}
                  </span>
                  {c.links && (
                    <span className={styles.ticketLinks}>
                      {c.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label}
                        </a>
                      ))}
                    </span>
                  )}
                  <span className={styles.barcode} aria-hidden="true" />
                </footer>
              </article>
            ))}
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className={styles.section}>
          <p className={styles.sectionLabel}>STORE INFO — ABOUT</p>
          <h2 className={styles.sectionTitle}>
            The person behind the counter.
          </h2>
          <div className={styles.aboutGrid}>
            <p className={styles.aboutProse}>
              I&apos;m {identity.name}, a senior full-stack developer from the
              triple frontier of Brazil, Paraguay and Argentina. I&apos;ve spent
              seven years building software for the moment money changes hands:
              embedded POS at an iFood company, enterprise retail systems for
              Cencosud, and a B2B SaaS I founded and built alone. I care about
              the pixel and the payload — interfaces people touch all day, and
              the back-ends that can&apos;t drop an order.
            </p>
            <dl className={styles.facts}>
              {storeInfo.map((f) => (
                <div key={f.label} className={styles.factRow}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className={styles.checkout}>
          <p className={styles.sectionLabelLight}>CHECKOUT — CONTACT</p>
          <h2 className={styles.checkoutTitle}>Ready when you are.</h2>
          <div className={styles.checkoutSummary}>
            <p>
              <span>SUBTOTAL</span>
              <span className={styles.receiptDots} aria-hidden="true" />
              <span>7 years of shipped software</span>
            </p>
            <p>
              <span>SHIPPING</span>
              <span className={styles.receiptDots} aria-hidden="true" />
              <span>remote, worldwide ({identity.timezone})</span>
            </p>
            <p className={styles.checkoutTotal}>
              <span>TOTAL</span>
              <span className={styles.receiptDots} aria-hidden="true" />
              <span>one senior full-stack developer</span>
            </p>
          </div>
          <div className={styles.checkoutActions}>
            <a href={`mailto:${identity.email}`} className={styles.btnPaper}>
              Email me
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.btnOutlineLight}
            >
              LinkedIn
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noreferrer"
              className={styles.btnOutlineLight}
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>*** THANK YOU FOR YOUR VISIT ***</p>
        <p>
          {identity.location} · {year} · Designed &amp; built by me, no
          templates.
        </p>
      </footer>
    </>
  );
}
