import React from 'react';
// import { useSession } from 'hooks/userHooks';
import { Sidebar } from './../../styles';

export default () => {
  // const [user, { signOut }] = useSession();

  return (
    <Sidebar>
    <>
      <img
        src="https://res.cloudinary.com/teapig/image/upload/v1595701200/wevote/logo_blanco.png"
        alt="logo"
      />

      {/* <div>user:{user.displayName}</div>
      <div>email:{user.email}</div>
      <img src={user.photoURL} alt={user.displayName} />
      <button type="button" onClick={signOut}>
        Logout
      </button> */}
    </>
    </Sidebar>
  );
};
