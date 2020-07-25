import React from 'react';
import { useSession } from 'hooks/userHooks';

export default () => {
  const [user, { signOut }] = useSession();

  return (
    <>
      <div>user:{user.displayName}</div>
      <button type="button" onClick={signOut}>
        Logout
      </button>
    </>
  );
};
