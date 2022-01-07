import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList.js';
import TopButton from './components/Buttons/TopButton';
import Footer from './components/Footer/Footer.js';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <TopButton />
      <Footer />
    </BrowserRouter>
  );
}
