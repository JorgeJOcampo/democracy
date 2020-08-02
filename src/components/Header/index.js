import React from 'react';
import Header from './Header';
import { useSession } from 'hooks/userHooks';
import { Content, UserInfo } from '../.././styles';
import Routes from './../../Routes';

//export default Header;

export default () => {
    const [user, { signOut }] = useSession();
  
    return (
        <>
        <Header />
        <Content>
        <Routes />
        <UserInfo>
          <div>
            <p className="name">{user.displayName}</p>
            <p className="mail">{user.email}</p>
          <button type="button" onClick={signOut}>
            Logout
          </button>
          </div>
          <img src={user.photoURL} alt={user.displayName} />
        </UserInfo>
      </Content>
      </>
    );
  };
