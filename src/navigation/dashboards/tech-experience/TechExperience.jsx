import React from 'react';
import {languages, librariesAndFrameworkds, devOps, certs} from '../../../static/collections/tech-experience.js';

export default function TechExperience(){
        return(
            <div className="tech-content">
                <div>
                    {languages.map((item, index) => 
                        <div key={index + item} className="tech-card">
                            <div>{item}</div>
                        </div>
                        )
                    }
                </div>
                <div>
                    {librariesAndFrameworkds.map((item, index) => 
                        <div key={index + item} className="tech-card">
                            <div>{item}</div>
                        </div>
                        )
                    }
                </div>
                <div>
                    {devOps.map((item, index) => 
                        <div key={index + item} className="tech-card">
                            <div>{item}</div>
                        </div>
                        )
                    }
                </div>
                <div>
                    {certs.map((item, index) => 
                        <div key={index + item} className="tech-card">
                            <div>{item}</div>
                        </div>
                        )
                    }
                </div>
            </div>
        )
}