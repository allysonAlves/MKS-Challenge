import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: #0F52BA;

  @media only screen and (max-width: 375px) {
    height: 48px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 28px 0;

  .logo {
    width: 191px;
    height: 44px;
  }

  @media only screen and (max-width: 375px) {
    padding: 4px 0;

    .logo {
      height: 40px;
      width: 150px;
    }
  }
`;

export const CartButton = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  padding-left: 15px;
  cursor: pointer;

  background-color: #fff;
  color: #000;

  span {
    font-weight: 700;
    font-size: 18px;
  }

  @media only screen and (max-width: 375px) {
    width: 52px;
    height: 26px;
    border-radius: 6px;
    margin-top: 8px;
    padding: 0;
    gap: 8px;
    justify-content: center;

    .cart-icon {
      width: 14px;
      height: 14px;
    }

    .cart-product-number {
      font-size: 14px;
    }
  }
`;
