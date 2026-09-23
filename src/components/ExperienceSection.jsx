import MultiLine from "./MultiLine";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection({ data, scrollY }) {
  return (
    <section
      id={data.id}
      className="py-32 bg-[#030712] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            {data.eyebrow}
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
            <MultiLine lines={data.heading} />
          </h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {data.items.map((item, i) => (
            <TimelineItem
              key={`${item.company}-${item.period}`}
              item={item}
              isLast={i === data.items.length - 1}
              scrollY={scrollY}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
