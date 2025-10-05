import React, { useState, useMemo } from 'react';
import {
    StickyPurchase,
    PurchaseBlock,
    SectionGroup,
    Row,
    Row1,
    ThumbnailLink,
    GhostBox1,
    TitleLink,
    BadgeList,
    ButtonRow,
    GhostBox,
    BrandLink,
    HeartButton,
    HeartButton1,
    HeartCount,
    FirstBuyBanner,
    SizeContainer,
    SizeToggle,
    SizeList,
    SelectedSizeBox,
    QuantityControl,
    PaymentBenefitContainer,
    PaymentBenefitHeader,
    BenefitList,
    ShowMoreButton,
    PointSectionContainer,
    PointHeader,
    PointDetail,
} from '../../style/ProductDetailRStyled';

const BRAND_URL = 'https://www.musinsa.com/brand/trillion?gf=A';
const BRAND_LOGO_SRC =
    '//image.musinsa.com/mfile_s01/_brand/free_medium/trillion.png?20210702123042';

const PAYMENT_BENEFITS = [
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-hyundai.png',
        title: '무신사페이 × 무신사현대카드',
        discount: '1만 1천원 이상 결제 시 1만원 할인',
        label: '첫구매전용',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-hyundai.png',
        title: '무신사페이 × 무신사현대카드',
        discount: '10만원 이상 결제 시 1만원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-toss.png',
        title: '토스페이 × 계좌',
        discount: '12만원 이상 결제 시 6천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-toss.png',
        title: '토스페이 × 삼성카드',
        discount: '15만원 이상 결제 시 6천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-kakaopay.png',
        title: '카카오페이 × 페이머니',
        discount: '10만원 이상 결제 시 5천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-samsung.png',
        title: '무신사페이 × 삼성카드',
        discount: '12만원 이상 결제 시 5천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-shinhan.png',
        title: '무신사페이 × 신한카드',
        discount: '10만원 이상 결제 시 4천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-kbpay.png',
        title: 'KB Pay',
        discount: '12만원 이상 결제 시 4천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-toss.png',
        title: '토스페이 × 토스뱅크카드',
        discount: '6만원 이상 결제 시 3천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-bc.png',
        title: '무신사페이 × BC카드',
        discount: '7만원 이상 결제 시 3천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-hana.png',
        title: '무신사페이 × 하나카드',
        discount: '8만원 이상 결제 시 3천원 할인',
    },
    {
        icon: 'https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-payco.png?20250509',
        title: '페이코',
        discount: '5만원 이상 결제 시 2천원 할인',
    },
];

const SIZES = [
    { name: 'M', date: '10.16(목) 이내 출고 예정' },
    { name: 'L', date: '10.16(목) 이내 출고 예정' },
    { name: 'XL', date: '10.16(목) 이내 출고 예정' },
];

