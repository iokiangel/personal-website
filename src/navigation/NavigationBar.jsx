import React from 'react';
import './NavigationBar.css';
import NavMenu from '../common/nav-menu/NavMenu';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
    constructor(props){
        super(props);

        props = {
            setPage: PropTypes.func.isRequired,
            activePage: PropTypes.string.isRequired
        }
    }

    render() {
        return (
            <div className="top-nav">
                <div className="left-nav"> Joshua Lopes </div>
                <NavMenu activePage={this.props.activePage} setPage={this.props.setPage} />
            </div>
        );
    }
}



export default NavigationBar;