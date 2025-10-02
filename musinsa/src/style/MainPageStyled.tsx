import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    height: auto;

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
`

export const NavText = styled.p`
    white-space: nowrap;
    font-size: 14px;
    color:#8a8a8a;
    padding: 8px 4px;
    box-sizing: border-box;
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
    padding: 6px 16px 0 24px;
`

export const ButtonBox2 = styled.div`
    
`

export const BigButton = styled.div<{ bg?: string }>`
    background-image: ${(props) => (props.bg ? `url(${props.bg})` : 'none')};
    width:140px;
    height:60px;
    background-size: cover;
`