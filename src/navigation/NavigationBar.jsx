import React from 'react';
import './NavigationBar.css';
import NavMenu from '../common/nav-menu/NavMenu';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="top-nav">
                <div className="left-nav"> Joshua Lopes </div>
                <NavMenu />
            </div>
        );
    }
}



export default NavigationBar;