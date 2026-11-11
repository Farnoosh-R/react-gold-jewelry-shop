import { createContext, useContext, useEffect, useState } from "react";
import {
  addItemToWooCart,
  getWooCart,
  updateWooCartItem,
  removeWooCartItem,
} from "../services/cartService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //   const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = async (product, quantity = 1) => {
    try {
      const wooCart = await addItemToWooCart(product.id, quantity);

      setCartItems((prevItems) => {
        const existingProduct = prevItems.find(
          (item) => item.id === product.id,
        );

        const wooItems = wooCart.items;

        if (existingProduct) {
          return prevItems.map((item) => {
            const wooItem = wooItems.find((wooItem) => wooItem.id === item.id);

            return item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  key: wooItem?.key,
                }
              : {
                  ...item,
                  key: wooItem?.key || item.key,
                };
          });
        }

        const addedItem = wooItems.find((item) => item.id === product.id);

        return [
          ...prevItems.map((item) => {
            const wooItem = wooItems.find((wooItem) => wooItem.id === item.id);

            return {
              ...item,
              key: wooItem?.key || item.key,
            };
          }),
          {
            id: product.id,
            key: addedItem?.key,
            name: product.name,
            price: product.prices?.price,
            image: product.images?.[0]?.thumbnail || product.images?.[0]?.src,
            quantity,
          },
        ];
      });
    } catch (error) {
      console.error("Add to cart error:", error);
      alert("افزودن محصول به سبد خرید با خطا مواجه شد.");
    }
  };

  const getProductQuantity = (productId) => {
    return cartItems.find((item) => item.id === productId)?.quantity || 0;
  };

const removeFromCart = async (productId) => {
    try {
        const item = cartItems.find(
            (item) => item.id === productId
        );

        if (!item?.key) {
            throw new Error("Cart item key not found");
        }

        await removeWooCartItem(item.key);

        setCartItems((prevItems) =>
            prevItems.filter((cartItem) => cartItem.id !== productId)
        );

    } catch (error) {
        console.error("Remove cart item error:", error);
        alert("حذف محصول از سبد خرید انجام نشد.");
    }
};

const increaseQuantity = async (productId) => {
    try {
        const item = cartItems.find((item) => item.id === productId);

        if (!item?.key) {
            throw new Error("Cart item key not found");
        }

        const wooCart = await updateWooCartItem(
            item.key,
            item.quantity + 1
        );

        setCartItems((prevItems) =>
            prevItems.map((cartItem) => {
                const updatedItem = wooCart.items.find(
                    (wooItem) => wooItem.id === cartItem.id
                );

                return updatedItem
                    ? {
                          ...cartItem,
                          quantity: updatedItem.quantity,
                          key: updatedItem.key,
                      }
                    : cartItem;
            })
        );
    } catch (error) {
        console.error("Increase quantity error:", error);
        alert("افزایش تعداد محصول انجام نشد.");
    }
};

const decreaseQuantity = async (productId) => {
    try {
        const item = cartItems.find((item) => item.id === productId);

        if (!item?.key) {
            throw new Error("Cart item key not found");
        }

        if (item.quantity <= 1) {
            await removeWooCartItem(item.key);

            setCartItems((prevItems) =>
                prevItems.filter((cartItem) => cartItem.id !== productId)
            );

            return;
        }

        const wooCart = await updateWooCartItem(
            item.key,
            item.quantity - 1
        );

        setCartItems((prevItems) =>
            prevItems.map((cartItem) => {
                const updatedItem = wooCart.items.find(
                    (wooItem) => wooItem.id === cartItem.id
                );

                return updatedItem
                    ? {
                          ...cartItem,
                          quantity: updatedItem.quantity,
                          key: updatedItem.key,
                      }
                    : cartItem;
            })
        );
    } catch (error) {
        console.error("Decrease quantity error:", error);
        alert("کاهش تعداد محصول انجام نشد.");
    }
};

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const syncCartKeys = async () => {
      try {
        const wooCart = await getWooCart();

        setCartItems((prevItems) =>
          prevItems.map((item) => {
            const wooItem = wooCart.items.find(
              (wooItem) => wooItem.id === item.id,
            );

            return {
              ...item,
              key: wooItem?.key,
            };
          }),
        );
      } catch (error) {
        console.error("Sync cart keys error:", error);
      }
    };

    syncCartKeys();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        getProductQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
