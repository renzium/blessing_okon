import MultiLine from "./MultiLine";
import ToolCategory from "./ToolCategory";

export default function ToolsSection({ data }) {
  return (
    <section className="py-32 bg-white text-black rounded-[4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-emerald-600 font-mono text-sm tracking-widest uppercase mb-4">
              {data.eyebrow}
            </h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              <MultiLine lines={data.heading} />
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6  [&>:first-child]:md:row-span-2">
          {data.categories.map((category) => (
            <ToolCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
