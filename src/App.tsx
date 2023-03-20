import React from 'react';
import Header from './components/Header/Header'
import ProductsList from './components/ProductsList/ProductsList';
import products from './data.json'
function App() {



  return (
    <>
      <Header />
      <ProductsList products={products} />
    </>
  );
}

export default App;
