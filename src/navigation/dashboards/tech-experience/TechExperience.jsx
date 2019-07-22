import React from 'react';
import {languages, librariesAndFrameworks, devOps, certs} from '../../../static/collections/tech-experience.js';
import './TechExperience.css'

export default function TechExperience(){
        return(
            <div className="tech-content">
                <div className="tech-row">
                    <div className="tech-card subject languages">Programming Languages</div>
                    <div>
                        {languages.map((item, index) => 
                            <div key={index + item} className="tech-card">
                                <div>{item}</div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="tech-row">
                    <div className="tech-card subject libraries">Libraries & Frameworks</div>
                    <div>
                        {librariesAndFrameworks.map((item, index) => 
                            <div key={index + item} className="tech-card">
                                <div>{item}</div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="tech-row">
                    <div className="tech-card subject devops">Dev Ops & Tools</div>
                    <div>
                        {devOps.map((item, index) => 
                            <div key={index + item} className="tech-card">
                                <div>{item}</div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="tech-row">
                    <div className="tech-card subject certs">Certifications</div>
                    <div>
                        {certs.map((item, index) => 
                            <div key={index + item} className="tech-card">
                                <div>{item}</div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
}