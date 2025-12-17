import { useTheme } from "../context/ThemeContext";

import { Switch } from "@chakra-ui/react";

function ToogleTheme() {
  const { toggleMode } = useTheme();
  return (
    <Switch.Root size="md" id="theme-switch" aria-label="Cambiar modo de color">
      <Switch.HiddenInput />
      <Switch.Control onClick={toggleMode}>
        <Switch.Thumb />
      </Switch.Control>
    </Switch.Root>
  );
}

export default ToogleTheme;
