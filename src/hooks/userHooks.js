import React from 'react';

import SessionContext from '../context/firebaseContext';

export const useSession = () => {
  const {
    state: { user },
    actions: { signIn, signOut }
  } = React.useContext(SessionContext);

  return [user, { signIn, signOut }];
};
