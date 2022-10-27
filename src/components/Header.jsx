import React from 'react';
import { Link } from 'react-router-dom';
import { MyRoutes } from './Router';

const Header = () => {
  return (
    <ul className='header-container'>
        <li>
            <Link to={MyRoutes.HOME}>
                Home
            </Link>
        </li>
        <li>
            <Link to={MyRoutes.LIST_POST}>
                List
            </Link>
        </li>
        <li>
            <Link to={MyRoutes.CONTACT}>
                Contact
            </Link>
        </li>
    </ul>
  );
};

export default Header;