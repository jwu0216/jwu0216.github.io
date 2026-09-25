import React, { useState } from "react";
import reflexLogo from '../assets/images/reflex-logo.jpg';
import recallThumb from '../assets/images/recall-thumb.jpg';
import '../assets/styles/Project.scss';

const MEDIA = "https://raw.githubusercontent.com/jwu0216/monte-carlo-path-tracer/main/media";
const REFLEX_VIDEO = "https://www.youtube.com/watch?v=NchOIAa7h9A";

function Project() {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project featured">
                <a href={REFLEX_VIDEO} target="_blank" rel="noreferrer"><img src={reflexLogo} className="zoom" alt="ReFlex logo, which I designed and modeled in 3D" width="100%"/></a>
                <div className="featured-body">
                    <a href={REFLEX_VIDEO} target="_blank" rel="noreferrer"><h2>NeuroFlex ReFlex: VR Rehabilitation App</h2></a>
                    <p className="credit">VR Developer Intern, Sep 2025 – Apr 2026. The video is NeuroFlex's; the details list what I built.</p>
                    <p>I set up the scenes for most of the app's 20 exercises, designed the app-wide UI and the ReFlex logo, built effects and shaders, and optimized rendering with a scene-capture-to-skybox tool.</p>
                    <div className="featured-actions">
                        <button type="button" className="details-toggle" aria-expanded={showDetails} aria-controls="reflex-details" onClick={() => setShowDetails(!showDetails)}>
                            {showDetails ? 'Hide details ▴' : 'Show what I built ▾'}
                        </button>
                        <a className="video-link" href={REFLEX_VIDEO} target="_blank" rel="noreferrer">Watch the video ↗</a>
                    </div>
                </div>
                <div className={`featured-details${showDetails ? ' open' : ''}`} id="reflex-details" aria-hidden={!showDetails}>
                    <div className="featured-details-inner">
                    <ul>
                        <li><strong>Scene setup for most exercises:</strong> environments, effects, sound effects, and performance. The most involved:
                            <ul>
                                <li><strong>DNA:</strong> worked out the angling, transformations, and camera-relative spawning logic that make the strand look like it moves endlessly toward the camera.</li>
                                <li><strong>Leap Frog:</strong> water shader, plus forest optimization combining LOD and skybox.</li>
                                <li><strong>Grocery Run:</strong> customized the store model, optimized with camera occlusion culling and LOD on grocery items.</li>
                                <li><strong>Piano:</strong> the foggy flower-field skybox, plus weather that changes with difficulty.</li>
                                <li><strong>Space Ship:</strong> improved the spaceship and asteroid models, and added warp effects that change with difficulty.</li>
                                <li><strong>Space Dock:</strong> customized and optimized the dock model, and added a different destroy effect for each item.</li>
                            </ul>
                        </li>
                        <li><strong>Visual identity:</strong> designed and built the UI throughout the app with a holographic, high-tech look, set the orange-blue color theme used everywhere, and designed the ReFlex logo and built its 3D model.</li>
                        <li><strong>Environments:</strong> built the arena in Blender and optimized it over several rounds of model tuning and graphics settings. Customized the cricket pitch, lobby, and other scenes from online 3D assets.</li>
                        <li><strong>Effects:</strong> particle effects and animation for the eye-gaze objects (all exercises except Forest Fires and Get the Bullet), plus atmospheric particle effects.</li>
                        <li><strong>Tools:</strong> a scene-capture-to-skybox tool, so most static scenes render as skyboxes instead of full 3D geometry.</li>
                        <li><strong>Gameplay:</strong> helped implement gameplay across the exercises.</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/jwu0216/monte-carlo-path-tracer" target="_blank" rel="noreferrer"><img src={`${MEDIA}/renders/6-teapot-glass-1024spp.png`} className="zoom" alt="Glass teapot rendered with the path tracer" width="100%" style={{ objectPosition: "center 10%" }}/></a>
                <a href="https://github.com/jwu0216/monte-carlo-path-tracer" target="_blank" rel="noreferrer"><h2>Monte Carlo Path Tracer</h2></a>
                <p>A CPU path tracer in C++ with global illumination, cosine-weighted importance sampling, next-event estimation, and multiple importance sampling. Parallelized across CPU cores for up to 8× speedup, with progressive rendering, Russian Roulette, Fresnel glass, and HDR environment mapping.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jwu0216/Recall" target="_blank" rel="noreferrer"><img src={recallThumb} className="zoom" alt="Recall app screens: home, an AI answer with sources, and a saved plant memory" width="100%"/></a>
                <a href="https://github.com/jwu0216/Recall" target="_blank" rel="noreferrer"><h2>Recall: AI Memory Assistant</h2></a>
                <p>A local-first iOS memory assistant (SwiftUI, OpenAI API) with Share Sheet capture, semantic retrieval, and natural-language querying, built on an on-device pipeline using SwiftData, OCR, embeddings, and cosine similarity.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
