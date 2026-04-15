import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Components/RootLayout'
import NotFoundPage from './Components/Pages/NotFoundPage'
import Banner from './Components/Hompage/Banner'
import CardLayout from './Components/CardLayout/CardLayout'

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
          path: '/timeline/:id',
          element: <CardLayout />,
     

        },
        {
          path: '/stats',
          element: <h2>Stats</h2>,

        }, {
          path: '/timeline',
          element: <CardLayout />,
     

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
