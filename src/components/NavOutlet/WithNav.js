import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

export default function WithNav() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
