import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("English home page", () => {
  it("presents the portfolio proposition", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /i turn product pressure into\s*systems teams can ship/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Architecture Trade-off Simulator" })).toBeInTheDocument();
  });

  it("links to the Spanish route", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "ES" })).toHaveAttribute("href", "/es");
  });

  it("keeps the three areas of practice visible", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Build" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Design" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Lead" })).toBeInTheDocument();
  });

  it("lets visitors inspect a different architecture scenario", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: "Demand spike" }));

    expect(screen.getByRole("button", { name: "Demand spike" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("Protect the transaction; absorb the burst.")).toBeInTheDocument();
  });

  it("lets visitors explore the portfolio architecture map", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: "AWS patterns" }));

    expect(screen.getByRole("button", { name: "AWS patterns" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { name: "Explain the cloud through decisions." })).toBeInTheDocument();
  });
});
