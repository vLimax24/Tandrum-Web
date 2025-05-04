"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { toast } from "sonner";

const WaitlistPage = () => {
  const t = useTranslations();
  const registerEmail = useMutation(api.emails.registerEmail);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error(t("waitlistPage.invalidEmail"));
      return;
    }

    setLoading(true);

    try {
      const response = await registerEmail({ email });
      if (response?.exists) {
        toast.error(t("waitlistPage.alreadyJoinedWaitlist"));
      } else {
        toast.success(t("waitlistPage.successMessage"));
        setEmail("");
      }
    } catch (error) {
      console.error("Failed to register email:", error);
      toast.error(t("waitlistPage.registrationError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative isolate min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Decorative SVG left */}
      <svg
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[300px] opacity-20 z-0"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#10B981" />
      </svg>

      {/* Decorative SVG right */}
      <svg
        className="absolute -right-32 bottom-1/3 w-[260px] opacity-20 z-0 rotate-12"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="200" height="200" rx="100" fill="#10B981" />
      </svg>

      {/* Content container */}
      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          {t("header.joinWaitlistButton")}
        </h1>

        <p className="text-lg sm:text-xl text-gray-600">
          {t("waitlistPage.description")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("waitlistPage.emailPlaceholder")}
            required
            className="w-full sm:w-[300px] px-5 py-4 rounded-2xl border border-gray-300 bg-white shadow-sm text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl text-base shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-gray-300"
          >
            {loading ? t("waitlistPage.loading") : t("waitlistPage.joinButton")}
          </button>
        </form>

        <p className="text-sm text-gray-400">{t("waitlistPage.noSpam")}</p>
      </div>
    </div>
  );
};

export default WaitlistPage;
