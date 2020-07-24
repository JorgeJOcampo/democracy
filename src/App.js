import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';
import Routes from './Routes';

export default function App() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}
