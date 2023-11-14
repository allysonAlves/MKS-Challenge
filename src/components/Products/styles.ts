import styled from "styled-components";

const ProductContainer = styled.div`
  flex: 1;
  background-color: white;
  max-width: 1050px;
  margin: 116px auto;
  display: flex;  
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;  
  gap: 23px;

  @media only screen and (max-width: 375px) {
    padding-top: 18px;
    margin: 0 auto;
    gap: 18px;
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 425px) and (max-width: 768px) {
    padding-top: 36px;
    margin: 0 auto;
    gap: 36px;
    padding-bottom: 50px;
  }
`;

export default ProductContainer;