import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === Number(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="w-60 h-60 object-cover" />
      <h2 className="font-bold">{product.title}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
