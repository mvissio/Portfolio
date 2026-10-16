import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SpanishHome from "./page";

describe("Spanish home page", () => {
  it("presents the translated portfolio proposition", () => {
    render(<SpanishHome />);

    expect(
      screen.getByRole("heading", { name: /construyo caminos claros en\s*sistemas complejos/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/la experiencia profesional y los casos de estudio/i)).toBeInTheDocument();
  });

  it("links to the English route", () => {
    render(<SpanishHome />);

    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute("href", "/");
  });

  it("keeps the three translated pillars visible", () => {
    render(<SpanishHome />);

    expect(screen.getByRole("heading", { name: "Construir" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Diseñar" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Liderar" })).toBeInTheDocument();
  });

  it("shows the translated technical-focus groups", () => {
    render(<SpanishHome />);

    expect(screen.getByRole("heading", { name: "Ingeniería web" })).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Sistemas distribuidos")).toBeInTheDocument();
  });
});
