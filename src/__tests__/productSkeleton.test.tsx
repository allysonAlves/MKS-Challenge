import { render, screen} from '@testing-library/react';
import ProductSkeleton from '../components/ProductSkeleton';

describe('Cart component', () => {
  it('test cart empty ', () => {
    render(      
        <ProductSkeleton />
    );

    expect(screen.getByTestId('skeleton-image')).toBeInTheDocument();
    expect(screen.getByTestId('skeleton-text')).toBeInTheDocument();
    expect(screen.getByTestId('skeleton-rounded')).toBeInTheDocument();
    expect(screen.getByTestId('skeleton-button')).toBeInTheDocument();
   
  });
});