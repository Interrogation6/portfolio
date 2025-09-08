//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { /* BrowserRouter, */ HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
