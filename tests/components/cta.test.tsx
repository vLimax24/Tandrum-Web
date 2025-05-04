import { renderWithProviders, screen } from "@/tests/test-utils";
import Cta from "@/components/cta";

describe("Cta component", () => {
  beforeEach(() => {
    renderWithProviders(<Cta />);
  });

  it("renders the translated title", () => {
    const heading = screen.getByRole("heading", {
      name: /build up your next habit with your friend/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the JoinWaitlistButton", () => {
    const button = screen.getByRole("link", {
      name: /join waitlist/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("renders the Stripes image with alt text", () => {
    const image = screen.getByAltText(/stripes/i);
    expect(image).toBeInTheDocument();
  });
});
