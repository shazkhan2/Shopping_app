import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import "./StoreItem.css";


interface Item {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }
  
  export function StoreItem({ id, name, price, imgUrl }: Item) {
    const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemsQuantity(id);
  
    return (
      <div className="store-item-container">
        <div className="card">
          <img src={imgUrl} alt={name} />
          <div className="name-price">
            <span>{name}</span>
            <span>{formatCurrency(price)}</span>
          </div>
          <div className="add-cart">
            {quantity === 0 ? (
              <button onClick={() => increaseCartQuantity(id)}>+ Add to cart</button>
            ) : (
              <div>
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div className="cart-items">
                  <span>{quantity}</span> in cart
                </div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
                <div>
                  <button className="remove" onClick={() => removeFromCart(id)}>Remove</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  