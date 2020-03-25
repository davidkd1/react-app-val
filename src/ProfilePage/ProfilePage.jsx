import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

import Grid from "react-css-grid";

import { Card } from "semantic-ui-react";

import { Container, Header, List } from "semantic-ui-react";
import Nav from "../NavBar/NavBar";

class ProfilePage extends React.Component {
  componentDidMount() {
    //  this.props.dispatch(userActions.getAll());
  }

  render() {
    const { user, users } = this.props;
    return (
      <div>
        <Nav />

        <Grid width={320} gap={10}>
          <div>
            <Container style={{ margin: 20 }}>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>
                      {user.firstName} {user.lastName}
                    </Card.Header>
                    <Card.Meta>Nhs No. {user.NhsNO}</Card.Meta>
                    <Card.Description>Dob: {user.Dob}</Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Container>
          </div>
          <div>
            <Container style={{ margin: 20 }}>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>Data send on: 25/03/2019</Card.Header>
                    <Card.Meta>Nhs No. {user.NhsNO}</Card.Meta>
                    <Card.Description>Dob: {user.Dob}</Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Container>
          </div>
        </Grid>

        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {/* <p>
          <Link to="/">Home</Link>
          <br />
          <Link to="/login">Logout</Link>
        </p> */}
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
