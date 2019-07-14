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
         data-rotate='[ "SeHee", "Web Developer.", "React Lover.", "Artist.", "Creator.", "your partner!" ]'></span>
        </div>
      </div>
      <div className="container-summary">
        <div>
          <p className="summary one wow flipInX"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            "Highly <span className="bold">analytical</span>, <span className="bold">creative</span> and <span className="bold">enthusiastic</span> web developer with a powerful blend of exceptional insights and high-level performance in building
           and optimizing the performance of user-centric, high-impact websites for start-ups and established companies."
          </p>
          <div className="container-icon">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
        <div>
          <p className="summary two wow flipInX"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            "An articulate developer with verifiable strengths to leverage technical, analytical and problem-solving skills to create dynamic, high-speed websites, apps and platforms fueling competitive
           advantage and revenue growth."
          </p>
          <div className="container-icon">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
        <div>
          <p className="summary three wow flipInX"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
          "Well-equipped individual possessing an acute awareness of practical issues and trends, particularly accessibility, usability
          and emerging technologies."
          </p>
          <div className="container-icon">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
        <div>
          <p className="summary four wow flipInX"
            data-wow-duration="1s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
          "Able to provide rapid, robust and client-acclaimed front- and back-end web development optimizing user experience, sales, search engine ranking,
          brand positioning and related metrics, whilst demonstrating excellent communication skills."
          </p>
          <div className="container-icon">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MainPage
