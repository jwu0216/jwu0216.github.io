import React from "react";
import '../assets/styles/Project.scss';

const MEDIA = "https://raw.githubusercontent.com/jwu0216/monte-carlo-path-tracer/main/media";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jwu0216/monte-carlo-path-tracer" target="_blank" rel="noreferrer"><img src={`${MEDIA}/renders/6-teapot-glass-1024spp.png`} className="zoom" alt="Glass teapot rendered with the path tracer" width="100%"/></a>
                <a href="https://github.com/jwu0216/monte-carlo-path-tracer" target="_blank" rel="noreferrer"><h2>Monte Carlo Path Tracer</h2></a>
                <p>A CPU path tracer in C++ with global illumination, cosine-weighted importance sampling, next-event estimation, and multiple importance sampling. Parallelized across CPU cores for up to 8× speedup, with progressive rendering, Russian Roulette, Fresnel glass, and HDR environment mapping.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jwu0216/monte-carlo-path-tracer" target="_blank" rel="noreferrer"><img src={`${MEDIA}/progressive/7-water-256spp-progressive.gif`} className="zoom" alt="Progressive render converging" width="100%"/></a>
                <a href="https://github.com/jwu0216/monte-carlo-path-tracer" target="_blank" rel="noreferrer"><h2>Path Tracer: Progressive Rendering</h2></a>
                <p>Progressive rendering lets the image converge sample by sample, so you can judge lighting early instead of waiting for a full render.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jwu0216/Recall" target="_blank" rel="noreferrer"><img src="https://opengraph.githubassets.com/1/jwu0216/Recall" className="zoom" alt="Recall repository" width="100%"/></a>
                <a href="https://github.com/jwu0216/Recall" target="_blank" rel="noreferrer"><h2>Recall: AI Memory Assistant</h2></a>
                <p>A local-first iOS memory assistant (SwiftUI, OpenAI API) with Share Sheet capture, semantic retrieval, and natural-language querying, built on an on-device pipeline using SwiftData, OCR, embeddings, and cosine similarity.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
