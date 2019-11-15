import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button, ButtonGroup, Container,Row,Col} from 'react-bootstrap';
import youtube_icon from "../../images/icons/youtube_icon.png"
import twitter_icon from "../../images/icons/twitter_icon.png"
import facebook_icon from "../../images/icons/facebook_icon.png"
import linkedin_icon from "../../images/icons/linkedin_icon.png"
import instagram_icon from "../../images/icons/instagram_icon.png"
import location_icon from "../../images/icons/location_icon.png"

import UploadPhoto from '../profile-forms/UploadPhoto';
import PhotosDisplay from './PhotosDisplay';


import styles from '../styles/landingStyles.module.css';

const ProfileInfo = ({user: { profile }, auth: { user }}) => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <div className={styles.profile_info}>
      {profile !== null ? (
        <div>
            {user !== null? <h1 className={styles.name_display}>{user.name}</h1> : null }
            {user !== null? <h3 className={styles.username_display}>@{user.username}</h3> : null}
            {profile.location ? <div className={styles.loc_display}><img className={styles.icon} alt="location" src={location_icon}/>   {profile.location}</div> : null}
              <div className={styles.bio_container}>
                {profile.bio ? <p className={styles.bio}>{profile.bio}</p> : null}
              </div>
              <div>
                {profile.services[0].name ? <p className={styles.service_name}>Service: {profile.services[0].name}</p> : null}
                {profile.services[0].description ? <p className={styles.service_description}>{profile.services[0].description}</p> : null}
                {profile.services[0].price ? <p className={styles.service_price}>Price: ${profile.services[0].price}</p> : null}
              </div>
              <div className={styles.social_links}>
                {profile.social && profile.social.youtube ? <a href={profile.social.youtube}><img className={styles.icon} alt="youtube" src={youtube_icon}/></a>: null}
                {profile.social && profile.social.twitter ? <a href={profile.social.twitter}><img className={styles.icon} alt="twitter" src={twitter_icon}/></a>: null}
                {profile.social && profile.social.facebook ? <a href={profile.social.facebook}><img className={styles.icon} alt="facebook" src={facebook_icon}/></a>: null}
                {profile.social && profile.social.linkedin ? <a href={profile.social.linkedin}><img className={styles.icon} alt="linkedin" src={linkedin_icon}/></a> : null}
                {profile.social && profile.social.instagram ? <a href={profile.social.instagram}><img className={styles.icon} alt="instagram" src={instagram_icon}/></a>: null}
              </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

ProfileInfo.propTypes = {
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth});

export default connect(
  mapStateToProps,
  {}
)(ProfileInfo);
