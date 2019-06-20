import React from 'react';
import './Home.css';
import profileIcon from '../../../static/images/profile.jpg';

export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <img className="profile-icon" src={profileIcon} alt="error"/>
                <div className="description">
                    Hello My name is Joshua and I've created this website as personal project. 
                    Currently this application is being backed using an AWS CI/CD pipeline. 
                    Feel Free to take a look around.
                </div>  
            </div>
        )
    }
}