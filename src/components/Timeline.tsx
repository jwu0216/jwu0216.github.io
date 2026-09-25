import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Graduated Aug 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer Science (Honours, Co-op)</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Waterloo</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2025 - Apr 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">VR Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NeuroFlex</h4>
            <p>
              Gameplay systems for 20 Unity VR rehabilitation exercises with eye/head tracking. Scene setup for most exercises, the app-wide UI and color theme, custom HLSL shaders, a scene-capture-to-skybox tool, and draw calls cut by up to 70% (static) and 20% (dynamic).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Infold Games</h4>
            <p>
              Extended ComfyUI into a multi-user tool for studio artists, with concurrent job queuing and GPU task scheduling. Built 20+ generative AI workflows, helped build an Unreal Engine 5 editor plugin for AI-powered LOD generation inside artists' workflows, and created plugins for the Adobe Substance 3D suite.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Game Designer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Gamehaus</h4>
            <p>
              Translated narrative scripts into in-game scenes by coordinating character visuals, animations, and backgrounds, and ran gameplay research to inform content development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Localization QA Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">OpenText</h4>
            <p>
              Built an internal web portal in HTML, CSS, and JavaScript to centralize team documentation, and supported localization and functional QA for enterprise software.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
