export const increaseQuantity = (itemId) => ({
    type: 'INCREASE_QUANTITY',
    payload: itemId,
  });
  
  export const decreaseQuantity = (itemId) => ({
    type: 'DECREASE_QUANTITY',
    payload: itemId,
  });
  
  export const applyDiscount = (code) => ({
    type: 'APPLY_DISCOUNT',
    payload: code,
  });
  