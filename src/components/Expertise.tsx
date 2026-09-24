import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Unity",
    "Unreal Engine 5",
    "C#",
    "C++",
    "HLSL",
    "VR",
    "Path Tracing",
];

const labelsSecond = [
    "Python",
    "PyTorch",
    "ComfyUI",
    "Stable Diffusion",
    "ControlNet",
    "LoRA",
];

const labelsThird = [
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "FastAPI",
    "Swift",
    "Kotlin",
    "Git",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faUnity} size="3x"/>
                    <h3>Real-Time Graphics & Tech Art</h3>
                    <p>I build gameplay systems and visual effects in Unity and Unreal Engine 5, write custom HLSL shaders, and optimize rendering. At NeuroFlex I cut draw calls by up to 70% in static scenes. I also wrote a Monte Carlo path tracer from scratch.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Artist-Facing AI Tools</h3>
                    <p>At Infold Games I extended ComfyUI into a multi-user tool that centralized generation workflows for studio artists, built 20+ reusable generative AI workflows, and trained LoRA adapters on in-house art datasets.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJs} size="3x"/>
                    <h3>Apps & Internal Platforms</h3>
                    <p>I build the tools teams use every day: an internal documentation portal at OpenText, an on-device AI memory assistant for iOS, and an Android client for a team budgeting app.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
