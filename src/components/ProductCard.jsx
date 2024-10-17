import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h2 className="font-bold">{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
