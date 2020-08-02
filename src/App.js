import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from 'components/Header';
import UserInfo from 'components/UserInfo';

import Routes from 'Routes';
import { Content } from 'styles';

export default function App() {
  return (
    <RecoilRoot>
      <Header />
      <Content>
        <Routes />
        <UserInfo />
      </Content>
    </RecoilRoot>
  );
}
