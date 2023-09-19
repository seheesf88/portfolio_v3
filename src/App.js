import React from 'react';
import { Route, Switch } from 'react-router-dom'

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
      <NavBarV4 />
      <Switch>
        <Route exact path='/' component = { Home } />
        <Route exact path='/skills' component = { SkillsV4 } />
        <Route exact path='/experience' component = { Experience } />
        <Route exact path='/projects' component = { ProjectsV4 } />
        <Route exact path='/contacts' component = { ContactsV4 } />
      </Switch>
    </main>
  );
}

export default App;
