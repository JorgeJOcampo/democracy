import React from 'react';

const Login = ({ login, status }) => {
  return (
    <section>
      <div>
        <div>
          {status === 'init' && (
            <span>Trying to restore authentication...</span>
          )}
          {status === 'restored' && (
            <button type="button" onClick={login}>
              Login with Google
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
