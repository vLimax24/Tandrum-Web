/**
 * @vitest-environment jsdom
 */

import React from "react";
import { renderWithProviders, screen } from "../test-utils";
import LargeTestimonial from "@/components/large-testimonial";
import "@testing-library/jest-dom";
import { vi } from "vitest";

describe("LargeTestimonial", () => {
  it("renders the translated image alt text", () => {
    renderWithProviders(<LargeTestimonial />);
    const image = screen.getByAltText("User profile picture");
    expect(image).toBeInTheDocument();
  });

  it("renders the translated quote text", () => {
    renderWithProviders(<LargeTestimonial />);
    expect(
      screen.getByText(
        /Since we started using Tandrum, we actually look forward to our daily check-in. It’s the first habit that/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/feels like ours/i)).toBeInTheDocument();
  });

  it("renders the translated name and role", () => {
    renderWithProviders(<LargeTestimonial />);
    expect(screen.getByText("Maya & Lio")).toBeInTheDocument();
    expect(screen.getByText("Beta Testers")).toBeInTheDocument();
  });

  it("contains an inline SVG decoration", () => {
    renderWithProviders(<LargeTestimonial />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
  });
});
