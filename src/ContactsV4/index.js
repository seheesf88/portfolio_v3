import React from 'react';
import { InlineWidget } from "react-calendly";
import './ContactsV4.scss';

const ContactsV4 = () => {
  return (
    <div className="contacts">
      <h1>Contacts.</h1>
      <div className="contacts__body">
        <div class="contacts__calendly">
          <InlineWidget
            url="https://calendly.com/seheesf88"
            pageSettings={{
              hideEventTypeDetails: true
            }}
          />
        </div>

        <div className="contacts__info">
          <div className="contacts__info-basic">
            <div id="contact-name">SeHee</div>
            <div>San Francisco, CA</div>
            <div>seheesf88@gmail.com</div>
            <div>Find me on..</div>
          </div>
          <div className="contacts__links">
            <span className="contacts__links-link"><a href="mailto:seheesf88@gmail.com"><img className="contact" src="./email.png" /></a></span>
            <span className="contacts__links-link"><a href="https://www.linkedin.com/in/sehee-son/"><img className="contact" src="./linkedin-logo.png" /></a></span>
            <span className="contacts__links-link"><a href="https://github.com/seheesf88"><img className="contact" src="./github.png" /></a></span>
            <span className="contacts__links-link"><a href="../SeHee_Son_resume.pdf" download><img className="contact" src="./download.png" /></a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsV4