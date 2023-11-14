'use client';
import React, {useContext} from 'react';
import { Drawer, DrawerProps, Card} from '@mui/material';
import { ButtonClose, BuyButton, CartContainer, CartContent, CartTitle, CartTitleBox, PriceBox, ProductButton, ProductCard, ProductImageBox, ProductTitle, QtdBox, RemoveButton, ValueContent } from './styles';
import { CartContext } from '../../Context/CartProvider';
import { currencyMask } from '../../utils/Mask';


const Cart = (props: DrawerProps) => {
    const { cart, open, setCartOpen, addToCart, removeFromCart, decreaseQuantity } = useContext(CartContext);

  return (
    <Drawer {...props} open={open} onClose={() => setCartOpen(false)} BackdropProps={{ invisible: true }} anchor='right'>
        <CartContainer>
            <CartTitleBox>
                <CartTitle>
                    Carrinho de compras
                </CartTitle>
                <ButtonClose data-testid='close-button' onClick={() => setCartOpen(false)}>
                    X
                </ButtonClose>
            </CartTitleBox>
            <CartContent>
                {
                    cart.length > 0 ? (
                        cart.map(product => (
                            <ProductCard key={product.id}>
                                <ProductImageBox>
                                    <img  
                                    style={{objectFit:'scale-down'}}                                  
                                    className='w-full h-full'                                                               
                                    src={product.photo}
                                    alt={product.name}/>
                                </ProductImageBox>
                                <ProductTitle>
                                    {product.name}
                                </ProductTitle>
                                <QtdBox>
                                    <div>Qtd:</div>
                                    <Card className='rounded-lg h-8 text-sm' elevation={3} sx={{maxWidth:160, display:'flex'}}>
                                        <ProductButton onClick={() => decreaseQuantity(product.id) }>-</ProductButton>                                
                                        <ProductButton>{product.quantity}</ProductButton>
                                        <ProductButton onClick={() => addToCart(product)}>+</ProductButton>
                                    </Card>
                                </QtdBox>
                                <PriceBox>{currencyMask(parseFloat(product.price) * product.quantity)}</PriceBox>
                                <RemoveButton onClick={() => removeFromCart(product.id)}>
                                    X
                                </RemoveButton>
                            </ProductCard>                        
                        ))
                    ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                        Carrinho vazio
                    </div>
                    )
                }
            </CartContent>
            <ValueContent>
                <span>
                    Total:
                </span>
                <span data-testid='test-value'>
                    {currencyMask(cart.reduce((acc, current) => acc + parseFloat(current.price) * current.quantity,0))}
                </span>
            </ValueContent>
            <BuyButton data-testid='buy-button' onClick={() => {}}>
                Finalizar Compra
            </BuyButton>
        </CartContainer>
    </Drawer>   
  )
}

export default Cart