import React from "react";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import { MDBInput } from "mdbreact";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username } = this.state;
    const { dispatch } = this.props;

    console.log(username);
    if (username) {
      dispatch(userActions.login(username));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, submitted } = this.state;
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="rgb(64, 152, 225)" textAlign="center">
              Valitudo Dashboard
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <div
                  className={
                    "form-group" + (submitted && !username ? " has-error" : "")
                  }
                >
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />

                  {submitted && !username && (
                    <div className="help-block">Code is required</div>
                  )}
                </div>

                <Button color="#4098e1" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
