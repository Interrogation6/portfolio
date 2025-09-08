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


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/