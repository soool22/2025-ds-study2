import React from 'react';
import ProductDetailR from '../layouts/ProductDetailR';
import ProductDetailL from '../layouts/ProductDetailL';
import { ProductDetailContainer } from '../../style/ProductDetailStyled';

const ProductDetail: React.FC = () => {
    return (
        <ProductDetailContainer>
            <ProductDetailL />
            <ProductDetailR />
        </ProductDetailContainer>
    );
};

export default ProductDetail;