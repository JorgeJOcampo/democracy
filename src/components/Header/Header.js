import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../styles';

export default () => {
  return (
    <Sidebar>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/teapig/image/upload/v1595701200/wevote/logo_blanco.png"
          alt="logo"
        />
      </Link>
    </Sidebar>
  );
};
