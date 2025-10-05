import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import leftIcon from "../../img/leftIcon.svg";
import rightIcon from "../../img/rightIcon.svg";

export const Wrap = styled.div`
  width: 100%;
  height: 420px;
  position: relative;
  overflow: hidden;
`;

export const BannerBox = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  align-items: center;
`;

export const Viewport = styled.div<{ translatePct: number; isTransitioning: boolean }>`
  height: 100%;
  display: flex;
  transition: ${(props) => (props.isTransitioning ? "transform 0.5s ease-in-out" : "none")};
  transform: translateX(${(props) => -props.translatePct}%);
`;

export const Item = styled.div`
  height: 420px;
  flex-shrink: 0;
  position: relative;
  background-color: lightgray;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const BannerTextBox = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 2;
`;

export const BannerText = styled.div`
  width: 145px;
  font-size: 20px;
  color: #f0f0f0;
  font-weight: 600;
  line-height: 28px;
  overflow: hidden;
  white-space: pre-line;
  overflow-wrap: break-word;
  margin: 0;
`;

export const BannerText2 = styled.div`
  font-size: 13px;
  margin-top: 8px;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  white-space: pre-line;
  overflow-wrap: break-word;
  color: #f0f0f0;
`;

const Arrow = styled.button<{ right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(p) => (p.right ? "right: 8px;" : "left: 8px;")}
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  img {
    width: 36px;
    height: 36px;
  }
`;

type BannerItem = { img: string; text?: string; text2?: string };

interface Props {
  banners: BannerItem[];
  intervalMs?: number;
}

export default function BannerSlider({ banners, intervalMs = 3000 }: Props) {
  const [pageIndex, setPageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const timerRef = useRef<number | null>(null);

  const itemsPerView = 3;
  const totalItems = banners.length;
  const numPages = Math.ceil(totalItems / itemsPerView);

  const extendedBanners = [...banners.slice(-itemsPerView), ...banners, ...banners.slice(0, itemsPerView)];

  const goNext = () => {
    setPageIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const goPrev = () => {
    setPageIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (isHover) return;
    timerRef.current = window.setInterval(goNext, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [intervalMs, isHover]);

  useEffect(() => {
    if (!isTransitioning) return;
    const handleTransitionEnd = () => {
      if (pageIndex === numPages + 1) {
        setIsTransitioning(false);
        setPageIndex(1);
      } else if (pageIndex === 0) {
        setIsTransitioning(false);
        setPageIndex(numPages);
      }
    };
    const timer = setTimeout(handleTransitionEnd, 500);
    return () => clearTimeout(timer);
  }, [pageIndex, numPages, isTransitioning]);

  const itemWidth = 100 / itemsPerView;
  const translatePct = pageIndex * 100;

  return (
    <Wrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
    >
        {isHover && (
        <>
            <Arrow onClick={goPrev}>
            <img src={leftIcon} alt="왼쪽 화살표" />
            </Arrow>
            <Arrow right onClick={goNext}>
            <img src={rightIcon} alt="오른쪽 화살표" />
            </Arrow>
        </>
        )}

        <Viewport translatePct={translatePct} isTransitioning={isTransitioning}>
        {extendedBanners.map((b, i) => (
            <Item key={i} style={{ width: `${itemWidth}%` }}>
            <Img src={b.img} alt={b.text || `banner-${i}`} />
            <BannerTextBox>
                {b.text && <BannerText>{b.text}</BannerText>}
                {b.text2 && <BannerText2>{b.text2}</BannerText2>}
            </BannerTextBox>
            </Item>
        ))}
        </Viewport>
    </Wrap>
    );

}
