"use client";
import React, { useState, useContext } from 'react';
import { CartButton, HeaderContainer, HeaderContent } from './styles';
import { SvgIcon } from '../../utils/svgs';
import { CartContext } from '../../Context/CartProvider';

const Header = () => {
    const { cart, setCartOpen } = useContext(CartContext);

    const handleOpenCart = () => {
        setCartOpen(true);
    }

  return (
    <HeaderContainer data-testid='header-container'>
      <HeaderContent data-testid='header-content'>       
        <SvgIcon iconName='logo'/>
        <div>
          <div>
            <CartButton data-testid='cart-button' onClick={handleOpenCart}>
            <SvgIcon iconName='cartIcon'/>            
            <span className="cart-product-number">{cart.length}</span>
            </CartButton>
          </div>         
        </div>
      </HeaderContent>          
    </HeaderContainer>
  )
}

export default Header