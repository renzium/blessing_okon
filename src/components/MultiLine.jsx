import { Fragment } from "react";

/** Renders an array of strings separated by <br />. */
export default function MultiLine({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}
