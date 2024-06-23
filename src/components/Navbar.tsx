import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const navigate = useNavigate();  
  const { cartQuantity } = useShoppingCart(); 

  const handleCartClick = () => {
    navigate("/cart"); 
  };

  return (
    
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <button className="cart-button" onClick={handleCartClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-cart"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.36-8.39H5.21"></path>
        </svg>
        <span className="shopping-items">{cartQuantity}</span>
      </button>
    </nav>
  );
}
