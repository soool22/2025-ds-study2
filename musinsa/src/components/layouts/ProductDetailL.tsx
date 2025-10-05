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
    SizeTabContainer, InfoSection, SectionTitle, SectionHeader, InputWrapper, InputGroup, StyledInput,
    Unit, PurchaseInfo, PurchaseBar, BarLabel, PurchaseBarFill, PurchasePercentage, Note,
    TabButtonWrapper, SizeTabButton, SizeImageSection, SizeImage, SizeImageNote,
    SizeTableWrapper, StyledTable, TableHeaderCell, TableCell, ButtonRow, StyledButton,
    HorizontalLine, FitSection, FitTableWrapper,
    SizeChartContainer, SizeCategoryTabs, SizeCategoryButton, SizeChartTableWrapper, SizeChartNoteSection,
    SizeCategoryUl, SizeCategoryLi,
    SnapReviewContainer,
    NoticeBox,
    NoticeText,
    ReviewList,
    ReviewItem,
    ReviewImage,
    ReviewTitle,
    EmptyText,
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
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141077341468579368c236c3b33cb.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141090136256619268c236c503546.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141085751858694668c236c48c6d9.jpg?w=1200',
        'https://image.msscdn.net/thumbnails/images/prd_img/202509111141088044046659768c236c4c4641.jpg?w=1200',
    ],
};
// --- /가상 데이터 ---

// 핏/계절감 섹션을 렌더링하는 공통 함수
const renderFitAndSeasonContent = () => (
    <>
        <HorizontalLine />
        <FitSection>
            <SectionTitle>핏/계절감</SectionTitle>
            <FitTableWrapper>
                <StyledTable>
                    <thead>
                        <tr>
                            <TableHeaderCell>핏</TableHeaderCell>
                            <TableHeaderCell>스키니</TableHeaderCell>
                            <TableHeaderCell>슬림</TableHeaderCell>
                            <TableHeaderCell className="selected">레귤러</TableHeaderCell>
                            <TableHeaderCell>루즈</TableHeaderCell>
                            <TableHeaderCell>오버 사이즈</TableHeaderCell>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableCell>촉감</TableCell>
                            <TableCell>부드러움</TableCell>
                            <TableCell>약간 부드러움</TableCell>
                            <TableCell className="selected">보통</TableCell>
                            <TableCell>약간 뻣뻣함</TableCell>
                            <TableCell>뻣뻣함</TableCell>
                        </tr>
                        <tr>
                            <TableCell>신축성</TableCell>
                            <TableCell>없음</TableCell>
                            <TableCell className="selected">거의 없음</TableCell>
                            <TableCell>보통</TableCell>
                            <TableCell>약간 있음</TableCell>
                            <TableCell>있음</TableCell>
                        </tr>
                        <tr>
                            <TableCell>비침</TableCell>
                            <TableCell>있음</TableCell>
                            <TableCell>약간 있음</TableCell>
                            <TableCell>보통</TableCell>
                            <TableCell>거의 없음</TableCell>
                            <TableCell className="selected">없음</TableCell>
                        </tr>
                        <tr>
                            <TableCell>두께</TableCell>
                            <TableCell>얇음</TableCell>
                            <TableCell>약간 얇음</TableCell>
                            <TableCell>보통</TableCell>
                            <TableCell>약간 두꺼움</TableCell>
                            <TableCell className="selected">두꺼움</TableCell>
                        </tr>
                        <tr>
                            <TableCell>계절</TableCell>
                            <TableCell>봄</TableCell>
                            <TableCell>여름</TableCell>
                            <TableCell>가을</TableCell>
                            <TableCell className="selected">겨울</TableCell>
                            <TableCell></TableCell>
                        </tr>
                    </tbody>
                </StyledTable>
            </FitTableWrapper>
            <Note>• 주관적인 내용이므로 참고로만 활용하세요.</Note>
        </FitSection>
    </>
);

