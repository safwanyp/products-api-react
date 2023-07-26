import './App.css';
import { useEffect, useState } from 'react';
import { getAllProducts } from './data/api';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="main-container">
      <div className=''>

      </div>
    </div>
  );
}

export default App;
