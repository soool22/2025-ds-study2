import React, { useState } from 'react';
import {
    DetailMain,
    DetailGallery,
    ThumbnailList,
    ThumbnailItem,
    MainImageContainer,
    ArrowButton,
    AiRecommendationButton,
    Indicator,
    ZoomButton,
    InfoTabs,
    TabButton,
    TabContentSection,
    ProductInfoWrapper,
    InfoList,
    InfoItem,
    InfoTitle,
    InfoValue,
    DetailContent,
    MoreInfoFooter,
    MoreInfoButton,
    ReportSection,
} from '../../style/ProductDetailLStyled';

// --- 가상 데이터 ---
const productImages = [
    'https://image.msscdn.net/thumbnails/images/goods_img/20250910/5438737/5438737_17575616254192_big.jpg?w=1200',
    'https://image.msscdn.net/thumbnails/images/prd_img/20250910/5438737/detail_5438737_17575616322134_big.jpg?w=1200',
    'https://image.msscdn.net/thumbnails/images/prd_img/20250910/5438737/detail_5438737_17575616330861_big.jpg?w=1200',
    'https://image.msscdn.net/thumbnails/images/prd_img/20250910/5438737/detail_5438737_17575635029499_big.jpg?w=1200',
    'https://image.msscdn.net/thumbnails/images/prd_img/20250910/5438737/detail_5438737_17575616339452_big.jpg?w=1200',
];

const aiRecommendationImages = [
    'https://image.msscdn.net/thumbnails/images/goods_img/20250826/5362283/5362283_17580039595910_500.jpg?w=48',
    'https://image.msscdn.net/thumbnails/images/goods_img/20250912/5449918/5449918_17576486247327_500.jpg?w=48',
    'https://image.msscdn.net/thumbnails/images/goods_img/20250912/5451724/5451724_17592177406437_500.jpg?w=48',
];

const mockProductDetail = {
    code: 'TRFJK52BK',
    gender: '공용',
    season: '2025 FW',
    views: '3만 회 이상 (최근 1개월)',
    sales: '200개 이상',
    detailImages: [
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141077341468579368c236c3b33cb.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141090136256619268c236c503546.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141085751858694668c236c48c6d9.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141088044046659768c236c4c4641.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141088689664592368c236c4d4273.jpg?w=1200',
        // 추가 상세 이미지
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141077341468579368c236c3b33cb.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141090136256619268c236c503546.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141085751858694668c236c48c6d9.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141088044046659768c236c4c4641.jpg?w=1200',
    ],
};
// --- /가상 데이터 ---