const SizeTabContent: React.FC = () => {
    const [sizeTab, setSizeTab] = useState('실측');
    const [sizeCategory, setSizeCategory] = useState('남성 의류');

    const renderMeasurementContent = () => (
        <>
            <SizeTabContainer>
                <InfoSection>
                    <SectionTitle>사이즈 정보</SectionTitle>
                    <SectionHeader>
                        <p>
                            회원님의 체형정보를 입력하고
                            <br />
                            비슷한 체형이 많이 구매한 사이즈를 찾아보세요
                        </p>
                    </SectionHeader>
                    <InputWrapper>
                        <InputGroup>
                            <StyledInput type="text" placeholder="키" />
                            <Unit>cm</Unit>
                        </InputGroup>
                        <InputGroup>
                            <StyledInput type="text" placeholder="몸무게" />
                            <Unit>kg</Unit>
                        </InputGroup>
                    </InputWrapper>
                    <PurchaseInfo>
                        <PurchaseBar>
                            <BarLabel>L</BarLabel>
                            <PurchaseBarFill />
                            <PurchasePercentage>100% (1명 구매)</PurchasePercentage>
                        </PurchaseBar>
                        <Note>해당 정보는 무신사 회원 평균 체형의 구매 데이터를 기반으로 합니다. 체형 정보를 입력하시면 맞춤 사이즈를 제안해드립니다.</Note>
                    </PurchaseInfo>
                </InfoSection>

                <SizeImageSection>
                    <SizeImage src="//image.musinsa.com/images/size_type/m_detail_img/2023122609431200000047206.png" alt="사이즈 측정법" />
                    <SizeImageNote>
                        <p>사이즈 실측 안내</p>
                        <p>점퍼_래글런 사이즈 측정법</p>
                    </SizeImageNote>
                </SizeImageSection>

                <SizeTableWrapper>
                    <StyledTable>
                        <thead>
                            <tr>
                                <TableHeaderCell>cm</TableHeaderCell>
                                <TableHeaderCell>총장</TableHeaderCell>
                                <TableHeaderCell>가슴단면</TableHeaderCell>
                                <TableHeaderCell>소매길이</TableHeaderCell>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <TableCell>내 사이즈</TableCell>
                                <TableCell colSpan={3}>사이즈를 직접 입력해주세요</TableCell>
                            </tr>
                            <tr>
                                <TableCell>M</TableCell>
                                <TableCell>66</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>79</TableCell>
                            </tr>
                            <tr>
                                <TableCell>L</TableCell>
                                <TableCell>68</TableCell>
                                <TableCell>67</TableCell>
                                <TableCell>81</TableCell>
                            </tr>
                            <tr>
                                <TableCell>XL</TableCell>
                                <TableCell>70</TableCell>
                                <TableCell>69</TableCell>
                                <TableCell>83</TableCell>
                            </tr>
                        </tbody>
                    </StyledTable>
                </SizeTableWrapper>

                <ButtonRow>
                    <StyledButton>구매내역 실측 선택하기</StyledButton>
                    <StyledButton>실측 직접 입력하기</StyledButton>
                </ButtonRow>
            </SizeTabContainer>
        </>
    );

    const renderSizeChartContent = () => (
        <>
            <SizeChartContainer>
                <SizeCategoryTabs>
                    <SizeCategoryButton className={sizeCategory === '남성 의류' ? 'selected' : ''} onClick={() => setSizeCategory('남성 의류')}>
                        <span>남성 의류</span>
                    </SizeCategoryButton>
                    <SizeCategoryButton className={sizeCategory === '여성 의류' ? 'selected' : ''} onClick={() => setSizeCategory('여성 의류')}>
                        <span>여성 의류</span>
                    </SizeCategoryButton>
                    <SizeCategoryButton className={sizeCategory === '아동 의류' ? 'selected' : ''} onClick={() => setSizeCategory('아동 의류')}>
                        <span>아동 의류</span>
                    </SizeCategoryButton>
                    <SizeCategoryButton className={sizeCategory === '신발 일반' ? 'selected' : ''} onClick={() => setSizeCategory('신발 일반')}>
                        <span>신발 일반</span>
                    </SizeCategoryButton>
                    <SizeCategoryButton className={sizeCategory === '신발 아동' ? 'selected' : ''} onClick={() => setSizeCategory('신발 아동')}>
                        <span>신발 아동</span>
                    </SizeCategoryButton>
                </SizeCategoryTabs>
                <SizeChartTableWrapper>
                    {sizeCategory === '남성 의류' && (
                        <StyledTable>
                            <thead>
                                <tr>
                                    <TableHeaderCell>구분</TableHeaderCell>
                                    <TableHeaderCell>한국</TableHeaderCell>
                                    <TableHeaderCell>미국</TableHeaderCell>
                                    <TableHeaderCell>일본</TableHeaderCell>
                                    <TableHeaderCell>영국, 호주</TableHeaderCell>
                                    <TableHeaderCell>프랑스</TableHeaderCell>
                                    <TableHeaderCell>이탈리아</TableHeaderCell>
                                    <TableHeaderCell>유럽</TableHeaderCell>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <TableCell>XS</TableCell>
                                    <TableCell>44(85)</TableCell>
                                    <TableCell>2</TableCell>
                                    <TableCell>44</TableCell>
                                    <TableCell>4-6</TableCell>
                                    <TableCell>34</TableCell>
                                    <TableCell>80</TableCell>
                                    <TableCell>34</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>S</TableCell>
                                    <TableCell>55(90)</TableCell>
                                    <TableCell>4</TableCell>
                                    <TableCell>55</TableCell>
                                    <TableCell>8-10</TableCell>
                                    <TableCell>36, 44</TableCell>
                                    <TableCell>90</TableCell>
                                    <TableCell>36</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>M</TableCell>
                                    <TableCell>66(95)</TableCell>
                                    <TableCell>6</TableCell>
                                    <TableCell>66</TableCell>
                                    <TableCell>10-12</TableCell>
                                    <TableCell>38, 48</TableCell>
                                    <TableCell>95</TableCell>
                                    <TableCell>38</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>L</TableCell>
                                    <TableCell>77(100)</TableCell>
                                    <TableCell>8</TableCell>
                                    <TableCell>77</TableCell>
                                    <TableCell>16-18</TableCell>
                                    <TableCell>40, 42</TableCell>
                                    <TableCell>100</TableCell>
                                    <TableCell>40</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>XL</TableCell>
                                    <TableCell>88(105)</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>88L</TableCell>
                                    <TableCell>20-22</TableCell>
                                    <TableCell>44, 46, 48</TableCell>
                                    <TableCell>105</TableCell>
                                    <TableCell>42</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>XXL</TableCell>
                                    <TableCell>110</TableCell>
                                    <TableCell>12</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>50, 52, 54</TableCell>
                                    <TableCell>110</TableCell>
                                    <TableCell>44</TableCell>
                                </tr>
                            </tbody>
                        </StyledTable>
                    )}
                    {sizeCategory === '여성 의류' && (
                        <StyledTable>
                            <thead>
                                <tr>
                                    <TableHeaderCell>구분</TableHeaderCell>
                                    <TableHeaderCell>한국</TableHeaderCell>
                                    <TableHeaderCell>미국</TableHeaderCell>
                                    <TableHeaderCell>일본</TableHeaderCell>
                                    <TableHeaderCell>영국, 호주</TableHeaderCell>
                                    <TableHeaderCell>프랑스</TableHeaderCell>
                                    <TableHeaderCell>이탈리아</TableHeaderCell>
                                    <TableHeaderCell>유럽</TableHeaderCell>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <TableCell>XS</TableCell>
                                    <TableCell>44(85)</TableCell>
                                    <TableCell>2</TableCell>
                                    <TableCell>44</TableCell>
                                    <TableCell>4-6</TableCell>
                                    <TableCell>34</TableCell>
                                    <TableCell>80</TableCell>
                                    <TableCell>34</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>S</TableCell>
                                    <TableCell>55(90)</TableCell>
                                    <TableCell>4</TableCell>
                                    <TableCell>55</TableCell>
                                    <TableCell>8-10</TableCell>
                                    <TableCell>36, 44</TableCell>
                                    <TableCell>90</TableCell>
                                    <TableCell>36</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>M</TableCell>
                                    <TableCell>66(95)</TableCell>
                                    <TableCell>6</TableCell>
                                    <TableCell>66</TableCell>
                                    <TableCell>10-12</TableCell>
                                    <TableCell>38, 48</TableCell>
                                    <TableCell>95</TableCell>
                                    <TableCell>38</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>L</TableCell>
                                    <TableCell>77(100)</TableCell>
                                    <TableCell>8</TableCell>
                                    <TableCell>77</TableCell>
                                    <TableCell>16-18</TableCell>
                                    <TableCell>40, 42</TableCell>
                                    <TableCell>100</TableCell>
                                    <TableCell>40</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>XL</TableCell>
                                    <TableCell>88(105)</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>88L</TableCell>
                                    <TableCell>20-22</TableCell>
                                    <TableCell>44, 46, 48</TableCell>
                                    <TableCell>105</TableCell>
                                    <TableCell>42</TableCell>
                                </tr>
                                <tr>
                                    <TableCell>XXL</TableCell>
                                    <TableCell>110</TableCell>
                                    <TableCell>12</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>50, 52, 54</TableCell>
                                    <TableCell>110</TableCell>
                                    <TableCell>44</TableCell>
                                </tr>
                            </tbody>
                        </StyledTable>
                    )}
                    {sizeCategory === '아동 의류' && (
                        <StyledTable>
                            <thead>
                                <tr>
                                    <TableHeaderCell colSpan={3}>미국 남아 [Boys 2-7]</TableHeaderCell>
                                    <TableHeaderCell colSpan={3}>미국 남아 [Boys 8-20]</TableHeaderCell>
                                    <TableHeaderCell colSpan={3}>미국 여아 [Girls 2-6X]</TableHeaderCell>
                                    <TableHeaderCell colSpan={3}>미국 여아 [Girls 7-16]</TableHeaderCell>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <TableCell>2T</TableCell>
                                    <TableCell>84-91</TableCell>
                                    <TableCell>13-15</TableCell>
                                    <TableCell>8</TableCell>
                                    <TableCell>123-127</TableCell>
                                    <TableCell>25-27</TableCell>
                                    <TableCell>2T</TableCell>
                                    <TableCell>84-91</TableCell>
                                    <TableCell>13-15</TableCell>
                                    <TableCell>7</TableCell>
                                    <TableCell>91-99</TableCell>
                                    <TableCell>25-27</TableCell>
                                </tr>
                            </tbody>
                        </StyledTable>
                    )}
                    {sizeCategory === '신발 일반' && (
                        <StyledTable>
                            <thead>
                                <tr>
                                    <TableHeaderCell>한국(mm)</TableHeaderCell>
                                    <TableHeaderCell>일본(cm)</TableHeaderCell>
                                    <TableHeaderCell colSpan={2}>인터내셔널 사이즈</TableHeaderCell>
                                    <TableHeaderCell colSpan={2}>미국</TableHeaderCell>
                                    <TableHeaderCell colSpan={2}>영국</TableHeaderCell>
                                    <TableHeaderCell colSpan={2}>유럽</TableHeaderCell>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <TableCell>220</TableCell>
                                    <TableCell>22.0</TableCell>
                                    <TableCell colSpan={2}>XXXS</TableCell>
                                    <TableCell colSpan={2}>S</TableCell>
                                    <TableCell colSpan={2}>3</TableCell>
                                    <TableCell colSpan={2}>35</TableCell>
                                </tr>
                            </tbody>
                        </StyledTable>
                    )}
                    {sizeCategory === '신발 아동' && (
                        <StyledTable>
                            <thead>
                                <tr>
                                    <TableHeaderCell>한국(mm)</TableHeaderCell>
                                    <TableHeaderCell>일본(cm)</TableHeaderCell>
                                    <TableHeaderCell colSpan={2}>미국</TableHeaderCell>
                                    <TableHeaderCell>영국</TableHeaderCell>
                                    <TableHeaderCell>유럽</TableHeaderCell>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <TableCell>80</TableCell>
                                    <TableCell>8.0</TableCell>
                                    <TableCell colSpan={2}>2C</TableCell>
                                    <TableCell>1.5</TableCell>
                                    <TableCell>17</TableCell>
                                </tr>
                            </tbody>
                        </StyledTable>
                    )}
                </SizeChartTableWrapper>
                <SizeChartNoteSection>
                    <ul>
                        <li>인터내셔널 사이즈 표입니다. 참고하시기 바랍니다.</li>
                        <li>키즈 사이즈의 경우 한국 사이즈 80~140mm은 infant’s size(3-36개월), 145mm~220mm까지는 PS(Pre-School, 4~7세), 225mm~260mm까지는 GS(Grade-School, 8~13세)로 통상적 구분하며 브랜드 별로 구분 기준 차이가 있습니다.</li>
                        <li>나이키의 경우 키즈 사이즈 표기 체계가 달라 별도 표기됩니다.</li>
                    </ul>
                </SizeChartNoteSection>
            </SizeChartContainer>
        </>
    );

    return (
        <TabContentSection>
            <TabButtonWrapper>
                <SizeTabButton className={sizeTab === '실측' ? 'selected' : ''} onClick={() => setSizeTab('실측')}>
                    실측 사이즈
                </SizeTabButton>
                <SizeTabButton className={sizeTab === '기준표' ? 'selected' : ''} onClick={() => setSizeTab('기준표')}>
                    기준표 사이즈
                </SizeTabButton>
            </TabButtonWrapper>
            {sizeTab === '실측' ? renderMeasurementContent() : renderSizeChartContent()}
            <HorizontalLine />
            <FitSection>
                <SectionTitle>핏/계절감</SectionTitle>
                <FitTableWrapper>
                    <StyledTable>
                        <thead>
                            <tr>
                                <TableHeaderCell>핏</TableHeaderCell>
                                <TableHeaderCell>스키니</TableHeaderCell>
                                <TableHeaderCell>슬림</TableHeaderCell>
                                <TableHeaderCell className="selected">레귤러</TableHeaderCell>
                                <TableHeaderCell>루즈</TableHeaderCell>
                                <TableHeaderCell>오버 사이즈</TableHeaderCell>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <TableCell>촉감</TableCell>
                                <TableCell>부드러움</TableCell>
                                <TableCell>약간 부드러움</TableCell>
                                <TableCell className="selected">보통</TableCell>
                                <TableCell>약간 뻣뻣함</TableCell>
                                <TableCell>뻣뻣함</TableCell>
                            </tr>
                            <tr>
                                <TableCell>신축성</TableCell>
                                <TableCell>없음</TableCell>
                                <TableCell className="selected">거의 없음</TableCell>
                                <TableCell>보통</TableCell>
                                <TableCell>약간 있음</TableCell>
                                <TableCell>있음</TableCell>
                            </tr>
                            <tr>
                                <TableCell>비침</TableCell>
                                <TableCell>있음</TableCell>
                                <TableCell>약간 있음</TableCell>
                                <TableCell>보통</TableCell>
                                <TableCell>거의 없음</TableCell>
                                <TableCell className="selected">없음</TableCell>
                            </tr>
                            <tr>
                                <TableCell>두께</TableCell>
                                <TableCell>얇음</TableCell>
                                <TableCell>약간 얇음</TableCell>
                                <TableCell>보통</TableCell>
                                <TableCell>약간 두꺼움</TableCell>
                                <TableCell className="selected">두꺼움</TableCell>
                            </tr>
                            <tr>
                                <TableCell>계절</TableCell>
                                <TableCell>봄</TableCell>
                                <TableCell>여름</TableCell>
                                <TableCell className="selected">가을</TableCell>
                                <TableCell className="selected">겨울</TableCell>
                                <TableCell></TableCell>
                            </tr>
                        </tbody>
                    </StyledTable>
                </FitTableWrapper>
                <Note>• 주관적인 내용이므로 참고로만 활용하세요.</Note>
            </FitSection>
        </TabContentSection>
    );
};
//스냅
interface SnapReviewProps {
    activeTab: string;
}
const SnapReviewTab: React.FC<SnapReviewProps> = ({ activeTab }) => {
    if (activeTab !== '스냅·후기') return null;

    return (
        <SnapReviewContainer>
            <h3>후기</h3>

            <NoticeBox>
                <NoticeText>
                    <strong>100만원</strong> 적립금의 후기왕에 도전해보세요!
                    <br />
                    무신사 후기왕 랭킹 오픈
                </NoticeText>
                <span className="arrow">›</span>
            </NoticeBox>

            <ReviewList>
                <ReviewItem>
                    <ReviewImage
                        src="https://image.msscdn.net/thumbnails/data/estimate/5438735_0/0e4100e805564f9b9fb8165a2d244c5e.jpg?w=260" alt="패딩 착용샷"
                    />
                    <ReviewTitle>라이트 후디 패딩 자켓_블랙</ReviewTitle>
                </ReviewItem>
            </ReviewList>

            <EmptyText>등록된 후기가 없습니다.</EmptyText>
        </SnapReviewContainer>
    );
};
const ProductDetail: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('정보');
    const [isExpanded, setIsExpanded] = useState(false);
    const topValue = 56;

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex < productImages.length - 1 ? prevIndex + 1 : 0));
    };

    const handleMoreInfoClick = () => {
        setIsExpanded(prev => !prev);
    };

    const handleReportClick = () => {
        console.log('신고하기 클릭');
    };

    const renderTabContent = (tab: string) => {
        switch (tab) {
            case '정보':
                return (
                    <TabContentSection>
                        <ProductInfoWrapper>
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
                            <DetailContent $isExpanded={isExpanded}>
                                <div>
                                    {mockProductDetail.detailImages.map((src, index) => (
                                        <img key={index} src={src} alt={`상품 상세 이미지 ${index + 1}`} />
                                    ))}
                                </div>
                            </DetailContent>
                        </ProductInfoWrapper>
                        {!isExpanded && (
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
                        {isExpanded && (
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
            case '사이즈':
                return <SizeTabContent />;
            case '스냅·후기':                     // ✅ 추가
                return <SnapReviewTab activeTab={activeTab} />;
            default:
                return <TabContentSection></TabContentSection>;
        }
    };

    return (
        <DetailMain $top={topValue}>
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
                        <span>문의<span>0</span></span>
                    </TabButton>
                </div>
            </InfoTabs>
            {renderTabContent(activeTab)}
        </DetailMain>
    );
};

export default ProductDetail;
