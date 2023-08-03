import React from 'react';
import { useSelector } from 'react-redux';

const TotalPrice = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const discount = useSelector((state) => state.discount);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;
  const shippingCost = 10; // Biaya pengiriman (ganti sesuai kebutuhan)
  const totalPayment = discountedPrice + shippingCost;

  const handleCheckout = () => {
    // Tambahkan logika untuk melakukan proses checkout disini
    console.log('Checkout clicked');
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">The total amount of</h2>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl">Temporary amount:</p>
        <p className="text-lg">${totalPrice.toFixed(2)}</p>
      </div>

      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <p className="text-xl">shipping:</p>
        <p className="text-lg">${shippingCost.toFixed(2)}</p>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">The total amount of (including VAT):</h2>
        <p className="text-xl font-semibold">${totalPayment.toFixed(2)}</p>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default TotalPrice;
