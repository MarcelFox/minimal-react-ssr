/**
 * Main client routes module defined by react-router.
 */

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Home from '../components/home'
import About from '../components/about';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Router;
