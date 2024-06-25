import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "../components/CartItem";
import storeItems from "../data/items.json";

export function ShoppingCart() {
  const { cartItems } = useShoppingCart();

  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find(i => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <div>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      <div>Total: {formatCurrency(total)}</div>
    </div>
  );
}
