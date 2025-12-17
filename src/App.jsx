import { db } from "./db.js";
import { useState, useCallback } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import "./styles/index.css";

import MarkdownEditor from "./components/MarkdownEditor.jsx";
import PreviewPanel from "./components/PreviewPanel.jsx";
import ToolBar from "./components/ToolBar.jsx";
import StatPanel from "./components/StatsBar.jsx";
import Loading from "./components/Loading.jsx";
import { Toaster, toaster } from "./components/ui/toaster";

import { INITIAL_MARKDOWN } from "./utils/initialMarkdown.js";
import useLocalStorage from "./hooks/useLocalStorage.jsx";

function App() {
  const documents = useLiveQuery(() => db.documents.toArray());
  const [cursor, setCursor] = useState({ row: 0, column: 0, index: 0 });
  const [stats, setStats] = useLocalStorage("stats", 0);
  const [activeDocumentId, setActiveDocumentId] = useLocalStorage(
    "activeDocumentId",
    INITIAL_MARKDOWN.id
  );
  const handleStatsCalculated = useCallback(
    (newStats) => setStats(newStats),
    [setStats]
  );
  const [showStats, setShowStats] = useState(true);

  if (!documents) return <Loading />;

  function handleActiveDocument(documentId) {
    setActiveDocumentId(documentId);
  }

  const activeDocument = documents.find(
    (doc) => doc.id === activeDocumentId
  ) || { id: "none", content: "", title: "" };

  function handleCreateNewDocument() {
    const uuid = window.crypto.randomUUID();

    const newDocument = {
      id: uuid,
      title: "nuevo_documento",
      content: INITIAL_MARKDOWN.content,
      creationDate: Date.now(),
    };

    db.documents.add(newDocument);
    setActiveDocumentId(newDocument.id);
  }

  function handleDeleteDocument(documentId) {
    const remainingDocs = documents.filter((d) => d.id !== documentId);

    db.documents.delete(documentId);

    if (remainingDocs.length > 0) {
      setActiveDocumentId(remainingDocs[0].id);
    } else {
      setActiveDocumentId("none");
    }

    toaster.create({
      title: "Documento eliminado",
      type: "success",
    });
  }

  function handleTextChange(text) {
    if (activeDocument.id === "none") return;
    db.documents.update(activeDocument.id, { content: text });
  }

  function handleNameChange(name) {
    if (activeDocument.id === "none") return;
    db.documents.update(activeDocument.id, { title: name });
  }

  return (
    <div className="app-container">
      <ToolBar
        onChangeFileName={handleNameChange}
        fileName={activeDocument.title || ""}
        onHandleCreateNewDocument={handleCreateNewDocument}
        documents={documents}
        onHandleActiveDocument={handleActiveDocument}
        onHandleDeleteDocument={handleDeleteDocument}
        currentDocument={activeDocument}
        onHandleShowStats={() => setShowStats(!showStats)}
      />
      <Toaster />

      <main className="app-grid">
        <MarkdownEditor
          onChangeText={handleTextChange}
          onCursorChange={setCursor}
          activeDocument={activeDocument}
        />

        <PreviewPanel
          markdownContent={
            activeDocument.content || "No hay un documento selccionado."
          }
          onCalculateStats={handleStatsCalculated}
        />
      </main>

      {showStats ? (
        <StatPanel
          markdownContent={
            activeDocument.content || "No hay un documento selccionado."
          }
          cursor={cursor}
          stats={stats}
        />
      ) : null}
    </div>
  );
}

export default App;
