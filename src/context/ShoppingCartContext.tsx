import { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface ShoppingCartContext {
  cartQuantity: number;
  cartItems: CartItem[];
  getItemsQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  function getItemsQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider value={{
      getItemsQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      cartItems,
      cartQuantity
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
