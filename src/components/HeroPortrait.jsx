import FloatingBadge from "./FloatingBadge";

const fadeBottom = "linear-gradient(to bottom, black 80%, transparent 100%)";

export default function HeroPortrait({ portrait, badges, scrollY }) {
  return (
    <div className="relative flex items-center justify-center w-full max-w-4xl">
      {/* Animated HUD rings and nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] md:w-[550px] md:h-[550px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-[300px] h-[300px] md:w-[480px] md:h-[480px] border-t-2 border-emerald-500/20 rounded-full animate-[spin_15s_linear_infinite]" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping [animation-delay:1s]" />
      </div>

      {/* Portrait, faded into the background at the bottom */}
      <div className="relative z-20 w-[300px] md:w-[450px] transition-all duration-700 hover:scale-[1.03]">
        <div style={{ maskImage: fadeBottom, WebkitMaskImage: fadeBottom }}>
          <img
            src={portrait.src}
            alt={portrait.alt}
            className="w-full h-auto block drop-shadow-[0_0_80px_rgba(16,185,129,0.15)]"
          />
        </div>
      </div>

      {badges.map((badge) => (
        <FloatingBadge key={badge.id} badge={badge} scrollY={scrollY} />
      ))}
    </div>
  );
}
