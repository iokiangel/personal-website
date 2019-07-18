import React from 'react';
import './WorkHistory.css';
import {rhxDescription, vertaforeDescription} from '../../../static/collections/work-history';

export default class WorkHistory extends React.Component { 
    render(){
        return(
            <div className="work-history">
                <div className="work-content">
                    <a href="https://www.vertafore.com/" target="_blank" className="anchor-link orange">Vertafore </a>
                    May 2018 - Present
                    <ul className="work-description">
                        {vertaforeDescription.map( (item, index) => 
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </div>
                <div className="work-content">
                    <a href="http://www.rhxsystems.com/" target="_blank" className="anchor-link blue">Rhx Systems </a>
                    Jan 2017 - Jan 2018
                    <ul className="work-description">
                        {rhxDescription.map( (item, index) => 
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}