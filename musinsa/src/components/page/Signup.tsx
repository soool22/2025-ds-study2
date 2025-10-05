import { useParams } from "react-router-dom"; 
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from "../layouts/Header";
import { ReactComponent as Musinsa29cmLogo  } from '../../img/Musinsa29cmLogo.svg';
import {LOGO,BODY,Header_login,
  } from '../../style/Login';
import { Sign } from "crypto";

const Gray_background = styled.div`
background-color:#fafafa;box-sizing: border-box;
width:1440px;
 min-width: var(--min-width);
    max-width: var(--max-width);
    display:flex;
    flex-direction: column;
align-items: center;

`
const Signup_first = styled.div`
display: flex;
padding:16px;box-sizing: border-box;
width:100%;
border-bottom:1px solid #e0e0e0;
flex-direction: column;
align-items: start;

`
export const Signup_main = styled.div`
width:600px;


box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: start;
height:100vh;
background-color:white;

`
const Musinsa = styled.div`

padding: 10px 0 8px;
`

const Promotion = styled.div`
    padding-bottom: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #666;

`
const Signup_second = styled.div`
display: flex;
padding:16px;
width:100%;
border-bottom:1px solid #e0e0e0;
flex-direction: column;
align-items: start;
box-sizing: border-box;
`
const Sign1 =styled.div`
    padding: 12px 0 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
`
const Label1 = styled.div`
display: flex;margin: 8px 0 4px;
flex-direction: row;
align-items: center;
color: #666;
font-size: 13px;
justify-items: center;


gap:5px;
`
const Labels=styled.div`
padding-left: 24px;


box-sizing: border-box;
width:100%;


`
const Label2 = styled.div`
display: flex;
margin:10px 0;
flex-direction: row;
align-items: center;
width:100%;
color: #666;
justify-content: space-between;
font-size: 13px;




`
const BETWEEN =styled.div`
align-items: center;
display: flex;
gap:5px;
flex-direction: row;
`
const More =styled.div`
text-decoration: underline;
`
const Rules =styled.div`
font-size:12px;
color:#666666;
padding:4px 0 4px 8px;
`
const Want_detail =styled.div`
font-size:13px;
color:#666666;
padding:0 0 4px 8px;
`
const Infomation =styled.span`
text-decoration:underline;
`
const Signup_footer =styled.div`
  margin-top: auto;    bottom: 0;
    left: 50%;
    z-index: 200;
    box-sizing: border-box;
    width:600px;
    height:70px;
    max-width: 100%;
   border-top:1px solid #e0e0e0;
    padding:10px 16px;
    background-color:rgba(0, 0, 0, 0);

`
interface ButtonSignupProps {
    isActive: boolean;
  }
const Button_signup = styled.button<ButtonSignupProps>`
    border: none;
    background-color: #ebebeb;
    color: #ccc;
    border-radius: 4px;
    height: 50px;
    width: 100%;
    cursor: default;
    transition: background-color 0.2s;

    /* isActive prop이 true일 때 적용될 스타일 */
    ${(props) =>
      props.isActive &&
      `
        background-color: #000000;
        color: white;
        cursor: pointer;
    `}
`;
const Big_div =styled.div`
box-sizing: border-box;
height:100vh;
`


function Signup(){
    const [agreements, setAgreements] = useState({
        age: false,
        terms: false,
        marketing: false,
        ads: false,
    });

    const [allChecked, setAllChecked] = useState(false);

    useEffect(() => {
        const isAllTrue = Object.values(agreements).every(val => val === true);
        setAllChecked(isAllTrue);
    }, [agreements]);

    const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setAgreements({
            age: checked,
            terms: checked,
            marketing: checked,
            ads: checked,
        });
    };
    
    const handleIndividualCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setAgreements(prev => ({
            ...prev,
            [name]: checked,
        }));
    };
    
    
        const isButtonActive = allChecked;
        return (
            <Big_div>
                <Gray_background>
                    <BODY >
                        <Header_login>
                            <div>무신사 통합계정 이용 동의</div>
                        </Header_login>
                        <Signup_main>
        
                            <Signup_first>
                                <Musinsa29cmLogo />
                                <Musinsa>무신사와 29CM, 하나의 계정으로<tr />
                                    더 편리하게 쇼핑하세요</Musinsa>
                                <Promotion>무신사와 29CM의 회원 제도가 '무신사 통합계정'으로 합쳐집니다.</Promotion>
                            </Signup_first>
        
                            <Signup_second>
                                <Sign1>무신사 통합계정 이용 약관 동의</Sign1>
                                <Label1>
                                    {/* --- 📌 [수정 1] : 전체 동의 체크박스 연결 --- */}
                                    <input
                                        type="checkbox"
                                        onChange={handleAllCheck}
                                        checked={allChecked}
                                    />
                                    <div>약관 전체 동의하기 (선택 동의 포함)</div>
                                </Label1>
                                <Labels>
                                    <Label1>
                                        {/* --- 📌 [수정 2] : 개별 체크박스들 연결 --- */}
                                        <input
                                            type="checkbox"
                                            name="age"
                                            onChange={handleIndividualCheck}
                                            checked={agreements.age}
                                        />
                                        <div>만 14세 이상입니다. (필수)</div>
                                    </Label1>
        
                                    <Label2>
                                        <BETWEEN>
                                            <input
                                                type="checkbox"
                                                name="terms"
                                                onChange={handleIndividualCheck}
                                                checked={agreements.terms}
                                            />
                                            <div>서비스 이용 약관 동의 (필수)</div>
                                        </BETWEEN>
                                        <More>자세히</More>
                                    </Label2>
                                    <Label2>
                                        <BETWEEN>
                                            <input
                                                type="checkbox"
                                                name="marketing"
                                                onChange={handleIndividualCheck}
                                                checked={agreements.marketing}
                                            />
                                            <div>마케팅 목적의 개인정보 수집 및 이용 동의 (선택)</div>
                                        </BETWEEN>
                                        <More>자세히</More>
                                    </Label2>
                                    <Label2>
                                        <BETWEEN>
                                            <input
                                                type="checkbox"
                                                name="ads"
                                                onChange={handleIndividualCheck}
                                                checked={agreements.ads}
                                            />
                                            <div>광고성 정보 수신 동의 (선택)</div>
                                        </BETWEEN>
                                        <More>자세히</More>
                                    </Label2>
                                </Labels>
                            </Signup_second>
        
                            <Signup_second>
                                <Rules>
                                    · 약관에 동의하시면 같은 방식으로 본인인증한 29CM 계정과 연결되어 29CM의 약관도 함께 동의 처리됩니다.
                                </Rules>
                                <Rules>
                                    · 기존 약관에 동의하셨더라도 내용이 개정되었으므로 다시 동의가 필요합니다.</Rules>
                                <Rules>
                                    · 선택 항목에 동의하지 않아도 통합계정과 적립금 서비스는 정상적으로 이용하실 수 있습니다.</Rules>
                                <Rules>
                                    · 정보주체의 개인정보 및 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여 안전하게 관리하고 있습니다.</Rules>
                                <Want_detail>자세한 사항은 <Infomation>개인정보처리방침</Infomation>에서 확인할 수 있습니다.</Want_detail>
                            </Signup_second>
        
                            <Signup_footer>
                                <Button_signup isActive={isButtonActive}>
                                    동의하고 본인인증하기
                                </Button_signup>
                            </Signup_footer>
        
                        </Signup_main>
                    </BODY>
                </Gray_background>
            </Big_div>
        )
};
export default Signup;