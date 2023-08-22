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
import { InlineWidget } from "react-calendly";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NavBar from '../NavBar';

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const Home = () => {
  const ref = useRef()
  const yam = './img/angryyam.svg';
  const mango = './img/crazymango.svg';
  const sehee = './img/sehee_full.svg';
  const desk = './img/desk.svg';
  const keyboard = './img/keyboard.svg';

  console.log(ref)
  return (
    <div className="home">
      <Parallax pages={5} ref={ref}>
        <ParallaxLayer
          offset={0}
          factor={5}
          class="home__background"
        />

        <ParallaxLayer
          sticky={{ start: 0.1, end: 4.2 }}
          className="home__sehee-container"
          onClick={() => ref.current.scrollTo(1)}
        >
          <img src={sehee} className="home__sehee" />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3.6, end: 4.2 }}
          className="home__yam-container"
          // onClick={() => ref.current.scrollTo(1)}
        >
          <img src={yam} className="home__yam" />
        </ParallaxLayer>


        <ParallaxLayer
          sticky={{ start: 3.6, end: 5 }}
          offset={4}
          className="home__desk-container"
        >
          <img src={desk} />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3.2, end: 4.0 }}
          offset={4}
          className="home__keyboard-container"
        >
          <img src={keyboard} className="home__keyboard"/>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3.8, end: 4.5 }}
          className="home__mango-container"
          // onClick={() => ref.current.scrollTo(1)}
        >
          <img src={mango} className="home__mango" />
        </ParallaxLayer>

        {/* <ParallaxLayer offset={4} speed={0.5} className="home__calendly">
          <div className="here">
            <InlineWidget
              url="https://calendly.com/seheesf88"
              pageSettings={{
                hideEventTypeDetails: true
              }}
            />
          </div>
        </ParallaxLayer> */}


        {/* <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={yam} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={yam} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={yam} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={yam} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={yam} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={yam} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={yam} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={yam} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={yam} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0.1}
          speed={0.05}
          // onClick={() => ref.current.scrollTo(3)}
          className="home__greeting"
        >
          <h2>Hi, I am SeHee!</h2>
        </ParallaxLayer>


        {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={yam} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={yam} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default Home;

