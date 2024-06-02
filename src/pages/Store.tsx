import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";



export function Store() {
  return (
    <div>
      <h1>Store</h1>
      <div>
        {storeItems.map((item: Item, index: number) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
