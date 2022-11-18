import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button from "../button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";


const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
