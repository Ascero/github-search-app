import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/Root/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [],
  },
]);
