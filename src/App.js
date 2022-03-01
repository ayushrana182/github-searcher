import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/pages/Home";
import TopBar from "./components/TopBar";
import GithubState from "./context/GithubState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Repo from "./components/repos/Repo";

function App() {
  return (
    <GithubState>
      <ChakraProvider>
        <Router>
          <TopBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/repos/:login/:name' element={<Repo />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </GithubState>
  );
}

export default App;
