import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import BgChanger from './Components/bgchanger/BgChanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BgChanger/>
  </StrictMode>,
)
