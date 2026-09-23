function iconSrc(icon) {
  if (icon.type === "simpleicons") {
    return `https://cdn.simpleicons.org/${icon.slug}/${icon.color ?? "000000"}`;
  }
  return icon.src; // type: "image"
}

export default function ToolTile({ tool, theme }) {
  const { icon } = tool;

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-2xl transition-all ${theme.tile}`}
    >
      {icon.type === "text" ? (
        <div
          className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center text-[8px] font-bold ${theme.textIcon}`}
        >
          {icon.label}
        </div>
      ) : (
        <img
          src={iconSrc(icon)}
          alt={tool.name}
          className={`w-5 h-5 transition-all ${theme.icon}`}
        />
      )}
      <span className={`text-xs font-bold ${theme.label}`}>{tool.name}</span>
    </div>
  );
}
