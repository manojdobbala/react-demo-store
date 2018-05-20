import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../Cart/CartCounter';

var divStyle = {
  textDecoration: 'none',
  color: 'white'
};

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link to="/products">Deals</Link>
      <Link to="/Stores">Stores</Link>
      <Link to="/Myaccount">Myaccount</Link>
      <Link to="/FAQ">FAQ</Link>
      <Link to="/Contact">Contact Us</Link>
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
          <h3 style={divStyle}>Hunt2Save</h3>
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
