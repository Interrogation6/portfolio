import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Background from './components/background'
import Intro from './pages/intro'
import { MainProvider } from './providers/mainProvider'
import Topbar from './components/topbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainProvider>
      <Background/>
      <Topbar/>
      <Intro/>
    </MainProvider>
  </StrictMode>,
)
