import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import MainPage from './MainPage';
import Skills from './Skills';
import Contacts from './Contacts';

import NavBarV4 from './NavBarV4';
import Home from './Home';
import SkillsV4 from './SkillsV4';
import ProjectsV4 from './ProjectsV4';
import Experience from './Experience';
import ContactsV4 from './ContactsV4';

const App = () => {
  const v4 = true;
  return (
    <main>
      { 
        v4 ? <NavBarV4 /> : <Nav />
      }
      <Switch>
        <Route exact path='/' component = { v4 ? Home : MainPage } />
        <Route exact path='/skills' component = { v4 ?  SkillsV4 : Skills } />
        <Route exact path='/experience' component = { v4 ? Experience : <></> } />
        <Route exact path='/projects' component = { ProjectsV4 } />
        <Route exact path='/contacts' component = { v4 ? ContactsV4 : Contacts } />
      </Switch>
    </main>
  );
}

export default App;
