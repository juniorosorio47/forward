import styles from "@/app/page.module.css";
import { identity, dictionaries, type Locale } from "@/data/content";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const year = new Date().getFullYear();
  return (
    <>
      <a href="#work" className={styles.skipLink}>
        {t.skipToWork}
      </a>

      <header className={styles.topBar}>
        <span className={styles.topName}>{identity.name.toUpperCase()}</span>
        <span className={styles.topLinks}>
          <a href={t.langHref} aria-label={t.langLabel === "PT" ? "Versão em português" : "English version"}>
            {t.langLabel}
          </a>
          <a href={t.resumeHref} target="_blank" rel="noreferrer">
            {t.topResume}
          </a>
          <a href={`mailto:${identity.email}`} className={styles.topHire}>
            <span className={styles.topHireLong}>{t.topAvailable}</span>
            {t.topHire}
          </a>
        </span>
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{t.role.toUpperCase()}</p>
            <h1 className={styles.heroTitle}>
              {t.heroTitlePre}{" "}
              <span className={styles.heroAccent}>{t.heroTitleAccent}</span>.
            </h1>
            <p className={styles.heroSub}>{t.heroSub}</p>
            <div className={styles.heroActions}>
              <a href={`mailto:${identity.email}`} className={styles.btnFill}>
                {t.hireMe}
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

          <aside className={styles.receipt} aria-label={t.receiptAria}>
            <p className={styles.receiptHead}>
              {t.receiptHead1}
              <br />
              {t.receiptHead2}
            </p>
            <div className={styles.receiptRule} />
            <table className={styles.receiptTable}>
              <thead>
                <tr>
                  <th scope="col">{t.receiptQty}</th>
                  <th scope="col">{t.receiptItem}</th>
                </tr>
              </thead>
              <tbody>
                {t.receiptItems.map((r) => (
                  <tr key={r.item}>
                    <td>{r.qty}</td>
                    <td>{r.item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.receiptRule} />
            <p className={styles.receiptTotal}>
              <span>{t.receiptTotalLabel}</span>
              <span className={styles.receiptDots} aria-hidden="true" />
              <span>{t.receiptTotalValue}</span>
            </p>
            <p className={styles.receiptFoot}>{t.receiptFoot}</p>
            <span className={styles.stamp} aria-hidden="true">
              {t.stamp}
            </span>
          </aside>
        </section>

        {/* ============ WORK ============ */}
        <section id="work" className={styles.section}>
          <p className={styles.sectionLabel}>{t.workLabel}</p>
          <h2 className={styles.sectionTitle}>{t.workTitle}</h2>

          <div className={styles.tickets}>
            {t.cases.map((c) => (
              <article key={c.order} className={styles.ticket}>
                <header className={styles.ticketHead}>
                  <span className={styles.ticketOrder}>{c.order}</span>
                  <span>{c.client}</span>
                  <span className={styles.ticketPeriod}>{c.period}</span>
                </header>
                <h3 className={styles.ticketTitle}>{c.title}</h3>
                <div className={styles.ticketBody}>
                  <div>
                    <p className={styles.ticketLabel}>{t.problemLabel}</p>
                    <p className={styles.ticketProse}>{c.problem}</p>
                  </div>
                  <div>
                    <p className={styles.ticketLabel}>{t.workDidLabel}</p>
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

          <div className={styles.orderHistory}>
            <p className={styles.orderHistoryLabel}>{t.historyLabel}</p>
            <ul className={styles.orderHistoryList}>
              {t.history.map((o) => (
                <li key={o.period}>
                  <span className={styles.orderHistoryPeriod}>{o.period}</span>
                  <span className={styles.orderHistoryRole}>{o.role}</span>
                  <span className={styles.orderHistoryDetail}>{o.detail}</span>
                </li>
              ))}
            </ul>
            <p className={styles.orderHistoryNote}>
              {t.historyNotePre}{" "}
              <a href={t.resumeHref} target="_blank" rel="noreferrer">
                {t.historyNoteLink}
              </a>
            </p>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className={styles.section}>
          <p className={styles.sectionLabel}>{t.aboutLabel}</p>
          <h2 className={styles.sectionTitle}>{t.aboutTitle}</h2>
          <div className={styles.aboutGrid}>
            <p className={styles.aboutProse}>{t.aboutProse}</p>
            <dl className={styles.facts}>
              {t.facts.map((f) => (
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
          <p className={styles.sectionLabelLight}>{t.checkoutLabel}</p>
          <h2 className={styles.checkoutTitle}>{t.checkoutTitle}</h2>
          <div className={styles.checkoutSummary}>
            <p>
              <span>{t.subtotalLabel}</span>
              <span className={styles.receiptDots} aria-hidden="true" />
              <span>{t.subtotalValue}</span>
            </p>
            <p>
              <span>{t.shippingLabel}</span>
              <span className={styles.receiptDots} aria-hidden="true" />
              <span>{t.shippingValue}</span>
            </p>
            <p className={styles.checkoutTotal}>
              <span>{t.totalLabel}</span>
              <span className={styles.receiptDots} aria-hidden="true" />
              <span>{t.totalValue}</span>
            </p>
          </div>
          <div className={styles.checkoutActions}>
            <a href={`mailto:${identity.email}`} className={styles.btnPaper}>
              {t.emailMe}
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
        <p>{t.footerThanks}</p>
        <p>{t.footerLine.replace("{year}", String(year))}</p>
      </footer>
    </>
  );
}
