import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button, ButtonGroup, Container,Row,Col} from 'react-bootstrap';

import UploadPhoto from '../profile-forms/UploadPhoto';
import PhotosDisplay from './PhotosDisplay';


import styles from '../styles/landingStyles.module.css';

const ProfileInfo = ({ profile }) => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <div className={styles.first_page}>

    <div className={styles.body_container}>
    <Fragment>

      {profile !== null ? (
        <Fragment>
        <Container>

        {profile.location ? <p>Location: {profile.location}</p> : null}
          <Row>
          <Col>
          <h3>More Info</h3>
          {profile.bio ? <p>Bio: {profile.bio}</p> : null}
          {profile.social.youtube ? <p>Youtube: {profile.social.youtube}</p> : null}
          {profile.social.twitter ? <p>Twitter: {profile.social.twitter}</p> : null}
          {profile.social.facebook ? <p>Facebook: {profile.social.facebook}</p> : null}
          {profile.social.linkedin ? <p>LinkedIn: {profile.social.linkedin}</p> : null}
          {profile.instagram ? <p>Instagram: {profile.instagram}</p> : null}
          </Col>
          <Col>
            <h3> Service </h3>
            {profile.services[0].name ? <p>Name: {profile.services[0].name}</p> : null}
            {profile.services[0].description ? <p>description: {profile.services[0].description}</p> : null}
            {profile.services[0].price ? <p>Price: ${profile.services[0].price}</p> : null}

            </Col>
            </Row>
            <Row>
            <UploadPhoto />
            </Row>
            <Row>
            <PhotosDisplay/>
            </Row>
          </Container>

        </Fragment>
      ) : (
        <p>Loading</p>
      )}
    </Fragment>
    </div>
    </div>
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
