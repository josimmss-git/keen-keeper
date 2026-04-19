import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import RootLayout from './Components/RootLayout';
import NotFoundPage from './Components/Pages/NotFoundPage';
import Banner from './Components/Hompage/Banner';
import CardLayout from './Components/CardLayout/CardLayout';

import FriendProvider from './Components/Context/FriendProvider';
import Timeline from './Components/Context/Timeline';
import Stats from './Components/Context/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, 
        element: <Banner />,
      },
      {
        path: 'friendDetails/:id', 
        element: <CardLayout />,
      },
      {
        path: 'timeline', 
        element: <Timeline />,
      },
      {
        path: 'stats', 
        element: <Stats />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      

    <FriendProvider>
        
      <RouterProvider router={router} />
       
  </FriendProvider>
  
        
  </StrictMode>
);