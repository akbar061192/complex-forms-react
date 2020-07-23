import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary '>
      <Link to='/'>
        <a className='navbar-brand ml-5' href='!#'>
          DAQE Configuraion Layout
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
