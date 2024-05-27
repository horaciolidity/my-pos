import React from 'react';
import Product from './product';
import { useCart } from '../context/Cartcontext';

function ProductList({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
