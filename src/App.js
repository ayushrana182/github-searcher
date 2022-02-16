import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Repos from "./components/repos/Repos";
import TopBar from "./components/TopBar";
import GithubState from "./context/GithubState";

function App() {
  return (
    <GithubState>
      <ChakraProvider>
        <TopBar />
        <Repos/>
      </ChakraProvider>
    </GithubState>
  );
}

export default App;
