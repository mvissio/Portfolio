import Link from "next/link";

import { ArchitectureLab } from "./architecture-lab";
import { PortfolioMap } from "./portfolio-map";
import { portfolioContent, type PortfolioLocale } from "../content/portfolio";

type PortfolioHomeProps = {
  locale: PortfolioLocale;
};

export function PortfolioHome({ locale }: PortfolioHomeProps) {
  const content = portfolioContent[locale];
  const isSpanish = locale === "es";
  const alternateLocale = isSpanish ? "EN" : "ES";
  const alternateHref = isSpanish ? "/" : "/es";

  return (
    <main>
      <div className="availability-bar">
        <div className="shell availability-content">
          <span aria-hidden="true" className="status-dot" />
          <p>{content.availability}</p>
        </div>
      </div>

      <nav aria-label="Primary navigation" className="shell site-nav">
        <a aria-label="Marcos Vissio" className="wordmark" href="#top">
          M<span>/</span>V
        </a>
        <div className="nav-links">
          <a href="#work">{content.nav.work}</a>
          <a href="#lab">{content.nav.lab}</a>
          <a href="#practice">{content.nav.practice}</a>
        </div>
        <Link className="locale-link" href={alternateHref} lang={alternateLocale.toLowerCase()}>
          {alternateLocale}
        </Link>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{content.hero.kicker}</p>
          <h1>
            {content.hero.title} <em>{content.hero.emphasis}</em>
          </h1>
          <p className="hero-body">{content.hero.body}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {content.hero.primaryCta}
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-secondary" href="#lab">
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>

        <PortfolioMap content={content.map} />

        <ul className="proof-list">
          {content.hero.proof.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="work-section" id="work">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">{content.work.eyebrow}</p>
            <h2>{content.work.title}</h2>
            <p>{content.work.note}</p>
          </div>

          <div className="project-grid">
            {content.work.projects.map((project, index) => (
              <article className={`project-card project-${index + 1}`} key={project.title}>
                <div className="project-card-topline">
                  <span>{project.number}</span>
                  <span>{project.status}</span>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-outcome">{project.outcome}</p>
                </div>
                <div className="project-card-footer">
                  <ul aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.number === "01" ? (
                    <a href="#lab">{content.hero.secondaryCta} <span aria-hidden="true">↘</span></a>
                  ) : (
                    <span>{content.closing.contactLabel}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ArchitectureLab content={content.lab} />

      <section className="practice-section" id="practice">
        <div className="shell practice-layout">
          <div className="section-heading">
            <p className="eyebrow">{content.practice.eyebrow}</p>
            <h2>{content.practice.title}</h2>
          </div>
          <div className="practice-list">
            {content.practice.practices.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="shell closing-layout">
          <p className="eyebrow">{content.practice.eyebrow}</p>
          <h2>{content.closing.title}</h2>
          <p>{content.closing.body}</p>
        </div>
      </section>

      <footer className="shell site-footer">
        <span>© {new Date().getFullYear()} Marcos Vissio</span>
        <span>{content.footer}</span>
      </footer>
    </main>
  );
}
