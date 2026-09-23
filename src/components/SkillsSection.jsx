import MultiLine from "./MultiLine";
import SkillCard from "./SkillCard";

export default function SkillsSection({ data }) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            <MultiLine lines={data.heading} />
          </h2>
          <p className="text-neutral-500 max-w-xs text-sm">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((card) => (
            <SkillCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
