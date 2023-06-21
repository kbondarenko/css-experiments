import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './normalize.css';
import './main.css';

const Navigation = React.lazy(() => import('./Navigation/Navigation.tsx'));
const PaperEffect = React.lazy(() => import('./PaperEffect/PaperEffect.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />
  },
  {
    path: '/paper-effect',
    element: <PaperEffect />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <div className="header">
        <span>CSS EXPERIMENTS</span>
      </div>
      <div className="content">
        <React.Suspense fallback={<div>Page is Loading...</div>}>
          <RouterProvider router={router} />
        </React.Suspense>
      </div>
      <div className="footer"></div>
    </div>
  </React.StrictMode>
);
