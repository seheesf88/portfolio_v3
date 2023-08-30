import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import MainPage from './MainPage';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';

const App = () => {
  const v4 = true;
  return (
    <main>
      { 
        v4 ? <></> : <Nav />
      }
      <Switch>
        <Route exact path='/' component = { v4 ? Home : MainPage } />
        <Route exact path='/skills' component = { Skills } />
        <Route exact path='/projects' component = { Projects } />
        <Route exact path='/contacts' component = { Contacts } />
      </Switch>
    </main>
  );
}

export default App;
