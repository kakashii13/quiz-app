import { Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizProvider } from "./context";
import { Categories } from "./pages/Categories";
import { Difficulty } from "./pages/Difficulty";
import { Home } from "./pages/Home";
// import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { Game } from "./pages/Game";
import { Results } from "./pages/Results";
import { PrivateRoute } from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/categories"
              element={
                <PrivateRoute>
                  <Categories />
                </PrivateRoute>
              }
            />
            <Route
              path="/difficulty"
              element={
                <PrivateRoute>
                  <Difficulty />
                </PrivateRoute>
              }
            />
            <Route
              path="/game"
              element={
                <PrivateRoute>
                  <Game />
                </PrivateRoute>
              }
            />
            <Route
              path="/results"
              element={
                <PrivateRoute>
                  <Results />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </QuizProvider>
    </BrowserRouter>
  );
};

export default App;
