import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("English home page", () => {
  it("presents the portfolio proposition", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /i build clear paths through\s*complex systems/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/professional experience and case studies/i)).toBeInTheDocument();
  });

  it("links to the Spanish route", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "ES" })).toHaveAttribute("href", "/es");
  });

  it("keeps the three professional pillars visible", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Build" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Design" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Lead" })).toBeInTheDocument();
  });

  it("shows the technical-focus groups", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Web engineering" })).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Distributed systems")).toBeInTheDocument();
  });
});
