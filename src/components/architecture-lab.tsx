"use client";

import { useState } from "react";
import type { PortfolioContent } from "../content/portfolio";

type ArchitectureLabProps = {
  content: PortfolioContent["lab"];
};

export function ArchitectureLab({ content }: ArchitectureLabProps) {
  const [selectedId, setSelectedId] = useState(content.scenarios[0].id);
  const scenario = content.scenarios.find((item) => item.id === selectedId) ?? content.scenarios[0];

  return (
    <section className="lab" id="lab" aria-labelledby="lab-title">
      <div className="shell lab-layout">
        <div className="lab-intro">
          <p className="eyebrow"><span /> {content.eyebrow}</p>
          <h2 id="lab-title">{content.title}</h2>
          <p>{content.body}</p>
        </div>

        <div className="lab-panel">
          <div className="scenario-selector" aria-label={content.scenarioLabel}>
            <span>{content.scenarioLabel}</span>
            <div className="scenario-buttons">
              {content.scenarios.map((item) => (
                <button
                  className={item.id === selectedId ? "scenario-button active" : "scenario-button"}
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  aria-pressed={item.id === selectedId}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lab-signal" aria-live="polite">
            <span className="signal-dot" /> {scenario.signal}
          </div>
          <h3>{scenario.title}</h3>

          <div className="lab-copy-grid">
            <div>
              <p className="lab-label">{content.challengeLabel}</p>
              <p>{scenario.challenge}</p>
            </div>
            <div>
              <p className="lab-label">{content.decisionLabel}</p>
              <p>{scenario.decision}</p>
            </div>
          </div>

          <div className="system-map" aria-label={content.systemLabel}>
            <p className="lab-label">{content.systemLabel}</p>
            <ol>
              {scenario.flow.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="lab-properties">
            <p className="lab-label">{content.propertiesLabel}</p>
            <dl>
              {scenario.properties.map((property) => (
                <div key={property.label}>
                  <dt>{property.label}</dt>
                  <dd>{property.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
