import { statSync } from 'fs';
import styled from 'styled-components';
export const DIV1=styled.div`
width:100%;
height:100%;
background-color:#fafafa;
`
export const BODY = styled.div`
width:600px;
display: flex;
min-height:fit-content;
flex-direction: column;
box-sizing: border-box;
align-items: center;

`
export const Header_login = styled.div`
  background-color: #f5f5f5;
width: 600px;box-sizing: border-box;

height: 52px;
font-size: 16px;
font-weight: 500;
padding: 12px 16px;display: flex;
    align-items: center;



`
export const Login_main = styled.div`
width:600px;
padding: 16px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
height:100vh;
background-color:white;

`
export const LOGO = styled.div`

display: flex;justify-content: center;
gap:16px;
margin:20px 0;
flex-direction: column;
align-items: center;`

export const Input =styled.div`
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
   

    dispaly:flex;gap:10px;
   flex-direction: column;
width: 100%;
padding: 8px 0;
`

export const ID = styled.input`
width: 100%;
height: 34px;
padding: 0 10px;box-sizing: border-box;
background-color:none;
border:none;

`
export const PassWord = styled.input`
width: 100%;padding: 0 10px;box-sizing: border-box;
height: 34px;border:none;background-color:none;


`
export const ID_Box =styled.div`
box-sizing: border-box;

width:100%;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    overflow:hidden;

    `
export const Login_button=styled.button`
content:"로그인";
margin: 8px 0;
background-color: #000000;
color: white;width: 100%;
height:40px;border-radius:4px;
cursor: pointer;

`
export const Gray_text =styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
color: #8a8a8a;
font-size: 13px;
width:100%
`
export const Find = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`

export const FindID = styled.div`
padding-right:5px;
border-right:1px solid #8a8a8a;cursor: pointer;

`
export const Margin =styled.div`
margin-left:5px; cursor: pointer;
`
export const Button_box=styled.div`
display: flex;
flex-direction: column;
margin-top:15px;
width: 100%;
gap:16px;
`
export const Kakao_Button =styled.button`
display: flex;
    border:none;
    background-color: #fee500;
    align-items: center;
    border-radius:4px;
    height : 40px;cursor: pointer;
    width:100%;
    justify-content: center;
    text-align:center;
    gap:10px;
`
export const Apple_Button =styled.button`
display: flex;
    border:1px solid #e0e0e0;
    background-color: white;
    align-items: center;cursor: pointer;
    border-radius:4px;
    height : 40px;
    width:100%;
    justify-content: center;
    text-align:center;
    gap:10px;
`
export const Signup_button=styled.div`
display: flex;
flex-direction:row;
width: 100%;
gap:5px;
font-size: 13px;justify-content: center;
align-items: center;
height: 20px;

`
export const Signup_button_span=styled.div`
display:flex;
font-size: 13px;justify-content: center;
align-items: center;cursor: pointer;
padding:2px;
border:1px solid #e0e0e0;
border-radius:4px;

`




 










export const Guest = styled.div`
font-size: 14px;
`
export const Guest_order = styled.div`

text-decoration: underline;cursor: pointer;
font-size: 13px;
`