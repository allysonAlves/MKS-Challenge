import { render, fireEvent , screen} from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import  CartProvider  from '../Context/CartProvider';

const productMock = {
    id: 1,
    name: "Product Name",
    brand: "Product Brand",
    description: "Product Description",
    photo: "product.jpg",
    price: "29",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T12:34:56Z",
  };

describe('Product component', () => {
  it('test cart empty ', () => {
    render( 
        <CartProvider>
            <ProductCard {...productMock}/> 
        </CartProvider>
    );
    
    expect(screen.getByText('Product Name')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('button-add-cart')).toBeInTheDocument();
   
    fireEvent.click(screen.getByTestId('button-add-cart'));
    
  });
});