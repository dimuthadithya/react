import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  Contact,
  ContactEu,
  ContactIn,
  ContactUs,
  Admin,
  NotFound,
  Home,
  ContactOther,
  ProductDetails,
  ProductList
} from '../pages';

export const AllRoutes = () => {
  const user = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="Contact" element={<Contact />}>
          <Route path="eu" element={<ContactEu />}></Route>
          <Route path="in" element={<ContactIn />}></Route>
          <Route path="us" element={<ContactUs />}></Route>
          <Route path="*" element={<ContactOther />}></Route>
        </Route>
        <Route
          path="admin"
          element={user ? <Admin /> : <Navigate to="/" />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
