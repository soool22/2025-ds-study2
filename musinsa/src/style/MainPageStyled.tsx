import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`

export const SearchTopBox = styled.div`
    width: 100%;
    background-color: #1a1b1f;
    height: 52px;
    padding: 12px 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.img`
    width: 82px;
`

export const Icon = styled.img`
    width: 28px;
`

export const Icon2 = styled.img`
    width: 28px;
    background-color: #ffffff;
    padding: 8px 8px 8px 0;
    border-radius: 0 5px 5px 0;
`

export const SearchBox = styled.div`
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    background-color: #1a1b1f;
    height: 36px;
    display: flex;
`

export const Search = styled.input`
    width: calc(100% - 20px);
    height: 36px;
    border: 0;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    padding: 8px;

    &:focus {
    outline: none;
    box-shadow: none;
  }
`

export const NavBox = styled.div`
    width: 100%;
    height: 48px;
    padding: 6px 12px;
    box-sizing: border-box;
    background-color: #1a1b1f;
    display: flex;
    align-items: center;
    position: sticky;
    top: 56px;
    z-index: 10;
`

export const NavText = styled.p`
    white-space: nowrap;
    font-size: 14px;
    color:#8a8a8a;
    padding: 8px 4px;
    box-sizing: border-box;
    margin: 0;
`

export const NavText2 = styled.p`
    white-space: nowrap;
    margin: 0 0 0 6px;
    font-size: 14px;
    color:#8a8a8a;
    padding: 8px 4px;
    box-sizing: border-box;
`

export const NavText3 = styled.p`
    white-space: nowrap;
    margin: 0 0 0 6px;
    font-size: 14px;
    color:#ffffff;
    font-weight: 500;
    padding: 8px 4px;
    box-sizing: border-box;
`

export const BannerBox = styled.div`
    width: 100%;
    height: 420px;
    display: flex;
    align-items: center;
`

export const Banner = styled.div<{ bg?: string }>`
    background-image: ${(props) => (props.bg ? `url(${props.bg})` : 'none')};
    height: 420px;
    width: 33.33%;
    background-color: lightgray;
    background-size: cover;
    position: relative;
`
export const BannerTextBox = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`

export const BannerText = styled.div`
    width: 145px;
    font-size: 20px;
    color: #f0f0f0;
    font-weight: 600;
    line-height: 28px;
    overflow: hidden;
    white-space: pre-line;
    overflow-wrap: break-word;
    margin: 0;
`;

export const BannerText2 = styled.div`
    font-size: 13px;
    margin-top: 8px;
    font-weight: 600;
    margin: 0;
    overflow: hidden;
    white-space: pre-line;
    overflow-wrap: break-word;
    color: #f0f0f0;
`;

export const ButtonBox1 = styled.div`
    width: 100%;
    padding: 6px 16px 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    box-sizing: border-box;
    background-color: #f5f5f5;
`

export const ButtonBox2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    box-sizing: border-box;
    padding: 6px 16px 16px 16px;
    background-color: #f5f5f5;
`

export const BigButton = styled.div<{ bg?: string }>`
    background-image: ${(props) => (props.bg ? `url(${props.bg})` : 'none')};
    width:140px;
    height:60px;
    background-size: cover;
    border-radius:4px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 11px;
    padding-bottom:5px;
    box-sizing:border-box;
`

export const SmallButton = styled.div`
    width: auto;
    height: 38px;
    padding: 5px 8px 5px 6px;
    display: flex;
    align-items: center;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 4px;
    box-sizing: border-box;
    
`

export const SmallIconImg = styled.img`
    width: 26px;
`

export const SmallText = styled.p`
    font-size: 13px;
    letter-spacing: 0;
    line-height: 18px;
    margin: 0;
    margin-left:8px;
    white-space: nowrap;
`

export const ItemBigBox=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;

`

export const ItemMediumBox=styled.div`
    margin-bottom: 24px;
`

export const ItemBoxTitleBox=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    box-sizing: border-box;
`

export const ItemBoxTitle=styled.p`
    font-size: 18px;
    color:#000000;
    letter-spacing: 0;
    line-height: 24px;
    font-weight: 500;
    margin: 0;
`

export const SeeMore=styled.p`
    font-size: 13px;
    letter-spacing: 0;
    line-height: 18px;
    color: rgb(102 102 102 / var(--tw-text-opacity, 1));
    text-decoration-line: underline;
    padding: 8px 4px;
    margin: 0;
`

export const ItemSmallBox=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 0px 16px;
    box-sizing: border-box;
    overflow-x: auto; 
    white-space: nowrap;
    scrollbar-width: none;

`

export const ItemTinyBox=styled.div`
    width: 260px;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const ItemImgPart = styled.div<{ bg?: string }>`
    width: 260px;
    height: 312px;
    background-image: ${(props) => (props.bg ? `url(${props.bg})` : "none")};
    background-size: cover;
    background-position: center;
    position: relative;
`;

export const ItemInfoPart = styled.div`
    background-color: #ffffff;
    padding: 8px 4px 12px 8px;
    p {
        margin: 2px 0;
        font-size: 13px;
        color: black;
        overflow: hidden;    
        text-overflow: ellipsis;
    }
    p:first-child {
        font-weight: 600;
        font-size: 11px;
        color: black;
    }
    p:last-child {
        color: black;
        font-size: 13px;
        font-weight: 600;
    }
`;

export const HeartButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: auto;
  height: auto;
  border: none;
  z-index: 10;
`;

export const HeartButtonImg = styled.img`
    width: 15px;
    height: 15px;
    z-index: 11;
`