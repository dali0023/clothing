import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

const goToCheckoutHanlder=()=>{
  navigate('/checkout');
}

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHanlder}>
        <span>GO TO CHECKOUT</span>
      </Button>
    </div>
  );
};

export default CartDropdown;