# Shopping Cart App

This is a simple shopping cart web application built using React JS and Redux. It allows users to add and remove items to/from the cart, apply discount codes, and view the total price with shipping cost.

## Features

- Add items to the cart with quantity control
- Remove items from the cart
- Apply discount codes for special offers
- View the total price including shipping cost
- Responsive design for different screen sizes

## Technologies Used

- React JS
- Redux (for state management)
- Semantic UI (for styling)

## Setup

1. Clone the repository or download the ZIP file.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open `http://localhost:3000` in your web browser to view the app.

## Project Structure

The project structure is organized as follows:

```
shopping-cart-app/
  ├── src/
  │    ├── components/
  │    │    ├── CartItem.js
  │    │    ├── DiscountInput.js
  │    │    ├── ShoppingCart.js
  │    │    └── TotalPrice.js
  │    ├── actions/
  │    │    └── cartActions.js
  │    ├── reducers/
  │    │    ├── cartReducer.js
  │    │    └── index.js
  │    ├── App.js
  │    └── index.js
  ├── index.html
  ├── package.json
  ├── tailwind.config.js
  └── README.md
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

This project is created by [Ahmad Nursidik Dinar](https://github.com/19157-AhmadNursidikDinar).

---