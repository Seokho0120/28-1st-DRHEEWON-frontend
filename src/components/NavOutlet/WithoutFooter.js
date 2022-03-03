import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router';

export default function WithoutFooter() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
