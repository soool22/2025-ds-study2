import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import styled from 'styled-components';
import { ReactComponent as Musinsa29cmLogo  } from '../../img/Musinsa29cmLogo.svg';
import { ReactComponent as Kakao  } from '../../img/Kakao.svg';
import { ReactComponent as Apple_logo  } from '../../img/Apple_logo.svg';
import { Link } from 'react-router-dom';
import {LOGO,BODY,Header_login,Login_main,Login_button,
  Input,ID,PassWord,ID_Box,Gray_text,Find,Margin,FindID,Button_box,
  Kakao_Button,Apple_Button,Signup_button,Signup_button_span,
  Guest,Guest_order
} from '../../style/Login';
const StyledLink = styled(Link)`
  color: inherit;        
  text-decoration: none;   

 
`;
const Gray_background = styled.div`
background-color:#fafafa;box-sizing: border-box;
width:1440px;
 min-width: var(--min-width);
    max-width: var(--max-width);
    display:flex;
    flex-direction: column;
align-items: center;

`
const Login_footer =styled.div`
  margin-top: auto;    bottom: 0;
    left: 50%;
    z-index: 200;
    box-sizing: border-box;
    width:600px;
    height:fit-content;
    max-width: 100%;display: flex
;
    justify-content: space-between;
  
    padding:10px 16px;
    background-color:white;

`
function Login() {
   
  
    return (

      <Gray_background>
       <Header_login>
        <div>로그인/회원가입</div>
       </Header_login>
        <Login_main>
            
                <LOGO>
                    <Musinsa29cmLogo/>
                    <div>무신사, 29CM를 하나의 계정으로 로그인하세요.</div>
                </LOGO>
        <Input>
        <ID_Box>
          <ID placeholder="통합계정 또는 이메일" type="text"/>
          </ID_Box>
          <ID_Box>
            <PassWord  placeholder="비밀번호" type="password"/>
          </ID_Box>
          <Login_button>
            로그인
          </Login_button>
          <Gray_text>
            <Find>
            <input type="checkbox"></input>
            <Margin>자동로그인</Margin>
            </Find>
            <Find>
            <FindID>아이디 찾기</FindID>
            <Margin>비밀번호</Margin>
            </Find>
          </Gray_text>

          <Button_box >
            <Kakao_Button>
              <Kakao/>
              <span>카카오 시작하기</span>
            </Kakao_Button>

             <Apple_Button>
              <Apple_logo/>
              <span>Apple로 시작하기</span>
            </Apple_Button>
            <Signup_button>
              <div>신규 가입 즉시 할인 쿠폰 지급</div>
              <Signup_button_span>
                <StyledLink  to = "/signup">이메일 회원가입</StyledLink></Signup_button_span>

            </Signup_button>

          </Button_box>
        </Input>
        </Login_main>
        <Login_footer>
          <Guest>비회원으로 주문하셨나요?</Guest>
          <Guest_order>비회원 주문조회</Guest_order>
        </Login_footer>

      </Gray_background>
   
    );
  }
  
  export default Login;