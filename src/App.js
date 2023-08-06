import React from 'react';
import { Route , Switch } from 'react-router-dom'

import Nav from './Nav'
import MainPage from './MainPage';
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';

const App = () => {
  return (
    <main>
      <Nav />
      <Switch>
        <Route exact path='/' component = { MainPage } />
        <Route exact path='/skills' component = { Skills } />
        <Route exact path='/projects' component = { Projects } />
        <Route exact path='/contact' component = { Contacts } />
      </Switch>
    </main>
  );
}

export default App;
