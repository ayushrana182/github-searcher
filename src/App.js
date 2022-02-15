import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import TopBar from "./components/TopBar";

function App() {
  return (
    <ChakraProvider>
      <TopBar/>
    </ChakraProvider>
  );
}

export default App;
