import React, { Component } from 'react';
import Home from './components/Home';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/users">
            Users
          </Link>
        </li>
        <li>
          <Link to="/strict-access">
            Strict Access
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning"/>}/>

        <Route path="/strict-access" render={() => <StrictAccess user={{username: 'João', password: '1234'}}/>}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
