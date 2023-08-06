import React from 'react';
import './App.css';
import { Route , Switch } from 'react-router-dom'

import Nav from './Nav'
import MainContainer from './MainContainer';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';

const My404 = () => {
  return(
    <div>
      error!
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Nav />
      <Switch>
        <Route exact path='/' component = { MainContainer } />
        <Route exact path='/aboutme' component = { AboutMe } />
        <Route exact path='/skills' component = { Skills } />
        <Route exact path='/projects' component = { Projects } />
        <Route exact path='/contact' component = { Contacts } />
      </Switch>
    </main>
  );
}

export default App;
