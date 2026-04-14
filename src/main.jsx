import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Components/RootLayout'
import NotFoundPage from './Components/Pages/NotFoundPage'
import Banner from './Components/Hompage/Banner'

const router = createBrowserRouter(

  [
    {
      path: '/',
      element: < RootLayout />,
      children: [
        {
          path: '/',
          element: <Banner />,

        },
        {
          path: '/timeline',
          element: <h2>Timeline</h2>,

        },
        {
          path: '/stats',
          element: <h2>Stats</h2>,

        },
        {
          path: '/timeline',
          element: <h2>Timeline</h2>

        },
      ],
      errorElement: <NotFoundPage />


   
   

 },
  ]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />,
  </StrictMode>,
)
