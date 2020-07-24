import React, { useState, useEffect } from 'react';

import Login from 'components/Login';
import auth from '../utils/firebaseUtils';

const SessionContext = React.createContext();

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('init');

  function handleSignOut() {
    auth.signOut();
  }

  const state = { user };
  const actions = { signOut: handleSignOut, signIn: auth.signIn };

  useEffect(
    () =>
      auth.onChange((user) => {
        setUser(user);

        setStatus('restored');
      }),
    []
  );

  if (!user) return <Login login={actions.signIn} status={status} />;

  return (
    <SessionContext.Provider value={{ state, actions }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider as Provider, SessionContext as default };
