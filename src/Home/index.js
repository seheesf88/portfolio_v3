// import React, { useRef, useState, useEffect } from 'react'
// import './Home.scss';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import Skills from '../SkillsV4';
// import Projects from '../ProjectsV4';
// import Experience from '../Experience';

// const Home = () => {
//   const ref = useRef()

//   const yam = './img/angryyam.svg';
//   const mango = './img/mango.svg';
//   const sehee = './img/sehee_full.svg';
//   const desk = './img/desk.svg';
//   const keyboard = './img/keyboard.svg';
//   const coffee = './img/coffee.svg';
//   const ixlayer = './icons/ixlayer.png';
//   const mvcode = './icons/mvcode.png';
//   const reeske = './icons/reeske.svg';
//   const greenbanc = './icons/greenbanc.svg';

//   //default settings
//   let fullPg = 6
//   let intro_pg = { factor: "1", offset: "0"}
//   let skills_pg = { factor: "1", offset: "1"}
//   let experience_pg = { factor: "2", offset: "2"}
//   let project_pg = {factor: "1", offset: "4"}
//   let contact_pg = {factor: 1, offset: 5}

//   let yam_contact = { start: 4.9, end: 6 }
//   let desk_contact = { start: 4.8, end: 5}
//   let keybaord_contact = { start: 4.2, end: 6 }
//   let mango_contact = { start: 4.4, end: 5.1 }
//   let coffee_contact = { start: 3.8, end: 6 }

//   //360 * 640 ~ 414×896
//   //601×962 ~ 1280×800
//   //1280 * 720 ~ 1920*1080
//   const screenRatio = {
//     sm: {
//       intro_pg: { factor: "1", offset: "0"},
//       skills_pg: { factor: "3", offset: "1.5"},
//       experience_pg: { factor: "3.5", offset: "3.5"},
//       project_pg: {factor: "3.5", offset: "7"},
//       contact_pg: {factor: "1", offset: "7.5"}
//     },
//     md: {
//       intro_pg: { factor: "1", offset: "0"},
//       skills_pg: { factor: "3", offset: "1.5"},
//       experience_pg: { factor: "3.5", offset: "3.5"},
//       project_pg: {factor: "3.5", offset: "7"},
//       contact_pg: {factor: "1", offset: "7.5"}
//     },
//     lg: {
//       intro_pg: { factor: "1", offset: "0"},
//       skills_pg: { factor: "1.5", offset: "1.5"},
//       experience_pg: { factor: "3", offset: "3"},
//       project_pg: {factor: "1.5", offset: "6"},
//       contact_pg: {factor: "1", offset: "7.5"}
//     }
//   }


//   return (
//     <div className="home">
//       <Parallax pages={fullPg} ref={ref}>
//         <ParallaxLayer
//           factor={fullPg}
//           class="home__background"
//         />
        
//         <ParallaxLayer
//           factor="1"
//           speed="0.05"
//           className="home__sehee-main"
//           onClick={() => ref.current.scrollTo(6)}
//         >
//           <img src={sehee} className="home__sehee" />
//         </ParallaxLayer>

//         <ParallaxLayer
//           factor="1"
//           offset="0.16"
//           speed={0.6}
//           className="home__greeting px-5 px-md-0"
//           onClick={() => ref.current.scrollTo(6)}
//         >
//           <div>Hi, I am SeHee!</div>
//         </ParallaxLayer>

//         <ParallaxLayer
//           factor="1"
//           offset="0.28"
//           speed="0.9"
//           className="home__greeting px-5 px-md-0 mt-5"
//           onClick={() => ref.current.scrollTo(6)}
//         >
//           <div>I am a creative software engineer</div>
//         </ParallaxLayer>

//         <ParallaxLayer
//           factor={contact_pg.factor}
//           offset={contact_pg.offset}
//           speed="0.7"
//           className="home__contact-container"
//         >
//           <div className="home__contact-content">
//             <div className="home__contact-subtitle">SeHee Son.</div>
//             <div>San Francisco, CA</div>
//             <div>seheesf88@gmail.com</div>
//             <div className="home__contacts-links mt-4">
//               <span className="home__contacts-link"><a href="mailto:seheesf88@gmail.com"><img className="home__contacts-link-icon" src="./icons/email.svg" /></a></span>
//               <span className="home__contacts-link"><a href="https://www.linkedin.com/in/sehee-son/"><img className="home__contacts-link-icon" src="./icons/linkedin.svg" /></a></span>
//               <span className="home__contacts-link"><a href="https://github.com/seheesf88"><img className="home__contacts-link-icon" src="./icons/github.svg" /></a></span>
//               <span className="home__contacts-link"><a href="../SeHee_Son_resume.pdf" download><img className="home__contacts-link-icon" src="./icons/download.svg" /></a></span>
//             </div>
//           </div>
//         </ParallaxLayer>

