import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from 'hooks/userHooks';
import { UserInfo } from './styles';

export default () => {
  const [user, { signOut }] = useSession();

  return (
    <UserInfo>
      <div>
        <p className="name">{user.displayName}</p>
        <p className="mail">{user.email}</p>
        <Link to="/create-poll">
          <button type="button">Crear encuesta</button>
        </Link>
        <button type="button" onClick={signOut}>
          Logout
        </button>
      </div>
      <img src={user.photoURL} alt={user.displayName} />
    </UserInfo>
  );
};
