import React from 'react';
import { LoginBox, Logo, LoginButton, BottomText } from '../styles';

const Login = ({ login, status }) => {
  return (
    <section>
      <div>
        <div>
          {status === 'init' && (
            <span>Trying to restore authentication...</span>
          )}
          {status === 'restored' && (
            <LoginBox>
              <Logo
                src="https://res.cloudinary.com/teapig/image/upload/v1595701200/wevote/logo_blanco.png"
                alt="logo"
              />
              <LoginButton type="button" onClick={login}>
                Login with Google
              </LoginButton>
              <BottomText>
                Esto era solo para ver que votar en el grupo de manga pero se
                nos fue de las manos...
              </BottomText>
            </LoginBox>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;