import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalPrice from './TotalPrice';
import DiscountInput from './DiscountInput';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <div className="p-4 border rounded-lg shadow-md">
          <p className="text-2xl font-semibold">Cart (2 items)</p>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <TotalPrice />
        <DiscountInput />
      </div>
    </div>
  );
};

export default ShoppingCart;
