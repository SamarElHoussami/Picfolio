import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/navbarStyles.module.css';

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [searchForm, setSearchForm] = useState('');

  const onSearchChange = event => {
    setSearchForm(event.target.value);
  };

  const onClickLogout = event => {
    event.preventDefault();
    logout();
  };

  const authLinks = (
    <div className={styles.nav_container}>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <NavDropdown title='Profile Options' id='basic-nav-dropdown'>
          <NavDropdown.Item as={Link} to='/edit-my-profile'>
            Edit Profile
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/add-a-service'>
            {' '}
            Add a Service
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href='/' onClick={event => onClickLogout(event)}>
          Logout
        </Nav.Link>
      </Nav>
    </div>
  );

  const guestLinks = (
    <Nav className={'mr-auto ' + styles.nav_container}>
      <Nav.Link href='/register'>Register</Nav.Link>
      <Nav.Link href='/login'>Login</Nav.Link>
    </Nav>
  );

  return (
    <Navbar sticky='top' bg='light' variant='light'>
      <Navbar.Brand href='/'>
        <img
          width='340px'
          src='/picfolio_logo_text.png'
          className={styles.brand}
          alt='Picfolio logo'
        />
      </Navbar.Brand>
      <Form inline>
        <FormControl
          placeholder='Search for user...'
          className='mr-sm-2'
          aria-label='Search users field'
          value={searchForm}
          onChange={event => onSearchChange(event)}
          required
        />
        <Link variant='outline-secondary' as={Link} to={'/search/' + searchForm}>
          Search
        </Link>
      </Form>
      {!loading && isAuthenticated ? authLinks : guestLinks}
    </Navbar>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
