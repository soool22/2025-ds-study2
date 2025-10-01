import React from 'react';
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Routes, Outlet } from 'react-router-dom';


// 페이지 이 밑으로 쭉 정리해주세요.
import MainPage from "./components/page/MainPage";

//페이지 외 요소들은 이 밑으로 정리해주세요.
import Header from "./components/layouts/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <StyledOutlet />
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
`

const StyledOutlet = styled(Outlet)`
  max-width: 1440px;
`

export default App;
