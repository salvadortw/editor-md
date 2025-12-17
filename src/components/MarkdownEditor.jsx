import { useRef, useEffect, useState } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

export default function MarkdownEditor({
  onChangeText,
  onCursorChange,
  activeDocument,
}) {
  const editorRef = useRef(null);

  const [localContent, setLocalContent] = useState(activeDocument.content);

  useEffect(() => {
    setLocalContent(activeDocument.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDocument.id]);

  const handleChange = (newValue) => {
    setLocalContent(newValue);
    onChangeText(newValue);
  };

  useEffect(() => {
    const editor = editorRef.current.editor;
    const selection = editor.getSelection();

    const handleCursorChange = () => {
      const pos = editor.getCursorPosition();
      const index = editor.getSession().getDocument().positionToIndex(pos, 0);
      onCursorChange({ row: pos.row, column: pos.column, index });
    };

    selection.on("changeCursor", handleCursorChange);

    return () => selection.off("changeCursor", handleCursorChange);
  }, [onCursorChange]);

  return (
    <div className="md-editor">
      <AceEditor
        mode="markdown"
        theme="one_dark"
        name="markdown_editor"
        value={localContent}
        onChange={handleChange}
        width="100%"
        height="100%"
        fontSize={16}
        highlightActiveLine={true}
        showPrintMargin={false}
        setOptions={{
          wrap: true,
          showLineNumbers: true,
          showGutter: true,
          useWorker: true,
        }}
        editorProps={{ $blockScrolling: true }}
        ref={editorRef}
      />
    </div>
  );
}
