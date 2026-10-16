import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SpanishHome from "./page";

describe("Spanish home page", () => {
  it("presents the translated portfolio proposition", () => {
    render(<SpanishHome />);

    expect(
      screen.getByRole("heading", { name: /transformo presión de producto en\s*sistemas que los equipos pueden entregar/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Simulador de trade-offs de arquitectura" })).toBeInTheDocument();
  });

  it("links to the English route", () => {
    render(<SpanishHome />);

    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute("href", "/");
  });

  it("keeps the three translated areas of practice visible", () => {
    render(<SpanishHome />);

    expect(screen.getByRole("heading", { name: "Construir" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Diseñar" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Liderar" })).toBeInTheDocument();
  });

  it("renders the public-safe functional lab", () => {
    render(<SpanishHome />);

    expect(screen.getByRole("button", { name: "Lanzamiento de producto" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText("Flujo del sistema")).toBeInTheDocument();
  });

  it("renders the portfolio map in Spanish", () => {
    render(<SpanishHome />);

    fireEvent.click(screen.getByRole("button", { name: "Patrones AWS" }));

    expect(screen.getByRole("heading", { name: "Explicar la nube mediante decisiones." })).toBeInTheDocument();
  });
});
