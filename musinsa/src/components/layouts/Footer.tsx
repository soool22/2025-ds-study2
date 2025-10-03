import React from 'react'
import styled from 'styled-components';
import {More,BrandLogoImg,
    Final1, Want_to_see_whole,
    Custom, Korea, StyledP, Img_logos, Logo_box, Final2, Final2_1, Ago, Notice, Final2_2, Sorts, Sorts_banks, Sale_percent, Img_bank, Bank_logo_img, Bank_box, Banks, Category_title,
    StyledLi, StyledUl, Customer_center, Img_ISMS, Company, MusinsaAllRight, Company_info, Return, Rule,

} from '../../style/BrandDetail'
;
function Footer(){
const BrandLogos=[
    {id:1,
        imageUrl:'https://image.msscdn.net/display/images/common/2025/08/21/e7237db6da8441e19754ed65c03ae447.png',   
    },
    {
        id:2,
        imageUrl:'https://image.msscdn.net/display/images/common/2025/08/21/de2418654d7543709c5ceafbdff3059e.png',   
    },
    {
        id:3,
        imageUrl:'https://image.msscdn.net/display/images/common/2025/08/21/dc5cf6bdf73645e08f6bc1d77421e2a7.png',
    },
    {
        id:4,
        imageUrl:'https://image.msscdn.net/display/images/common/2025/08/21/5d5dcb80b54e4879aa524dbc51fdcaaf.png'
    },
    {id:5,
        imageUrl:'https://image.msscdn.net/display/images/common/2025/08/21/6c52dcb38f0e44e5ae53fde2a1c1c812.png',
    },{
        id:6,
        imageUrl:'https://image.msscdn.net/display/images/common/2025/08/21/84bd757ccedc4963b16c7fe55787ff68.png'
    },{
        id:7,
        imageUrl:'https://image.msscdn.net/display/images/common/2025/08/21/b3bcc96e723a4b95a17124b9e7ad8cb8.png',

    },
    {id:8
        ,imageUrl:'https://image.msscdn.net/display/images/common/2025/08/21/b5301e3cbf754ab6b97f4890b85e5cac.png'
    }

];
 const Logos = [
    {
      id: 1,
      imageUrl: "https://image.msscdn.net/display/images/common/2025/07/23/f3f618117fcf4984b337b7c506f110f0.png",
    },
    {
      id: 2,
      imageUrl: "https://image.msscdn.net/display/images/common/2025/07/23/8e948a203d0047d4b747e7574abcb96b.png",
    },
    {
      id: 3,
      imageUrl: "https://image.msscdn.net/display/images/common/2025/07/23/a5710e6970814e5a90c929d203a1b7bf.png",
    },
    {
      id: 4,
      imageUrl: "https://image.msscdn.net/display/images/common/2025/07/23/580e26d7942b4363b9a22f19ed788de4.png",
    },
    {
      id: 5,
      imageUrl: "https://image.msscdn.net/display/images/common/2025/07/23/f74ff83a950f4e66a63a14361d6fdf5c.png",
    },
    {
      id: 6,
      imageUrl: "https://image.msscdn.net/display/images/common/2025/07/23/a4b8764bf0074cb2864e2dc893e491fc.png",
    },
    {
      id: 7,
      imageUrl: "https://image.msscdn.net/display/images/common/2025/07/23/086bdcddb4f44ec8ae860c9a62f4e3d3.png",
    },
    {
      id: 8,
      imageUrl: "https://image.msscdn.net/display/images/common/2025/07/23/a70baa736f2f4992ad2d26f7f6831c8b.png",
    },
  ];
  const BANKS = [
    {
      id: 1,
      url: "https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-hyundai.png",
      title: "무신사페이 x 무신사 현대카드",
      sale_percent: "10만원 이상 결제 시 1만원 할인",
    },
    {
      id: 2,
      url: "https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-toss.png",
      title: "토스페이 × 계좌",
      sale_percent: "12만원 이상 결제 시 6천원 할인",
    },
    {
      id: 3,
      url: "https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-toss.png",
      title: "토스페이 × 삼성카드",
      sale_percent: "5만원 이상 결제 시 6천원 할인",
    },
    {
      id: 4,
      url: "https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-kakaopay.png",
      title: "카카오페이 × 페이머니",
      sale_percent: "10만원 이상 결제 시 5천원 할인",
    },
    {
      id: 5,
      url: "https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-samsung.png",
      title: "무신사페이 × 삼성카드",
      sale_percent: "12만원 이상 결제 시 5천원 할인",
    },
  ];

  const ISMS='https://image.msscdn.net/display/images/common/2025/07/23/7504acfb7ec8432ea672a8284e9dabb7.png';
const Logo='https://image.msscdn.net/thumbnails/images/brand/white_logo_img/costumeoclock.svg?fit=without_padding&ts=20230608174403';


return(
        
<div>
    
    
    <Final2>
        <Final2_1>
        {Logos.map((logo) => (
       
        <Logo_box key={logo.id}>
          <Img_logos src={logo.imageUrl} alt={`로고 이미지 ${logo.id}`} />
        </Logo_box>
      ))}
           
        </Final2_1>
        <Final2_2>
            <Sorts>
               <Notice>공지사항</Notice>
                <More>전체보기</More>
            </Sorts>
            <Sorts>
                <span>우체국 배송 서비스 일시 중단 안내</span>
                <Ago>11시간 전</Ago>
            </Sorts>
            <Sorts>
                <span>개인정보 보호 및 자사몰,직거래 유도 주의 안내</span>
                <Ago>4일 전</Ago>
            </Sorts>
            <Sorts>
                <span>네이버페이 결제 서비스 종료 안내</span>
                <Ago>6일 전</Ago>
            </Sorts>
        </Final2_2>
        <Final2_2>
            <Sorts>
               <Notice>결제 해택</Notice>
                <More>전체보기</More>
            </Sorts>
            
            {BANKS.map((bank) => (
        <Sorts_banks key={bank.id}>
          <Img_bank src={bank.url} alt={bank.title} />
          <span>{bank.title}</span>
          <Sale_percent>{bank.sale_percent}</Sale_percent>
        </Sorts_banks>
      ))}
      <Banks >
          {BrandLogos.map((BrandLogo)=>(
 
 <Bank_box key={BrandLogo.id}>
     <Bank_logo_img src={BrandLogo.imageUrl}/>
 </Bank_box>


          ))}
           </Banks>

        </Final2_2>
        <Final2_2>
            <StyledUl>
            <StyledLi>
                <Category_title>어바웃 무신사</Category_title>
                <div>회사 소개</div>
                <div>비즈니스 소개</div>
                <div>지속 가능성</div>
                <div>뉴스룸</div>
                <div>채용 정보</div>
            </StyledLi>
            <StyledLi>
                <Category_title>오프라인 스토어</Category_title>
                <div>무신사 스토어</div>
                <div>무신사 스탠다드</div>
                <div>29CM</div>
                <div>무신사 엠프티</div>
                <div>무신사 스퀘어</div>
                <div>무신사 뷰티</div>
                <div>무신사 테라스</div>
                <div>아즈니섬</div>
            </StyledLi>
            <StyledLi>
                <Category_title>비즈니스</Category_title>
                <div>29CM</div>
                <div>솔드아웃</div>
                <div>엠프티</div>
                <div>무신사 파트너스</div>
                <div>무신사 스튜디오</div>
                <div>무신사 트레이딩</div>
                <div>무신사 로지스틱스</div>
                
            </StyledLi>
            <StyledLi>
                <Category_title>파트너 지원</Category_title>
                <div>입점 문의</div>
                <div>광고/제휴 문의</div>
                <div>협찬 문의</div>
                <div>공동/대량 구매 문의</div>
                <div>제조/생산 문의</div>
                <div>이미지/저작권 문의</div>
            
            </StyledLi>
            <StyledLi>
                <Category_title>고객지원</Category_title>
                <div>1:1 문의하기</div>
                <div>FAQ 자주 묻는 질문</div>
                <div>안전 거래 센터</div>
                <Customer_center>
                    <span>
                        고객센터 1544-7199
                    </span>
                    <span>운영시간 :  평일 06:00-18:00(점심시간 12:00-13:00제외)</span>
                    <More>cs@musinsa.com</More>
                </Customer_center>
            </StyledLi>
</StyledUl>
        </Final2_2>

        <Final2_2>
            <Company>
            <MusinsaAllRight>
            © MUSINSA ALL RIGHTS RESERVED
            </MusinsaAllRight>
            <Company_info>
            (주) 무신사 | 대표자 : 조만호, 박준모 | 주소 : 서울특별시 성동구 아차산로 13길 11, 1층 (성수동2가, 무신사캠퍼스 엔1) ) | 호스팅사업자 : (주)무신사 | 통신판매업 : 2022-서울성동-01952 | 사업자등록번호 : 211-88-79575(사업자정보확인)
            </Company_info>
            <div>
            당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. 서비스 가입사실 확인
            </div>
            <Return>
            일부 상품의 경우 주식회사 무신사는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
            </Return>
            <Rule>
            <span>개인정보처리방침</span>·<span>이용약관·</span><span>결제대행 위탁사</span>·<span>분쟁해결기준·</span><span>영상정보처리기기 운영</span>·<span>관리방침</span> 
            </Rule>
            <Rule>
            <span>윤리</span>·<span>준법경영 국제 표준 통합 인증</span>·<span>안전보건경영시스템 국제 인증</span>
            </Rule>
            <Rule>
                <Img_ISMS src={ISMS} />
                <span>정보보호 관리체계 ISMS 인증</span>
                </Rule>
                
</Company>
        </Final2_2>

    </Final2>

</div>

)
}

export default Footer;