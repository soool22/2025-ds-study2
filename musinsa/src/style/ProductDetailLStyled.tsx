// src/style/ProductDetailLStyled.tsx

import styled from 'styled-components';

type StickyProps = {
    $top?: number;
};
export const DetailMain = styled.div<StickyProps>`
    position: sticky;
    top: ${({ $top = 56 }) => `${$top}px`};
    width: 974px; /* 974px 고정 너비 */
    height: calc(100vh - ${({ $top = 56 }) => `${$top}px`} - 16px);
    overflow-y: auto;
    padding-right: 16px; /* 우측 섹션과의 간격 */
    box-sizing: border-box;
    z-index: 10;

    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;

    // 732px 이하 화면에 대한 반응형 스타일
    @media (max-width: 732px) {
        position: static;
        top: auto;
        width: 100%;
        height: auto;
        padding: 0 16px;
    }
`;

// 이미지 갤러리 레이아웃
export const DetailGallery = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    margin-bottom: 24px;
`;

// 썸네일 리스트
export const ThumbnailList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80px;
`;

// 개별 썸네일 아이템
export const ThumbnailItem = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid #ccc;
    cursor: pointer;
    &:first-child {
        margin-top: 10px;
    }
    &.active {
        border-color: #000;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

// 메인 이미지 컨테이너
export const MainImageContainer = styled.div`
    position: relative;
    flex-grow: 1;
    max-width: 864px;
    height: auto;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

// 이미지 넘기기 화살표 버튼
export const ArrowButton = styled.button<{ $direction: 'left' | 'right' }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    
    ${({ $direction }) => ($direction === 'left' ? 'left: 16px;' : 'right: 16px;')}

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    svg {
        width: 1.5em;
        height: 1.5em;
        stroke: #000;
        stroke-width: 1.5;
    }
`;

// AI 추천 상품 버튼
export const AiRecommendationButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0px 7px;
    height: 24px;
    border: none;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    color: rgb(255, 255, 255);
    cursor: pointer;
    position: absolute;
    left: 2px;
    bottom: 2px;
    z-index: 2;

    .thumbnail-images {
        display: flex;
        img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 1px solid #eee;
            margin-left: -8px;
            &:first-child {
                margin-left: 0;
            }
        }
    }
    
    span {
        font-size: 10px;
        color: #fff;
        margin-left: 8px;
    }
    
    svg {
        width: 16px;
        height: 16px;
        margin-left: 4px;
        stroke: #fff;
    }
`;

// 인디케이터
export const Indicator = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0px 7px;
    height: 24px;
    background-color: rgba(0, 0, 0, 0.2);
    color: rgb(255, 255, 255);
    border-radius: 4px;
    position: absolute;
    bottom: 2px;
    left: 94%;
    transform: translateX(-50%);
    gap: 4px;
    z-index: 2;

    span {
        font-size: 13px;
    }
`;

// 확대 버튼
export const ZoomButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 2px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 2;

    svg {
        width: 20px;
        height: 20px;
        path {
            fill: white;
        }
    }
`;

// 탭 메뉴
export const InfoTabs = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 20;
    width: 100%;
    border: 1px solid #e0e0e0;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;

    div {
        display: flex;
        width: 100%;
    }
`;

// 개별 탭 버튼
export const TabButton = styled.button<{ active: boolean }>`
    flex: 1;
    height: 40px;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    font-family: inherit;
    border-left: 1px solid #e0e0e0;

    span {
        font-size: 14px;
        font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
        color: ${({ active }) => (active ? '#000' : '#888')};
    }
    
    span > span {
      font-size: 11px;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ active }) => (active ? '#000' : 'transparent')};
    }
`;

// === 탭 콘텐츠 공통 영역 ===
export const TabContentSection = styled.div`
    padding: 0 4px;
`;

// === 상품 상세 정보 섹션 (Info Tab) ===
export const ProductInfoWrapper = styled.div`
    padding: 16px 0;
`;

export const InfoList = styled.dl`
    margin: 0;
`;

export const InfoItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
`;

export const InfoTitle = styled.dt`
    font-size: 12px;
    font-weight: normal;
    color: #666;
    width: 100px;
`;

export const InfoValue = styled.dd`
    font-size: 12px;
    font-weight: normal;
    color: #666;
    text-align: left;
    flex-grow: 1;
`;

// 상세 이미지를 포함하는 컨테이너. '더보기' 버튼을 누르기 전에는 내용이 제한됩니다.
export const DetailContent = styled.div<{ $isExpanded: boolean }>`
    padding-top: 12px;
    height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '908px')};
    overflow: hidden;

    div {
        img {
            display: block;
            width: 100%;
            height: auto;
            margin-bottom: 8px;
        }
    }
`;

// 상품 정보 더보기 버튼 영역
export const MoreInfoFooter = styled.div`
    padding-top: 24px;
    padding-bottom: 24px;
`;

// 상품 정보 더보기 버튼
export const MoreInfoButton = styled.button<{ $isExpanded: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    padding: 9px 16px; 
    border: 1px solid rgb(0, 0, 0);
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    color: #000;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    ${({ $isExpanded }) => $isExpanded && `
        border: 1px solid #e0e0e0;
        background-color: #f9f9f9;
        color: #888;
    `}

    span {
        font-weight: 500;
        color: ${({ $isExpanded }) => ($isExpanded ? '#888' : '#000')};
    }

    svg {
        width: 20px;
        height: 20px;
        stroke: ${({ $isExpanded }) => ($isExpanded ? '#888' : '#000')};
        margin-left: 4px;
        transform: rotate(${({ $isExpanded }) => ($isExpanded ? '180deg' : '0deg')});
        transition: transform 0.3s;
    }
`;

