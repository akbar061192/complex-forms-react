import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary '>
      <Link to='/' className='navbar-brand ml-5'>
        DAQE Configuraion Layout
      </Link>
    </nav>
  );
};

export default Navbar;
