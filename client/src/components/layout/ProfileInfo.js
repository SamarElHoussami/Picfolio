import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';

import UploadPhoto from '../profile-forms/UploadPhoto';
import { PhotosDisplayPrivate } from './PhotosDisplay';

const ProfileInfo = ({ profile }) => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <Fragment>
<<<<<<< HEAD
      <div>
        <ButtonGroup>
          <Link to='/edit-my-profile'>
            {' '}
            <Button variant='outline-dark'>Edit Profile</Button>
          </Link>

          <Link to='/add-a-service'>
            <Button variant='outline-dark'>Add a Service</Button>
          </Link>
        </ButtonGroup>
      </div>
=======

>>>>>>> 332933f9360abe65c5a2abc174078975c1d63a41

      {profile !== null ? (
        <Fragment>
          {profile.location ? <p>{profile.location}</p> : null}
          {profile.bio ? <p>{profile.bio}</p> : null}
<<<<<<< HEAD
          {profile.social ? JSON.stringify(profile.social) : null}
          {profile.services ? JSON.stringify(profile.services) : null}
          <div className='upload-div'>
            <UploadPhoto />
          </div>
          <PhotosDisplayPrivate />
=======
          {profile.social
            ? JSON.stringify(profile.social)
            : null}
          {profile.services
            ? JSON.stringify(profile.services)
            : null}
        
          <UploadPhoto />

          <PhotosDisplay />

>>>>>>> 332933f9360abe65c5a2abc174078975c1d63a41
        </Fragment>
      ) : (
        <p>Loading</p>
      )}
    </Fragment>
  );
};

ProfileInfo.propTypes = {
  profile: PropTypes.object
};

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(
  mapStateToProps,
  {}
)(ProfileInfo);