//         {/* <ParallaxLayer
//           offset="5"
//           speed="3"
//           className="home__sehee-container"
//         >
//           <img src={sehee} className="home__sehee" onClick={() => ref.current.scrollTo(1)}/>
//         </ParallaxLayer> */}

//         {/* <ParallaxLayer
//           sticky={yam_contact}
//           className="home__yam-container"
//           onClick={() => ref.current.scrollTo(1)}
//         >
//           <img src={yam} className="home__yam" />
//         </ParallaxLayer> */}

//         {/* <ParallaxLayer
//           sticky={desk_contact}
//           className="home__desk-container"
//         >
//           <img src={desk} />
//         </ParallaxLayer> */}

//         {/* <ParallaxLayer
//           sticky={keybaord_contact}
//           className="home__keyboard-container"
//         >
//           <img src={keyboard} className="home__keyboard"/>
//         </ParallaxLayer> */}

//         {/* <ParallaxLayer
//           sticky={mango_contact}
//           className="home__mango-container"
//           // onClick={() => ref.current.scrollTo(1)}
//         >
//           <img src={mango} className="home__mango" />
//         </ParallaxLayer> */}

//         {/* <ParallaxLayer
//           sticky={coffee_contact}
//           speed="-0.9"
//           className="home__coffee-container"
//         >
//           <img src={coffee} style={{ width: "8%", marginLeft:"20%", marginBottom: "5%"}}/>
//         </ParallaxLayer> */}

//         <ParallaxLayer factor={skills_pg.factor} offset={skills_pg.offset} className="home__skills-container">
//           <Skills />
//         </ParallaxLayer>

//         <ParallaxLayer factor={experience_pg.factor} offset={experience_pg.offset} className="home__experience__container">
//           <Experience />
//         </ParallaxLayer>

//         <ParallaxLayer factor={project_pg.factor} offset={project_pg.offset} className="home__projects__container">
//           <Projects />
//         </ParallaxLayer>

//         <ParallaxLayer offset="2.8" speed="0.2" style={{ opacity: 0.2 }}>
//           <img src={mvcode} style={{ display: 'block', width: '8%', marginLeft: '10%' }} />
//           <img src={greenbanc} style={{ display: 'block', width: '12%', marginLeft: '75%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset="3.2" speed="-0.1" style={{ opacity: 0.4 }}>
//           <img src={reeske} style={{ display: 'block', width: '10%', marginLeft: '60%' }} />
//           <img src={ixlayer} style={{ display: 'block', width: '15%', marginLeft: '30%' }} />
//           <img src={reeske} style={{ display: 'block', width: '4%', marginLeft: '80%' }} />
//           <img src={mvcode} style={{ display: 'block', width: '8%', marginLeft: '90%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset="2.7" speed="0.4" style={{ opacity: 0.6 }}>
//           <img src={ixlayer} style={{ display: 'block', width: '5%', marginLeft: '75%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset="2" speed="0.8" style={{ opacity: 0.1 }}>
//           <img src={ixlayer} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
//           <img src={greenbanc} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
//         </ParallaxLayer>
//       </Parallax>
//     </div>
//   );
// }

// export default Home;

