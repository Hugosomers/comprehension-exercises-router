import React, { Component } from 'react';
import Home from './components/Home';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

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
      </ul>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning"/>}/>
      </BrowserRouter>
    );
  }
}

export default App;
