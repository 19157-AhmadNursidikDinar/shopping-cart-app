import React from 'react';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="container mx-auto p-4">
      <div className='py-8 bg-slate-50'>
        <h1 className="text-3xl font-semibold mb-4 text-center">Shopping Cart</h1>
      </div>
      <ShoppingCart />
    </div>
  );
}

export default App;
