import { render, fireEvent , screen} from '@testing-library/react';
import Footer from '../components/Footer';


describe('Cart component', () => {
  it('test cart empty ', () => {
    render( <Footer/> );
    
    expect(screen.getByText('MKS Sistemas © Todos os direitos reservados')).toBeInTheDocument();  
  });
});