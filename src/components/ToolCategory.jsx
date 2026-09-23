import ToolTile from "./ToolTile";
import { toolThemes } from "../lib/theme";

export default function ToolCategory({ category }) {
  const t = toolThemes[category.theme] ?? toolThemes.emerald;

  return (
    <div
      className={`md:col-span-2 p-8 rounded-[2.5rem] group transition-all duration-500 ${t.container}`}
    >
      <h4 className={`font-bold text-xl mb-8 ${t.title}`}>{category.title}</h4>
      <div className="grid grid-cols-2 gap-4">
        {category.tools.map((tool) => (
          <ToolTile key={tool.name} tool={tool} theme={t} />
        ))}
      </div>
    </div>
  );
}
