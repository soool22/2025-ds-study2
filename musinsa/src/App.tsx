import React from 'react';
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Routes, Outlet } from 'react-router-dom';


// 페이지 이 밑으로 쭉 정리해주세요.
import MainPage from "./components/page/MainPage";
import BrandDetail from './components/page/BrandDetail';
import ProductDetail from './components/page/ProductDetail';

import Login from './components/page/Login';
import Signup from './components/page/Signup';
//페이지 외 요소들은 이 밑으로 정리해주세요.
import Header from "./components/layouts/Header";
import Footer from './components/layouts/Footer';

function MainLayout() {
  return (
    <>
      <Header />
      <StyledOutlet />
      <Footer/>
    </>
  )
}

function App() {
  return (
    <WebShell>
      <GlobalStyle />
      <Routes>


        <Route element={<MainLayout />}>
        
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/branddetail" element={<BrandDetail />}></Route>
          <Route path="/productdetail" element={<ProductDetail />}></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
 
          <Route path="/branddetail" element={<BrandDetail />}></Route>
          <Route path="/productdetail" element={<ProductDetail />}></Route>
      
        </Route>
      </Routes>
    </WebShell>
  );
}

const WebShell = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; 
`

const StyledOutlet = styled(Outlet)`
  max-width: 1440px;
`

export default App;