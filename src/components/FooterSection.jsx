import MultiLine from "./MultiLine";
import resolveHref from "../lib/resolveHref";

export default function FooterSection({ data, email }) {
  return (
    <footer className="relative pt-32 pb-10 bg-emerald-500 text-black overflow-hidden">
      {/* Large background word */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-10 pointer-events-none select-none">
        <span className="text-[22vw] font-black tracking-tighter uppercase">
          {data.backgroundWord}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-6xl md:text-[140px] font-black tracking-tighter leading-[0.85] uppercase mb-12">
            <MultiLine lines={data.heading} />
          </h2>

          <p className="max-w-xl text-lg font-medium mb-12 opacity-80">
            {data.text}
          </p>

          <a
            href={resolveHref(data.cta.href, email)}
            className="group relative px-12 py-6 bg-black text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 font-black tracking-widest text-sm uppercase">
              {data.cta.label}
            </span>
            <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <div className="mt-24 w-full pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8">
              {data.socials.map((link,index) =>index === 0 && (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-black uppercase tracking-widest hover:opacity-50 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="text-right">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60">
                {data.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
