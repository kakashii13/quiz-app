import { Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizProvider } from "./context";
import { Categories } from "./pages/Categories";
import { Difficulty } from "./pages/Difficulty";
import { Home } from "./pages/Home";
import "@fontsource/raleway/400.css";
import { Game } from "./pages/Game";

const App = () => {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/difficulty" element={<Difficulty />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Container>
      </QuizProvider>
    </BrowserRouter>
  );
};

export default App;
