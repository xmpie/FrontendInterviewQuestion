import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FavouritesContextProvider } from './hooks/useFavorites';
import { ImagesContextProvider } from './hooks/useImages';
import ImagesSearch from './pages/ImagesSearch';
import ImagesFavourites from './pages/ImagesFavourites';
import CssBaseline from '@mui/material/CssBaseline';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ImagesSearch />,
  },
  {
    path: '/favourites',
    element: <ImagesFavourites />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ImagesContextProvider>
      <FavouritesContextProvider>
        <RouterProvider router={router} />
      </FavouritesContextProvider>
    </ImagesContextProvider>
  </React.StrictMode>
);

reportWebVitals();
