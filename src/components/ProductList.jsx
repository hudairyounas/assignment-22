import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (!products) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
