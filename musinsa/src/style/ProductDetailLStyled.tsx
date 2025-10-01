import styled from 'styled-components';

type StickyProps = {
    $top?: number;
};

// 왼쪽 섹션 고정 및 레이아웃 정의 (Sticky)
export const DetailMain = styled.div<StickyProps>`
    position: fixed;
    top: ${({ $top = 56 }) => `${$top}px`};
    left: max(16px, calc((100vw - 1440px) / 2));
    width: 974px; /* 974px 고정 너비 */
    height: calc(100vh - ${({ $top = 56 }) => `${$top}px`} - 16px);
    overflow-y: auto;
    padding: 16px;
    box-sizing: border-box;
    z-index: 10;
    border: 1px solid #ccc;
    
    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
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
    /* 초기 높이 제한 및 overflow 숨기기 */
    height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '908px')};
    overflow: hidden;

    div {
        /* 이미지 컨테이너 */
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
    /* 요청하신 스타일 반영 */
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

    /* 확장 여부에 따라 버튼 스타일 변경 */
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
