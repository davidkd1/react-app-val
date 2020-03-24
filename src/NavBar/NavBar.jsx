import React from "react";

import { Link, withRouter } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={style.root}>
              Valitudo
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/Profile">
              Profile
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const style = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1,
    fontSize: "100px"
  }
};

export default App;
