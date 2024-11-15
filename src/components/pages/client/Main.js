import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../partial/Header';
import Footer from '../../partial/Footer';

export function Main() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

