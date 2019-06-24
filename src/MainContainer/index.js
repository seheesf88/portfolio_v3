import React, { Component } from 'react';

import Nav from '../Nav'
import Top from '../Top'


class MainContainer extends Component{
  constructor(){
    super()

  }

  render(){

    return(
      <div>
        <Nav />
        <Top />
      </div>
    )
  }
}

export default MainContainer
