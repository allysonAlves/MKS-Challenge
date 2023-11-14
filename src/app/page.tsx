'use client';
import CartProvider from '../Context/CartProvider';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';

import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main data-testid='main-container' className='bg-white'>
      <div className='flex flex-col h-screen w-screen overflow-y-auto'>
        <QueryClientProvider client={queryClient}>
          <CartProvider>         
            <Header/>
            <Products/> 
            <Cart anchor='right'/>       
            <Footer/>                 
          </CartProvider>
        </QueryClientProvider>
      </div>
    </main>
  )
}
