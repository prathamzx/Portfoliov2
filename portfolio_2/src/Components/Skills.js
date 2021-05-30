import React from 'react';
import './Skills.css';
import shortid from 'shortid';

class Skills extends React.Component {

    render(){
        return(
            <div key={this.props.clicked}>
                <div id="skills"></div>
                <div className="skills-label-left"></div>
                <div className="skills-label-right"></div>
            <div className="skills-container-left">
                <div className="skills-bar">
                <div className="bar learning" data-skill="TDD"></div>
                <div className="bar back basic" data-skill="Python"></div>
                <div className="bar back intermediate" data-skill="C#"></div>
                <div className="bar front advanced" data-skill="CSS3"></div>
                <div className="bar front expert" data-skill="HTML5"></div>
                </div>
            </div>
            <div className="skills-container-right">
                <div className="progress-box">
                    <div className="progress-box-row">
                        <div className="progress-box-col">
                            <div className="progress-box-entry">
                                <svg className="progress-box-svg">
                                    <circle className="circle-75" cx="50%" cy="50%" r="35%"></circle>
                                </svg>
                            </div>
                        <div className="progress-box-entry-label">Website Development</div>
                        </div>
                        <div className="progress-box-col">
                        <div className="progress-box-entry">
                                <svg className="progress-box-svg">
                                    <circle className="circle-75" cx="50%" cy="50%" r="35%"></circle>
                                </svg>
                            </div>
                        <div className="progress-box-entry-label">Competitive Programming</div>
                        </div>
                    </div>
                    <div className="progress-box-row">
                        <div className="progress-box-col">
                        <div className="progress-box-entry">
                                <svg className="progress-box-svg">
                                    <circle className="circle-50" cx="50%" cy="50%" r="35%"></circle>
                                </svg>
                            </div>
                        <div className="progress-box-entry-label">AI/ML</div>
                        </div>
                        <div className="progress-box-col">
                        <div className="progress-box-entry">
                                <svg className="progress-box-svg">
                                    <circle className="circle-25" cx="50%" cy="50%" r="35%"></circle>
                                </svg>
                            </div>
                        <div className="progress-box-entry-label">Desktop App Development </div>
                        </div>
                    </div>
                    <div className="progress-box-row">
                        <div className="progress-box-col">
                        <div className="progress-box-entry">
                                <svg className="progress-box-svg">
                                    <circle className="circle-75" cx="50%" cy="50%" r="35%"></circle>
                                </svg>
                            </div>
                        <div className="progress-box-entry-label">Automation</div>
                        </div>
                        <div className="progress-box-col">
                        <div className="progress-box-entry">
                                <svg className="progress-box-svg">
                                    <circle className="circle-25" cx="50%" cy="50%" r="35%"></circle>
                                </svg>
                            </div>
                        <div className="progress-box-entry-label">Cloud Computing</div>
                        </div>
                    </div>
                        
                    {/* <svg className="progress-box-svg-1">
                        <circle className="circle-25" cx="80" cy="80" r="60"></circle>
                    </svg>
                   
                    </div>
                    <svg className="progress-box-svg-2">
                        <circle className="circle-50" cx="80" cy="80" r="60"></circle>

                    </svg>
                    </div>

                    <div className="progress-box-row-2">
                    <svg className="progress-box-svg-3">
                        <circle className="circle-25" cx="80" cy="80" r="60"></circle>

                    </svg>
                    <svg className="progress-box-svg-4">
                        <circle className="circle-75" cx="80" cy="80" r="60"></circle>

                    </svg>
                    
                    </div>


                    <div className="progress-box-row-3">
                    <svg className="progress-box-svg-5">
                        <circle className="circle-100" cx="80" cy="80" r="60"></circle>

                    </svg>
                    <svg className="progress-box-svg-6">
                        <circle className="circle-50" cx="80" cy="80" r="60"></circle>

                    </svg> */}
                    
                    
                    
                </div>
            </div>
            <div className="skills-label">
                <div className="skills-label-text">Skills</div>
            </div>
            
            </div>
        );
    }
}

export default Skills;