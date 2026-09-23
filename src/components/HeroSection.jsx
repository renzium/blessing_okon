import HeroPortrait from "./HeroPortrait";
import RichText from "./RichText";
import resolveHref from "../lib/resolveHref";
import { buttonVariants } from "../lib/theme";

export default function HeroSection({ data, email, scrollY }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24">
      <HeroPortrait
        portrait={data.portrait}
        badges={data.badges}
        scrollY={scrollY}
      />

      <div className="mt-12 text-center max-w-5xl px-4">
        <h1 className="text-5xl md:text-[100px] font-black tracking-tighter uppercase leading-[0.9] mb-6">
          {data.firstName}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-indigo-400">
            {data.lastName}
          </span>
        </h1>

        <p className="text-neutral-400 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
          <RichText segments={data.tagline} />
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {data.ctas.map((cta) => (
            <a
              key={cta.label}
              href={resolveHref(cta.href, email)}
              className={buttonVariants[cta.variant] ?? buttonVariants.primary}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
