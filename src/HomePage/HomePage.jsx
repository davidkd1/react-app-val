import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

import Button from "@material-ui/core/Button";

//import "./Nav.css";

class HomePage extends React.Component {
  componentDidMount() {
    //  this.props.dispatch(userActions.getAll());
  }

  nextPath = path => {
    this.props.history.push(path);
  };
  render() {
    const { user, users } = this.props;
    return (
      <div>
        <div>
          {users.loading && <em>Loading users...</em>}
          {users.error && (
            <span className="text-danger">ERROR: {users.error}</span>
          )}
          <p>
            <Link to="/Profile">Profile</Link>

            <br />
            <Link to="/login">Logout</Link>
          </p>
          <button onClick={() => this.props.history.push("/login")}>
            change patyhuh
          </button>

          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
