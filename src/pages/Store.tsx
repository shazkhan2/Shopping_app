
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import "./Store.css";

export function Store() {
  return (
    <div className="container">
      <h1>Store</h1>
      <div className="store-item-container">
        {storeItems.map((item) => (
          <div className="store-item" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
