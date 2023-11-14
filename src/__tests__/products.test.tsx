import { render, fireEvent , screen} from '@testing-library/react';
import Products from '../components/Products';

import {
    QueryClient,
    QueryClientProvider
  } from 'react-query';
  
  const queryClient = new QueryClient();

describe('Cart component', () => {
  it('test cart empty ', () => {
    render( 
        <QueryClientProvider client={queryClient}>
            <Products/> 
        </QueryClientProvider>
    );
    
    expect(screen.getByTestId('product-container')).toBeInTheDocument();  
  });
});