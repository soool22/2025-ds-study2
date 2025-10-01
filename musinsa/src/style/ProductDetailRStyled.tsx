import styled from 'styled-components';

type StickyProps = {
    $top?: number;
    $width?: number;
};

/** 1440 중앙정렬 캔버스 우측 고정 */
export const StickyPurchase = styled.aside<StickyProps>`
  position: fixed;
  top: ${({ $top = 56 }) => `${$top}px`};
  right: max(16px, calc((100vw - 1440px) / 2));
  width: ${({ $width = 426 }) => `clamp(268px, calc(100vw - 32px), ${$width}px)`};
  max-width: 434px;
  z-index: 10;

  /* 패널 자체에 스크롤 적용 */
  height: calc(100vh - ${({ $top = 56 }) => `${$top}px`} - 16px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome, Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
`;
export const PurchaseBlock = styled.div`
    background: #fff;
    border: 1px solid #eaecef;
    padding: 16px;
    box-sizing: border-box;
    display: grid;
    gap: 14px;
`;

export const SectionGroup = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Row = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;

    &.price-row {
        gap: 10px;
        .orig { color: #999; text-decoration: line-through; }
    }
    &.price-row.strong {
        .rate { color: #d32f2f; font-weight: 700; }
        .sale { font-weight: 800; font-size: 20px; }
    }
    &.category { color: #777; font-size: 12px; }
`;

export const BrandLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;

    .brand-logo {
        width: 30.4px;
        height: 30.4px;
        border: 0.8px solid rgba(0, 0, 0, 0.08);
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #fff;

        img {
            max-width: 75%;
            max-height: 75%;
            object-fit: contain;
            display: block;
        }
    }

    .brand-text {
        font-weight: 800;
        font-size: 14px;
        color: #111;
    }

    .label {
        display: inline-block;
        font-size: 11px;
        line-height: 1;
        color: #555;
        padding: 2px 4px;
        border-radius: 2px;
        background: #f0f2f4;
        border: 1px solid #eceff3;

    }

    &:hover .brand-text {
        text-decoration: underline;
    }
`;

export const TitleLink = styled.a`
    font-size: 18px;
    font-weight: 800;
    line-height: 1.3;
    color: #111;
    text-decoration: none;
    text-align: left;

    &:hover {
        text-decoration: underline;
    }
`;

export const BadgeList = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 3px;

    .badge {
        padding: 1px 4px;
        border-radius: 2px;
        font-size: 11px;
        line-height: 1;
        border: 1px solid #eceff3;
        background: #f5f6f7;
        width: auto;
        height: 14px;
    }
    .badge.yellow { background: #FFCA1A; border-color: #ffe7a3; color: #fff; }
    .badge.gray { background: #f0f2f4; }
`;

export const HeartButton = styled.button`
    appearance: none;
    box-sizing: border-box;
    border: 0.8px solid #e6e8eb;
    background: #fff;
    height: 22.4px;
    padding: 0 6.4px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    line-height: 1;
    cursor: pointer;

    svg { width: 16px; height: 16px; display: block; flex: 0 0 auto; }
    &:hover { border-color: #ccc; }
    &:active { transform: translateY(0.5px); }
`;

export const HeartCount = styled.span`
    font-size: 13px;
    color: #000;
    line-height: 18px;
    font-weight: bold;
`;

export const GhostBox = styled.div<{ isSelected?: boolean }>`
    width: 46.4px;
    height: 56.4px;
    background-color: #eceff3;
    border-radius: 4px;
    transition: border 0.3s;

    ${({ isSelected }) => isSelected && `border: 1px solid rgb(0, 0, 0);`}

    &:hover {
        cursor: pointer;
        border: 1px solid rgb(0, 0, 0);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const ButtonRow = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr 1fr;
    gap: 8px;

    button {
        height: 44px;
        font-weight: 700;
        cursor: pointer;
        background: #fff;
    }

    .ghost { 
        background: #fff;
        border: 1px solid #e6e8eb;
        border-radius: 12px;
    }

    .primary {
        background: #111;
        color: #fff;
        border-color: #111;
        border: 1px solid #e6e8eb;
        border-radius: 12px;
    }
`;

// HeartButton에 대한 스타일을 별도로 분리했습니다.
export const HeartButton1 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: none; /* 하트 버튼에만 테두리 제거 */
    background: none;
    padding: 0;
    cursor: pointer;

    svg {
        width: 24px;
        height: 24px;
    }
`;


export const Row1 = styled.div`
    display: flex;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
`;

export const GhostBox1 = styled.div<{ isSelected?: boolean }>`
    width: 46.4px;
    height: 56.4px;
    background-color: #eceff3;
    border-radius: 4px;
    transition: border 0.3s;
    
    ${({ isSelected }) => isSelected && `border: 1px solid rgb(0,0,0);`}
    
    /* hover 시 테두리 제거 */
    &:hover {
        border: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const ThumbnailLink = styled.a`
    display: block;
    width: 46.4px;
    height: 56.4px;
    text-decoration: none;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;

// 첫 구매 쿠폰 안내 버튼 스타일
export const FirstBuyBanner = styled.a`
    width: 394px;
    height: 42px;
    padding: 12px;
    background-color: rgb(245, 245, 245);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;

    /* hover 시 테두리 제거 */
    &:hover {
        border: none;
        background-color: rgb(245, 245, 245);
    }

    .text-blue {
        color: rgb(36, 94, 255);
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;          
    }

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        width: 16px;
        height: 16px;
    }
    button svg {
        width: 100%;
        height: 100%;
        display: block; /* inline-block 문제 제거 */
    }
`;

export const PointSectionContainer = styled.div`
    border: 1px solid #e6e8eb;
    border-radius: 4px;
    overflow: hidden;
`;

export const PointHeader = styled.div`
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    font-size: 15px;
    font-weight: bold;
    text-align:left;
`;

export const PointDetail = styled.div`
    background-color: #f5f5f5;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #555;
`;

// Sizes 컴포넌트 스타일
export const SizeContainer = styled.div`
    position: relative;
    border: 1px solid #e6e8eb;
    border-radius: 4px;
    overflow: hidden;
`;

export const SizeToggle = styled.button`
    width: 100%;
    height: 52px;
    background: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    cursor: pointer;
    
    span {
        font-size: 14px;
        font-weight: 600;
    }

    svg {
        transform: rotate(0deg);
        transition: transform 0.3s ease;
    }

    &.open svg {
        transform: rotate(180deg);
    }
`;

export const SizeList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #e6e8eb;
    
    li {
        padding: 12px 16px;
        border-bottom: 1px solid #e6e8eb;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        
        &:last-child {
            border-bottom: none;
        }
        
        &.selected {
            background-color: #f5f5f5;
        }
    }

    .size-option {
        font-size: 14px;
        font-weight: 500;
        color: #111;
        display: flex;
        align-items: center;
        
        span {
            margin-left: 8px;
            font-size: 13px;
            color: #777;
        }
    }
    .release-date {
        font-size: 13px;
        color: #777;
    }
`;

export const SelectedSizeBox = styled.div`
    padding: 16px;
    background: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    margin-top: 10px;
    
    .selected-size-info {
        display: flex;
        flex-direction: column;
        
        .size-name {
            font-size: 14px;
            font-weight: bold;
        }
        
        .size-date {
            font-size: 12px;
            color: #777;
            margin-top: 4px;
        }
    }
    
    .price-info {
        font-weight: bold;
        white-space: nowrap;
    }
    
    .remove-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin-left: 8px;
        svg {
            width: 16px;
            height: 16px;
        }
    }
`;

export const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    
    button {
        width: 28px;
        height: 28px;
        background: #fff;
        border: 1px solid #e6e8eb;
        border-radius: 4px;
        cursor: pointer;
        font-size: 20px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    span {
        font-size: 14px;
        font-weight: 500;
    }
`;

// PaymentBenefit 컴포넌트 스타일
export const PaymentBenefitContainer = styled.div`
    border-top: 1px solid #e6e8eb;
    padding-top: 16px;
`;

export const PaymentBenefitHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    span {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: #777;
        font-size: 13px;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const BenefitList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: hidden;
    
    li {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 13px;
    }

    img {
        width: 20px;
        height: 20px;
    }

    .benefit-info {
        display: flex;
        flex-direction: column;
        
        .main-text {
            font-size: 13px;
            font-weight: 500;
            color: #111;
            text-align: left;
            
            .first-purchase-label {
                background-color: rgba(59, 130, 246, .2);
                color: #245eff;
                font-size: 11px;
                padding: 1px 2px;
                border-radius: 2px;
                display: inline-block;  
                text-align: left; 
            }
        }
        
        .sub-text {
            font-size: 12px;
            color: #777;
        }
    }
`;


export const ShowMoreButton = styled.button`
    width: 100%;
    background: none;
    border: none;
    padding: 12px 0;
    margin-top: 8px;
    cursor: pointer;
    font-size: 13px;
    color: #555;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    
    svg {
        transform: rotate(0deg);
        transition: transform 0.3s ease;
    }

    &.open svg {
        transform: rotate(180deg);
    }
`;