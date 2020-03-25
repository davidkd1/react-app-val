import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

import LineChart from "./line";

import Nav from "../NavBar/NavBar";

import { Table } from "semantic-ui-react";

import Grid from "react-css-grid";

import { Card } from "semantic-ui-react";

import { Container, Header, List, Button } from "semantic-ui-react";

import { Segment, Portal } from "semantic-ui-react";

import data from "./jsonData";

//import "./Nav.css"

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      sub_BloodGlu: true,
      sub_CategoryPeak: true,
      sub_CategoryBloodPres: true,
      dataSource: {}
    };
  }

  componentDidMount() {
    return fetch("https://reactnative.dev/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            dataSource: responseJson.movies
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  myFunction(item) {
    alert(item);
  }
  render() {
    if (this.state.sub_BloodGlu) {
      var test = (
        <div>
          <Container style={{ margin: 20 }}>
            <Table celled inverted color="purple" selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">sub_BloodGlu</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {data.sub_BloodGlu.slice(0, 3).map(item => {
                  return (
                    <Table.Row onClick={() => this.myFunction(item.date)}>
                      <Table.Cell key={item.id}>{item.date}</Table.Cell>
                      <Table.Cell key={item.id}>{item.level}</Table.Cell>
                      <Table.Cell key={item.id}>{item.time}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Container>
        </div>
      );
    }

    if (this.state.sub_CategoryPeak) {
      var test2 = (
        <div>
          <Container style={{ margin: 20 }}>
            <Table celled inverted color="green" selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">
                    sub_CategoryPeak
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {data.sub_CategoryPeak.slice(0, 3).map(item => {
                  return (
                    <Table.Row onClick={() => this.myFunction(item.date)}>
                      <Table.Cell key={item.id}>{item.date}</Table.Cell>
                      <Table.Cell key={item.id}>{item.level}</Table.Cell>
                      <Table.Cell key={item.id}>{item.time}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Container>
        </div>
      );
    }

    if (this.state.sub_CategoryBloodPres) {
      var test3 = (
        <div>
          <Container style={{ margin: 20 }}>
            <Table celled inverted color="red" selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">
                    sub_CategoryBloodPres
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {data.sub_CategoryBloodPres.slice(0, 3).map(item => {
                  return (
                    <Table.Row onClick={() => this.myFunction(item.date)}>
                      <Table.Cell key={item.id}>{item.date}</Table.Cell>
                      <Table.Cell key={item.id}>
                        {item.level} / {item.level2}
                      </Table.Cell>
                      <Table.Cell key={item.id}>{item.time}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Container>
        </div>
      );
    }

    const { user, users, items } = this.props;
    return (
      <div>
        <Nav send={this.props} />

        <Grid width={320} gap={24}>
          {test}
          {test2}
          {test3}

          <div />
        </Grid>

        <Card style={{ width: 600, padding: 30, margin: 20 }}>
          <LineChart />
        </Card>
      </div>
    );
  }
}

const style = {
  table: {
    minWidth: 100
  }
};

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
