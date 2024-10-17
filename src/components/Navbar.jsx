import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg">Fake Store</h1>
      <div>
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/cart" className="text-white">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
