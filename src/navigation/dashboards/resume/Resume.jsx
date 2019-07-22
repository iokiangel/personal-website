import React from 'react';
import './Resume.css';
import resumeImage from '../../../static/images/ImageJoshuaLopesResume.png';
import resume from '../../../static/resume/JoshuaLopesResume.pdf';

export default function Resume(){
    return (
        <div className="resume">
            <a className="download-link" href={resume} download="JoshuaLopesResume" target="_blank">
                Download Resume
            </a>
            <img className="resume-image" src={resumeImage}/>
        </div>
    );
}