// 신고/문제 알림 섹션
export const ReportSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    
    span {
        font-size: 12px;
        color: #666;
    }
    
    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        
        span {
            font-size: 12px;
            color: #666;
            text-decoration: underline;
        }
    }
`;

// --- 사이즈 탭 섹션 ---

export const SizeTabContainer = styled.div`
    padding: 16px;
`;

export const InfoSection = styled.section`
    padding: 16px;
    background-color: #f9f9f9;
    border-radius: 8px;
`;

export const SectionTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
`;

export const SectionHeader = styled.header`
    p {
        font-size: 14px;
        color: #666;
        line-height: 1.5;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 16px;
`;

export const InputGroup = styled.div`
    position: relative;
    flex: 1;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 8px 30px 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
    &::placeholder {
        color: #ccc;
    }
`;

export const Unit = styled.span`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #999;
`;

export const PurchaseInfo = styled.div`
    margin-top: 16px;
`;

export const PurchaseBar = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const BarLabel = styled.span`
    font-weight: 600;
    min-width: 20px;
`;

export const PurchaseBarFill = styled.div`
    flex: 1;
    height: 8px;
    background-color: #245eff;
    border-radius: 4px;
`;

export const PurchasePercentage = styled.span`
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
`;

export const Note = styled.p`
    font-size: 12px;
    color: #888;
    margin-top: 8px;
`;

export const TabButtonWrapper = styled.div`
    display: flex;
    gap: 1px;
    margin: 24px 0;
`;

export const SizeTabButton = styled.button`
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    
    background-color: #f9f9f9;
    color: #888;
    font-weight: 400;
    cursor: pointer;

    &.selected {
        background-color: #fff;
        color: #000;
        font-weight: 600;
        border: 1px solid #000;
    }
`;

export const SizeImageSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`;

export const SizeImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
`;

export const SizeImageNote = styled.div`
    margin-top: 12px;
    text-align: center;
    p {
        display: inline-block; /* Change display to inline-block to make them sit on the same line */
        font-size: 13px;
        color: #888;
        line-height: 1.3;
        margin: 0 4px; /* Add some space between the text elements */
    }
`;

export const SizeTableWrapper = styled.div`
    margin-top: 24px;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
`;

export const TableHeaderCell = styled.th`
    background-color: #fff;
    border: 1px solid #eee;
    padding: 8px;
    font-size: 13px;
    font-weight: 400;
    color: #444;
    
    &.selected {
        background-color: rgba(36, 94, 255, 0.1);
        font-weight: 500;
        color: #444;
    }
`;

export const TableCell = styled.td`
    background-color: #fff;
    border: 1px solid #eee;
    padding: 8px;
    font-size: 13px;
    color: #444;

    &.selected {
        background-color: rgba(36, 94, 255, 0.1);
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 16px;
`;

export const StyledButton = styled.button`
    flex: 1;
    height: 40px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
`;

export const HorizontalLine = styled.hr`
    border: none;
    height: 1px;
    background-color: #fff;
    margin: 24px 0;
`;

export const FitSection = styled.section`
    padding: 16px 0;
`;

export const FitTableWrapper = styled.div`
    margin-top: 16px;
`;
export const SizeChartContainer = styled.div`
    padding: 16px 0;
`;

export const SizeCategoryTabs = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    border-bottom: 1px solid #ddd;
    gap: 8px;
    padding-bottom: 8px;
`;

export const SizeCategoryButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    padding: 0 12px;
    border: 1px solid #e6e8eb;
    border-radius: 4px;
    background-color: #f5f6f7;
    font-size: 13px;
    font-weight: 400;
    color: #555;
    cursor: pointer;
    white-space: nowrap;

    &.selected {
        border-color: #000;
        background-color: #fff;
        font-weight: 600;
        color: #000;
    }
`;

export const SizeChartTableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 16px;

    table {
        width: 100%;
        min-width: 600px;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #eee;
        padding: 10px;
        font-size: 13px;
        text-align: center;
        white-space: nowrap;
    }
    th {
        background-color: #f8f9fa;
        font-weight: 600;
    }
`;
export const SizeChartNoteSection = styled.div`
    padding: 20px 0;
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 13px;
        color: #666;
    }

    li {
        line-height: 1.6;
        margin-bottom: 4px;
        &::before {
            content: '•';
            margin-right: 8px;
        }
    }
`;
export const SizeCategoryUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 13px;
    font-weight: 500;
    color: #444;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
`;

export const SizeCategoryLi = styled.li`
    padding: 8px;
    border-right: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    
    // 각 li의 너비를 비율에 맞게 조정
    &:first-child {
        width: 12.5%;
    }
    &:nth-child(2) {
        width: 12.5%;
    }
    &:nth-child(3) {
        width: 12.5%;
    }
    &:nth-child(4) {
        width: 12.5%;
    }
    &:nth-child(5) {
        width: 12.5%;
    }
    &:nth-child(6) {
        width: 12.5%;
    }
    &:nth-child(7) {
        width: 12.5%;
    }
`;