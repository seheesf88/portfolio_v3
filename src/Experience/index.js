import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.scss';

const ixlayer = './icons/ixlayer.png';
const mvcode = './icons/mvcode.png';
const reeske = './icons/reeske.svg';
const greenbanc = './icons/greenbanc.svg';

const ap = './gif/ap.gif';


const Experience = () => {
  return(
    <div className="experience py-5">
      <div className="h1 text-center">Work Experience.</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="March 2021 - July 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <div className="experience__company-icon">
              <img
                src={ixlayer}
                alt="ixlayer"
                style={{ width: "100%", borderRadius: "50%"}}
              />
            </div>
          }
        >
          <h5>
            <a href="https://ixlayer.com/who-we-are/" className="experience__company-title">
              Ixlayer
            </a>
          </h5>
          <h4>Front end Engineer <span className="px-1"> | </span>Vue Developer</h4>
          <h6>San Francisco, CA | Remote</h6>
          <p className="my-2 px-2">
            I played a pivotal role in developing and enhancing a fully customized COVID testing platform, crucial during the pandemic's peak, serving healthcare providers and users with features such as home testing, while also extending to other products like STI and vitamin D testing, contributing to over 3 million COVID tests, and actively collaborating with cross-functional teams, UX/UI designers, and QA to ensure seamless user experiences, code quality, and bug-free functionality.
          </p>
          {/* <img src={ap} style={{ width: '100%'}} /> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="January 2021 - March 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <div className="experience__company-icon">
              <img
                src={reeske}
                alt="reeske"
                style={{ width: "100%", borderRadius: "50%"}}
              />
            </div>
          }
        >
          <h5> Reeske </h5>
          <h4>Front end Engineer <span className="px-1"> | </span> React Developer</h4>
          <h6>NewYork, CA | Seasonal </h6>
          <p className="my-2 px-2">
            I architected the front-end of the insurance platform using React.js, collaborating with design and backend teams for a seamless user interface; I also designed interactive functionalities allowing users to choose insurance packages based on their needs, following best practices like responsive design for an optimal, smooth user experience.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="May 2019 - January 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <div className="experience__company-icon">
              <img
                src={greenbanc}
                alt="greenbanc"
                style={{ width: "100%", borderRadius: "50%"}}
              />
            </div>
          }
        >
          <h5>Greenbanc</h5>
          <h4>Full Stack Engineer <span className="px-1"> | </span>  MERN stack engineer</h4>
          <h5>Berkely, CA</h5>
          <p className="my-2 px-2">
            I led a team of five as the founding engineer to develop a React.js-based digital roadmap app for estimating potential savings in transitioning to electric energy homes; I also created a feature enabling virtual energy assessments through uploaded photos and streamlined admin dashboard, saving 8+ hours daily, while guiding tech stack choices (MERN), conducting code reviews, and contributing to system design.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="September 2019 - March 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <div className="experience__company-icon">
              <img
                src={mvcode}
                alt="mvcode"
                style={{ width: "100%", borderRadius: "50%"}}
              />
            </div>
          }
        >
          <h5>MVcode</h5>
          <h4>Coding Instructor</h4>
          <h5>San Mateo, CA</h5>
          <p className="my-2 px-2">
            I introduced a structured K12 Computer Science curriculum, teaching coding and topics like Unity, Robotics, JavaScript, HTML/CSS, Python, and Algorithm & Data Structure, inspiring a lasting coding interest among 70+ students weekly; I led daily classes for 20+ students, crafting tailored lesson plans to stimulate learning, evaluating code, and offering personalized debugging consultations post-classes.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience