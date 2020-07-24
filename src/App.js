import React from 'react';
import { RecoilRoot } from 'recoil';
import Routes from './Routes';

export default function App() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}
