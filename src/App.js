import './App.css';
import { useEffect, useState } from 'react';
import { getAllProducts } from './data/api';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [numberOfProducts, setNumberOfProducts] = useState(10); // [1
  const api_url = 'https://dummyjson.com/products';

  useEffect(() => {
    getAllProducts(numberOfProducts).then((data) => {
      setProducts(data);
    });
  }, [numberOfProducts]);

  return (
    <div className="w-screen h-screen font-rubik flex flex-col gap-7 justify-start items-center p-5 bg-dark">
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <h1 className='font-rubik font-medium text-3xl text-light'>Products List Website with React and Tailwind</h1>
        <span className='font-rubik font-normal text-lg text-light'>Fetch and view a bunch of products from a REST API</span>
      </div>
      <div className='w-full h-auto flex flex-row gap-3 justify-center items-center text-light'>
        <span className='text-base font-medium'>Current API endpoint</span>
        <div className='h-full min-w-min p-4 flex flex-row justify-between items-center bg-black bg-opacity-20 rounded-md border border-gray-600 shadow-inner'>
          {api_url}{products.length > 0 ? `?limit=${products.length}` : ''}
        </div>
      </div>
      <div className='w-full h-full z-20 pb-20 grid grid-cols-4 gap-5 justify-center items-center overflow-y-scroll'>
        {products.length === 0
          ? (<span className='font-rubik font-normal text-center text-xl text-white'>No items to display 🥲</span>)
          : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )
        }
      </div>
      <div className='w-fit h-auto z-50 absolute bottom-2 p-3 flex flex-row justify-center items-center gap-5 bg-blue-900 rounded-lg shadow-lg'>
        <span className='text-base font-medium text-light'>Enter the Number of products to fetch:</span>
        <input
          onChange={(e) => setNumberOfProducts(e.target.value)}
          type='number'
          value={numberOfProducts} 
          className='w-auto h-auto p-3 text-base bg-black bg-opacity-20 rounded-md border border-gray-600 shadow-inner text-light outline-none'
        />
      </div>
    </div>
  );
}

export default App;
