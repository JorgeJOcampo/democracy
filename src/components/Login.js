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
            <div>
              <img
                src="https://res.cloudinary.com/teapig/image/upload/v1595701200/wevote/logo_blanco.png"
                alt="logo"
              />
              <button type="button" onClick={login}>
                Login with Google
              </button>
              <p>
                Esto era solo para ver que votar en el grupo de manga pero se
                nos fue de las manos...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
