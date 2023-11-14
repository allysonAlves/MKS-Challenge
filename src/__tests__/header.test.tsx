import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import  CartProvider  from '../Context/CartProvider';

describe('Header Component', () => {
  test('renders Header component', () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    );

    // Verifica se o componente é renderizado corretamente
    expect(screen.getByTestId('header-container')).toBeInTheDocument();
    expect(screen.getByTestId('header-content')).toBeInTheDocument();
  });

  test('opens cart on button click', () => {       
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    );
    
    expect(screen.getByTestId('cart-button')).toBeInTheDocument();
   
    fireEvent.click(screen.getByTestId('cart-button'));
  });
});
