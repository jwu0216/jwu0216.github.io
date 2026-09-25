import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get in touch</h1>
          <p>I'm exploring new-grad roles in technical art, tools, and software, anywhere in the US or Canada. I'd love to chat, so feel free to reach out anytime.</p>
          <a className="email-pill" href="mailto:jenniferw0216@gmail.com">
            <EmailIcon />
            <span>jenniferw0216@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
