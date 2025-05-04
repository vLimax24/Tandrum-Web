import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import {
  TreePine,
  Puzzle,
  Brain,
  Flame,
  MessageCircleDashed,
  Heart,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesPlanet() {
  const t = useTranslations();

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              {t("featuresPlanet.sectionTitle")}
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div
                className="relative inline-flex rounded-full
  before:absolute before:inset-0 before:-z-10 before:rounded-full
  before:scale-105 before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite]
  before:bg-gradient-to-b before:from-emerald-600/80 before:to-emerald-400/30
  before:blur-3xl
  after:absolute after:inset-0 after:rounded-full
  after:[background:radial-gradient(closest-side,#10B98188,transparent)]"
              >
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Puzzle size={16} color="#39a883" />
                <span>{t("featuresPlanet.duoHabits.title")}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t("featuresPlanet.duoHabits.description")}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <TreePine size={16} color="#39a883" />
                <span>{t("featuresPlanet.trustTree.title")}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t("featuresPlanet.trustTree.description")}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Brain size={16} color="#39a883" />
                <span>{t("featuresPlanet.sharedSkillGrowth.title")}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t("featuresPlanet.sharedSkillGrowth.description")}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Flame size={16} color="#39a883" />
                <span>{t("featuresPlanet.streaksMeaningful.title")}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t("featuresPlanet.streaksMeaningful.description")}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <MessageCircleDashed size={16} color="#39a883" />
                <span>{t("featuresPlanet.gentleCheckins.title")}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t("featuresPlanet.gentleCheckins.description")}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Heart size={16} color="#39a883" />
                <span>{t("featuresPlanet.realConnection.title")}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t("featuresPlanet.realConnection.description")}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
