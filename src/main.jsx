import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './componants/Root/Router.jsx'
import AuthProvider from './componants/provider/AuthProvider.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(

  <AuthProvider>
     <StrictMode>
     <ThemeProvider>
     <RouterProvider router={router} />
     <HelmetProvider></HelmetProvider>
    </ThemeProvider>
  </StrictMode>, 
  </AuthProvider>

)
