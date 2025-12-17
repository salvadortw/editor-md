import { Dexie } from "dexie";
import { INITIAL_MARKDOWN } from "./utils/initialMarkdown";

export const db = new Dexie("MarkdownEditorDB");
db.version(1).stores({
  documents: "id, title, content, creationDate", // Definimos los índices
});

db.on("populate", () => {
  db.documents.add(INITIAL_MARKDOWN);
});
