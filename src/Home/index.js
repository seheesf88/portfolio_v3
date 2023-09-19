import React, { useRef } from 'react'
import './Home.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Home = () => {
  const ref = useRef()

  const yam = './img/angryyam.svg';
  const mango = './img/mango.svg';
  const sehee = './img/sehee_full.svg';
  const desk = './img/desk.svg';
  const keyboard = './img/keyboard.svg';
  const coffee = './img/coffee.svg';

  //default settings
  let fullPg = 5

  //360x640 ~ 414×896
  //601x962 ~ 1280x800
  //1280x720 ~ 1920x1080
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

  const TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


  return (
    <div className="home">
      <Parallax pages={fullPg} ref={ref}>
        <ParallaxLayer
          factor={fullPg}
          class="home__background"
        />

        <ParallaxLayer
          offset="0.1"
          speed="1"
          className="home__greeting-intro"
        >
          <div className="home__greeting-msg">
            <div className="home__greeting-content-hi mr-2">Hi,  </div>
            <div className="home__greeting-content">
              <span className="abbr">I am</span>
              <span
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ "SeHee.", "a Software Engineer.", "a Front end engineer.", "a Problem Solver.", "a Team Player." ]'>
              </span>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset="0"
          sticky={{start: "0", end: "5"}}
          speed="0.1"
          className="home__sehee-back"
        >
          <img src={sehee} alt="sehee character" className="home__sehee mt-5" />
        </ParallaxLayer>

        <ParallaxLayer
          offset="1"
          className="home__intro-message-container"
          onClick={() => ref.current.scrollTo(4)}
        >
          <div className="home__intro-message speech-bubble">
            <div className="home__intro-message-subtitle">
              With a diverse background, I specialize in creating innovative solutions that push the boundaries of web application development.
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset="1.8"
          speed="0.7"
          onClick={() => ref.current.scrollTo(3)}
          className="home__intro-message-container-end"
        >
          <div className="home__intro-message speech-bubble-right">
            <div className="home__intro-message-subtitle">
              I am with a passion for continuous learning, eagerly embracing new technologies and collaborating seamlessly with diverse teams to create user-centric applications
            </div>        
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset="2.1"
          speed="1.2"
          onClick={() => ref.current.scrollTo(4)}
          className="home__intro-message-container"
        >
          <div className="home__intro-message speech-bubble">
            <div className="home__intro-message-subtitle">
              I excel at solving challenging problems by writing precise code and using analytical thinking, ensuring that each detail strengthens robust solutions.
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset="4"
          className="home__yam-container"
        >
          <img src={yam} alt="yam-cat" className="home__yam" />
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          speed="1.5"
          sticky={{start: "4", end: "5"}}
          className="home__desk-container"
        >
          <img src={desk} alt="desk" style={{ width: "80%"}}/>
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          speed="2"
          sticky={{start: "4", end: "5"}}
          className="home__keyboard-container"
        >
          <img src={keyboard} alt="keyboard" className="home__keyboard"/>
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          speed="2.4"
          sticky={{start: "3.5", end: "5"}}
          className="home__coffee-container"
        >
          <img src={coffee} alt="coffee" style={{ width: "8%", marginLeft:"20%", marginBottom: "5%"}}/>
        </ParallaxLayer>

        <ParallaxLayer
          factor="1"
          speed="2.1"
          sticky={{start: "3.2", end: "5"}}
          className="home__mango-container"
        >
          <img src={mango} alt="mango-cat" className="home__mango" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;
