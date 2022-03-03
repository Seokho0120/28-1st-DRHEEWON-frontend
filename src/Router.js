import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList.js';
import TopButton from './components/Buttons/TopButton';
import WithNav from './components/NavOutlet/WithNav';
import WithoutFooter from './components/NavOutlet/WithoutFooter';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
        </Route>
        <Route element={<WithoutFooter />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <TopButton />
    </BrowserRouter>
  );
}
