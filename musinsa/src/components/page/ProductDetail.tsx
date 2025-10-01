import React from 'react';
import ProductDetailR from './ProductDetailR'; // ProductDetailR.tsx 파일 위치 기준
import ProductDetailL from './ProductDetailL'; // ProductDetailR.tsx 파일 위치 기준

const ProductDetail: React.FC = () => {
    return (
        <div>
            <ProductDetailL />
            <ProductDetailR />
        </div>
    );
};

export default ProductDetail;
