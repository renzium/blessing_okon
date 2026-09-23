import RichText from "./RichText";
import Tag from "./Tag";
import { timelineThemes } from "../lib/theme";

export default function TimelineItem({ item, isLast, scrollY }) {
  const t = timelineThemes[item.theme] ?? timelineThemes.neutral;
  const { highlight } = item;

  return (
    <div className={`relative pl-10 md:pl-20 group ${isLast ? "" : "mb-24"}`}>
      <div
        className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full ${t.dot}`}
      />

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <span className={`font-mono text-sm font-bold ${t.period}`}>
          {item.period}
        </span>
        <h4
          className={`text-2xl md:text-3xl font-bold text-white transition-colors ${t.title}`}
        >
          {item.company}
        </h4>
      </div>

      <div
        className={
          highlight ? "grid md:grid-cols-2 gap-8 items-start" : "max-w-2xl"
        }
      >
        <div className="space-y-4">
          <p className="text-neutral-400 leading-relaxed">
            <RichText segments={item.description} />
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Tag
                key={tag.label}
                label={tag.label}
                tone={tag.tone}
                theme={item.theme}
              />
            ))}
          </div>
        </div>

        {highlight && (
          <div
            className={`p-6 border rounded-2xl shadow-2xl backdrop-blur-sm ${t.highlight}`}
            style={{ transform: `translateY(${scrollY * highlight.parallax}px)` }}
          >
            <div className={`text-xs font-mono mb-2 ${t.highlightLabel}`}>
              {highlight.label}
            </div>
            <p className="text-sm italic text-neutral-300">
              &quot;{highlight.quote}&quot;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
