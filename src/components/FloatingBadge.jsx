import MultiLine from "./MultiLine";

const POSITIONS = {
  left: "-left-4 md:-left-20 top-1/4",
  right: "-right-6 md:-right-16 bottom-1/4",
};

function LayersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#818cf8"
      strokeWidth="1.5"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

// Add new icons here and reference them via "icon" in the JSON.
const ICONS = { layers: LayersIcon };

function StatusBody({ badge }) {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
          {badge.label}
        </span>
      </div>
      <p className="text-[11px] text-neutral-300 font-medium leading-tight">
        <MultiLine lines={badge.lines} />
      </p>
    </>
  );
}

function IconBody({ badge }) {
  const Icon = ICONS[badge.icon] ?? LayersIcon;
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon />
      <span className="text-[9px] font-black text-indigo-300 uppercase tracking-widest text-center">
        <MultiLine lines={badge.lines} />
      </span>
    </div>
  );
}

const VARIANTS = {
  status: {
    Body: StatusBody,
    padding: "p-4",
    motion: "[animation-duration:6s]",
  },
  icon: {
    Body: IconBody,
    padding: "p-5",
    motion: "[animation-duration:8s] [animation-delay:1s]",
  },
};

export default function FloatingBadge({ badge, scrollY }) {
  const variant = VARIANTS[badge.type] ?? VARIANTS.status;
  const { Body } = variant;

  return (
    // Outer wrapper carries the parallax offset; inner card carries the bounce
    // animation (animate-bounce would otherwise override the inline transform).
    <div
      className={`absolute z-30 ${POSITIONS[badge.position] ?? POSITIONS.left}`}
      style={{ transform: `translateY(${scrollY * (badge.parallax ?? 0)}px)` }}
    >
      <div
        className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-bounce ${variant.padding} ${variant.motion}`}
      >
        <Body badge={badge} />
      </div>
    </div>
  );
}
