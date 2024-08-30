import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import LoveMessage from './components/Emily.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoveMessage/>
  </StrictMode>,
)
