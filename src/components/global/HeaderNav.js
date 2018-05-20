import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../Cart/CartCounter';

var divStyle = {
  textDecoration: 'none',
  color: 'black'
};

var divHeaderStyle = {
  fontSize: '2.4em',
  fontWeight: '600',
  color: '#ccc'
};

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link style={divStyle} to="/products">
        Deals
      </Link>
      <Link style={divStyle} to="/Stores">
        Stores
      </Link>
      <Link style={divStyle} to="/Myaccount">
        Myaccount
      </Link>
      <Link style={divStyle} to="/FAQ">
        FAQ
      </Link>
      <Link style={divStyle} to="/Contact">
        Contact Us
      </Link>
    </nav>
    <div className="logo light">
      <Link to="/" className="logo-link">
        <span className="hide-content">Hunt2Save</span>
        <div className="big-logo" aria-hidden="true">
          <img
            className="small-logo"
            src="img/logo/ill-short-dark.svg"
            alt="I love lamp logo"
            aria-hidden="true"
          />
          <h3 style={divHeaderStyle}>Hunt2Save</h3>
        </div>
        <div className="small-logo" aria-hidden="true">
          Logo
        </div>
      </Link>
    </div>
    <nav className="secondary-nav light">
      <CartCounter />
    </nav>
  </div>
);

export default HeaderNav;
