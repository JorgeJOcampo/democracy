import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Routes from './Routes';

export default function App() {
  return (
    <RecoilRoot>
      <Header />
      <Routes />
    </RecoilRoot>
  );
}
