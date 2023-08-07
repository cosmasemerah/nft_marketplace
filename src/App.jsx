import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import HomePage from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const SignUpPage = lazy(() => import('./pages/CreateAccount/SignUpPage'));
const ArtistPage = lazy(() => import('./pages/Artist/ArtistPage'));
const NftPage = lazy(() => import('./pages/Nft/NftPage'));
const ConnectWalletPage = lazy(() =>
  import('./pages/ConnectWallet/ConnectWalletPage')
);
const Marketplace = lazy(() => import('./pages/Marketplace/Marketplace'));
const Rankings = lazy(() => import('./pages/Rankings/RankingsPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      { path: 'artist', element: <ArtistPage /> },
      {
        path: 'nft',
        element: <NftPage />,
      },
      {
        path: 'connectwallet',
        element: <ConnectWalletPage />,
      },
      {
        path: 'marketplace',
        element: <Marketplace />,
      },
      { path: 'rankings', element: <Rankings /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
