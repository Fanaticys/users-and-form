import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

import Users from 'modules/users/components/Users';
import Form from 'modules/form/components/Form';

const useStyles = makeStyles({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuButton: {
    color: '#fff'
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <AppBar position="static" className={classes.appBar}>
        <Link to="/users"><Button className={classes.menuButton}>Users</Button></Link>
        <Link to="/form"><Button className={classes.menuButton}>Form</Button></Link>
    </AppBar>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Redirect from="/" to="/users" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
