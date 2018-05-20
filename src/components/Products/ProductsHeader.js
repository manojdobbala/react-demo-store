import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

var divStyle = {
  textDecoration: 'none',
  color: 'black'
};

class ProductsHeader extends Component {
  render() {
    return (
      <header className="push">
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
          <div className="logo">
            <Link to="/" className="logo-link">
              <span className="hide-content">I love Deals</span>
              <div className="big-logo" aria-hidden="true" />
              <div className="small-logo" aria-hidden="true" />
            </Link>
          </div>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container hide-content">
          <div className="content">
            <h1>Products listing</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);
