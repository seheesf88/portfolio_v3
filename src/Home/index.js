import React from 'react';
import './Home.scss';
import Header from '../Header'
import NavBar from '../NavBar'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <div className="home__body-sehee">
        <img src="./img/sehee_body.svg" alt="sehee" className="home__body-sehee-body" />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
