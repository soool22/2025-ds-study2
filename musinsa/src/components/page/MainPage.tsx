import React from 'react'
import * as M from '../../style/MainPageStyled';
import Section from '../layouts/Section';
import Banner from '../layouts/Banner';
import UpButton from '../UI/UpButton';
import ShareButton from '../UI/ShareButton';

import alarmIcon from '../../img/alarmIcon.svg';
import searchIcon from '../../img/searchIconGray.svg';

import { banners, bigbtns, smallbtns, sections } from '../../db/MainPageDb'

function MainPage() {
  return (
    <M.Container>
        <M.SearchTopBox>
            <M.Logo src="https://image.msscdn.net/display/images/2025/07/29/24fa1078abbb4422aefd4dd27854a85a.png" alt="musinsaLogo"></M.Logo>
            <M.Icon src={alarmIcon} alt='alarm' />
        </M.SearchTopBox>
        <M.SearchBox>
            <M.Search placeholder="추석 빅세일 최대 30% 쿠폰">
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
            <Banner banners={banners} intervalMs={3500} />
        </M.BannerBox>
        <M.ButtonBox1>
            {bigbtns.map((bigbtn, idx) =>(
                <M.BigButton key={idx} bg={bigbtn.img}>{bigbtn.text}</M.BigButton>
            ))}
        </M.ButtonBox1>
        <M.ButtonBox2>
        {smallbtns.map((smallbtn, idx) => (
            <M.SmallButton key={idx}>
            <M.SmallIconImg src={smallbtn.img} alt={smallbtn.text} />
            <M.SmallText>{smallbtn.text}</M.SmallText>
            </M.SmallButton>
        ))}
        </M.ButtonBox2>
        <M.ItemBigBox>
            {sections.map((sec, i) => (
            <Section key={i} title={sec.title} seeMoreText={sec.seeMoreText} items={sec.items} index={i}/>
            ))}
        </M.ItemBigBox>
        <UpButton/>
        <ShareButton/>
    </M.Container>
  )
}

export default MainPage