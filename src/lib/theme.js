/**
 * Tailwind class maps for every "theme" / "tone" value used in
 * data/portfolio.json.
 *
 * Tailwind only generates classes it can find as complete strings in
 * scanned source files, so the class names live here (not in the JSON).
 * To add a new colour theme: add a key below, then use that key as
 * "theme" in the JSON.
 */

// ---- Skill Themes ---------------------------------------------------------
export const skillThemes = {
  emerald: {
    container:
      "bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all group overflow-hidden relative",
    glow: "bg-emerald-500/5 group-hover:bg-emerald-500/20",
    eyebrow: "text-emerald-400",
    body: "text-neutral-400",
  },
  indigo: {
    container:
      "bg-white/5 border border-white/10 hover:border-indigo-500/40 transition-all group overflow-hidden relative",
    glow: "bg-indigo-500/5 group-hover:bg-indigo-500/20",
    eyebrow: "text-indigo-300",
    body: "text-neutral-400",
  },
  neutral: {
    container:
      "bg-white/5 border border-white/10 hover:border-neutral-400/40 transition-all group overflow-hidden relative",
    glow: "bg-white/5 group-hover:bg-white/10",
    eyebrow: "text-neutral-300",
    body: "text-neutral-400",
  },
  violet: {
    container:
      "bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all group overflow-hidden relative",
    glow: "bg-violet-500/5 group-hover:bg-violet-500/20",
    eyebrow: "text-violet-400",
    body: "text-neutral-400",
  },
  amber: {
    container:
      "bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all group overflow-hidden relative",
    glow: "bg-amber-500/5 group-hover:bg-amber-500/20",
    eyebrow: "text-amber-400",
    body: "text-neutral-400",
  },
  cyan: {
    container:
      "bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all group overflow-hidden relative",
    glow: "bg-cyan-500/5 group-hover:bg-cyan-500/20",
    eyebrow: "text-cyan-400",
    body: "text-neutral-400",
  },
  rose: {
    container:
      "bg-white/5 border border-white/10 hover:border-rose-500/40 transition-all group overflow-hidden relative",
    glow: "bg-rose-500/5 group-hover:bg-rose-500/20",
    eyebrow: "text-rose-400",
    body: "text-neutral-400",
  },
  featured: {
    container:
      "bg-emerald-500 text-black hover:scale-[1.02] transition-transform shadow-[0_20px_40px_rgba(16,185,129,0.2)]",
    glow: null,
    eyebrow: "opacity-70",
    body: "font-medium",
  },
};

