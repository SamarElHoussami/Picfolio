import axios from 'axios';

import { GET_PROFILE_PHOTO, PROFILE_PHOTO_ERROR, GET_ALL_PROFILE_PHOTOS } from './types';

// Upload photo for current user
export const uploadProfilePhoto = (formData, history) => async dispatch => {
  try {
    const config = {
      header: {
        'content-type': 'multipart/form-data'
      }
    };

    const res = await axios.post('/api/profilePhoto', formData, config);

    dispatch({
      type: GET_PROFILE_PHOTO,
      payload: res.data
    });

    history.push('/profile');
  } catch (err) {
    console.error(err.msg);
    // dispatch({
    //   type: PHOTO_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

export const getCurrentUserProfilePhoto = () => async dispatch => {
  try {
    const res = await axios.get('/api/profilePhoto/me');

    dispatch({
      type: GET_PROFILE_PHOTO,
      payload: res.data
    });
  } catch (err) {
    console.error(err.msg);
    dispatch({
      type: PROFILE_PHOTO_ERROR,
      payload: { msg: err.response }
    });
  }
};
