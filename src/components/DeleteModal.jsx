import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { Trash } from "lucide-react";

function DeleteModal({ onConfirm }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          aria-label="Abrir modal de eliminar documento"
          variant="ghost"
          size="sm"
          marginInline={2}
        >
          <Trash size={20} />
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Borrar Documento</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Esta acción es irreversible, si borra este documento perdera
                todo lo que ha escrito.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button
                  aria-label="Cancelar eliminar documento"
                  variant="outline"
                >
                  Cancelar
                </Button>
              </Dialog.ActionTrigger>
              <Button aria-label="Eliminar documento" onClick={onConfirm}>
                Eliminar
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger aria-label="Cerrar modal" asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default DeleteModal;
