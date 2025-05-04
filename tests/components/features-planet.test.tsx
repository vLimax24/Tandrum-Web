import { screen, renderWithProviders } from "@/tests/test-utils";
import FeaturesPlanet from "@/components/features-planet";

describe("FeaturesPlanet", () => {
  beforeEach(() => {
    renderWithProviders(<FeaturesPlanet />);
  });
  it("renders the section title", () => {
    expect(
      screen.getByRole("heading", {
        name: /Why build habits alone — when you could grow together?/i,
      })
    ).toBeInTheDocument();
  });

  it("renders all feature titles and descriptions", () => {
    expect(screen.getByText("Duo Habits")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Build habits as a team Start daily or weekly rituals you both want to commit to — like journaling, evening reflection, or a morning check-in."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("The Trust Tree")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Watch your progress come to life Each completed habit grows your shared tree with new leaves, fruit, and deeper roots."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Shared Skill Growth")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Develop your inner strengths Each habit strengthens a key skill — like clarity, empathy, or discipline — visualized in a shared skill radar."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Streaks That Mean Something")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Stay consistent, together Your streaks aren’t just numbers — they reflect your ability to show up for each other, every single day."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Gentle Check-ins")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A mindful approach to motivation Receive gentle prompts and send each other emoji or text-based reflections to stay emotionally in sync."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("Designed for Real Connection")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Built for duos who care Whether you're friends, partners, siblings or accountability buddies — Tandrum is for two people who want to grow together."
      )
    ).toBeInTheDocument();
  });

  it("renders the planet image", () => {
    expect(screen.getByAltText("Planet")).toBeInTheDocument();
  });

  it("renders all 4 tag images with correct alt texts", () => {
    expect(screen.getByAltText("Tag 01")).toBeInTheDocument();
    expect(screen.getByAltText("Tag 02")).toBeInTheDocument();
    expect(screen.getByAltText("Tag 03")).toBeInTheDocument();
    expect(screen.getByAltText("Tag 04")).toBeInTheDocument();
  });
});
