import { neutralTag, timelineThemes } from "../lib/theme";

export default function Tag({ label, tone = "neutral", theme = "neutral" }) {
  const toneClasses =
    tone === "accent"
      ? `font-bold ${(timelineThemes[theme] ?? timelineThemes.neutral).tag}`
      : neutralTag;

  return (
    <span
      className={`px-3 py-1 border rounded-full text-[10px] uppercase ${toneClasses}`}
    >
      {label}
    </span>
  );
}
