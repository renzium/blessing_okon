import { Fragment } from "react";

const STYLES = {
  strong: "text-white font-medium",
  white: "text-white",
  emerald: "text-emerald-400 font-semibold italic",
  emeraldItalic: "text-emerald-400 italic",
  indigo: "text-indigo-300",
};

/**
 * Renders inline-styled copy from JSON.
 * Accepts a plain string or an array of { text, style? } segments.
 */
export default function RichText({ segments }) {
  if (typeof segments === "string") return segments;

  return segments.map((segment, i) =>
    segment.style ? (
      <span key={i} className={STYLES[segment.style]}>
        {segment.text}
      </span>
    ) : (
      <Fragment key={i}>{segment.text}</Fragment>
    )
  );
}
