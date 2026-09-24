import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/jwu0216.png" alt="Jennifer Wu" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jwu0216" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jenniferwu03" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jennifer Wu</h1>
          <p>I build tools and interactive systems for artists and users.</p>
          <p className="subtitle">CS @ University of Waterloo · Unity · Unreal Engine 5 · Generative AI</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jwu0216" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jenniferwu03" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
