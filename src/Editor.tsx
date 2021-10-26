import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/sql/sql";
import "codemirror/mode/xml/xml";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor: React.VFC<{ value: string; onChange: (s: string) => void }> = (
  props
) => {
  const { value, onChange } = props;

  function handleChange(_editor: any, _data: any, value: string) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: "xml",
          theme: "material",
          lineNumbers: true
        }}
      />
    </div>
  );
};
export default Editor;
