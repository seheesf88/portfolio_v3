import React, { Component } from 'react';
import './Contact.css';
import Nav from '../Nav'
import { Link } from 'react-router-dom'


class Contacts extends Component{
  constructor(){
    super()

  }

  render(){


    return(
      <div>
        <Nav />
        <h1>Contact</h1>
          <div className="grid">
              <figure className="effect-dexter">
                  <img id="emailbg" src="../emailbg.jpg" alt="img19"/>
                  <figcaption>
                      <h2>SeHee_<span>Email</span></h2>
                      <p>
                        <div className="shortUrl">seheesf88@gmail.com</div>
                        <div><a className="link"href="mailto:seheesf88@gmail.com">Click here to email SeHee</a></div>
                      </p>
                  </figcaption>
              </figure>
              <figure className="effect-dexter">
                  <img id="linkedin" src="../linkedinlogo.webp" alt="linkedinimg"/>
                  <figcaption>
                      <h2 className="linkedinfig">SeHee_<span>LinkedIn</span></h2>
                      <p>
                        <div className="shortUrl">linkedin.com/in/sehee-son/</div>
                        <div><Link to="https://www.linkedin.com/in/sehee-son/" className="link">Go to SeHee_LinkedIn</Link></div>
                      </p>

                  </figcaption>
              </figure>
              <figure className="effect-dexter">
                  <img id="github" src="../githubbg.jpeg" alt="img19"/>
                  <figcaption>
                      <h2 className="githubfig">SeHee_<span>Github</span></h2>
                      <p>
                        <div className="shortUrl">git.generalassemb.ly/seheesf88/</div>
                        <div><Link to="https://git.generalassemb.ly/seheesf88/" className="link">Go to SeHee_Github</Link></div>
                      </p>
                  </figcaption>
              </figure>
              <figure class="effect-dexter">
                  <img src="https://tympanus.net/Development/HoverEffectIdeas/img/19.jpg" alt="img19"/>
                  <figcaption>
                      <h2>SeHee_<span>Resume</span></h2>
                      <p>
                        <div><Link className="shortUrl link" to="/aboutme">About Me</Link></div>
                        <div><a href="" download className="link">Download Resume.docx</a></div>
                        <div><a href="" download className="link">Download Resume.pdf</a></div>
                      </p>

                  </figcaption>
              </figure>
          </div>

      </div>
    )
  }
}

export default Contacts
