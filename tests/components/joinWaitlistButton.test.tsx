/**
 * @jest-environment jsdom
 */

import React from "react";
import { renderWithProviders, screen } from "../test-utils";
import { JoinWaitlistButton } from "@/components/joinWaitlistButton";
import "@testing-library/jest-dom";

describe("JoinWaitlistButton", () => {
  beforeEach(() => {
    renderWithProviders(<JoinWaitlistButton />);
  });

  it("renders the link with correct translated text", () => {
    const link = screen.getByRole("link", { name: /join waitlist/i });
    expect(link).toBeInTheDocument();
  });

  it("has correct href attribute", () => {
    const link = screen.getByRole("link", { name: /join waitlist/i });
    expect(link).toHaveAttribute("href", "/waitlist");
  });

  it("contains arrow character", () => {
    expect(screen.getByText("->")).toBeInTheDocument();
  });

  it("has expected Tailwind classes applied", () => {
    const link = screen.getByRole("link", { name: /join waitlist/i });
    expect(link).toHaveClass("btn");
    expect(link).toHaveClass("group");
    expect(link).toHaveClass("bg-linear-to-t");
    expect(link).toHaveClass("text-white");
  });
});
