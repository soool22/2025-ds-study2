import styled from 'styled-components';
/*NAV*/
export const Body = styled.div`
    max-width: 1440px;
    display: flex;
    flex-direction: column;
`

export const Brand_nav = styled.div`

    display: grid
;
    grid-template-columns: 1fr repeat(2, 28px);
    gap: 8px;
    padding: 0px 16px;
    align-items: center;
    height: 52px;
    background-color: rgb(42, 42, 42);
`


export const BrandLogoButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  border: none;
  background: none;
  cursor: pointer; /* button 태그 스타일 통합 */
`;

export const BrandLogoImg = styled.img`
  max-width: 60px;
  max-height: 28px;
  height: 22px;
  object-fit: contain;
`;

export const BrandAddLike = styled.div`
  display: flex;
  position: relative;
`;

export const BrandLikeImg = styled.img`
  display: block;
  vertical-align: middle;
`;

export const BrandSearch = styled.div`
  display: flex;
  position: relative;
`;

export const BrandSearchImg = styled.img`
  display: block;
  vertical-align: middle;
`;

export const BrandCategory = styled.div`
  padding: 12px 20px;color:#ffffff99;
    font-size: 14px;
  border-bottom: transparent;
  background-color: rgb(42, 42, 42);
  overflow: auto hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: row;    
  scrollbar-width: none;
  gap: 10px;
> div{
 cursor: pointer;
}
`;


//가장 위의 브랜드 정보
export const BrandTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: var(--max-width);
  font-weight: 500;
  box-sizing: border-box;
  padding: 24px 0 10px 0;
  font-size: 18px;
`;

export const BrandInfo = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 0 20px;

  
`;
export const LookBook =styled.div`
display:flex;
 flex-direction: column;
  align-items: start;

>span{
font-size:11px;
color:#666666;

}
`
export const Main = styled.main`
  background-color:#f5f5f5;
  flex: 1;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  width: 100%;

  margin: 0 auto;
`;

export const SortBrandinfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size:22px;
  font-weight:600;

  /* 자식 span 태그에 대한 스타일 */
  > span {
    background-color: #8a8a8a1a;
    border-radius: 5px;
    padding: 2px;
    font-size: 11px;  font-weight:400;
    justify-content: center;
    color:#666666;
  }
 
`;

export const InfoBox = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;
  width: 200px;
  height: 32px;
  display: flex; cursor: pointer;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

export const InfoBoxs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

/*큰 사진들 */
export const NewFits = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 20px 10px 20px;
    gap:4px;
    background-color: white;
    overflow-x: scroll;
    scrollbar-width: none;
`
export const NewFit= styled.div`
    display: flex;
    flex-direction: column;

`
export const NewFitImg=styled.img`
    width: 468px;
    height: 312px;
    border-radius: 4px;
    padding-bottom: 3px;
`

export const NewFitSpan  = styled.span`
    display: flex;
    font-weight: 600;
    align-items: start;
    font-size: 13px;
`
export const LikeAndSearch =styled.div`
    display: flex;
    flex-direction: row;
