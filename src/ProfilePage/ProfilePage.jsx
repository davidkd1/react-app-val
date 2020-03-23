import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

class ProfilePage extends React.Component {
  componentDidMount() {
    //  this.props.dispatch(userActions.getAll());
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1> {user.firstName}</h1>
        <h2> {user.lastName}</h2>
        <h2> {user.NhsNO}</h2>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        <p>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedHomePage = connect(mapStateToProps)(ProfilePage);
export { connectedHomePage as ProfilePage };
