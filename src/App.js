import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './pages/login';
import Home from './pages/home';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Chat from './pages/chat';
import Task from './pages/task';
import Reward from './pages/reward';

import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/home">
            <Home />
            <Nav />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile />
            <Nav />
          </Route>
          <Route exact path="/chat">
            <Chat />
            <Nav />
          </Route>
          <Route exact path="/reward">
            <Reward />
            <Nav />
          </Route>
          <Route exact path="/task">
            <Task />
            <Nav />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
