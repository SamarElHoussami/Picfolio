import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

import { searchForUsers } from '../../actions/user';

const ProfileSearch = ({
  search: { usersFound, loading, error },
  searchForUsers,
  match: { params }
}) => {
  useEffect(() => {
    searchForUsers(params.searchTerm);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (!usersFound.msg) {
    return (
      <div>
        <h1>Results</h1>
        {usersFound.length !== 0
          ? usersFound.map(user => {
            return (
              <Card key={user._id} style={{ width: '18rem '}}>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle>{user.profile.location}</Card.Subtitle>
                <Card.Body>
                  <Card.Text>@{user.username}</Card.Text>
                  <Card.Text>{user.profile.bio}</Card.Text>
                  <Button variant='primary' href={'/profile/' + user.username}>
                    Go to profile
                  </Button>
                </Card.Body>
              </Card>
            )
            })
          : null}
      </div>
    );
  } else if (error !== null) {
    return <h1>No users were found...</h1>;
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
