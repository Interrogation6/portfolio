import TitleBar from "./components/TitleBar"
import Content from "./Content"
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Experiencias from "./pages/Experiencias";
import Contatos from "./pages/Contatos";
import RouteFadeSlide from "./components/RouteFadeSlide";


function App() {
  const location = useLocation();
  return (
  <div className="App">
    <TitleBar />
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Content />}>
          <Route
              index
              element={
                <RouteFadeSlide>
                  <Sobre />
                </RouteFadeSlide>
              }
            />
            <Route
              path="projetos"
              element={
                <RouteFadeSlide>
                  <Projetos />
                </RouteFadeSlide>
              }
            />
            <Route
              path="experiencias"
              element={
                <RouteFadeSlide>
                  <Experiencias />
                </RouteFadeSlide>
              }
            />
            <Route
              path="contatos"
              element={
                <RouteFadeSlide>
                  <Contatos />
                </RouteFadeSlide>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  </div>
);
}

export default App;