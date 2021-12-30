import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductList from './pages/ProductList/ProductList.js';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
