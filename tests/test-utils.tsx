// test-utils.tsx
import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "../messages/en.json"; // adjust path
import { ConvexClientProvider } from "@/provider/ConvexReactClient";
import { Toaster } from "@/components/ui/sonner";

// 1. Accept ReactNode, not just ReactElement
interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {children}
    </NextIntlClientProvider>
  );
}

// 2. Tell RTL that Providers is a valid wrapper
export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";