import React, { useRef, useState, useEffect } from 'react'
import './Home.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Skills from '../SkillsV4';
import Projects from '../ProjectsV4';
import Experience from '../Experience';
import ContactsV4 from '../ContactsV4';

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

  //default settings
  let fullPg = 7
  let intro_pg = { factor: "1", offset: "1"}
  let skills_pg = { factor: "1", offset: "2"}
  let experience_pg = { factor: "2", offset: "3"}
  let project_pg = {factor: 1, offset: 5}
  let contact_pg = {factor: 1, offset: 6}


  //360 * 640 ~ 414×896
  //601×962 ~ 1280×800
  //1280 * 720 ~ 1920*1080
  const screenRatio = {
    sm: {
      intro_pg: { factor: "1", offset: "0"},
      skills_pg: { factor: "3", offset: "1.5"},
      experience_pg: { factor: "3.5", offset: "3.5"},
      project_pg: {factor: "3.5", offset: "7"},
      contact_pg: {factor: "1", offset: "7.5"}
    },
    md: {
      intro_pg: { factor: "1", offset: "0"},
      skills_pg: { factor: "3", offset: "1.5"},
      experience_pg: { factor: "3.5", offset: "3.5"},
      project_pg: {factor: "3.5", offset: "7"},
      contact_pg: {factor: "1", offset: "7.5"}
    },
    lg: {
      intro_pg: { factor: "1", offset: "0"},
      skills_pg: { factor: "1.5", offset: "1.5"},
      experience_pg: { factor: "3", offset: "3"},
      project_pg: {factor: "1.5", offset: "6"},
      contact_pg: {factor: "1", offset: "7.5"}
    }
  }


  return (
    <div className="home">
      <Parallax pages={fullPg} ref={ref}>
        <ParallaxLayer
          factor={fullPg}
          class="home__background"
        />

        <ParallaxLayer
          factor="1"
          offset="0"
          speed="0.9"
          className="home__greeting px-5 px-md-0 mt-5"
          onClick={() => ref.current.scrollTo(6)}
        >
          <div>Hi, I am SeHee!</div>
        </ParallaxLayer>
        
        <ParallaxLayer
          factor="1"
          offset="0"
          speed="0.00000001"
          className="home__sehee-main yo"
        >
          <img src={sehee} className="home__sehee" />
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          offset="0"
          speed="1.8"
          className="home__yam-container ya"
        >
          <img src={yam} className="home__yam" />
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          offset="0"
          speed="1.5"
          className="home__desk-container"
        >
          <img src={desk} style={{ width: "80%"}}/>
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          offset="0"
          speed="2"
          className="home__keyboard-container"
        >
          <img src={keyboard} className="home__keyboard"/>
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          offset="0"
          speed="2.4"
          className="home__coffee-container"
        >
          <img src={coffee} style={{ width: "8%", marginLeft:"20%", marginBottom: "5%"}}/>
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          offset="0"
          speed="2.1"
          className="home__mango-container"
        >
          <img src={mango} className="home__mango" />
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          offset="0.99"
          speed="0.5"
          style={{ display: "flex", flexDirection: "column", alignItems: "center"}}
          onClick={() => ref.current.scrollTo(6)}
        >
          <div style={{ fontSize: "60px", fontWeight: "800"}}>I am a software engineer</div>
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          offset="1.000001"
          speed="3"
          className="home__greeting px-5 px-md-0 mt-5"
          onClick={() => ref.current.scrollTo(6)}
        >
          <div style={{ fontSize: "40px", fontWeight: "800", textAlign: "center"}}>with diverse background in createing innovation solution for web application. </div>
        </ParallaxLayer>
        

        <ParallaxLayer factor={skills_pg.factor} offset={skills_pg.offset} className="home__skills-container">
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer factor={experience_pg.factor} offset={experience_pg.offset} className="home__experience__container">
          <Experience />
        </ParallaxLayer>

        <ParallaxLayer offset="3.8" speed="0.2" style={{ opacity: 0.2 }}>
          <img src={mvcode} style={{ display: 'block', width: '8%', marginLeft: '10%' }} />
          <img src={greenbanc} style={{ display: 'block', width: '12%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset="4.2" speed="-0.1" style={{ opacity: 0.4 }}>
          <img src={reeske} style={{ display: 'block', width: '10%', marginLeft: '60%' }} />
          <img src={ixlayer} style={{ display: 'block', width: '15%', marginLeft: '30%' }} />
          <img src={reeske} style={{ display: 'block', width: '4%', marginLeft: '80%' }} />
          <img src={mvcode} style={{ display: 'block', width: '8%', marginLeft: '90%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset="3.7" speed="0.4" style={{ opacity: 0.6 }}>
          <img src={ixlayer} style={{ display: 'block', width: '5%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset="3" speed="0.8" style={{ opacity: 0.1 }}>
          <img src={ixlayer} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={greenbanc} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer factor={project_pg.factor} offset={project_pg.offset} className="home__projects__container">
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer
          factor={contact_pg.factor}
          offset={contact_pg.offset}
          speed="0.7"
          className="home__contact-container"
        >
          <ContactsV4 />
        </ParallaxLayer>

        <ParallaxLayer
          factor="0.5"
          offset="6.5"
          speed="3"
          className="home__sehee-container"
        >
          <img src={yam} style={{ width: "10%"}} onClick={() => ref.current.scrollTo(2)}/>
          <img src={sehee} style={{ width: "20%"}} onClick={() => ref.current.scrollTo(1)}/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;
