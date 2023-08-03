import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../actions/cartActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 border-b flex items-center">
      <img src={item.image} alt={item.name} className="w-32 h-32 mr-4" />
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-semibold">{item.name}</h3>
          <div className="flex items-center">
            <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 py-1 bg-gray-300 text-gray-700 rounded-lg mr-2">-</button>
            <span className="text-xl font-semibold">{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 py-1 bg-gray-300 text-gray-700 rounded-lg ml-2">+</button>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg mb-2">REMOVE ITEM</p>
          <p className="text-lg font-semibold mb-2">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
