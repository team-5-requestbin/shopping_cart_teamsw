import React from "react";

const App = () => {
  return React.createElement("h1", { className: "greeting" }, "Hello");
};
// const App = () => {
//   return (
//     <>
//       <header>
//         <h1>The Shop!</h1>
//         <div class="cart">
//           <h2>Your Cart</h2>
//           <p>Your cart is empty</p>
//           <p>Total: $0</p>
//           <button class="checkout" disabled>
//             Checkout
//           </button>
//         </div>
//       </header>

//       <main>
//         <div class="product-listing">
//           <h2>Products</h2>
//           <ul class="product-list">
//             <li class="product">
//               <div class="product-details">
//                 <h3>Amazon Kindle E-reader</h3>
//                 <p class="price">$79.99</p>
//                 <p class="quantity">5 left in stock</p>
//                 <div class="actions product-actions">
//                   <button class="add-to-cart">Add to Cart</button>
//                   <button class="edit">Edit</button>
//                 </div>
//                 <button class="delete-button">
//                   <span>X</span>
//                 </button>
//               </div>
//             </li>

//             <li class="product">
//               <div class="product-details">
//                 <h3>Apple 10.5-Inch iPad Pro</h3>
//                 <p class="price">$649.99</p>
//                 <p class="quantity">2 left in stock</p>
//                 <div class="actions product-actions">
//                   <button class="add-to-cart">Add to Cart</button>
//                   <button class="edit">Edit</button>
//                 </div>
//                 <button class="delete-button">
//                   <span>X</span>
//                 </button>
//               </div>
//             </li>

//             <li class="product">
//               <div class="product-details">
//                 <h3>Yamaha Portable Keyboard</h3>
//                 <p class="price">$155.99</p>
//                 <p class="quantity">0 left in stock</p>
//                 <div class="actions product-actions">
//                   <button class="add-to-cart" disabled>
//                     Add to Cart
//                   </button>
//                   <button class="edit">Edit</button>
//                 </div>
//                 <button class="delete-button">
//                   <span>X</span>
//                 </button>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <p>
//           <button className="add-product-button">Add A Product</button>
//         </p>
//       </main>
//     </>
//   );
// };

export default App;
