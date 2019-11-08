import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Button, Navbar, Nav, ButtonGroup} from 'react-bootstrap';

const Footer = () => {
  return (

/*  <Navbar className="nav-color" expand="lg"  sticky="top" variant="light">
    </Navbar>
  */

<Navbar className="page-footer fixed-bottom font-small blue pt-4">
<div className="container-fluid text-center">
  <div className="row">
  <div className="col-md-5 text-center mt-md-0 mt-3">
  </div>
    <hr className="clearfix text-center d-md-none"/>

      <ul className="list-unstyled">
        <li>
          <a href="#!">About Picfolio</a>
        </li>
        <li>
          <a href="#!">FAQ</a>
        </li>
        <li>
          <a href="#!">Contact Us</a>
        </li>
      </ul>

      <div className="footer-copyright text-center py-3">© 2019 Copyright Picfolio Inc.
      </div>
  </div>
</div>

</Navbar>

  );
};


export default Footer;
