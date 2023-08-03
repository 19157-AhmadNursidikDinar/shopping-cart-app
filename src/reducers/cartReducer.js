const initialState = {
    cartItems: [
      {
        id: 1,
        name: 'Blue denim shirt',
        description: 'Size : M',
        price: 17.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuAEAwU6T9X8UelamDlQuO1CqU_oAGfZfSw&usqp=CAU',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Red hoodie',
        description: 'Size : M',
        price: 35.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-nQeLxpcj_ROYiCSmb-mnxBTGNjTTjRgMA&usqp=CAU',
        quantity: 1,
      },
    ],
    discount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      case 'APPLY_DISCOUNT':
        return {
          ...state,
          discount: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  