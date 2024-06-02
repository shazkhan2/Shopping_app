import { formatCurrency } from "../utilities/formatCurrency";

interface Item {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }
  
  export function StoreItem({ id, name, price, imgUrl }: Item) {
    const quantity = 0
    return (
      <div className="card">
        <img src={imgUrl} alt={name} />
        <div className="name-price">
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </div>
        <div className="add-cart">
            {quantity === 0 ? (
            <button>+ Add to card</button>
        ): <div>
            <button>-</button>
            <div className="cart-items">
                <span>{quantity}</span> in cart
            </div>
            <button>+</button>
            <div>            <button className="remove">Remove</button>
</div>
        </div>
        }
        </div>
      </div>
    );
  }
  