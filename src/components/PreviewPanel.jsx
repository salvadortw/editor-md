import { useRef, useEffect, useMemo } from "react";

import markdownParser from "../utils/markdownParser.js";

import { Prose } from "./ui/prose";

export default function PreviewPanel({ markdownContent, onCalculateStats }) {
  const divRef = useRef(null);

  const htmlContent = useMemo(
    () => markdownParser(markdownContent),
    [markdownContent]
  );

  useEffect(() => {
    if (divRef.current && onCalculateStats) {
      const currentText = divRef.current.innerText;
      const currentHTML = divRef.current;

      const countChar = currentText.length;
      const countWords = currentText.split(/\s+/).filter(Boolean).length;
      const countPar = currentHTML.querySelectorAll("p").length;

      const stats = {
        countChar,
        countWords,
        countPar,
      };

      onCalculateStats(stats);
    }
  }, [htmlContent, onCalculateStats]);

  return (
    <Prose className="prose">
      <div
        className="prose-div"
        ref={divRef}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />{" "}
    </Prose>
  );
}
