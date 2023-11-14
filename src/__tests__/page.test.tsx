import { render, fireEvent , screen} from '@testing-library/react';
import Page from '../app/page';


describe('Cart component', () => {
  it('test cart empty ', () => {
    render( <Page/> );
    
    expect(screen.getByTestId('main-container')).toBeInTheDocument();  
  });
});