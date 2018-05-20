import React, { Fragment } from 'react';
import MailingList from './MailingList';

const Footer = () => (
  <Fragment>
    <MailingList />

    <footer className="push">
      <div className="content">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-header">
              <span className="hide-content">I love Deals & Coupons</span>
            </div>
            <p>
              Do you really love the lamp, or are you just saying it because you
              saw it?
            </p>
          </div>
          <nav className="footer-links">
            <dl>
              <dt className="footer-header">
                <span className="hide-content">@hunt2save</span>
              </dt>
              <dd>
                <a href="/">About</a>
              </dd>
              <dd>
                <a href="/">Shipping & Returns</a>
              </dd>
              <dd>
                <a href="/">Privacy Policy</a>
              </dd>
              <dd>
                <a href="/">T&Cs</a>
              </dd>
            </dl>
          </nav>
          <nav className="footer-social">
            <dl>
              <dt className="footer-header">
                <span className="hide-content">We love social</span>
              </dt>
              <dd>
                <a href="/">Facebook</a>
              </dd>
              <dd>
                <a href="/">Instagram</a>
              </dd>
              <dd>
                <a href="/">Pinterest</a>
              </dd>
              <dd>
                <a href="/">Twitter</a>
              </dd>
            </dl>
          </nav>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
