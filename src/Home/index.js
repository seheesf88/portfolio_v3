import React, { useRef } from 'react'
import './Home.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NavBar from '../NavBar';
import Skills from '../SkillsV4';
import Projects from '../ProjectsV4';
import Experience from '../Experience';

const Home = () => {
  const ref = useRef()
  const yam = './img/angryyam.svg';
  const mango = './img/mango.svg';
  const sehee = './img/sehee_full.svg';
  const desk = './img/desk.svg';
  const keyboard = './img/keyboard.svg';
  const coffee = './img/coffee.svg';
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
          offset={0}
          factor={1}
          sticky={{ start: 0, end: 0.1 }}
          speed={0.05}
          className="home__sehee-main"
          onClick={() => ref.current.scrollTo(6)}
        >
          <img src={sehee} className="home__sehee" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.16}
          speed={0.6}
          className="home__greeting-intro"
        >
          <div>Hi, I am SeHee!</div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.28}
          speed={0.9}
          className="home__greeting-intro"
        >
          <div>I am a creative software engineer</div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4.3, end: 6 }}
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
          sticky={{ start: 4, end: 5.0 }}
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

        <ParallaxLayer
          sticky={{ start: 5.2, end: 6 }}
          offset={5}
          className="home__coffee-container"
        >
          <img src={coffee} style={{ width: '8%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} className="home__skills-container">
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} className="home__experience__container">
          <Experience />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={mvcode} style={{ display: 'block', width: '8%', marginLeft: '10%' }} />
          <img src={greenbanc} style={{ display: 'block', width: '12%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={reeske} style={{ display: 'block', width: '10%', marginLeft: '60%' }} />
          <img src={ixlayer} style={{ display: 'block', width: '15%', marginLeft: '30%' }} />
          <img src={reeske} style={{ display: 'block', width: '4%', marginLeft: '80%' }} />
          <img src={mvcode} style={{ display: 'block', width: '8%', marginLeft: '90%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={ixlayer} style={{ display: 'block', width: '5%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} className="border">
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


        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={yam} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={yam} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;