gap:7px;
`
/*아티클 A*/


export const BrandProductSearch = styled.div`
  margin: 12px 16px 8px;
  background-color: white;
  display: flex;
  flex-direction: row;
  font-size: 10px;
  border-radius: 2px;
  border: 1px solid rgba(128, 128, 128, 0.281);

  /* 자식 div 태그에 대한 스타일 */
  > div {
    background-color: rgba(220, 220, 220, 0.342);
    color: gray;
    margin: 5px;
    display: flex;
    justify-content: center;
    padding: 2px;
    border-radius: 2px;
    align-items: center;
  }

  /* 자식 span 태그에 대한 스타일 */
  > span {
    margin: 5px 0;
    display: flex;
    justify-content: center;
    padding: 2px;
    color: rgb(193, 192, 192);
    align-items: center;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin: 0 16px 12px;
  color: gray;
  font-size: 13px;
  border-bottom: 0.1px solid #8a8a8a46;
  padding-bottom: 15px;
`;

/*아티클 B*/

export const Article_B = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Article_tags = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  gap: 4px;
  padding: 12px 16px;

  > span {
    color: #666666;
    border: 1px solid rgb(193, 192, 192);
    border-radius: 5px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
`;
export const Tags2 = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  gap: 4px;
  padding: 0 0 12px 16px;
  > span {
    color: #666666;
    border: 1px solid rgb(193, 192, 192);
    border-radius: 5px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
`;


export const Choose = styled.span`
  color: black;
  background-color: white;
  border: 1px solid black;
`;

export const Perticle_scroll = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-gutter: stable;
  width: 100%;
`;

export const Margin = styled.div`
  min-width: 16px;
`;

export const Articles_fit = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  padding-bottom: 20px;
`;

export const Perticles = styled.div`
  display: flex;
  border-radius: 5px;
  min-height: 370px;
  min-width: min-content;
  background-color: white;
  overflow: hidden;
`;
export const Snap_price = styled.div`
display: flex;  flex-direction: row;

height:fit-content;

`

export const Perticles_TAGS = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 260px);
  border-radius: 5px;
  max-height: 740px;
  min-height: fit-content;
  flex-direction: row;
  min-width: fit-content;
  overflow: hidden;
  background-color: white;
  max-width: 1560px;
  justify-content: flex-start;
`;

export const Perticle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
width: 260px;
  > span {    
    display: flex;
    align-items: start;
    font-weight: 400;
  }
`;

export const Fit_img = styled.img`
  width: 260px;
  height: 312px;
`;

export const Fit_info = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: start;
  padding: 8px 4px 12px 8px;
`;

export const Price = styled.div`
  display: flex;
  font-weight: 600;
  flex-direction: row;
 align-items: center;
    gap: 5px;

`;

export const Sale = styled.span`
  color: #f31110;
`;



export const Article_title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 12px 16px;
`;

export const Title_alone = styled.div`
  display: flex;
  align-items: start;
  font-size: 18px;
  padding: 12px 16px;
`;

export const More = styled.span`
  font-size: 13px;
  color: #666666;
  text-decoration: underline;
  cursor: pointer;
`;

export const Date = styled.span`
  color: rgb(102, 102, 102);
  font-weight: 400;
  font-size: 13px;
`;

export const Between = styled.div`
  padding-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Importent_idea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 16px 12px;
`;

export const Img_info = styled.img`
  width: 48px;
  height: 57px;
`;

export const Snap_info = styled.div`
  display: flex;
  flex-direction: row;
`;


export const Whiole_info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 16px;
`;

export const Wholefit_img = styled.img`
  width: 100%;
  height: 80%;
`;

export const Whole_fit_per = styled.div`
  border-radius: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: fit-content;
  overflow: hidden;
  background-color: white;
  width: 100%;
  justify-content: flex-start;
`;

export const Gender = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  justify-content: flex-end;
  color: #8a8a8a;
`;

export const Original_box = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Original = styled.div`
  background-color: #8a8a8a1a;
  border-radius: 2px;
  font-size: 11px;
  color: #666666;
  margin: 2px;
  padding: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Red_heart = styled.span`
  display: flex;
     flex-direction: row;
       align-items: center;
       gap:3px;

  color: #f31110;

`;

export const Perticle_whole = styled.div`
  display: flex;
     flex-direction: column;
  font-size: 13px;
  width: 16.66%;
`;

export const Final1 = styled.div`
  display: flex;
  flex-direction: column; 
 background-color:#f5f5f5;
  align-items: center;
`;

export const Want_to_see_whole = styled.button`
  border-radius: 4px;
  height: 36px;
  color: rgb(0, 0, 0);
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(224, 224, 224);
  padding: 9px 12px;
  margin-bottom: 24px;
`;


export const Custom = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 16px 0 4px;
`;

export const Korea = styled.span`
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-weight: 400;
  font-size: 13px;
`;

export const StyledP = styled.p`
  font-weight: 400;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 13px;
  margin-bottom: 40px;
`;

export const Img_logos = styled.img`
  width: 72px;
  height: 32px;
`;

export const Logo_box = styled.div`
  padding: 5px;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 32px;
  background-color: #8a8a8a20;
  border-radius: 4px;
`;

export const Final2 = styled.div`
  background-color: rgb(240, 240, 240);

`;

export const Final2_1 = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 3px;
  border-bottom: 1px solid #ebebeb;
`;

export const Ago = styled.span`
  color: #666666;
  font-size: 11px;
`;

export const Notice = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
`;

export const Final2_2 = styled.div`
  padding: 20px;
  display: flex; border-bottom: 1px solid #ebebeb;
  flex-direction: column;
  gap: 5px;
  
`;

export const Sorts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  > span {
    font-size: 12px;
  }
`;

export const Sorts_banks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    font-size: 12px;
    padding-left: 5px;
  }
`;

export const Sale_percent = styled.span`
  color: #666666;
  padding-left: 5px;
  font-size: 11px;
`;

export const Img_bank = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

export const Bank_logo_img = styled.img`
  width: 42px;
  height: 28px;
`;

export const Bank_box = styled.div`
  width: 52px;
  height: 28px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Banks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 10px 0 20px 0;
`;

export const Category_title = styled.span`
  font-size: 14px;
  color: black;
  font-weight: 600;
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 20%;

  > div {
    color: #666666;
    font-size: 13px;
    padding: 6px 0;
  }
`;

export const StyledUl = styled.ul`
  width: 95%;
  display: flex;
  gap: 10px;
  padding:0 40px 20px 40px;
  flex-direction: row;

`;

export const Customer_center = styled.div`
  > span {
    color: #8a8a8a;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    flex-wrap:wrap;
    max-width:200px;
  }
`;

export const Img_ISMS = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 13px;
  text-align: start; 
  color: #666666;
`;

export const MusinsaAllRight = styled.div`
  padding-bottom: 4px;
  font-weight: 500;
`;

export const Company_info = styled.div`
  padding-top: 4px;
`;

export const Return = styled.div`
  padding: 4px 0;
  color: #8a8a8a;
`;

export const Rule = styled.div`
  padding: 4px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    text-decoration: underline;
  }
`;