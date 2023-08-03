import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyDiscount } from '../actions/cartActions';

const DiscountInput = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleApplyDiscount = () => {
    dispatch(applyDiscount(code));
    setIsDisabled(true);
  };

  return (
    <div className={`p-4 border rounded-lg shadow-md ${isDisabled ? 'bg-gray-200' : ''}`}>
      <h2 className="text-xl mb-4">Add a checkout code [opsional]:</h2>
      <div className="relative">
        <input
          type="text"
          value={code}
          onChange={handleChange}
          placeholder="Masukkan kode diskon"
          className={`w-full px-4 py-2 rounded-lg ${isDisabled ? 'cursor-not-allowed' : 'cursor-text'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          disabled={isDisabled}
        />
        <button
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg ${isDisabled ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'} focus:outline-none`}
          onClick={handleApplyDiscount}
          disabled={isDisabled}
        >
          {isDisabled ? 'Applied' : 'Apply'}
        </button>
      </div>
    </div>
  );
};

export default DiscountInput;
