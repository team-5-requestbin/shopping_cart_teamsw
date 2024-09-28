import { ProductListing } from "../types";

const EmptyCart = () => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <p>Total: $0</p>
      <button className="checkout" disabled>
        Checkout
      </button>
    </div>
  );
};

interface ItemProps {
  item: ProductListing;
}

const CartItem = ({ item }: ItemProps) => {
  const { title, price, quantity } = item;
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  );
};

interface HeaderProps {
  cartItems: ProductListing[];
  onCheckout: () => void;
}

const LoadedCart = ({ cartItems, onCheckout }: HeaderProps) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return <CartItem key={item._id} item={item} />;
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">
              Total:{" "}
              {cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="checkout-button">
        <button
          className="checkout"
          onClick={(e) => {
            e.preventDefault();
            onCheckout();
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

const Header = ({ cartItems, onCheckout }: HeaderProps) => {
  return (
    <header>
      <h1>The Shop!</h1>
      {cartItems.length ? (
        <LoadedCart cartItems={cartItems} onCheckout={onCheckout} />
      ) : (
        <EmptyCart />
      )}
    </header>
  );
};

export default Header;
