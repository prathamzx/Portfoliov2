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
                <div className="bar-label">Design / Frontend</div>
                <div className="bar expert" data-skill="HTML5 | CSS3 | Bootstrap4 | Flask"></div>
                <div className="bar advanced" data-skill="ReactJS | WPF"></div>
                <div className="bar-label">Programming / Backend</div>
                <div className="bar advanced" data-skill="C++ | Python"></div>
                <div className="bar intermediate" data-skill="C | C# | PHP | ExpressJS"></div>
                <div className="bar-label">Database</div>
                <div className="bar advanced" data-skill="MySql"></div>
                <div className="bar intermediate" data-skill="MongoDB | Firebase"></div>
                <div className="bar-label">DevOps</div>
                <div className="bar advanced" data-skill="Git | Jira | Jenkins | Postman | WEKA "></div>
                <div className="bar intermediate" data-skill="AWS"></div>
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