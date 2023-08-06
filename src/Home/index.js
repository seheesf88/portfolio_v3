import React from 'react';
import './Home.scss';
import Header from '../Header'
import NavBar from '../NavBar'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        Body
      </div>
      <div className="home__footer">
        <NavBar />
      </div>
    </div>
  );
}

export default Home;
