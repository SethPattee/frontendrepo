import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { ListFilter } from './components/FilterListSite.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App/> */}
    <ListFilter/>
  </StrictMode>,
)
