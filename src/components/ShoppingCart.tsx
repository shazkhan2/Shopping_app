// ShoppingCart.tsx
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

interface ShoppingCartProps {
  isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find(i => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
      <button onClick={closeCart}>Close Cart</button>
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div>Total: {formatCurrency(total)}</div>
    </div>
  );
}

