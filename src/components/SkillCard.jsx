import { skillThemes } from "../lib/theme";

export default function SkillCard({ card }) {
  const t = skillThemes[card.theme] ?? skillThemes.emerald;

  return (
    <div className={`p-10 rounded-[2.5rem] ${t.container}`}>
      {t.glow && (
        <div
          className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl transition-all ${t.glow}`}
        />
      )}
      <h3
        className={`font-mono text-xs mb-6 tracking-widest uppercase ${t.eyebrow}`}
      >
        {card.eyebrow}
      </h3>
      <h4 className="text-3xl font-bold mb-4">{card.title}</h4>
      <p className={`leading-relaxed text-sm ${t.body}`}>{card.body}</p>
    </div>
  );
}
