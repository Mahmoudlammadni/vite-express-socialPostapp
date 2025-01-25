import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './from.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
