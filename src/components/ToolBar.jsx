import { useState } from "react";

import DeleteModal from "./DeleteModal";
import { Button, Input, IconButton } from "@chakra-ui/react";
import { Folder, X } from "lucide-react";
import ToogleTheme from "./ToogleTheme";
import SettingsMenu from "./SettingsMenu";
import convertToPdf from "../utils/convertToPdf.js";
import convertToHtml from "../utils/convertToHtml.js";
import convertToTxt from "../utils/convertToTxt.js";

export default function ToolBar({
  fileName,
  onChangeFileName,
  onHandleCreateNewDocument,
  onHandleActiveDocument,
  documents,
  onHandleDeleteDocument,
  currentDocument,
  onHandleShowStats,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav role="toolbar">
      {/* PANEL LATERAL */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <IconButton
          variant="ghost"
          display="flex"
          placeSelf="end"
          size="md"
          margin={2}
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú de documentos"
        >
          <X />
        </IconButton>

        <h2 className="h2-toolbar">Mis Documentos</h2>

        <ul className="ul-toolbar">
          {(documents || []).map((d) => (
            <li key={d.id} className="li-toolbar">
              {/* Botón para activar documento */}
              <Button
                variant="plain"
                rounded="md"
                size="md"
                onClick={() => onHandleActiveDocument(d.id)}
                aria-label={`Abrir documento ${d.title}`}
              >
                {d.title}
              </Button>

              {/* Botón para eliminar documento */}
              <DeleteModal onConfirm={() => onHandleDeleteDocument(d.id)} />
            </li>
          ))}
        </ul>

        <div className="btn-add-doc">
          <Button
            variant="outline"
            rounded="md"
            size="md"
            className="text-uppercase"
            aria-label="Crear nuevo documento"
            onClick={onHandleCreateNewDocument}
          >
            Nuevo Documento
          </Button>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="toolbar">
        <div className="toolbar-div">
          <IconButton
            variant="ghost"
            size="md"
            marginRight={2}
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú de documentos"
          >
            <Folder size={18} className="icon-fill-color" />
          </IconButton>

          <Input
            type="text"
            placeholder="nombre_archivo.md"
            name="file-name"
            maxLength={20}
            variant="flushed"
            value={fileName}
            onChange={(e) => onChangeFileName(e.target.value)}
          />
        </div>
        <div className="toolbar-div">
          <ToogleTheme />
          <SettingsMenu
            onConvertPdf={() =>
              convertToPdf(currentDocument.content, currentDocument.title)
            }
            onConvertHtml={() =>
              convertToHtml(currentDocument.content, currentDocument.title)
            }
            onConverTxt={() =>
              convertToTxt(currentDocument.content, currentDocument.title)
            }
            onHandleShowStats={onHandleShowStats}
          />
        </div>
      </div>
    </nav>
  );
}
