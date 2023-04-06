import React, { useReducer, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header'
import ProductsList from './components/ProductsList/ProductsList';
import products from './products.json'
import CartContextProvider from './store/cart-context'


function App() {

  return (
    <CartContextProvider>
      <Header />
      <ProductsList products={products} />
      <Cart />
    </CartContextProvider>
  );
}



export default App;