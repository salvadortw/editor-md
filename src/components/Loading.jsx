import { Spinner, Text, VStack } from "@chakra-ui/react";

function Loading() {
  return (
    <div className="loading">
      <VStack>
        <Spinner />
        <Text>Cargando documentos...</Text>
      </VStack>
    </div>
  );
}

export default Loading;
