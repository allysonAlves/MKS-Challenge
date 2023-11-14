import { useContext } from 'react';
import {
  ImageContainer,
  ProductCardContainer,
  ProductTitle,
  BuyButton,
} from "./styles";

import { ApiProduct } from "@/@types/interfaces";
import { CartContext } from "../../Context/CartProvider";
import { currencyMask } from '../../utils/Mask';
import { SvgIcon } from '../../utils/svgs';

export default function ProductCard(product: ApiProduct) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)

  return (
    <ProductCardContainer>
      <ImageContainer>
        <img
          src={product.photo}
          alt={product.name}
          width={100}
          height={138}
          className="cart-product-image"
        />
      </ImageContainer>
      <ProductTitle>
        <h3 className="cart-product-title">{product.name}</h3>
        <span className="cart-product-price">
           {currencyMask(parseFloat(product.price))}
        </span>
      </ProductTitle>
      <p className="cart-product-description">{product.description}</p>
      <BuyButton
        data-testid='button-add-cart'
        onClick={() => {
          addToCart(product);
          }         
        }
      >
        <SvgIcon iconName='bag'/>
        <span className="buy-button-title">COMPRAR</span>
      </BuyButton>
    </ProductCardContainer>
  );
}
