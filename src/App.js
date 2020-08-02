import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from 'components/Header';
import UserInfo from 'components/UserInfo';
import Routes from 'Routes';
import { Content } from 'styles';
import { isBrowser } from 'react-device-detect';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return isBrowser ? (
    <RecoilRoot>
      <Router>
        <Header />
        <Content>
          <Routes />
          <UserInfo />
        </Content>
      </Router>
    </RecoilRoot>
  ) : (
    <RecoilRoot>
      <Router>
        <Routes />
      </Router>
    </RecoilRoot>
  );
}