const ProductStickyPanel: React.FC = () => {
    const [liked, setLiked] = useState(false);
    const [baseCount] = useState(240000); // 이미지에 맞춰 240000으로 되돌림
    const displayCount = useMemo(() => {
        const c = baseCount + (liked ? 1 : 0);
        return c >= 10000 ? `${Math.floor(c / 10000)}만` : c.toLocaleString();
    }, [baseCount, liked]);

    const [selectedThumbnail, setSelectedThumbnail] = useState<number>(1);
    const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState<{ name: string; date: string } | null>(null);
    const [showAllBenefits, setShowAllBenefits] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleSizeSelect = (size: { name: string; date: string }) => {
        setSelectedSize(size);
        setIsSizeDropdownOpen(false);
    };

    const handleRemoveSize = () => {
        setSelectedSize(null);
        setIsSizeDropdownOpen(false); // 선택 박스를 제거하면 드롭다운도 닫힘
    };

    const handleToggleBenefits = () => {
        setShowAllBenefits(!showAllBenefits);
    };

    const handleDecreaseQuantity = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const handleIncreaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    // 가격은 고정된 45,990원으로 설정
    const price = 45990;
    const totalPrice = price * quantity;

    return (
        <StickyPurchase $top={56} $width={426}>
            <PurchaseBlock>
                {/* 브랜드/타이틀 */}
                <SectionGroup aria-label="브랜드 및 타이틀">
                    <Row style={{ gap: 8, justifyContent: 'space-between' }}>
                        <BrandLink href={BRAND_URL}>
                            <span className="brand-logo">
                                <img src={BRAND_LOGO_SRC} alt="트릴리온 브랜드 로고" />
                            </span>
                            <span className="brand-text">트릴리온</span>
                            <span className="label">단독</span>
                        </BrandLink>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <HeartButton
                                type="button"
                                aria-pressed={liked}
                                onClick={() => setLiked(v => !v)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9.79493 16.3061C9.91046 16.4154 10.0895 16.4154 10.2051 16.3061C11.1045 15.4553 14.7235 12.0265 16.25 10.5C16.8895 9.85325 17.5 8.75 17.5 7.5C17.5 5.34156 15.8342 3.5 13.75 3.5C11.9105 3.5 11 4.99545 10 6.25C9 4.99545 8.08947 3.5 6.25 3.5C4.16579 3.5 2.5 5.34156 2.5 7.5C2.5 8.75 3.11053 9.85325 3.75 10.5C5.27651 12.0265 8.89549 15.4553 9.79493 16.3061Z"
                                        strokeWidth={1.4}
                                        strokeMiterlimit={10}
                                        vectorEffect="non-scaling-stroke"
                                        stroke={liked ? '#ff3b30' : '#000'}
                                        fill={liked ? '#ff3b30' : 'none'}
                                    />
                                </svg>
                                <HeartCount>{displayCount}</HeartCount>
                            </HeartButton>
                        </div>
                    </Row>

                    <Row className="category">아우터 &gt; 숏패딩/헤비 아우터 (트릴리온)</Row>
                    <TitleLink>라이트 후디 패딩 자켓_블랙</TitleLink>
                </SectionGroup>

                {/* 배지 */}
                <SectionGroup aria-label="프로모션 배지">
                    <BadgeList>
                        <span className="badge yellow">추석빅세일</span>
                        <span className="badge gray">무신사단독</span>
                    </BadgeList>
                </SectionGroup>

                {/* 썸네일 */}
                <SectionGroup aria-label="미리보기 썸네일">
                    <Row1>
                        {/* 첫 번째 썸네일 */}
                        <ThumbnailLink href="https://www.musinsa.com/products/5438737">
                            <GhostBox
                                isSelected={selectedThumbnail === 1}
                                onClick={() => setSelectedThumbnail(1)}
                            >
                                <img
                                    src="https://image.msscdn.net/thumbnails/images/goods_img/20250910/5438737/5438737_17575616254192_big.jpg?w=96"
                                    alt="썸네일1"
                                />
                            </GhostBox>
                        </ThumbnailLink>

                        {/* 두 번째 썸네일 */}
                        <ThumbnailLink href="https://www.musinsa.com/products/5393366">
                            <GhostBox1
                                isSelected={selectedThumbnail === 2}
                                onClick={() => setSelectedThumbnail(2)}
                            >
                                <img
                                    src="https://image.msscdn.net/thumbnails/images/goods_img/20250902/5393366/5393366_17575615350914_big.jpg?w=96"
                                    alt="썸네일2"
                                />
                            </GhostBox1>
                        </ThumbnailLink>

                        {/* 세 번째 썸네일 */}
                        <ThumbnailLink href="https://www.musinsa.com/products/5438735">
                            <GhostBox1
                                isSelected={selectedThumbnail === 3}
                                onClick={() => setSelectedThumbnail(3)}
                            >
                                <img
                                    src="https://image.msscdn.net/thumbnails/images/goods_img/20250910/5438735/5438735_17575615961166_big.jpg?w=96"
                                    alt="썸네일3"
                                />
                            </GhostBox1>
                        </ThumbnailLink>
                    </Row1>
                </SectionGroup>

                {/* 가격 */}
                <SectionGroup aria-label="가격 정보">
                    <Row className="price-row"><span className="orig">73,000원</span></Row>
                    <Row className="price-row strong"><span className="rate">26%</span><span className="sale">54,290원</span></Row>
                </SectionGroup>

                {/* 첫 구매 쿠폰 배너 */}
                <SectionGroup aria-label="첫 구매 쿠폰">
                    <FirstBuyBanner
                        href="https://www.musinsa.com/onboarding/firstbuy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-blue">첫 구매 20% 쿠폰 받으러 가기</span>
                        <button>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                strokeWidth={1}
                            >
                                <path
                                    d="M7.5 16L13.2879 10.2121C13.405 10.095 13.405 9.90503 13.2879 9.78787L7.5 4"
                                    className="stroke-blue"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </button>
                    </FirstBuyBanner>
                </SectionGroup>

                {/* 적립금 섹션*/}
                <PointSectionContainer>
                    <PointHeader>
                        2,500원 최대적립
                    </PointHeader>
                    <PointDetail>
                        <span>· 후기 적립</span>
                        <span>2,500원</span>
                    </PointDetail>
                </PointSectionContainer>

                {/* 사이즈 선택 드롭다운 */}
                <SizeContainer>
                    <SizeToggle
                        className={isSizeDropdownOpen ? 'open' : ''}
                        onClick={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)}
                    >
                        <span>{selectedSize ? '사이즈' : '사이즈'}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M15 7.5L10.2121 12.2879C10.095 12.405 9.90503 12.405 9.78787 12.2879L5 7.5"
                                stroke="#111"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </SizeToggle>
                    {isSizeDropdownOpen && (
                        <SizeList>
                            {SIZES.map((size) => (
                                <li
                                    key={size.name}
                                    onClick={() => handleSizeSelect(size)}
                                >
                                    <span className="size-option">{size.name}</span>
                                    <span className="release-date">{size.date}</span>
                                </li>
                            ))}
                        </SizeList>
                    )}
                </SizeContainer>

                {selectedSize && (
                    <SelectedSizeBox>
                        <div className="selected-size-info">
                            <span className="size-name">{selectedSize.name}</span>
                            <span className="size-date">{selectedSize.date}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <QuantityControl>
                                <button onClick={handleDecreaseQuantity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncreaseQuantity}>+</button>
                            </QuantityControl>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '12px' }}>{totalPrice.toLocaleString()}원</span>
                            <button className="remove-button" onClick={handleRemoveSize}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 5L15 15M5 15L15 5" stroke="#999" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </button>
                        </div>
                    </SelectedSizeBox>
                )}

                {selectedSize && (
                    <SectionGroup>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', fontSize: '16px' }}>
                            <span>총 {quantity}개</span>
                            <span>{totalPrice.toLocaleString()}원</span>
                        </div>
                    </SectionGroup>
                )}


                {/* 버튼 */}
                <SectionGroup aria-label="액션 버튼">
                    <ButtonRow>
                        <HeartButton1
                            type="button"
                            aria-pressed={liked}
                            onClick={() => setLiked(v => !v)}
                            style={{
                                height: '44px',
                                width: '44px',
                                borderRadius: '12px',
                                border: '1px solid #e6e8eb',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 0
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 20 20"
                                fill={liked ? '#ff3b30' : 'none'}
                            >
                                <path
                                    d="M9.79493 16.3061C9.91046 16.4154 10.0895 16.4154 10.2051 16.3061C11.1045 15.4553 14.7235 12.0265 16.25 10.5C16.8895 9.85325 17.5 8.75 17.5 7.5C17.5 5.34156 15.8342 3.5 13.75 3.5C11.9105 3.5 11 4.99545 10 6.25C9 4.99545 8.08947 3.5 6.25 3.5C4.16579 3.5 2.5 5.34156 2.5 7.5C2.5 8.75 3.11053 9.85325 3.75 10.5C5.27651 12.0265 8.89549 15.4553 9.79493 16.3061Z"
                                    strokeWidth="1.4"
                                    strokeMiterlimit="10"
                                    stroke={liked ? '#ff3b30' : '#000'}
                                    vectorEffect="non-scaling-stroke"
                                ></path>
                            </svg>
                        </HeartButton1>
                        <button className="ghost">장바구니</button>
                        <button className="primary">구매하기</button>
                    </ButtonRow>
                </SectionGroup>

                {/* 결제 혜택 */}
                <PaymentBenefitContainer>
                    <PaymentBenefitHeader>
                        <span>결제혜택</span>
                        <a href="https://www.musinsa.com/campaign/payevent/0" target="_blank" rel="noopener noreferrer">전체보기</a>
                    </PaymentBenefitHeader>
                    <BenefitList>
                        {PAYMENT_BENEFITS.slice(0, showAllBenefits ? PAYMENT_BENEFITS.length : 3).map((benefit, index) => (
                            <li key={index}>
                                <img src={benefit.icon} alt={benefit.title} />
                                <div className="benefit-info">
                                    <div className="main-text">
                                        {benefit.title} <span className="discount">{benefit.discount}</span>
                                        {benefit.label && <span className="first-purchase-label">{benefit.label}</span>}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </BenefitList>
                    <ShowMoreButton
                        className={showAllBenefits ? 'open' : ''}
                        onClick={handleToggleBenefits}
                    >
                        {showAllBenefits ? '접기' : '9개 혜택 더 보기'}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M15 7.5L10.2121 12.2879C10.095 12.405 9.90503 12.405 9.78787 12.2879L5 7.5"
                                stroke="#111"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </ShowMoreButton>
                </PaymentBenefitContainer>

                {/* 혜택 및 배송 정보 */}
                <SectionGroup>
                    <div style={{ paddingTop: '16px', borderTop: '1px solid #e6e8eb', textAlign: 'left' }}>
                        <div style={{ fontSize: '13px', fontWeight: '500', marginBottom: '4px' }}>
                            <strong style={{ fontWeight: 'bold' }}>무신사 회원</strong> 전 품목 무료배송
                        </div>
                        <div style={{ fontSize: '12px', color: '#777', paddingLeft: '8px' }}>
                            (일부 상품 및 도서 산간 지역 제외)
                        </div>
                        <div style={{ marginTop: '16px', fontSize: '13px' }}>
                            <strong style={{ fontWeight: 'bold' }}>예상배송</strong>
                            <span style={{ marginLeft: '8px' }}>10.18(토) 도착 예정</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#777', marginTop: '4px' }}>
                            10.16(목) 출고 · CJ대한통운
                        </div>
                    </div>
                </SectionGroup>

                {/* 연관 태그 */}
                <SectionGroup style={{ paddingTop: '16px', borderTop: '1px solid #e6e8eb' }}>
                    <div style={{ fontSize: '13px', fontWeight: '500', textAlign: 'left' }}>이 상품의 연관 태그</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                        <span style={{ fontSize: '12px', padding: '4px 8px', border: '1px solid #e6e8eb', borderRadius: '4px' }}>#경량패딩</span>
                        <span style={{ fontSize: '12px', padding: '4px 8px', border: '1px solid #e6e8eb', borderRadius: '4px' }}>#숏패딩</span>
                        <span style={{ fontSize: '12px', padding: '4px 8px', border: '1px solid #e6e8eb', borderRadius: '4px' }}>#아우터</span>
                        <span style={{ fontSize: '12px', padding: '4px 8px', border: '1px solid #e6e8eb', borderRadius: '4px' }}>#오버핏</span>
                        <span style={{ fontSize: '12px', padding: '4px 8px', border: '1px solid #e6e8eb', borderRadius: '4px' }}>#헤비아우터</span>
                        <span style={{ fontSize: '12px', padding: '4px 8px', border: '1px solid #e6e8eb', borderRadius: '4px' }}>#후드</span>
                        <span style={{ fontSize: '12px', padding: '4px 8px', border: '1px solid #e6e8eb', borderRadius: '4px' }}>#후드집업</span>
                    </div>
                </SectionGroup>
            </PurchaseBlock>
        </StickyPurchase>
    );
};

export default ProductStickyPanel;