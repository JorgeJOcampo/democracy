import React from 'react';
import { useSession } from 'hooks/userHooks';
import { UserInfo } from './styles';

export default () => {
  const [user, { signOut }] = useSession();

  return (
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
  );
};
