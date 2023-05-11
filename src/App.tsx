import { MantineProvider } from "@mantine/styles";
import { Text } from "@mantine/core";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Hello Mantine</Text>
    </MantineProvider>
  );
}

export default App;
