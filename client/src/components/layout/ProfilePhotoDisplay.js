import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fileType from 'file-type';
import {Button, ButtonGroup, Container,Row,Col, Image} from 'react-bootstrap';

const ProfilePhotoDisplay = ({ profilePhotos }) => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  let photoBuffer;
  let b64encoded;
  let data;
  let mime;

  return (
    <div >
      {profilePhotos !== undefined? (
        profilePhotos.map((profilePhoto, index) => {
          photoBuffer = profilePhoto.profilePhoto.data;
          b64encoded = btoa(new Uint8Array(photoBuffer).reduce(function(data, byte) {
            return data + String.fromCharCode(byte);
          }, ''));
          // b64encoded = btoa(String.fromCharCode.apply(null, photoBuffer));
          mime = fileType(Buffer.from(photoBuffer)).mime;
          data = 'data:' + mime + ';base64,' + b64encoded;
          return <div key={index+'div'}><img  key={index} src={data} /></div>;
        })
      ) : (
        <p>Loading</p>
      )}

    </div>
  );
};

ProfilePhotoDisplay.propTypes = {
  profilephotos: PropTypes.array
};

const mapStateToPropsPrivate = state => ({
  profilephotos: state.profilePhoto.profilePhotos
});

const mapStateToPropsPublic = state => ({
  profilephotos: state.view.viewProfilePhoto
})

export const ProfilePhotoDisplayPrivate = connect(
  mapStateToPropsPrivate,
  {}
)(ProfilePhotoDisplay);

export const ProfielPhotoDisplayPublic = connect(
  mapStateToPropsPublic,
  {}
)(ProfilePhotoDisplay);
