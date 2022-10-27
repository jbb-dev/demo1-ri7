import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import ListPosts from './ListPosts';

export const MyRoutes = {
    HOME: '/',
    LIST_POST: '/list',
    CONTACT: '/contact'
};

const Router = () => {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path={MyRoutes.HOME} element={<Home />} />
            <Route path={MyRoutes.LIST_POST} element={<ListPosts />} />
            <Route path={MyRoutes.CONTACT} element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;