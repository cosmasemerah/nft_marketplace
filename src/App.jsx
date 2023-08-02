import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import HomePage from './pages/Home';
import SignUpPage from './pages/CreateAccount/SignUpPage';
import ArtistPage from './pages/Artist/ArtistPage';
import NftPage from './pages/Nft/NftPage';
import Marketplace from './pages/Marketplace/Marketplace';
import RankingsPage from './pages/Rankings/RankingsPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'artist', element: <ArtistPage /> },
      { path: 'nft', element: <NftPage /> },
      { path: 'marketplace', element: <Marketplace /> },
      { path: 'rankings', element: <RankingsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
