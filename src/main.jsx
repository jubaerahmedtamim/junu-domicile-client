import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './providers/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
