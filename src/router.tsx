import { createBrowserRouter } from 'react-router-dom';
import SearchPage from './pages/search/SearchPage';
import RootLayout from './layout/Root/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/', element: <SearchPage /> }],
  },
]);
