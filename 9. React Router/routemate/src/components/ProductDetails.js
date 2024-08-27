import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="components">
      <h1>Product {params.id} - Product Details</h1>
    </div>
  );
};
