/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import FullMenu from './pages/FullMenu';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<FullMenu />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
