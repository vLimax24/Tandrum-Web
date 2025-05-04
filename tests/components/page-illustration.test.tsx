/**
 * @vitest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import PageIllustration from "@/components/page-illustration";
import "@testing-library/jest-dom";

describe("PageIllustration", () => {
  it("renders the stripes image with correct alt text", () => {
    render(<PageIllustration />);
    const image = screen.getByAltText("Stripes");
    expect(image).toBeInTheDocument();
  });
});
