import { createContext, useState } from "react";
import { ProductList } from "../assets/assets";
import { product_Items } from "../assets/assets";
import { Servies_List } from "../assets/assets";
import { service_items } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = product_Items.find((product) => product._id == item);
        if (itemInfo) {
          TotalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return TotalAmount;
  };

  const contextValue = {
    ProductList,
    product_Items,
    Servies_List,
    service_items,
    cartItems,
    addToCart,
    removeToCart,
    getTotalAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
