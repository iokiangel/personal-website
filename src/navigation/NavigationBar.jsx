import React from 'react';

class NavigationBar extends React.PureComponent{

    navigateTo = (page) =>{
        switch(page){
            case 'home':
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
    render(){
        return (
        <div class="topnav">
            <div onClick>Home</div>
            <div>Tech Experience</div>
            <div>Work Experience</div>
            <div>Resume</div>
        </div>
        );
    }
}

export default NavigationBar;