import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../../layout/Root/RootLayout';
import SearchPage from '../../pages/search/SearchPage';
import FavoritesPage from '../../pages/favorites/FavoritesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <SearchPage /> },
      { path: '/favorites', element: <FavoritesPage /> },
    ],
  },
]);
