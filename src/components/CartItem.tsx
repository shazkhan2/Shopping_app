// CartItem.tsx
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find(i => i.id === id);
  
  // If the item is not found, we don't render the component
  if (item == null) return null;

  return (
    <div className="cart-item">
      <img src={item.imgUrl} alt={item.name} />
      <div className="item-details">
        <div className="item-name">
          {item.name} {quantity > 1 && <span> x{quantity}</span>}
        </div>
        <div className="item-price">
          {formatCurrency(item.price)}
        </div>
        <div className="item-total">
          {formatCurrency(item.price * quantity)}
        </div>
        <button onClick={() => removeFromCart(item.id)} className="remove-item">
          ×
        </button>
      </div>
    </div>
  );
}
