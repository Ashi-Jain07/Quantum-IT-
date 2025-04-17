import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Registration = lazy(() => import('./Components/Registration.jsx'));
const Table = lazy(() => import('./Components/Table.jsx'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/register',
    element: <Suspense fallback={<div>Loading...</div>}><Registration /></Suspense>
  },
  {
    path: '/table',
    element: <Suspense fallback={<div>Loading...</div>}><Table /></Suspense>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
