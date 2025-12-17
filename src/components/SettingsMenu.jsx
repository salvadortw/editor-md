import { IconButton, Menu, Portal } from "@chakra-ui/react";
import { Settings, ChevronRight } from "lucide-react";

function SettingsMenu({
  onConvertPdf,
  onConvertHtml,
  onConverTxt,
  onHandleShowStats,
}) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton
          aria-label="Abrir menú de configuraciones"
          variant="ghost"
          size="sm"
          p={4}
        >
          <Settings size={18} />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">
              <a
                href="https://www.markdownguide.org/basic-syntax/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Markdown
              </a>
            </Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem>
                Exportar
                <ChevronRight size={17} />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="pdf" onClick={onConvertPdf}>
                      PDF
                    </Menu.Item>
                    <Menu.Item value="html" onClick={onConvertHtml}>
                      HTML
                    </Menu.Item>
                    <Menu.Item value="txt" onClick={onConverTxt}>
                      TXT
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Item value="show-stats" onClick={onHandleShowStats}>
              Mostrar Estadísticas
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SettingsMenu;
