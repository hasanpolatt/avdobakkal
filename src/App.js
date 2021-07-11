import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product';

function App() {

  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);  

  return (
    <>
      <Header money={money} />
      {products.map(product => (
        <Product product={product} />
      ))}
    </>
  );
}

export default App;
