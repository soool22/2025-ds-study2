// src/style/ProductDetailStyled.tsx
import styled from 'styled-components';

// StickyPurchase: 우측 고정 패널
type StickyProps = {
  $top?: number;
  $width?: number;
};

export const StickyPurchase = styled.aside<StickyProps>`
  position: fixed;
  top: ${({ $top = 56 }) => `${$top}px`};
  right: max(16px, calc((100vw - 1440px) / 2));
  width: ${({ $width = 426 }) => `clamp(268px, calc(100vw - 32px), ${$width}px)`};
  max-width: 434px;
  z-index: 10;
`;

// PurchaseBlock: 패널 안 전체 박스
export const PurchaseBlock = styled.div`
  background: #fff;
  border: 1px solid #eaecef;
  padding: 16px;
  display: grid;
  gap: 14px;
`;

// SectionGroup: 섹션별 그룹
export const SectionGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// Row: 가로 배치
export const Row = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: space-between;
`;

// GhostBox: 썸네일, 미리보기 박스 등
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

// ThumbnailLink: 썸네일 클릭용 링크
export const ThumbnailLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

// BadgeList: 배지 목록
export const BadgeList = styled.div`
  display: inline-flex;
  gap: 3px;

  .badge {
    padding: 1px 4px;
    font-size: 11px;
    border-radius: 2px;
    background: #f5f6f7;
    border: 1px solid #eceff3;
    color: #111;
  }

  .badge.yellow { background: #FFCA1A; border-color: #ffe7a3; color: #fff; }
  .badge.gray   { background: #f0f2f4; }
`;

// ButtonRow: 버튼 배치
export const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
