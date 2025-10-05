// src/style/ProductDetailStyled.tsx
import styled from 'styled-components';

// **1. 전체 페이지 레이아웃 컨테이너**
// 이 컨테이너가 1440px 기준으로 전체 내용을 감쌉니다.

export const ProductDetailContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 1440px;
    margin: 0 auto;
    padding: 1px 16px;
    box-sizing: border-box;
    position: relative;
    top: -1px;
    min-height: calc(100vh - 56px);
`;
