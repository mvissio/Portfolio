"use client";

import { useState } from "react";

import type { PortfolioContent } from "../content/portfolio";

type PortfolioMapProps = {
  content: PortfolioContent["map"];
};

export function PortfolioMap({ content }: PortfolioMapProps) {
  const [selectedId, setSelectedId] = useState(content.nodes[0].id);
  const selected = content.nodes.find((node) => node.id === selectedId) ?? content.nodes[0];

  return (
    <section aria-labelledby="portfolio-map-title" className="portfolio-map" id="architecture">
      <div className="map-topline">
        <p>{content.label}</p>
        <span>{content.status}</span>
      </div>

      <div className="map-network" aria-label={content.diagramLabel}>
        <span aria-hidden="true" className="map-connector connector-a" />
        <span aria-hidden="true" className="map-connector connector-b" />
        <span aria-hidden="true" className="map-connector connector-c" />
        <span aria-hidden="true" className="map-connector connector-d" />
        {content.nodes.map((node, index) => (
          <button
            aria-pressed={node.id === selectedId}
            className={`map-node map-node-${index + 1}${node.id === selectedId ? " active" : ""}`}
            key={node.id}
            onClick={() => setSelectedId(node.id)}
            type="button"
          >
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <strong>{node.label}</strong>
          </button>
        ))}
        <span aria-hidden="true" className="map-core">M/V</span>
      </div>

      <div aria-live="polite" className="map-detail">
        <p className="map-detail-label">{content.selectedLabel}</p>
        <h2 id="portfolio-map-title">{selected.title}</h2>
        <p>{selected.description}</p>
      </div>
    </section>
  );
}
