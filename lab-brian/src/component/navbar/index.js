'use strict';

import './_navbar.scss';
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li><Link to='/'> expense tracker </Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;