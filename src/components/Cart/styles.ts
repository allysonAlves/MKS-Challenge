import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0F52BA;
    color: white;
    width: 460px;
    height: 100vh;

    @media only screen and (max-width: 450px) {
        width: 300px;
    }
`;

export const CartTitleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const CartTitle = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-weight: 700;
    font-size: 27px;

    @media only screen and (max-width: 450px) {
        width: 80%;
        font-size: 25px;
    }
`;

export const ButtonClose = styled.button`
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;    
`;

export const CartContent = styled.div`
    flex: 1;
    background-color: #0F52BA;
    color: white;
    overflow-y: auto;
    -webkit-overflow-scrolling: auto;
`;

export const ValueContent = styled.div`
    background-color: #0F52BA;
    color: white;
    width: 100%;    
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
`;

export const BuyButton = styled.button`
    background-color: #000;
    color: white;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    height: 97px;
    font-weight: bold;
    font-size: 25px;
`;

export const ProductCard = styled.div`
    /* m-10 p-2 flex items-center h-20 gap-3 relative overflow-visible */
    margin: 30px;
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    position: relative;
    overflow: visible;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;   
    background-color: white;
    color: black;

    @media only screen and (max-width: 450px) {
        height: 220px;
    }
`;
export const ProductImageBox = styled.div`
    height: 100%;
    @media only screen and (max-width: 450px) {
        height: 100px;
        width: 100%;             
    }
 
`;

export const ProductTitle = styled.div`
    max-width: 100px;
    @media only screen and (max-width: 450px) {  
        margin-top: 5px;
        text-align: center;
        max-width: 300px ;
        width: 300px;             
    }
`;

export const ProductButton = styled.button`
    width: 30px;
    padding: 2px;
`;
export const ProductButtonLabel = styled.label`
    position: relative;
    font-size: 14px;
`;

export const QtdBox = styled.div`
    position: relative;
    top: -2px;
    font-size: 10px;
`;

export const RemoveButton = styled.button`
    position: absolute;
    top: -5px;
    right: -5px;
    height: 20px;
    width: 20px;
    background-color: black;
    color: white;
    border-radius: 50%;
    font-size: 10px;

    @media only screen and (max-width: 450px) {
        top:5px;
        right: 15px;
        font-size: 30px;
        background-color: white;
        color: black;
        font-weight: 500;
    }
`;

export const PriceBox = styled.div`  
    font-weight: bold;
    @media only screen and (max-width: 450px) {
        background-color: #333;
        color: white;
        padding: 5px;
        border-radius: 5px;
        padding: 5px;
    }
`;

