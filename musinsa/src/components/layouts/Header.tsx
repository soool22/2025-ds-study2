import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '../../img/menuIcon.svg';
import SnapIcon from '../../img/snapIcon.svg';
import SearchIcon from '../../img/searchIcon.svg';
import HeartIcon from '../../img/heartIcon.svg';
import PersonIcon from '../../img/personIcon.svg';
import BagIcon from '../../img/bagIcon.svg';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderShell>
        <LeftBox>
            <ElementImg src={MenuIcon} alt='menu' />
            <ElementText2>|</ElementText2>
            <ElementText onClick={() => navigate(`/`)}>MUSINSA</ElementText>
            <ElementText>BEAUTY</ElementText>
            <ElementText>PLAYER</ElementText>
            <ElementText>OUTLET</ElementText>
            <ElementText>BOUTIQUE</ElementText>
            <ElementText>SHOES</ElementText>
            <ElementText>KIDS</ElementText>
            <ElementText>USED</ElementText>
            <ElementText2>|</ElementText2>
            <ElementImg2 src={SnapIcon} alt='snapicon'/>
            <ElementText> SNAP</ElementText>
        </LeftBox>
        <RightBox>
            <ElementText3>오프라인 스토어</ElementText3>
            <ElementText2>|</ElementText2>
            <IconBox>
                <ElementImg2 src={SearchIcon} alt='searchicon'/>
                <ElementText3>검색</ElementText3>
            </IconBox>
            <IconBox>
                <ElementImg2 src={HeartIcon} alt='hearticon'/>
                <ElementText3>좋아요</ElementText3>
            </IconBox>
            <IconBox>
                <ElementImg2 src={PersonIcon} alt='personicon'/>
                <ElementText3>마이</ElementText3>
            </IconBox>
            <IconBox>
                <ElementImg2 src={BagIcon} alt='bagicon'/>
                <ElementText3>장바구니</ElementText3>
            </IconBox>
            <Login onClick={() => navigate(`/login`)}>로그인/회원가입</Login>
        </RightBox>
    </HeaderShell>
  )
}

const HeaderShell = styled.div`
    background-color: #1a1b1f;
    width: 100%;
    max-width: 1440px;
    height: 56px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    z-index: 10;
    box-sizing: border-box;
`

const LeftBox = styled.div`
    display: flex;
    align-items: center;
`

const RightBox = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const ElementImg = styled.img`
    padding: 0 6px;
`

const ElementImg2 = styled.img`
    
`

const ElementText = styled.p`
    padding: 0 8px;
    color: #D1D1D2;
    font-weight: 500;
    margin: 0;
    line-height: 22px;
    height: 24px;
    letter-spacing: 0.03em;
    white-space: nowrap;
`
const ElementText2 = styled.p`
    padding: 0 6px;
    color: #D1D1D2;
    font-weight: 300;
    margin: 0;
    line-height: 22px;
    height: 26px;
    white-space: nowrap;
`

const ElementText3 = styled.p`
    padding: 0 4px;
    color: #D1D1D2;
    font-weight: 500;
    margin: 0;
    font-size: 13px;
    line-height: 22px;
    height: 24px;
    white-space: nowrap;
`

const ElementText4 = styled.p`
    padding: 0 4px;
    color: #D1D1D2;
    font-weight: 500;
    margin: 0;
    font-size: 13px;
    line-height: 22px;
    height: 24px;
    border: solid 1px #D1D1D2;
    border-radius: 5px;
    white-space: nowrap;
`

const IconBox = styled.div`
    display: flex;
    align-items: center;
`

const Login= styled.button`
    padding: 0 4px;
    color: #D1D1D2;
    font-weight: 500;
    margin: 0;
    font-size: 13px;
    line-height: 22px;
    height: 24px;
    border: solid 1px #D1D1D2;
    border-radius: 5px;
    white-space: nowrap;
    background-color: #1a1b1f;
`

export default Header