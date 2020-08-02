import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import UserInfo from 'components/UserInfo';
import Routes from 'Routes';
import { Container, Content } from 'styles';
import { isBrowser } from 'react-device-detect';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return isBrowser ? (
    <Container>
      <RecoilRoot>
        <Router>
          <Sidebar />
          <Content>
            <UserInfo />
            <Routes />
          </Content>
        </Router>
      </RecoilRoot>
    </Container>
  ) : (
    <RecoilRoot>
      <Content>
        <Router>
          <Header />
          <Routes />
        </Router>
      </Content>
    </RecoilRoot>
  );
}
