import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchForUsers } from '../../actions/user';

const ProfileSearch = ({
  search: { usersFound, loading, error },
  searchForUsers,
  match: { params }
}) => {
  useEffect(() => {
    searchForUsers(params.searchTerm);
  }, []);

  if (usersFound !== null) {
    return (
      <div>
        <h1></h1>
      </div>
    );
  } else if (error !== null) {
    return <h1>User was not found</h1>;
  } else {
    return <h1>loading...</h1>;
  }
};

ProfileSearch.propTypes = {
  searchForUsers: PropTypes.func.isRequired,
  search: PropTypes.object
};

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { searchForUsers }
)(ProfileSearch);
