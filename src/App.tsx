/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Diagnostic } from './pages/Diagnostic';
import { Bankruptcy } from './pages/Bankruptcy';
import { ReturnToBg } from './pages/ReturnToBg';
import { EuroPrograms } from './pages/EuroPrograms';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'diagnostic', element: <Diagnostic /> },
      { path: 'bankruptcy', element: <Bankruptcy /> },
      { path: 'return-to-bg', element: <ReturnToBg /> },
      { path: 'euro-programs', element: <EuroPrograms /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

