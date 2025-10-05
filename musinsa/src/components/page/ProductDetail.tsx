import React from 'react';
<<<<<<< HEAD
import ProductDetailR from '../layouts/ProductDetailR'; // ProductDetailR.tsx 파일 위치 기준
import ProductDetailL from '../layouts/ProductDetailL'; // ProductDetailR.tsx 파일 위치 기준
=======
import ProductDetailR from '../layouts/ProductDetailR';
import ProductDetailL from '../layouts/ProductDetailL';
import { ProductDetailContainer } from '../../style/ProductDetailStyled';
>>>>>>> 1-styleproductdetail

const ProductDetail: React.FC = () => {
    return (
        <ProductDetailContainer>
            <ProductDetailL />
            <ProductDetailR />
        </ProductDetailContainer>
    );
};

export default ProductDetail;