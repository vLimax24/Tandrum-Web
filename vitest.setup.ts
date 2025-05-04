import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// automatically unmount and cleanup DOM between tests
afterEach(() => {
  cleanup();
});
