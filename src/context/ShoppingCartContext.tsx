import { createContext, useContext, useState, type ReactNode } from "react";
import ShoppingCart from "../components/ShoppingCart";

type ShoppingCartProps = {
  children: ReactNode;
};

type CartItemsData = {
  id: number;
  quantity: number;
};
type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  inCreaseCartQuantity: (id: number) => void;
  deCreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemsData[];
};
const ShoppingCartContext = createContext<ShoppingCartContext | undefined>(
  undefined
);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

export const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemsData[]>("shopping-cart",[]);

  // =============== Cart Quantity =============//

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ================= Open and Close Cart ============//
  const [isOpen,setIsOpen]= useState(false);

  const openCart =()=>setIsOpen(true);
  const closeCart =()=> setIsOpen(false);

  // ============ getItemQuantity ============//
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  // ============== Increase Quantity =============//
  const inCreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      const itemFound = currItems.find((item) => item.id === id);
      if (!itemFound) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  //   ============== deCrease Item =============//

  const deCreaseCartQuantity = (id: number) => {
    setCartItems((currItem) => {
      const foundItem = currItem.find((item) => item.id === id);
      if (!foundItem) {
        return [...currItem];
      } else if (foundItem?.quantity === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  // ================= Remove Items ===========//
  const removeFromCart = (id: number) => {
    setCartItems((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        deCreaseCartQuantity,
        removeFromCart,
        inCreaseCartQuantity,
        cartQuantity,
        cartItems,
        openCart,
        closeCart
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
};
