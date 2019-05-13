import React from 'react';
import './NavigationBar.css';

class NavigationBar extends React.PureComponent{
    render(){
        return (
        <div className="top-nav">
            <div className="left-nav">Joshua Lopes</div>
            <div className="right-nav" onClick={() => NavigateTo('resume')}>Resume</div>
            <div className="right-nav" onClick={() => NavigateTo('work')}>Work Experience</div>
            <div className="right-nav" onClick={() => NavigateTo('tech')}>Tech Experience</div>
            <div className="right-nav" onClick={() => NavigateTo('home')}>Home</div>
        </div>
        );
    }
}

function NavigateTo(page){
    switch(page){
        case 'home':
            console.log('hello home');
            //todo nav to home
            break;
        case 'tech':
            //todo nav to tech
            break;
        case 'work':
            //todo nav to work
            break;
        case 'resume':
            //todo nav to resume
            break;
        default:
            // why you trying to break me ):
            break;
    }
}

export default NavigationBar;