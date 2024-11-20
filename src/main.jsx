import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import toast, { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes}/>
      <Toaster />
  </StrictMode>,
)
