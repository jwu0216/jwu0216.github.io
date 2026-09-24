import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>I'm looking for new-grad roles in technical art, tools, and software engineering across the US and Canada. The best way to reach me is email.</p>
          <Button variant="contained" endIcon={<EmailIcon />} href="mailto:jenniferw0216@gmail.com">
            jenniferw0216@gmail.com
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
