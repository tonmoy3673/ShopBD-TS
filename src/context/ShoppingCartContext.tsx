import { createContext, useContext, useState, type ReactNode } from "react";

type ShoppingCartProps = {
  children: ReactNode;
};


type CartItemsData={
    id:number,
    quantity:number,
}
type ShoppingCartContext={
    getItemQuantity:(id:number)=>number,
    inCreaseCartQuantity:(id:number)=>void,
    deCreaseCartQuantity:(id:number)=>void,
    removeFromCart:(id:number)=>void,
}
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};


export const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {

    const [cartItems,setCartItems]= useState<CartItemsData[]>([]);

    // ============ getItemQuantity ============//
    const getItemQuantity=(id:number)=>{
        return  cartItems.find((item)=>item.id === id )?.quantity ||0;
    }

    // ============== Increase Quantity =============//
    const inCreaseCartQuantity =(id:number)=>{
        setCartItems(currItems =>{
            const itemFound = currItems.find(item=>item.id === id)
            if(itemFound==null){
                return [...currItems,{id,quantity:1}]
            } 
            else{
                return currItems.map(item=>
                    item.id ===id ? {...item, quantity:item.quantity+1}:item
                )
            }
        })
    }



  return <ShoppingCartContext.Provider value={{getItemQuantity}}>
    {children}
  </ShoppingCartContext.Provider>;
};
