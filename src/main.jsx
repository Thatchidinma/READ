import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReadContextProvider from './context/ReadContext.jsx'

createRoot(document.getElementById('root')).render(
  <ReadContextProvider>
     <App />
  </ReadContextProvider>,
)
