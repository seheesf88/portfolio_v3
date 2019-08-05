import React, { Component } from 'react';
import './MainPage.css';
import WOW from "wowjs";
import { Link } from 'react-router-dom'


class MainPage extends Component{
  constructor(){
    super()

  }


  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){

    var TxtRotate = function(el, toRotate, period) {
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



    return(
    <div className="main">
      <div className="intro">
        <div>Hi, </div>
        <div className="title">I am
        <span> </span>
        <span
         class="txt-rotate"
         data-period="2000"
         data-rotate='[ "SeHee", "Web Developer.", "React Lover.", "your partner!" ]'></span>
        </div>
      </div>
      <div className="container-summary">
        <div className="firstP">
          <p className="summary one wow flipInX"
            data-wow-duration="3s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            "Highly <span className="bold">analytical</span>, <span className="bold">creative</span> and <span className="bold">enthusiastic</span> web developer with a powerful blend of exceptional insights and high-level performance in building
           and optimizing the performance of user-centric, high-impact websites for start-ups and established companies."
          </p>
          <div className="container-icon icons">
            <div className="icon"><img src="./analytical.png" /></div>
            <div className="icon"><img src="./creative.png" /></div>
            <div className="icon"><img src="./passion.png" /></div>
          </div>
        </div>
        <div className="secondP">
          <p className="summary two wow flipInX"
            data-wow-duration="3s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            "An <span className="bold">articulate developer</span> with verifiable strengths to leverage technical, analytical and problem-solving skills to create dynamic, high-speed websites, apps and platforms fueling competitive
           advantage and revenue growth."
          </p>
          <div className="container-icon strengths">
            <div className="benefit smile-0">dynamic</div>
            <div className="benefit smile-1"><img id="speed" src="./speed.png" /></div>
            <div className="benefit smile-2">fueling competitive</div>
            <div className="benefit smile-3">revenue growth</div>
            <div className=""><img id="platforms" src="./platform.png" /></div>
          </div>
        </div>
        <div className="thridP">
          <p className="summary three wow flipInX"
            data-wow-duration="3s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
          "Well-equipped individual possessing an acute awareness of practical issues and trends, particularly accessibility, usability
          and emerging technologies."
          </p>
          <div className="container-icon top">
            <div className="flip-card">
              <div className="icont flip-card-inner">
                <div className="text flip-card-front">accessibility</div>
                <div className="text flip-card-back">testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting</div>
              </div>
            </div>
          </div>
          <div className="container-icon">
            <div className="icont"><div className="text">usability</div></div>
            <div className="icont"><div className="text">emerging</div></div>
          </div>
          <div className="container-icon bottom">
            <div className="icont"><div className="text">technologies</div></div>
          </div>
        </div>
        <div className="fourP">
          <p className="summary four wow flipInX"
            data-wow-duration="1s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
          "Able to provide rapid, robust and client-acclaimed <span className="bold">front-end</span> and <span className="bold">back-end</span> web development optimizing user experience, sales, search engine ranking,
          brand positioning and related metrics, whilst demonstrating excellent communication skills."
          </p>
          <div className="container-icon">
            <img className="icon-3" src="./back.png" />
            <div className="saving">
              <span>•   </span>
              <span>•   </span>
              <span>•   </span>
              <span>•   </span>
              <span>•   </span>
            </div>
            <div className="icon"></div>
            <div className="saving">
              <span>•   </span>
              <span>•   </span>
              <span>•   </span>
              <span>•   </span>
              <span>•   </span>
            </div>
            <img className="icon-3" src="./front.png" />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MainPage


// <div className="icont"><div className="img"><img id="app" src="./data.png" /></div></div>
// <div className='pageOption'>
//   <a href='#' className='option' data-inf='photo'>
//     <img src='http://imgsrc.hubblesite.org/hu/db/images/hs-2009-28-b-large_web.jpg' />
//   </a>
//   <div className="me"></div>
//   <a href='#' className='option' data-inf='cinema'>
//     <img src='http://imgsrc.hubblesite.org/hu/db/images/hs-2013-06-a-large_web.jpg' />
//   </a>
// </div>
