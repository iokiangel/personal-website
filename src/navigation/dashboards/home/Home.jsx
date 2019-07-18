import React from 'react';
import './Home.css';
import profileIcon from '../../../static/images/profile.jpg';
import githubIcon from '../../../static/images/GitHub-Mark-64px.png';

export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <img className="profile-icon" src={profileIcon} alt="error"/>
                <div className="description">
                    Hello, my name is Joshua and I've created this website as an interactive Resume to show my Full Stack Developer experience.
                    This website was written using a Javascript library called React.
                    My application is being hosted using AWS.
                    I also have an AWS CI/CD pipeline hooked up to my repo which you can check out at my Github.
                    <a href="https://github.com/iokiangel/personal-website" target="_blank">
                        <img className="github-icon" src={githubIcon} alt="error" />
                    </a>
                </div>  
            </div>
        )
    }
}