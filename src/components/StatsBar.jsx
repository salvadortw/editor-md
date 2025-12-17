export default function StatPanel({ markdownContent, cursor, stats }) {
  function calculateByteSize(str) {
    let bytes = new Blob([str]).size;
    return bytes;
  }

  function calculateWords(text) {
    return text.trim().split(/\s+/).length;
  }

  function calculateLines(text) {
    return text.split("\n").length;
  }

  const { countChar, countWords, countPar } = stats || {
    countChar: 0,
    countWords: 0,
    countPar: 0,
  };

  return (
    <div className="stats-bar">
      <div className="stats-bar-info">
        <span>Markdown</span>
        <span>
          <span className="font-bold">
            {calculateByteSize(markdownContent)}
          </span>{" "}
          bytes
        </span>
        <span>
          <span className="font-bold">{calculateWords(markdownContent)}</span>{" "}
          palabras
        </span>
        <span>
          <span className="font-bold">{calculateLines(markdownContent)}</span>{" "}
          líneas
        </span>
        <span className="font-bold">
          Ln {cursor?.row + 1} Col {cursor?.column + 1}
        </span>
      </div>

      <div className="stats-bar-info">
        <span>HTML</span>
        <span>
          <span className="font-bold">{countChar}</span> carácteres
        </span>
        <span>
          <span className="font-bold">{countPar}</span> parráfos
        </span>
        <span>
          <span className="font-bold">{countWords}</span> palabras
        </span>
      </div>
    </div>
  );
}
