import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
// import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
