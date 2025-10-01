import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import "../../style/BrandDetail.css"; 
import styled from 'styled-components';

interface Brand {
    id: number;
    name: string;
    description: string;
    imageUrl: string;

  }

  const BrandDetail=()=>{





  return (
    //헤더들어오기
    <div>
    <div className="Brand_nav">
        <button className="Brand_logo_button">
            <img className="Brand_logo_img" src="https://image.msscdn.net/thumbnails/images/brand/white_logo_img/costumeoclock.svg?fit=without_padding&ts=20230608174403"/>

        </button>
        <div>
        <div className="Brand_add_like">
        
            <img className="brand_like_img" src="M9.79493 16.3061C9.91046 16.4154 10.0895 16.4154 10.2051 16.3061C11.1045 15.4553 14.7235 12.0265 16.25 10.5C16.8895 9.85325 17.5 8.75 17.5 7.5C17.5 5.34156 15.8342 3.5 13.75 3.5C11.9105 3.5 11 4.99545 10 6.25C9 4.99545 8.08947 3.5 6.25 3.5C4.16579 3.5 2.5 5.34156 2.5 7.5C2.5 8.75 3.11053 9.85325 3.75 10.5C5.27651 12.0265 8.89549 15.4553 9.79493 16.3061Z"/>
        </div>
        <div className="Brand_search">
            <img className="Brand_search_img" src="../../../img/search.svg"/>
        </div>
</div>
</div>
<div className="Brand_category">
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
</div>





<main>
<div className="Brand_info">
<div className="Brand_title">
    <div>COSTUME O’CLOCK</div>
    <div className="sort_Brandinfo">
    <div>커스텀어클락</div>
    <span>단독</span>
    <span>Since 2010</span>
    </div>
</div>
<div className="info_boxs">
<button className="info_box">
    <span>19.8만</span>
</button>
<button className="info_box">
    <span>스냅 프로필</span>
</button>
<button className="info_box">
    <span>브랜드 정보</span>
</button>
</div>

    </div>
<div className="new_fits">
    <div className="new_fit">
        <img className="new_fit_img" src="https://image.msscdn.net/campaign_service/images/plan/2025/0c3ea0363f9448a9b4071f2702be569f.jpg"/>
        <span>25FW MAN 3차 신상</span>
    </div>
    <div className="new_fit">
        <img className="new_fit_img" src="https://image.msscdn.net/campaign_service/images/plan/2025/b1fa03cfbc6c413689c20744dc3674cc.JPG"/>
        <span>우먼 인플루언서 PICK</span>
    </div>
    <div className="new_fit">
        <img className="new_fit_img" src="https://image.msscdn.net/display/images/2025/09/26/314e50c83cc8488ea971e04ad3cee100.jpg"/>
        <span>옷미새 미홀 PICK 신상</span>
    </div>
</div>
<article className="article_A">
    <div className="brand_product_search">
        <div>커스텀어클락</div>
        <span>브랜드 상품 검색</span>
    </div>
    <div className="tags">
        <span>#WINTER</span>
        <span>#SWEAT</span>
        <span>#WOMAN</span>
        <span>#25FW</span>
        <span>#FALL</span>
        <span>#2PACK</span>
    </div>

</article>
<article className="article_B" id="실시간랭킹">
    <div className="article_tags">
        <span id="choose">실시간 랭킹</span>
        <span>일간</span>
        <span>주간</span>
        <span>월간</span>
    </div >    
    <div className="articles_fit">
        <div className="perticle_scroll">
            <div className="margin"></div>
            <div className="perticles">
            <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="margin"></div>
    </div>
    </div>

</article>

<article className="article_B" id="신상품">
    <div className="article_title">
        <span>신상품</span>
        <span id="more">더보기</span>
    </div>
    <div className="articles_fit">
        <div className="perticle_scroll">
            <div className="margin"></div>
            <div className="perticles">
        <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="margin"></div>
    </div>
    </div>
  
</article>

<article className="article_B" id="단독상품">
    <div className="article_title">
        <span>단독 상품</span>
        <span id="more">더보기</span>
    </div>
    <div className="articles_fit">
        <div className="perticle_scroll">
            <div className="margin"></div>
            <div className="perticles">
        <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="margin"></div>
    </div>
    </div>
  
</article>

<article className="article_B" id="TAGS">

        <span className="title_alone">#TAGS</span>
        <div className="article_tags" id="tags2">
        <span id="choose">#WINTER</span>
        <span>#SWEAT</span>
        <span>#WOMAN</span>
        <span>#25FW</span>
        <span>#FALL</span>
        <span>#2PACK</span>
    </div >    

    <div className="articles_fit">
        <div className="perticle_scroll">
            <div className="margin"></div>
            <div className="perticles_TAGS">
        <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
        <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="margin"></div>
    </div>
    </div>
  
</article>

<article className="article_B" id="주요기획전">
    <div className="title_alone">
        <span>주요 기획전</span>
    </div>
    <div className="importent_idea">
        <div>커스텀어클락 25FW 3차 신상</div>
        <div className="between">
            <span className="date">25.09.29 - 25.10.13</span>
    <span id="more">더보기</span>
    </div>
</div>
    <div className="articles_fit">
        <div className="perticle_scroll">
            <div className="margin"></div>
            <div className="perticles">
        <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="margin"></div>
    </div>
    </div>
    <div className="importent_idea">
        <div>커스텀어클락 우먼 인플루언서 추천</div>
        <div className="between">
            <span className="date">25.09.28 - 25.10.13</span>
    <span id="more">더보기</span>
    </div>
</div>
    <div className="articles_fit">
        <div className="perticle_scroll">
            <div className="margin"></div>
            <div className="perticles">
        <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="margin"></div>
    </div>
    </div>
  
</article>

<article className="article_B" id="룩북">
    <div className="article_title">
        <span>룩북</span>
        <span id="more">더보기</span>
    </div>
    <div className="articles_fit">
        <div className="perticle_scroll">
            <div className="margin"></div>
            <div className="perticles">
        <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="margin"></div>
    </div>
    </div>
  
</article>

<article className="article_B" id="스냅">
    <div className="article_title">
        <span>스냅</span>
        <span id="more">더보기</span>
    </div>
    <div className="articles_fit">
        <div className="perticle_scroll">
            <div className="margin"></div>
            <div className="perticles">
        <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="snap_info">
<img className="img_info" src="https://image.msscdn.net/images/goods_img/20250821/5351750/5351750_17563436473643_500.jpg"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="snap_info">
<img className="img_info" src="https://image.msscdn.net/images/goods_img/20250821/5351750/5351750_17563436473643_500.jpg"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="snap_info">
<img className="img_info" src="https://image.msscdn.net/images/goods_img/20250821/5351750/5351750_17563436473643_500.jpg"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>
    <div className="perticle">
            <img className="fit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
            <div className="snap_info">
<img className="img_info" src="https://image.msscdn.net/images/goods_img/20250821/5351750/5351750_17563436473643_500.jpg"/>
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>
            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>
            </div>
    </div>
    </div>


    </div>
    <div className="margin"></div>
    </div>
    </div>
  
</article>

<article className="article_B" id="TAGS">

        <span className="title_alone">전체 상품</span>
        <div className="whiole_info">
        <div className="article_tags" id="tags2">
        <span id="choose">전체</span>
        <span>상의</span>
        <span>아우터</span>
        <span>바지</span>
        <span>가방</span>
        <span>원피스/스커트</span>
        <span>
            신발
        </span>
        </div>
        <span id="more">더보기</span>
    </div >    

    <div className="articles_fit">
        <div className="perticle_scroll">
    
            <div id="whole_fit_per">
            <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    <div className="perticle_whole">
            <img className="_wholefit_img" src="https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780"/>
           
            <div className="fit_info">
            <span>[2PACK] 소프트 베이직 가디건 </span>

            <div className="price">
            <span className="sale">58%</span>
            <span>49,900원</span>
            </div>

            <div className="red_heart">
            1
            </div>
            <div className="original_box">
                <span className="original">NEW</span>
                <span className="original">단독</span>
            </div>
            <div className="female">여성</div>
            </div>
    </div>
    </div>
    </div>
    </div>
  
</article>


</main>
    
<div>
    <div className="final1">
        <div className="want_to_see_whole">상품 전체보기</div>
        
            <img className="Brand_logo_img" src="https://image.msscdn.net/thumbnails/images/brand/white_logo_img/costumeoclock.svg?fit=without_padding&ts=20230608174403"/>
            <span className="custom">커스텀어클락</span>
           
                <span className="korea">한국 Since 2010</span>
            <p>커스텀어클락(COSTUME O’CLOCK)은 위트 있는 클래식과 캐주얼의 밸런
            <tr/>스를 중점으로 일상적인 아이템 속에 미니멀한 감성을 담는 시티 포멀 웨어를
            <tr/>제공하는 브랜드입니다.</p>
      
        
    </div>
    
    <div className="final2">
        <div className="final2_1">
            <span className="logo_box">
                <img className="img_logos" src="https://image.msscdn.net/display/images/common/2025/07/23/f3f618117fcf4984b337b7c506f110f0.png"/>
            </span>
            <span className="logo_box">
                <img className="img_logos" src="https://image.msscdn.net/display/images/common/2025/07/23/8e948a203d0047d4b747e7574abcb96b.png"/>
            </span>
            <span className="logo_box">
                <img className="img_logos" src="https://image.msscdn.net/display/images/common/2025/07/23/a5710e6970814e5a90c929d203a1b7bf.png"/>
            </span>
            <span className="logo_box">
                <img className="img_logos" src="https://image.msscdn.net/display/images/common/2025/07/23/580e26d7942b4363b9a22f19ed788de4.png"/>
            </span>
            <span className="logo_box">
                <img className="img_logos" src="https://image.msscdn.net/display/images/common/2025/07/23/f74ff83a950f4e66a63a14361d6fdf5c.png"/>
            </span>
            <span className="logo_box">
                <img className="img_logos" src="https://image.msscdn.net/display/images/common/2025/07/23/a4b8764bf0074cb2864e2dc893e491fc.png"/>
            </span>
            <span className="logo_box">
                <img className="img_logos" src="https://image.msscdn.net/display/images/common/2025/07/23/086bdcddb4f44ec8ae860c9a62f4e3d3.png"/>
            </span>
            <span className="logo_box">
                <img className="img_logos" src="https://image.msscdn.net/display/images/common/2025/07/23/a70baa736f2f4992ad2d26f7f6831c8b.png"/>
            </span>
        </div>
        <div className="final2_2">
            <div className="sorts">
               <span className="Notice">공지사항</span>
                <span id="more">전체보기</span>
            </div>
            <div className="sorts">
                <span>우체국 배송 서비스 일시 중단 안내</span>
                <span id="ago">11시간 전</span>
            </div>
            <div className="sorts">
                <span>개인정보 보호 및 자사몰,직거래 유도 주의 안내</span>
                <span id="ago">4일 전</span>
            </div>
            <div className="sorts">
                <span>네이버페이 결제 서비스 종료 안내</span>
                <span id="ago">6일 전</span>
            </div>
        </div>
        <div className="final2_2" id="결제 해택">
            <div className="sorts">
               <span className="Notice">결제 해택</span>
                <span id="more">전체보기</span>
            </div>
            
            <div className="sorts_banks">
                <img className="img_bank" src="https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-hyundai.png"/>
                <span>무신사페이 x 무신사 현대카드</span>
                <span id="sale_percent">10만원 이상 결제 시 1만원 할인</span>
            </div>
            <div className="sorts_banks">
            <img className="img_bank" src="https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-toss.png"/>
                <span>토스페이 × 계좌</span>
                <span id="sale_percent">12만원 이상 결제 시 6천원 할인</span>
            </div>
            <div className="sorts_banks">
            <img className="img_bank" src="https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-toss.png"/>

                <span>토스페이 × 삼성카드</span>
                <span id="sale_percent">5만원 이상 결제 시 6천원 할인</span>
            </div>
            <div className="sorts_banks">
            <img className="img_bank" src="https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-kakaopay.png"/>
                <span>카카오페이 × 페이머니</span>
                <span id="sale_percent">10만원 이상 결제 시 5천원 할인</span>
            </div>
            <div className="sorts_banks">
            <img className="img_bank" src="https://image.msscdn.net/musinsaUI/store/order/finance/28x28/logo-finance-samsung.png"/>
                <span>무신사페이 × 삼성카드</span>
                <span id="sale_percent">12만원 이상 결제 시 5천원 할인</span>
            </div>

            <div className="banks">
                <div className="bank_box">
                    <img className="bank_logo_img" src="https://image.msscdn.net/display/images/common/2025/08/21/e7237db6da8441e19754ed65c03ae447.png" />
                </div>
                <div className="bank_box">
                    <img className="bank_logo_img" src="https://image.msscdn.net/display/images/common/2025/08/21/de2418654d7543709c5ceafbdff3059e.png" />
                </div>
                <div className="bank_box">
                <img className="bank_logo_img" src="https://image.msscdn.net/display/images/common/2025/08/21/dc5cf6bdf73645e08f6bc1d77421e2a7.png"/>
                </div>
       
                <div className="bank_box">
                <img className="bank_logo_img" src="https://image.msscdn.net/display/images/common/2025/08/21/5d5dcb80b54e4879aa524dbc51fdcaaf.png"/>
                    </div>    
                    <div className="bank_box">
                <img className="bank_logo_img" src="https://image.msscdn.net/display/images/common/2025/08/21/6c52dcb38f0e44e5ae53fde2a1c1c812.png"/>

                </div>
                <div className="bank_box">
                  <img className="bank_logo_img"src="https://image.msscdn.net/display/images/common/2025/08/21/84bd757ccedc4963b16c7fe55787ff68.png"/>
                </div>
                <div className="bank_box">
                  <img className="bank_logo_img"src="https://image.msscdn.net/display/images/common/2025/08/21/b3bcc96e723a4b95a17124b9e7ad8cb8.png"/>
                </div>
                <div className="bank_box">
                  <img className="bank_logo_img"src="https://image.msscdn.net/display/images/common/2025/08/21/b5301e3cbf754ab6b97f4890b85e5cac.png"/>
                </div>
            </div>

        </div>
        <div className="final2_2">
            <div className="ul">
            <div className="li">
                <div id="category_title">어바웃 무신사</div>
                <div>회사 소개</div>
                <div>비즈니스 소개</div>
                <div>지속 가능성</div>
                <div>뉴스룸</div>
                <div>채용 정보</div>
            </div>
            <div className="li">
                <div id="category_title">오프라인 스토어</div>
                <div>무신사 스토어</div>
                <div>무신사 스탠다드</div>
                <div>29CM</div>
                <div>무신사 엠프티</div>
                <div>무신사 스퀘어</div>
                <div>무신사 뷰티</div>
                <div>무신사 테라스</div>
                <div>아즈니섬</div>
            </div>
            <div className="li">
                <div id="category_title">비즈니스</div>
                <div>29CM</div>
                <div>솔드아웃</div>
                <div>엠프티</div>
                <div>무신사 파트너스</div>
                <div>무신사 스튜디오</div>
                <div>무신사 트레이딩</div>
                <div>무신사 로지스틱스</div>
                
            </div>
            <div className="li">
                <div id="category_title">파트너 지원</div>
                <div>입점 문의</div>
                <div>광고/제휴 문의</div>
                <div>협찬 문의</div>
                <div>공동/대량 구매 문의</div>
                <div>제조/생산 문의</div>
                <div>이미지/저작권 문의</div>
            
            </div>
            <div className="li">
                <div id="category_title">고객지원</div>
                <div>1:1 문의하기</div>
                <div>FAQ 자주 묻는 질문</div>
                <div>안전 거래 센터</div>
                <span className="customer_center">
                    <span>
                        고객센터 1544-7199
                    </span>
                    <span>운영시간 :  평일 06:00-18:00(점심시간 12:00-13:00제외)</span>
                    <span id="more">cs@musinsa.com</span>
                </span>
            </div>
</div>
        </div>

        <div className="final2_2">
            <div className="company">
            <div className="MusinsaAllRight">
            © MUSINSA ALL RIGHTS RESERVED
            </div>
            <div className="company_info">
            (주) 무신사 | 대표자 : 조만호, 박준모 | 주소 : 서울특별시 성동구 아차산로 13길 11, 1층 (성수동2가, 무신사캠퍼스 엔1) ) | 호스팅사업자 : (주)무신사 | 통신판매업 : 2022-서울성동-01952 | 사업자등록번호 : 211-88-79575(사업자정보확인)
            </div>
            <div>
            당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. 서비스 가입사실 확인
            </div>
            <div className="return">
            일부 상품의 경우 주식회사 무신사는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
            </div>
            <div className="rule">
            <span>개인정보처리방침</span>·<span>이용약관·</span><span>결제대행 위탁사</span>·<span>분쟁해결기준·</span><span>영상정보처리기기 운영</span>·<span>관리방침</span> 
            </div>
            <div className="rule">
            <span>윤리</span>·<span>준법경영 국제 표준 통합 인증</span>·<span>안전보건경영시스템 국제 인증</span>
            </div>
            <div className="rule">
                <img className="img_ISMS" src=" https://image.msscdn.net/display/images/common/2025/07/23/7504acfb7ec8432ea672a8284e9dabb7.png"/>
                <span>정보보호 관리체계 ISMS 인증</span>
                </div>
                
</div>
        </div>

    </div>

</div>
</div>



  );
  };

// 오류 수정
  export default BrandDetail;
