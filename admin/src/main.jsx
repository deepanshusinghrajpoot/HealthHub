import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import AdminContextsProvider from './contexts/AdminContexts.jsx'
import DoctorContextsProvider from './contexts/DoctorContexts.jsx'
import AppContextsProvider from './contexts/AppContexts.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AdminContextsProvider>
         <DoctorContextsProvider>
            <AppContextsProvider>
                    <App/>
            </AppContextsProvider>
         </DoctorContextsProvider>
      </AdminContextsProvider>
  </BrowserRouter>
)
