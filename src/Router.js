import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ProductTest" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
