import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from "../layouts/Header";
import { ReactComponent as HeartIcon } from '../../img/heartIcon.svg';
import { ReactComponent as SearchIcon } from '../../img/searchIcon.svg';
import Footer from "../layouts/Footer";
import {Body,Brand_nav,BrandLogoButton,Snap_price,BrandLogoImg,LookBook,BrandAddLike,BrandLikeImg,BrandSearch,BrandSearchImg,BrandCategory,
    NewFits ,NewFit ,NewFitImg ,NewFitSpan ,LikeAndSearch 
    ,BrandTitle,BrandInfo,Main,SortBrandinfo,InfoBox,InfoBoxs,
    BrandProductSearch,Tags,Article_B,Article_tags,Tags2,Choose,
    Perticle_scroll,Margin,Articles_fit,Perticles,Perticles_TAGS, Perticle, Fit_img, Fit_info, Price, Sale,
    Article_title, Title_alone, More, Date, Between, Importent_idea, Img_info, Snap_info,
    Whiole_info, Wholefit_img, Whole_fit_per, Gender, Original_box, Original, Red_heart, Perticle_whole, 
    Final1, Want_to_see_whole,
    Custom, Korea, StyledP, Img_logos, Logo_box, Final2, Final2_1, Ago, Notice, Final2_2, Sorts, Sorts_banks, Sale_percent, Img_bank, Bank_logo_img, Bank_box, Banks, Category_title,
    StyledLi, StyledUl, Customer_center, Img_ISMS, Company, MusinsaAllRight, Company_info, Return, Rule,

} from '../../style/BrandDetail'; 
import { BRANDS_DATA } from '../../data/brandData';
import { ReactComponent as RedHeartIcon } from '../../img/redHeart.svg';



  const StyledHeartIcon = styled(HeartIcon)`
  width: 28px;
  height: 28px;
`;
const StyledsearchIcon = styled(SearchIcon)`
width: 28px;
height: 28px;
`;
const IMG_SUBSNAP=styled.img`
width:48px;
height:70px;
`
const BIG_DIV = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; 
`;
  const BrandDetail=()=>{
    const FIT_INFOMATIONS = [
        {
          id: 1,
          imageUrl: 'https://image.msscdn.net/campaign_service/images/plan/2025/0c3ea0363f9448a9b4071f2702be569f.jpg',
          title: '25FW MAN 3차 신상',
        },
        {
            id: 2,
            imageUrl: 'https://image.msscdn.net/campaign_service/images/plan/2025/b1fa03cfbc6c413689c20744dc3674cc.JPG',
            title: '우먼 인플루언서 PICK',
          },
          {
            id: 3,
            imageUrl: 'https://image.msscdn.net/display/images/2025/09/26/314e50c83cc8488ea971e04ad3cee100.jpg',
            title: '옷미새 미홀 PICK 신상',
          },
          {
            id: 4,
            imageUrl: 'https://image.msscdn.net/display/images/2025/09/26/314e50c83cc8488ea971e04ad3cee100.jpg',
            title: '옷미새 미홀 PICK 신상',
          },
          {
            id: 5,
            imageUrl: 'https://image.msscdn.net/display/images/2025/09/30/c7bca26de64c439aab1c6c75ccf6818a.jpg',
            title: '추석빅세일 카테고리 특별전',
          },
    ];
     const FITS = [
        {
          id: 1,
          imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=1000',
          name: '[삭형 PICK] [2PACK] 소프트 베이직 가디건 COOSCD001CD020CD021 상품상세로 이동',
          price: 49900,
          sale: 58
            
        },
        {
            id:2,
            imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20250204/4757327/4757327_17389077818389_big.jpg?w=1000',
            name:'[삭형 PICK] [2PACK] 소프트 라운드 가디건',
            price:44900,
            sale: 24
        
        },
        {
            id:3,
            imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20250204/4757327/4757327_17389077818389_big.jpg?w=1000',
            name:'[삭형 PICK] [2PACK] 소프트 베이직 라운드 가디건 차콜',
            price:44900,
            sale: 24
        
        },
        {
            id:4,
            imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462373/5462373_17586758213397_big.jpg?w=1000',
            name:'코튼 커브드 워시드 블루종 자켓 블랙 COOSJK042BLACK',
            price:86200,
            sale: 23
        
        },
        {
    id:5,
    imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20170313/498040/498040_17399299481276_big.jpg?w=1000',
    name:'[리뉴얼ver.] 소프트 베이직 브이넥 가디건 블랙 COOSCD001BLACK',
    price:44900,
    sale: 24
},        {
    id:6,
    imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20210928/2150099/2150099_17171222213401_big.jpg?w=1000',
    name:'[2PACK] 에센셜 코튼 베이직 3 스타일 니트 COOSKT025',
    price:41300,
    sale: 65
},
{
    id:7,
    imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20240911/4433343/4433343_17592893001197_big.jpg?w=1000',
    name:'[데일리룸 PICK] 하찌 라운드 헤비 니트 풀오버 11 COLOR COOSKT066',
    price:43400,
    sale: 30
},

    ];
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

const Brand_Header=styled.div`
width:100%;  position: sticky;
top: 0; 
`
 // BRANDS_DATA 배열에서 첫 번째 브랜드 데이터를 가져옵니다.
  // 만약 다른 브랜드를 선택해야 한다면, id 등을 통해 해당 브랜드 데이터를 찾아야 합니다.
  const brand = BRANDS_DATA[0];

  // 사용할 'featured' 섹션 데이터를 변수에 할당합니다.
  const featuredItems = brand.sections.featured;
  const RankingItems=brand.sections.ranking;
  const newArrivalsItems = brand.sections.newArrivals;
const exclusiveItems =brand.sections.exclusive;
const tagsData = brand.sections.tags;
const exhibitionsData = brand.sections.exhibitions;
const lookbookItem = brand.sections.lookbook;
const snapItems=brand.sections.snap;
const allProductsItems=brand.sections.allProducts;

  // 가격을 원화(KRW) 형식으로 포맷하는 함수 (예: 49900 -> 49,900)
  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };


  return (
   <BIG_DIV>
    <Body>  <Brand_Header>
         
       
    <Brand_nav>
        <BrandLogoButton>
        <BrandLogoImg src={Logo}/>
          
          
        </BrandLogoButton>
        <LikeAndSearch>
        <BrandAddLike>
        
        <StyledHeartIcon />
        </BrandAddLike>
        <BrandSearch>
     <StyledsearchIcon/>
        </BrandSearch>
</LikeAndSearch>
</Brand_nav>
<BrandCategory>
    <div>홈</div>
    <div>콘텐츠</div>
    <div>전체</div>
    <div>상의</div>
    <div>아우터</div>
    <div>바지</div>
    <div>가방</div>
    <div>원피스/스커트</div>
    <div>신발</div>
    <div>아울렛</div>
    <div>기획전</div>
</BrandCategory>
</Brand_Header>




<Main>
<BrandInfo>
<BrandTitle>
    <div>COSTUME O’CLOCK</div>
    <SortBrandinfo>
    <div>커스텀어클락</div>
    <span>단독</span>
    <span>Since 2010</span>
    </SortBrandinfo>
</BrandTitle>
<InfoBoxs>
<InfoBox>
    <span>19.8만</span>
</InfoBox>
<InfoBox>
    <span>스냅 프로필</span>
</InfoBox>
<InfoBox>
    <span>브랜드 정보</span>
</InfoBox>
</InfoBoxs>

    </BrandInfo>
    <NewFits>
      
         {/* featuredItems 배열을 map 함수로 순회하며 각 아이템을 렌더링합니다. */}
         {featuredItems.map((item) => (
          <NewFit key={item.id} >
            <NewFitImg src={item.imageUrl} alt={item.title} />
            <NewFitSpan>{item.title}</NewFitSpan>
          </NewFit>
        ))}
    </NewFits>
<article className="article_A">
    <BrandProductSearch>
        <div>커스텀어클락</div>
        <span>브랜드 상품 검색</span>
    </BrandProductSearch>
    <Tags>
        <span>#WINTER</span>
        <span>#SWEAT</span>
        <span>#WOMAN</span>
        <span>#25FW</span>
        <span>#FALL</span>
        <span>#2PACK</span>
    </Tags>

</article>
<Article_B>
    <Article_tags>
        <Choose>실시간 랭킹</Choose>
        <span>일간</span>
        <span>주간</span>
        <span>월간</span>
    </Article_tags >    
    <Articles_fit>
        <Perticle_scroll>
            <Margin></Margin>
            <Perticles>
                {RankingItems.map((item)=>(
                      <Perticle key={item.id}>
                           <Fit_img src={item.imageUrl}/>
                           <Fit_info>
                           <span>{item.name}</span>
                           <Price>
                           <Sale>{item.salePercent}%</Sale>
                           <span>{item.price}원</span>
                           </Price>
                           </Fit_info>
                      </Perticle>
                ))}

            
    </Perticles>
    <Margin></Margin>
    </Perticle_scroll>
    </Articles_fit>

</Article_B>

<Article_B>
    <Article_title>
        <span>신상품</span>
        <More>더보기</More>
    </Article_title>
    <Articles_fit>
        <Perticle_scroll>
        <Margin></Margin>
            <Perticles>
                {newArrivalsItems.map((item)=>
                    <Perticle key={item.id}>
                    <Fit_img src={item.imageUrl}/>
                    <Fit_info>
                    <span>{item.name}</span>
                    <Price>
                    <Sale>{item.salePercent}%</Sale>
                    <span>{item.price}원</span>
                    </Price>
                    </Fit_info>
                    </Perticle>
                )}

        
    </Perticles>
    <Margin></Margin>
        </Perticle_scroll>
    </Articles_fit>
  
</Article_B>

<Article_B>
    <Article_title>
        <span>단독 상품</span>
        <More>더보기</More>
    </Article_title>
    <Articles_fit>
        <Perticle_scroll>
            <Margin></Margin>
            <Perticles>
                {exclusiveItems.map((item)=>(
                     <Perticle key={item.id}>
                     <Fit_img src={item.imageUrl}/>
                     <Fit_info>
                     <span>{item.name}</span>
                     <Price>
                     <Sale>{item.salePercent}%</Sale>
                     <span>{item.price}원</span>
                     </Price>
                     </Fit_info>
             </Perticle>
                ))}

             
            
    </Perticles>
    <Margin></Margin>
    </Perticle_scroll>
    </Articles_fit>
  
</Article_B>

<Article_B>

        <Title_alone>#TAGS</Title_alone>
        <Tags2>
        <Choose>#WINTER</Choose>
        <span>#SWEAT</span>
        <span>#WOMAN</span>
        <span>#25FW</span>
        <span>#FALL</span>
        <span>#2PACK</span>
    </Tags2>    

    <Articles_fit>
        <Perticle_scroll>
        <Margin></Margin>
            <Perticles_TAGS>
                {tagsData.products.map((product)=>(
                
                    <Perticle key={product.id}>
                    <Fit_img src={product.imageUrl}/>
                    <Fit_info>
                    <span>{product.name}</span>
                    <Price>
                    <Sale>{product.salePercent}%</Sale>
                    <span>{product.price}원</span>
                    </Price>
                    </Fit_info>
            </Perticle>
                ))}    


        
    </Perticles_TAGS>
    <Margin></Margin>
    </Perticle_scroll>
    </Articles_fit>
  
</Article_B>

<Article_B>
<Title_alone>
    <span>주요기획전</span>
   </Title_alone>
{exhibitionsData.map((exhibition) => (
    <div>

   <Importent_idea>
   <div>{exhibition.title}</div>
   <Between>
       <Date>{exhibition.date}</Date>
<More>더보기</More>
</Between>
</Importent_idea>

<Articles_fit>
<Perticle_scroll>
<Margin></Margin>
    <Perticles>
    {exhibition.products.map((product) => (
          <Perticle key={product.id}>
          <Fit_img src={product.imageUrl}/>
          <Fit_info>
          <span>{product.name}</span>
          <Price>
          <Sale>{product.salePercent}%</Sale>
          <span>{product.price}원</span>
          </Price>
          </Fit_info>
  </Perticle>
 
    ))}


</Perticles>
<Margin></Margin>
</Perticle_scroll>
</Articles_fit>
</div>
))}
   
   

  
  
  
</Article_B>

<Article_B>
    <Article_title>
        <span>룩북</span>
        <More>더보기</More>
    </Article_title>
    <Articles_fit>
        <Perticle_scroll>
        <Margin></Margin>
            <Perticles>
                {lookbookItem.map((item)=>(
                     <Perticle key={item.id}>
                     <Fit_img src={item.imageUrl}/>
                     <Fit_info>
                     <span>{item.title}</span>
                    <LookBook>
                        <span>{item.content}</span>
                        <span>{item.date}</span>
                    </LookBook>
                     </Fit_info>
             </Perticle>
                ))}
          

    </Perticles>
    <Margin></Margin>
    </Perticle_scroll>
    </Articles_fit>
  
</Article_B>

<Article_B>
    <Article_title>
        <span>스냅</span>
        <More>더보기</More>
    </Article_title>
    <Articles_fit>
        <Perticle_scroll>
        <Margin></Margin>
            <Perticles>
                {snapItems.map((item)=>(
  <Perticle key={item.id}>
  <Fit_img src={item.mainImageUrl}/>
  
  <Snap_price>

  <IMG_SUBSNAP src={item.subImageUrl}></IMG_SUBSNAP>
  <Fit_info>
  <span>{item.title}</span>
  <Price>
  <Sale>{item.salePercent}%</Sale>
  <span>{item.price}원</span>
  </Price>  
  </Fit_info>
  </Snap_price>

</Perticle>
                ))}

          

    </Perticles>
    <Margin></Margin>
    </Perticle_scroll>
    </Articles_fit>
  
</Article_B>

<Article_B>

        <Title_alone>전체 상품</Title_alone>
        <Whiole_info>
        <Tags2>
        <Choose>전체</Choose>
        <span>상의</span>
        <span>아우터</span>
        <span>바지</span>
        <span>가방</span>
        <span>원피스/스커트</span>
        <span>
            신발
        </span>
        </Tags2>
        <More>더보기</More>
    </Whiole_info >    

    <Articles_fit>
        <Perticle_scroll>
            <Whole_fit_per>
           {allProductsItems.map((item)=>
        (
            <Perticle_whole key={item.id}>
            <Wholefit_img src={item.imageUrl}/>
            <Fit_info>
            <span>{item.name}</span>
            <Price>
            <Sale>{item.salePercent}%</Sale>
            <span>{item.price}원</span>
            </Price>
            
    <Red_heart>
        <RedHeartIcon   style={{ width: '12px', padding:'2px 0 0 0',height: '12px' }} />
    1
    </Red_heart>
    <Original_box>
        <Original>NEW</Original>
        <Original>단독</Original>
    </Original_box>
    <Gender>{item.gender}</Gender>
            </Fit_info>
    </Perticle_whole>
        ))}
         
          
       


  </Whole_fit_per>
    </Perticle_scroll>
    </Articles_fit>
  
</Article_B>


</Main>
<Final1>
        <Want_to_see_whole>상품 전체보기</Want_to_see_whole>
        
            <BrandLogoImg src={Logo}/>
            <Custom>커스텀어클락</Custom>
           
                <Korea>한국 Since 2010</Korea>
            <StyledP>커스텀어클락(COSTUME O’CLOCK)은 위트 있는 클래식과 캐주얼의 밸런
            <tr/>스를 중점으로 일상적인 아이템 속에 미니멀한 감성을 담는 시티 포멀 웨어를
            <tr/>제공하는 브랜드입니다.</StyledP>
      
        
    </Final1>
    <Footer/>
</Body></BIG_DIV>



  );
  };

// 오류 수정
  export default BrandDetail;
