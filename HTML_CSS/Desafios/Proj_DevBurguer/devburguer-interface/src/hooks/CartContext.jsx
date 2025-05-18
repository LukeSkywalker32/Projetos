import { useContext, useEffect, createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const putProductInCart = (product) => {
    const productIndex = cartProducts.findIndex(
      (productCart) => productCart.id === product.id
    );

    let newCartProducts = [];
    if (productIndex >= 0) {
      newCartProducts = cartProducts;

      newCartProducts[productIndex].quantity += 1;
      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }
    updateLocalStorage(newCartProducts);
  };

  const clearCart = () => {
    setCartProducts([]);
    updateLocalStorage([]);
  };

  const deleteProduct = (product) => {
    const newCart = cartProducts.filter((prod) => prod.id !== product.id);

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const increaseQuantity = (productId) => {
    const newCArt = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd;
    });

    setCartProducts(newCArt);
    updateLocalStorage(newCArt);
  };
  const decreaseQuantity = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) =>
        prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
      );

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  const updateLocalStorage = (products) => {
    localStorage.setItem("cartInfo", JSON.stringify(products));
  };
  useEffect(() => {
    const loadProducts = localStorage.getItem("cartInfo");
    if (loadProducts) {
      setCartProducts(JSON.parse(loadProducts));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be a valid context");
  }
  return context;
};
