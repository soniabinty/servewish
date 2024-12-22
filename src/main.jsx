import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './componants/Root/Router.jsx'
import AuthProvider from './componants/provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(

  <AuthProvider>
     <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>, 
  </AuthProvider>

)
