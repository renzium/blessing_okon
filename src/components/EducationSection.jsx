import MultiLine from "./MultiLine";
import RichText from "./RichText";

export default function EducationSection({ data }) {
  return (
    <section className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Subtle background word */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-black">{data.backgroundWord}</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left: degree & philosophy */}
        <div className="relative z-10">
          <h2 className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase mb-6">
            {data.eyebrow}
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
            <MultiLine lines={data.heading} />
          </h3>

          <div className="space-y-6 max-w-lg">
            {data.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-neutral-400 leading-relaxed ${
                  paragraph.lead ? "text-lg" : ""
                }`}
              >
                <RichText segments={paragraph.content} />
              </p>
            ))}
          </div>

          <div className="mt-12 inline-flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center text-black">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                {data.degree.label}
              </h4>
              <p className="text-neutral-400 text-sm">{data.degree.value}</p>
            </div>
          </div>
        </div>

        {/* Right: bridge skills */}
        <div className="grid gap-4">
          {data.strengths.map((strength) => (
            <div
              key={strength.title}
              className="p-8 bg-gradient-to-r from-white/5 to-transparent border-l-2 border-emerald-500/30 hover:border-emerald-500 transition-all group"
            >
              <h5 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {strength.title}
              </h5>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
