import { renderWithProviders, screen } from "../test-utils";
import BusinessCategories from "@/components/business-categories";
import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Mock next/image to a simple img tag
    return <img {...props} />;
  },
}));

describe("BusinessCategories", () => {
  beforeEach(() => {
    renderWithProviders(<BusinessCategories />);
  });

  it("renders the logo image", () => {
    const logo = screen.getByAltText("Logo 01");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/images/logo-01.svg");
  });

  it("renders animated category icons", () => {
    const apfel = screen.getByAltText("Logo 2");
    const orange = screen.getByAltText("Logo 3");
    const sprout = screen.getByAltText("Logo 4");
    const hanf = screen.getByAltText("Logo 5");

    expect(apfel).toBeInTheDocument();
    expect(orange).toBeInTheDocument();
    expect(sprout).toBeInTheDocument();
    expect(hanf).toBeInTheDocument();
  });
});
