import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Background from './components/background'
import Intro from './pages/intro'
import { MainProvider } from './providers/mainProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainProvider>
      <Background/>
      <Intro/>
    </MainProvider>
  </StrictMode>,
)
