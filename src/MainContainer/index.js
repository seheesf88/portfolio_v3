import React, { Component } from 'react';

import Nav from '../Nav'
import MainPage from '../MainPage'
import Footer from '../Footer'


class MainContainer extends Component{
  constructor(){
    super()

  }

  render(){

    return(
      <div>
        <Nav />
        <MainPage />
      </div>
    )
  }
}

export default MainContainer
