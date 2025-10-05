import React from 'react';
import ProductDetailR from '../layouts/ProductDetailR';
import ProductDetailL from '../layouts/ProductDetailL';
import { ProductDetailContainer } from '../../style/ProductDetailStyled';
import Footer from '../layouts/Footer';

const ProductDetail: React.FC = () => {
    return (
        <>
        <ProductDetailContainer>
            <ProductDetailL />
            <ProductDetailR />
        </ProductDetailContainer>
        <Footer/>
        </>
    );
};

export default ProductDetail;