import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/productlist';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import BarcodeScanner from './components/BarcodeScanner';
import { getProducts, searchProductByBarcode } from './services/productService';
import { CartProvider } from './context/Cartcontext';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSearch = async (query) => {
    // Implementa la búsqueda de productos por nombre aquí
  };

  const handleScan = async (barcode) => {
    const result = await searchProductByBarcode(barcode);
    if (result.length > 0) {
      alert(`Producto encontrado: ${result[0].name}`);
    } else {
      alert('Producto no encontrado');
    }
  };

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main>
          <SearchBar onSearch={handleSearch} />
          <BarcodeScanner onScan={handleScan} />
          <ProductList products={products} />
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
