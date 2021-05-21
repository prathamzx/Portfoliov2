import React from 'react';
import './About.css';

class About extends React.Component {
    

    render(){
        return(
        <div>
            <div className="about-container">
                <div className="about-bolt-tl">
                    <div className="bolt-minus-white"></div>
                </div>
                <div className="about-bolt-tr">
                    <div className="bolt-minus-white"></div>
                </div>
                <div className="about-bolt-bl">
                    <div className="bolt-minus-white"></div>
                </div>
                <div className="about-bolt-br">
                    <div className="bolt-minus-white"></div>
                </div>
            </div>
            <div className="about-label">
                <div className="about-label-text">About Me</div>
                <div className="about-label-bolt-tr">
                    <div className="bolt-minus-black"></div>
                </div>
                <div className="about-label-bolt-br">
                 <div className="bolt-minus-black"></div>
                </div>
            </div>
        </div>
        );
    }
}

export default About;