import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

class ProductsHeader extends Component {
  render() {
    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/products">Products</Link>
            <Link to="/styles">Styles</Link>
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
