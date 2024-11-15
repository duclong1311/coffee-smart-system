import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../partial/Header';
import Footer from '../../partial/Footer';

export function Main() {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

