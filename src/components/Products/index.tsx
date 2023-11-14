import React from 'react';
import ProductContainer from './styles';
import { ApiProduct } from '@/@types/interfaces';
import ProductCard from '../ProductCard';
import ProductSkeleton from '../ProductSkeleton';

import { useQuery } from 'react-query';
import { apiProductsUrl } from '../../services/apiService';

interface QueryType {  
  products: ApiProduct[];
}

const Index = () => {
    const { isLoading, error, data } = useQuery<QueryType>({       
        queryFn: () =>
            fetch(apiProductsUrl || '').then((res) => res.json()),
    });

    if (isLoading) {
        return (
          <ProductContainer data-testid='product-container'>
            {Array.from({ length: 8 }).map((_, index) => (
                <ProductSkeleton key={index} />
            ))}
          </ProductContainer>
        )
    }

    if (error) {
        return (
          <ProductContainer data-testid='product-container'>
            <p className='text-black'>falha ao carregar produtos</p>
          </ProductContainer>
        )
    }

    return (
        <ProductContainer data-testid='product-container'>
          {data?.products.map((product) => (
              <ProductCard key={product.id} {...product} />
          ))}           
        </ProductContainer>
    );
};

export default Index;
