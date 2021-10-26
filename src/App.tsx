import React from "react";
import {
  ScaleAppFooter,
  ScaleAppHeader,
  ScaleAppShell
} from "@telekom/scale-components-react";
import "./styles.css";
import Editor from "./Editor";

export default function App() {
  const [sql, setSql] = React.useState("");
  return (
    <ScaleAppShell>
      <ScaleAppHeader slot="header" />
      <Editor value={sql} onChange={setSql} />
      <ScaleAppFooter slot="footer" />
    </ScaleAppShell>
  );
}
