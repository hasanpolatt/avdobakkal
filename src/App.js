import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';
import logo from './image/b.png';
import logo2 from './image/c.jpg';

function App() {

  const [money] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const resetBasket = () => {
    setBasket([])
  }
  
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0)
    )
  }, [basket])

  

  return (
    <>

      <Header total={total} money={money} />

      <div className="container products">
        <img className="avdo" height="420" width="250" src={logo2} />
        <img className="avdo-right" height="420" width="250" src={logo} />
        {products.map(product => (
          <Product total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </div>
      {total > 0 && (
        <Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
      )}
    </>
  );
}

export default App;
