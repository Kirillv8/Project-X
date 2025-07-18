import { ROUTES } from '../shared/model/routes';
import { createBrowserRouter, redirect } from 'react-router-dom';
import App from '@/app/App';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.BOARDS,
        lazy: () => import('@/features/board-list/board-list-page'),
      },
      {
        path: ROUTES.BOARD,
        lazy: () => import('@/features/board/board-page'),
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import('@/features/auth/login-page.tsx'),
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import('@/features/auth/register-page'),
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.BOARDS),
      },
    ],
  },
]);
