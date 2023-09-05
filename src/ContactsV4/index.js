import React from 'react';
import { InlineWidget } from "react-calendly";
import './ContactsV4.scss';

const ContactsV4 = () => {
  return (
    <div className="contacts py-5">
      <div className="h1 text-center mb-5">Contact.</div>
      <div className="contacts__body">
        <div className="mx-5">
          <InlineWidget
            url="https://calendly.com/seheesf88"
            pageSettings={{
              hideEventTypeDetails: true
            }}
          />
        </div>

        <div className="contacts__content mx-md-5 mb-5 mb-md-5">
          <div className="contacts__content-subtitle">SeHee Son.</div>
          <div>San Francisco, CA</div>
          <div>seheesf88@gmail.com</div>
          <div className="contacts__content-links mt-4">
            <span className="contacts__content-link"><a href="mailto:seheesf88@gmail.com"><img className="contacts__content-link-icon" src="./icons/email.svg" /></a></span>
            <span className="contacts__content-link"><a href="https://www.linkedin.com/in/sehee-son/"><img className="contacts__content-link-icon" src="./icons/linkedin.svg" /></a></span>
            <span className="contacts__content-link"><a href="https://github.com/seheesf88"><img className="contacts__content-link-icon" src="./icons/github.svg" /></a></span>
            <span className="contacts__content-link"><a href="../SeHee_Son_resume.pdf" download><img className="contacts__content-link-icon" src="./icons/download.svg" /></a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsV4