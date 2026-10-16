import Link from "next/link";
import { portfolioContent, type PortfolioLocale } from "../content/portfolio";

type PortfolioHomeProps = {
  locale: PortfolioLocale;
};

export function PortfolioHome({ locale }: PortfolioHomeProps) {
  const content = portfolioContent[locale];
  const isSpanish = locale === "es";
  const ids = isSpanish
    ? { top: "inicio", approach: "enfoque", foundation: "base", focus: "enfoque-profesional" }
    : { top: "top", approach: "approach", foundation: "foundation", focus: "professional-focus" };
  const labels = isSpanish
    ? { nav: "Navegación principal", home: "Inicio de Marcos Vissio", approach: "Enfoque", foundation: "Perfil" }
    : { nav: "Primary navigation", home: "Marcos Vissio home", approach: "Approach", foundation: "Profile" };

  return (
    <main>
      <nav className="nav shell" aria-label={labels.nav}>
        <a className="wordmark" href={`#${ids.top}`} aria-label={labels.home}>
          MV<span>.</span>
        </a>
        <div className="nav-links">
          <a href={`#${ids.approach}`}>{labels.approach}</a>
          <a href={`#${ids.foundation}`}>{labels.foundation}</a>
          <Link className="language" href={isSpanish ? "/" : "/es"} lang={isSpanish ? "en" : "es"}>
            {isSpanish ? "EN" : "ES"}
          </Link>
        </div>
      </nav>

      <section className="hero shell" id={ids.top} aria-labelledby="hero-title">
        <div className="eyebrow"><span /> {content.heroEyebrow}</div>
        <p className="positioning">{content.positioning}</p>
        <div className="hero-grid">
          <h1 id="hero-title">{content.heroTitle}<br /><em>{content.heroEmphasis}</em></h1>
          <div className="hero-side">
            <p>{content.intro}</p>
            <a className="text-link" href={`#${ids.approach}`}>{content.exploreLabel} <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-footer">
          <p>{content.integrityNote}</p>
          <span className="scroll-mark" aria-hidden="true">↓</span>
        </div>
      </section>

      <section className="pillars" id={ids.approach} aria-labelledby="approach-title">
        <div className="shell section-heading">
          <p className="eyebrow"><span /> {content.approachEyebrow}</p>
          <h2 id="approach-title">{content.approachTitle}</h2>
        </div>
        <div className="pillar-list shell">
          {content.pillars.map((pillar) => (
            <article className="pillar" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <span className="pillar-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="foundation shell" id={ids.foundation} aria-labelledby="foundation-title">
        <div className="foundation-card">
          <p className="eyebrow"><span /> {content.foundationEyebrow}</p>
          <div className="foundation-content">
            <h2 id="foundation-title">{content.foundationTitle}<br />{content.foundationEmphasis}</h2>
            <div>
              <p>{content.foundationBody}</p>
              <a className="button" href={`#${ids.focus}`}>{content.nextLabel} <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities shell" aria-labelledby="capabilities-title">
        <p className="eyebrow"><span /> {content.capabilitiesEyebrow}</p>
        <h2 id="capabilities-title">{content.capabilitiesTitle}</h2>
        <div className="capability-grid">
          {content.capabilityGroups.map((group) => (
            <article className="capability-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="next shell" id={ids.focus} aria-labelledby="focus-title">
        <p className="eyebrow"><span /> {content.focusEyebrow}</p>
        <div className="next-grid">
          <h2 id="focus-title">{content.focusTitle}</h2>
          <ol>
            {content.focusAreas.map((area, index) => (
              <li key={area}><strong>{String(index + 1).padStart(2, "0")}</strong><span>{area}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="footer shell">
        <span>MARCOS VISSIO</span>
        <span>{content.footer}</span>
      </footer>
    </main>
  );
}
