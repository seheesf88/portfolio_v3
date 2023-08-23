// import React from 'react';
// import './Home.scss';
// import Header from '../Header'
// import NavBar from '../NavBar'

// const Home = () => {
//   return (
//     <div className="home">
//       <Header />
//       <div className="home__body">
//         <div className="home__body-sehee">
//         <img src="./img/sehee_body.svg" alt="sehee" className="home__body-sehee-body" />
//         </div>
//       </div>
//       <NavBar />
//     </div>
//   );
// }

// export default Home;


import React, { useRef } from 'react'
import './Home.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NavBar from '../NavBar';
import Skills from '../Skills';
import Projects from '../Projects';
import ContactsV4 from '../ContactsV4';

const Home = () => {
  const ref = useRef()
  const yam = './img/angryyam.svg';
  const mango = './img/crazymango.svg';
  const sehee = './img/sehee_full.svg';
  const desk = './img/desk.svg';
  const keyboard = './img/keyboard.svg';
  const ixlayer = './icons/ixlayer.png';
  const mvcode = './icons/mvcode.png';
  const reeske = './icons/reeske.svg';
  const greenbanc = './icons/greenbanc.svg';

  return (
    <div className="home">
      <Parallax pages={6} ref={ref}>
        <ParallaxLayer
          offset={0}
          factor={6}
          class="home__background"
        />

        <ParallaxLayer
          className="home__sehee-main"
          onClick={() => ref.current.scrollTo(1)}
        >
          <img src={sehee} className="home__sehee" />
        </ParallaxLayer>


        <ParallaxLayer
          sticky={{ start: 4.1, end: 6 }}
          className="home__sehee-container"
          onClick={() => ref.current.scrollTo(1)}
        >
          <img src={sehee} className="home__sehee" />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4.6, end: 5.2 }}
          className="home__yam-container"
          // onClick={() => ref.current.scrollTo(1)}
        >
          <img src={yam} className="home__yam" />
        </ParallaxLayer>


        <ParallaxLayer
          sticky={{ start: 4.6, end: 6 }}
          offset={4}
          className="home__desk-container"
        >
          <img src={desk} />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4.2, end: 5.0 }}
          offset={4}
          className="home__keyboard-container"
        >
          <img src={keyboard} className="home__keyboard"/>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4.8, end: 5.5 }}
          className="home__mango-container"
          // onClick={() => ref.current.scrollTo(1)}
        >
          <img src={mango} className="home__mango" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} className="home__page_2">
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer offset={2} className="border row">
          <h1>Work Experience.</h1>

          <div>
            <div>Ixlayer - Front end Engineer |  Vue Developer</div>
              <div>
                <div>Daily responsibilities</div>
                <div>gif Image</div>

              </div>
              <div>Reeske - Front end Engineer  |  React Developer</div>
              <div>Greenbanc - Full stack Engineer  |  Founding Engineer</div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} className="border">
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer speed={0.7} sticky={{ start: 5.1, end: 5.5 }} className="home__contact">
          <div className="home__contact-container">
            <div className="home__contact-subtitle mb-2 mb-md-4">SeHee Son.</div>
            <div className="to">San Francisco, CA</div>
            <div className="to">seheesf88@gmail.com</div>

            <div className="home__contacts-links mt-4">
              <span className="home__contacts-link"><a href="mailto:seheesf88@gmail.com"><img className="home__contacts-link-icon" src="./email.png" /></a></span>
              <span className="home__contacts-link"><a href="https://www.linkedin.com/in/sehee-son/"><img className="home__contacts-link-icon" src="./linkedin-logo.png" /></a></span>
              <span className="home__contacts-link"><a href="https://github.com/seheesf88"><img className="home__contacts-link-icon" src="./github.png" /></a></span>
              <span className="home__contacts-link"><a href="../SeHee_Son_resume.pdf" download><img className="home__contacts-link-icon" src="./download.png" /></a></span>
            </div>
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={mvcode} style={{ display: 'block', width: '8%', marginLeft: '10%' }} />
          <img src={greenbanc} style={{ display: 'block', width: '12%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={reeske} style={{ display: 'block', width: '10%', marginLeft: '60%' }} />
          <img src={ixlayer} style={{ display: 'block', width: '15%', marginLeft: '30%' }} />
          <img src={reeske} style={{ display: 'block', width: '4%', marginLeft: '80%' }} />
          <img src={mvcode} style={{ display: 'block', width: '8%', marginLeft: '90%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={ixlayer} style={{ display: 'block', width: '5%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.1}
          speed={0.05}
          // onClick={() => ref.current.scrollTo(3)}
          className="home__greeting"
        >
          <h2>Hi, I am SeHee!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.3}
          speed={1}
          style={{ display: 'block', width: '20%', marginLeft: '55%' }}
        >
          <h2>I am a Software engineer</h2>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.6}
          style={{ display: 'block', width: '20%', marginLeft: '25%', marginTop: '-10%' }}
        >
          <h2>Hi, I am a Software engineer</h2>
        </ParallaxLayer>


        {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={yam} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={yam} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer ParallaxLayer offset={5} className="home__page-6">
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default Home;

