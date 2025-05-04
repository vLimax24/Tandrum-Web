import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const JoinWaitlistButton = () => {
  const t = useTranslations();
  return (
    <Link
      className="btn group mb-4 w-full bg-linear-to-t from-[#10B981] to-[#11c086] bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
      href={"/waitlist"}
    >
      <span className="relative inline-flex items-center">
        {t("header.joinWaitlistButton")}{" "}
        <span className="ml-1 tracking-normal text-green-200 transition-transform group-hover:translate-x-0.5">
          -&gt;
        </span>
      </span>
    </Link>
  );
};
