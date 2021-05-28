import React from 'react';
import './About.css';

class About extends React.Component {
    

    render(){
        const aboutText="";
        return(
        <div key={this.props.clicked}>   
            <div id="about"></div>
            <div className="about-container">
                <div className="about-container-text">
                    <div className="about-container-text-style">
                        <div className="about-text">
                        <span className="about-text-quote">
                            "You don't need work-life balance if you're able to make work
                             your life and life your work"</span>
                             <br/><br/>
                            Hi there, I am Pratham Agarwal, a 22 year old tech savvy and a software engineer, 
                            who believes in exploration rather than exploitation and prefers tea over coffee.

                            I have experience in developing full fledged websites from scratch, training deep CNN models
                             and making life easier by providing automated solutions. 

                            Pursuing competitive programming gave me a good command over data structures and algorithms with problem solving abilities.
                            <br/><br/>

                            With learning potential as my greatest strength, I don't rely on a single skill set since not every problem can be
                             tackled with the same old solution. The technology is evolving rapidly and one needs to be 
                            flexible enough to be able to adapt to it.

                            Do have a look on what I have to offer and get in touch.
                        </div>
                        {/* <div className="about-text-right">
                            Resume
                            <br/>
                            W# (+91) 82951 97406
                            <br/>
                            L# Dehradun, Uttarakhand, India, 248001
                            <br/>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="about-label">
                <div className="about-label-text">About Me</div>
            </div>
        </div>
        );
    }
}

export default About;