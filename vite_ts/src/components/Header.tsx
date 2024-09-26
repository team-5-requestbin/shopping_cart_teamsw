const Header = () => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="checkout" disabled>
          Checkout
        </button>
      </div>
    </header>
  );
};

export default Header;

// <header>
//   <h1>The Shop!</h1>
//   <div class="cart">
//     <h2>Your Cart</h2>
//     <table class="cart-items">
//       <thead>
//         <tr>
//           <th scope="col">Item</th>
//           <th scope="col">Quantity</th>
//           <th scope="col">Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Amazon Kindle E-reader</td>
//           <td>2</td>
//           <td>$79.99</td>
//         </tr>
//         <tr>
//           <td>Apple 10.5-Inch iPad Pro</td>
//           <td>1</td>
//           <td>$649.99</td>
//         </tr>
//       </tbody>
//       <tfoot>
//         <tr>
//           <td colspan="3" class="total">Total: $729.98</td>
//         </tr>
//       </tfoot>
//     </table>
//     <div class="checkout-button">
//       <button class="checkout">Checkout</button>
//   </div>
// </header>
