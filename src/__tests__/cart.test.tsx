import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import { CartContext } from '../Context/CartProvider';
import { productCart } from '@/@types/interfaces';

const productMock = {
  id: 1,
  name: "Product Name",
  brand: "Product Brand",
  description: "Product Description",
  photo: "product.jpg",
  price: "29",
  createdAt: "2023-01-01T00:00:00Z",
  updatedAt: "2023-01-02T12:34:56Z",
  quantity: 1,
};

const renderCartWithContext = (cart: productCart[], open: boolean) => {
  const setCartOpen = jest.fn();
  const addToCart = jest.fn();
  const removeFromCart = jest.fn();
  const decreaseQuantity = jest.fn();
  const clearCart = jest.fn();

  render(
    <CartContext.Provider value={{ cart, open, setCartOpen, addToCart, removeFromCart, decreaseQuantity, clearCart }}>
      <Cart open={true} />
    </CartContext.Provider>
  );
};

describe('Cart component', () => {
  it('test cart empty ', () => {
    renderCartWithContext([], true);

    expect(screen.getByTestId('close-button')).toBeInTheDocument();
    expect(screen.getByTestId('buy-button')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('close-button'));
    fireEvent.click(screen.getByTestId('buy-button'));

    expect(screen.getByText('Carrinho de compras')).toBeInTheDocument();
    expect(screen.getByText('Carrinho vazio')).toBeInTheDocument();
    expect(screen.getByText('Finalizar Compra')).toBeInTheDocument();
    expect(screen.getByText('Total:')).toBeInTheDocument();
  });

  it('test cart with product ', () => {
    renderCartWithContext([productMock], true);

    expect(screen.getByTestId('close-button')).toBeInTheDocument();
    expect(screen.getByTestId('buy-button')).toBeInTheDocument();
    
    const testValueElement = screen.getByTestId('test-value');
    expect(testValueElement.textContent).toMatch(/\d/g);
  });
});
