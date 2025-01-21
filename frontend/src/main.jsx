import { StrictMode } from 'react'
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <Provider>
      <App />
      <Toaster position='bottom-center' />
    </Provider>
   </BrowserRouter>
   </StrictMode>,
)
