import TitleBar from "./TitleBar"
import Content from "./Content"
import { Routes, Route, Navigate } from "react-router-dom";

import Sobre from "./Sobre";
import Projetos from "./Projetos";


function App() {
  return (
  <div className="App">
    <TitleBar />

    <Routes>
        {/* Content is the layout; children render inside it */}
        <Route element={<Content />}>
          <Route index element={<Sobre />} />                 {/* "/" (home) */}
          <Route path="projetos" element={<Projetos />} />
          {/* <Route path="experiencias" element={<Experiencias />} /> */}
          {/* <Route path="contatos" element={<Contatos />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
    </Routes>
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