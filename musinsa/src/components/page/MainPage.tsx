import React from 'react'
import * as M from '../../style/MainPageStyled';

import alarmIcon from '../../img/alarmIcon.svg';
import searchIcon from '../../img/searchIconGray.svg';
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';
import banner3 from '../../img/banner3.jpg';

const banners = [
  { img: banner1, text: "첫 구매 한정 20% 쿠폰", text2: "990원부터 첫 구매 인기 상품까지"},
  { img: banner2},
  { img: banner3, text: "가을 메이크업을 위한 신상 아이템", text2: "FIVEVIBE"},
];

function MainPage() {
  return (
    <M.Container>
        <M.SearchTopBox>
            <M.Logo src="https://image.msscdn.net/display/images/2025/07/29/24fa1078abbb4422aefd4dd27854a85a.png" alt="musinsaLogo"></M.Logo>
            <M.Icon src={alarmIcon} alt='alarm' />
        </M.SearchTopBox>
        <M.SearchBox>
            <M.Search>
            </M.Search>
            <M.Icon2 src={searchIcon} alt='search' />
        </M.SearchBox>
        <M.NavBox>
            <M.NavText>콘텐츠</M.NavText>
            <M.NavText2>추석 빅세일</M.NavText2>
            <M.NavText3>추천</M.NavText3>
            <M.NavText2>랭킹</M.NavText2>
            <M.NavText2>세일</M.NavText2>
            <M.NavText2>브랜드</M.NavText2>
            <M.NavText2>발매</M.NavText2>
            <M.NavText2>월간 입점회</M.NavText2>
        </M.NavBox>
        <M.BannerBox>
        {banners.map((banner, idx) => (
            <M.Banner key={idx} bg={banner.img}>
                <M.BannerTextBox>
                    {banner.text && <M.BannerText>{banner.text}</M.BannerText>}
                    {banner.text2 && <M.BannerText2>{banner.text2}</M.BannerText2>}
                </M.BannerTextBox>
            </M.Banner>
        ))}
        </M.BannerBox>
    </M.Container>
  )
}

export default MainPage