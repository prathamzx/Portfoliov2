import React from 'react';
import './Skills.css';

class Skills extends React.Component {
    

    render(){
        return(
            <div>
                <div className="skills-label-left"></div>
                <div className="skills-label-right"></div>
            <div className="skills-container-left">
            </div>
            <div className="skills-container-right">
            </div>
            <div className="skills-label">
                <div className="skills-label-text">Skills</div>
                <div className="skills-bolt-label-l">
                <div className="bolt-minus-black"></div>
                </div>
                <div className="skills-bolt-label-r">
                <div className="bolt-minus-black"></div>
                </div>
            </div>
            
            </div>
        );
    }
}

export default Skills;