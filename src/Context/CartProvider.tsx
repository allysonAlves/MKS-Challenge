import React, { createContext, useState, ReactNode, useContext } from 'react';
import { ApiProduct, productCart } from '@/@types/interfaces';

interface CartContext {
    open: boolean;
    cart: Array<productCart>;
    addToCart(item: ApiProduct): void;
    removeFromCart(itemId: number): void;
    decreaseQuantity(itemId: number): void;
    clearCart(): void;
    setCartOpen(open: boolean): void
}

export const CartContext = createContext<CartContext>({
    open: false,
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    decreaseQuantity: () => {},
    clearCart: () => {},
    setCartOpen: () => {}
});

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<productCart[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const addToCart = (product: ApiProduct) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(prev =>
        prev.map(item => (item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item))
      );
    } else {
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const decreaseQuantity = (itemId: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const setCartOpen = (open: boolean) => {
    setOpen(open);
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, open, setCartOpen, addToCart, removeFromCart, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
