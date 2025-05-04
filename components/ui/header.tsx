import Link from "next/link";
import Logo from "./logo";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <Link
            className="flex flex-1 items-center space-x-4 hover:cursor-pointer"
            href={"/"}
          >
            <Logo />
            <h1 className="font-bold text-[18px]">Tandrum</h1>
          </Link>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li className="mr-8">
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 duration-150 ease-in-out"
                href="/learnMore"
              >
                {t("header.learnMore")}
              </Link>
            </li>
            <li>
              <Link
                className="group mb-4 w-full sm:w-auto px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-t from-[#10B981] to-[#11c086] text-white shadow-sm hover:bg-[length:100%_150%] transition sm:mb-0"
                href="/waitlist"
              >
                <span className="relative inline-flex items-center">
                  {t("header.joinWaitlistButton")}{" "}
                  <span className="ml-1 tracking-normal text-green-200 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