const ProductDetail: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('정보');
    const [isExpanded, setIsExpanded] = useState(false); // 상세 정보 확장 상태

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex < productImages.length - 1 ? prevIndex + 1 : 0));
    };

    const handleMoreInfoClick = () => {
        setIsExpanded(prev => !prev); // 상태 토글
    };

    const handleReportClick = () => {
        // 실제로는 alert 대신 커스텀 모달 UI를 사용해야 합니다.
        console.log('신고하기 클릭');
    };

    const topValue = 56;

    // 현재 선택된 탭에 따라 내용을 렌더링하는 함수
    const renderTabContent = (tab: string) => {
        if (tab !== '정보') {
            // 다른 탭의 내용
            return <TabContentSection>{tab} 탭 내용 (구현 예정)</TabContentSection>;
        }

        // '정보' 탭 내용
        return (
            <TabContentSection>
                <ProductInfoWrapper>
                    {/* 상품 기본 정보 목록 */}
                    <InfoList>
                        <InfoItem>
                            <InfoTitle>품번</InfoTitle>
                            <InfoValue>{mockProductDetail.code}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>성별</InfoTitle>
                            <InfoValue>{mockProductDetail.gender}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>시즌</InfoTitle>
                            <InfoValue>{mockProductDetail.season}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>조회수</InfoTitle>
                            <InfoValue>{mockProductDetail.views}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>누적판매</InfoTitle>
                            <InfoValue>{mockProductDetail.sales}</InfoValue>
                        </InfoItem>
                    </InfoList>
                    <div style={{ padding: '12px 0' }} />

                    {/* 상세 이미지 콘텐츠: isExpanded 상태에 따라 높이가 조절됨 */}
                    <DetailContent $isExpanded={isExpanded}>
                        <div>
                            {mockProductDetail.detailImages.map((src, index) => (
                                <img key={index} src={src} alt={`상품 상세 이미지 ${index + 1}`} />
                            ))}
                        </div>
                    </DetailContent>
                </ProductInfoWrapper>

                {/* 상품 정보 더보기 버튼 영역 */}
                {!isExpanded && ( /* isExpanded가 false일 때만 표시 */
                    <MoreInfoFooter>
                        <MoreInfoButton type="button" onClick={handleMoreInfoClick} $isExpanded={isExpanded}>
                            <span>상품 정보 더보기</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 8L9.78787 13.7879C9.90503 13.905 10.095 13.905 10.2121 13.7879L16 8" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
                            </svg>
                        </MoreInfoButton>
                        <ReportSection>
                            <span>상품 정보에 문제가 있는 경우 알려주세요.</span>
                            <button type="button" onClick={handleReportClick}>
                                <span>신고하기</span>
                            </button>
                        </ReportSection>
                    </MoreInfoFooter>
                )}

                {isExpanded && ( /* isExpanded가 true일 때 접기 버튼 및 신고 섹션 표시 */
                    <MoreInfoFooter>
                        <MoreInfoButton type="button" onClick={handleMoreInfoClick} $isExpanded={isExpanded}>
                            <span>상품 정보 접기</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 8L9.78787 13.7879C9.90503 13.905 10.095 13.905 10.2121 13.7879L16 8" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
                            </svg>
                        </MoreInfoButton>
                        <ReportSection>
                            <span>상품 정보에 문제가 있는 경우 알려주세요.</span>
                            <button type="button" onClick={handleReportClick}>
                                <span>신고하기</span>
                            </button>
                        </ReportSection>
                    </MoreInfoFooter>
                )}
            </TabContentSection>
        );
    };

    return (
        <DetailMain $top={topValue}>
            {/* 1. 이미지 갤러리 섹션 */}
            <DetailGallery>
                <ThumbnailList>
                    {productImages.map((image, index) => (
                        <ThumbnailItem
                            key={index}
                            className={activeIndex === index ? 'active' : ''}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img src={image} alt={`상품 썸네일 ${index + 1}`} />
                        </ThumbnailItem>
                    ))}
                </ThumbnailList>
                <MainImageContainer>
                    <img src={productImages[activeIndex]} alt="메인 상품 이미지" />

                    <ArrowButton $direction="left" onClick={handlePrev} disabled={activeIndex === 0}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 16L7.21213 10.7121C7.09497 10.595 7.09497 10.405 7.21213 10.2879L12.5 5" stroke="black" strokeWidth="1.5"></path>
                        </svg>
                    </ArrowButton>
                    <ArrowButton $direction="right" onClick={handleNext} disabled={activeIndex === productImages.length - 1}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 5L12.7879 10.2879C12.905 10.405 12.905 10.595 12.7879 10.7121L7.5 16" stroke="black" strokeWidth="1.5"></path>
                        </svg>
                    </ArrowButton>

                    <AiRecommendationButton onClick={() => window.location.href = "https://www.musinsa.com/recommend/similar?uuid=detail_goods_attributes_allbrand&goodsNo=5438737&limit=100&gf=A"}>
                        <div className="thumbnail-images">
                            {aiRecommendationImages.map((src, idx) => (
                                <img key={idx} src={src} alt="비슷한 상품 이미지" />
                            ))}
                        </div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 5L12.7879 10.2879C12.905 10.405 12.905 10.595 12.7879 10.7121L7.5 16" stroke="black" strokeWidth="1.5"></path>
                        </svg>
                    </AiRecommendationButton>

                    <Indicator>
                        <span>{activeIndex + 1} / {productImages.length}</span>
                    </Indicator>

                    <ZoomButton>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M12.5 3H12V4H12.5V3ZM16 7.5V8L17 8V7.5L16 7.5ZM7.5 17H8V16H7.5V17ZM4 12.5L4 12H3L3 12.5H4ZM16.5 3.8L17 3.8L16.5 3.8ZM12.5 4L16.2 4V3L12.5 3V4ZM16 3.8L16 7.5L17 7.5L17 3.8L16 3.8ZM15.6464 3.64645L11.1464 8.14645L11.8536 8.85355L16.3536 4.35355L15.6464 3.64645ZM7.5 16H3.8V17H7.5V16ZM4 16.2L4 12.5H3L3 16.2H4ZM4.35356 16.3536L8.85356 11.8536L8.14645 11.1464L3.64645 15.6464L4.35356 16.3536ZM3.8 16C3.91046 16 4 16.0895 4 16.2H3C3 16.6418 3.35817 17 3.8 17V16ZM16.2 4C16.0895 4 16 3.91046 16 3.8L17 3.8C17 3.35817 16.6418 3 16.2 3V4Z" fill="white" vectorEffect="non-scaling-stroke"></path>
                        </svg>
                    </ZoomButton>
                </MainImageContainer>
            </DetailGallery>

            {/* 2. 탭 메뉴 (Sticky Header) */}
            <InfoTabs>
                <div>
                    <TabButton active={activeTab === '정보'} onClick={() => setActiveTab('정보')}>
                        <span>정보</span>
                    </TabButton>
                    <TabButton active={activeTab === '사이즈'} onClick={() => setActiveTab('사이즈')}>
                        <span>사이즈</span>
                    </TabButton>
                    <TabButton active={activeTab === '추천'} onClick={() => setActiveTab('추천')}>
                        <span>추천</span>
                    </TabButton>
                    <TabButton active={activeTab === '스냅·후기'} onClick={() => setActiveTab('스냅·후기')}>
                        <span>스냅·후기</span>
                    </TabButton>
                    <TabButton active={activeTab === '문의'} onClick={() => setActiveTab('문의')}>
                        <span>문의<span>30</span></span>
                    </TabButton>
                </div>
            </InfoTabs>

            {/* 3. 탭 콘텐츠 영역 */}
            {renderTabContent(activeTab)}

        </DetailMain>
    );
};

export default ProductDetail;