// ---- Experience Timeline --------------------------------------------------
export const timelineThemes = {
  emerald: {
    dot: "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]",
    period: "text-emerald-500",
    title: "group-hover:text-emerald-400",
    highlight: "bg-emerald-500/5 border-emerald-500/20",
    highlightLabel: "text-emerald-500",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
  indigo: {
    dot: "bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]",
    period: "text-indigo-400",
    title: "group-hover:text-indigo-400",
    highlight: "bg-indigo-500/5 border-indigo-500/20",
    highlightLabel: "text-indigo-400",
    tag: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  },
  neutral: {
    dot: "bg-neutral-600",
    period: "text-neutral-500",
    title: "group-hover:text-neutral-400",
    highlight: "bg-white/5 border-white/10",
    highlightLabel: "text-neutral-400",
    tag: "bg-white/5 border-white/10 text-neutral-300",
  },
  violet: {
    dot: "bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,1)]",
    period: "text-violet-400",
    title: "group-hover:text-violet-400",
    highlight: "bg-violet-500/5 border-violet-500/20",
    highlightLabel: "text-violet-400",
    tag: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  },
  amber: {
    dot: "bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,1)]",
    period: "text-amber-400",
    title: "group-hover:text-amber-400",
    highlight: "bg-amber-500/5 border-amber-500/20",
    highlightLabel: "text-amber-400",
    tag: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
  cyan: {
    dot: "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)]",
    period: "text-cyan-400",
    title: "group-hover:text-cyan-400",
    highlight: "bg-cyan-500/5 border-cyan-500/20",
    highlightLabel: "text-cyan-400",
    tag: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  rose: {
    dot: "bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,1)]",
    period: "text-rose-400",
    title: "group-hover:text-rose-400",
    highlight: "bg-rose-500/5 border-rose-500/20",
    highlightLabel: "text-rose-400",
    tag: "bg-rose-500/10 border-rose-500/20 text-rose-400",
  },
};

// Used for tags with "tone": "neutral"
export const neutralTag = "bg-white/5 border-white/10 text-neutral-400";

// ---- Tools Grid -----------------------------------------------------------
export const toolThemes = {
  emerald: {
    container: "bg-neutral-50 border border-neutral-100 hover:bg-emerald-600",
    title: "group-hover:text-white transition-colors",
    tile: "bg-white shadow-sm group-hover:bg-emerald-500/50",
    label: "group-hover:text-white",
    icon: "group-hover:invert",
    textIcon:
      "border-neutral-900 text-neutral-900 group-hover:border-white group-hover:text-white",
  },
  indigo: {
    container: "bg-neutral-50 border border-neutral-100 hover:bg-indigo-600",
    title: "group-hover:text-white transition-colors",
    tile: "bg-white shadow-sm group-hover:bg-indigo-400",
    label: "group-hover:text-white",
    icon: "group-hover:invert group-hover:brightness-0",
    textIcon:
      "border-neutral-900 text-neutral-900 group-hover:border-white group-hover:text-white",
  },
  neutral: {
    container: "bg-neutral-50 border border-neutral-100 hover:bg-neutral-800",
    title: "group-hover:text-white transition-colors",
    tile: "bg-white shadow-sm group-hover:bg-white/20",
    label: "group-hover:text-white",
    icon: "group-hover:invert group-hover:brightness-0",
    textIcon:
      "border-neutral-900 text-neutral-900 group-hover:border-white group-hover:text-white",
  },
  violet: {
    container: "bg-neutral-50 border border-neutral-100 hover:bg-violet-600",
    title: "group-hover:text-white transition-colors",
    tile: "bg-white shadow-sm group-hover:bg-violet-400",
    label: "group-hover:text-white",
    icon: "group-hover:invert group-hover:brightness-0",
    textIcon:
      "border-neutral-900 text-neutral-900 group-hover:border-white group-hover:text-white",
  },
  amber: {
    container: "bg-neutral-50 border border-neutral-100 hover:bg-amber-500",
    title: "group-hover:text-white transition-colors",
    tile: "bg-white shadow-sm group-hover:bg-amber-400",
    label: "group-hover:text-white",
    icon: "group-hover:invert group-hover:brightness-0",
    textIcon:
      "border-neutral-900 text-neutral-900 group-hover:border-white group-hover:text-white",
  },
  cyan: {
    container: "bg-neutral-50 border border-neutral-100 hover:bg-cyan-600",
    title: "group-hover:text-white transition-colors",
    tile: "bg-white shadow-sm group-hover:bg-cyan-400",
    label: "group-hover:text-white",
    icon: "group-hover:invert group-hover:brightness-0",
    textIcon:
      "border-neutral-900 text-neutral-900 group-hover:border-white group-hover:text-white",
  },
  rose: {
    container: "bg-neutral-50 border border-neutral-100 hover:bg-rose-600",
    title: "group-hover:text-white transition-colors",
    tile: "bg-white shadow-sm group-hover:bg-rose-400",
    label: "group-hover:text-white",
    icon: "group-hover:invert group-hover:brightness-0",
    textIcon:
      "border-neutral-900 text-neutral-900 group-hover:border-white group-hover:text-white",
  },
  dark: {
    container:
      "bg-neutral-900 hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)]",
    title: "text-white",
    tile: "bg-white/5 border border-white/10 group-hover:bg-emerald-500",
    label: "text-neutral-300 group-hover:text-black",
    icon: "group-hover:brightness-0",
    textIcon:
      "border-emerald-400 text-emerald-400 group-hover:text-black group-hover:border-black",
  },
};

// ---- Hero buttons ---------------------------------------------------------
export const buttonVariants = {
  primary:
    "px-10 py-4 bg-emerald-600 rounded-full font-bold text-sm tracking-widest hover:bg-emerald-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]",
  secondary:
    "px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-sm tracking-widest hover:bg-white/10 transition-all",
};
