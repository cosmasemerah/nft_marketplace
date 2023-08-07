import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProgressBar from '../utils/ProgressBar';

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col">
          <Suspense fallback={<ProgressBar />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Root;
