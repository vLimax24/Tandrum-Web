import React from "react";
import { Leaf, Flame, Brain, HeartHandshake } from "lucide-react";
import { useTranslations } from "next-intl";

const LearnMorePage = () => {
  const t = useTranslations("learnMorePage");
  return (
    <div className="bg-white min-h-screen px-6 py-32 flex flex-col items-center text-gray-800">
      {/* Hero Section */}
      <div
        className="max-w-3xl text-center mb-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">{t("description")}</p>
      </div>
      {/* Feature Sections */}
      <div
        className="grid md:grid-cols-3 gap-10 max-w-5xl w-full mb-24"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col items-center text-center px-4">
          <Flame className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("feature1.title")}</h3>
          <p className="text-gray-600">{t("feature1.description")}</p>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <Leaf className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("feature2.title")}</h3>
          <p className="text-gray-600">{t("feature2.description")}</p>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <Brain className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("feature3.title")}</h3>
          <p className="text-gray-600">{t("feature3.description")}</p>
        </div>
      </div>
      {/* Visual Element */}
      <div
        className="relative w-full max-w-4xl flex justify-center mb-24"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div className="relative w-full h-64 rounded-3xl bg-gradient-radial from-emerald-100 via-emerald-200 to-white shadow-inner flex items-center justify-center">
          <div className="flex flex-col items-center text-center px-6">
            <HeartHandshake className="w-12 h-12 text-emerald-500 mb-4" />
            <p className="text-gray-700 text-lg font-medium max-w-md">
              {t("feature4.description")}
            </p>
          </div>
        </div>
      </div>
      {/* Final CTA */}
      <div
        className="max-w-xl text-center space-y-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          {t("cta.title")}
        </h2>
        <a
          href="/waitlist"
          className="inline-block px-6 py-3 bg-emerald-500 text-white font-medium rounded-xl shadow hover:bg-emerald-600 transition"
        >
          {t("cta.joinWaitlistButton")}
        </a>
      </div>
    </div>
  );
};

export default LearnMorePage;
