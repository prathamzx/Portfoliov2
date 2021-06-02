import React from 'react';
import './Education.css';

class Education extends React.Component {
    

    render(){
        return(
            <div key={this.props.clicked}>
                <div id="education"></div>
            <div className="education-container">
                <div className="education-label-back"></div>
                <div className="education-label">
                    <div className="education-label-text">Education</div>
                </div>
            <div className="education-text">
                <div className="education-text-entry">
                <div className="education-text-entry-desc">
                    <div className="education-head">
                        <div className="education-head-title">National Institute of Technology, Kurukshetra</div>
                        <div className="education-head-course">Bachelor in Technology, Computer Engineering</div>
                        <div className="education-head-duration">Jul 2017 - May 2021
                        </div>
                        <div className="education-head-location">Kurukshetra, Haryana, India</div>
                        <div className="education-head-grades">CGPA - 9.1 / 10</div>
                    </div>  
                        </div>

                        <img className="education-text-entry-cover"
                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/nitcover.png"}></img>
                       
                        <div className="education-text-entry-dp-back">
                        <img className="education-text-entry-dp"
                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/nitlogo.png"}></img>
                        </div>

                </div>
                <div className="education-text-entry">
                        
                        <img className="education-text-entry-cover"
                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/discover.png"}></img>
                        <div className="education-text-entry-desc">
                            <div className="education-head">
                            <div className="education-head-title">Doon International School, Dehradun</div>
                            <div className="education-head-course">High School, CBSE Board</div>
                            <div className="education-head-duration">Apr 2013 - May 2016</div>
                            <div className="education-head-location">Dehradun, Uttarakhand, India</div>
                            <div className="education-head-grades">Class XII - 91% <br/>Class X - 9.4 / 10</div>
                        </div>  
                        </div>
                        <div className="education-text-entry-dp-back">
                        <img className="education-text-entry-dp"
                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/dislogo.png"}></img>
                        </div>
                        

                </div>
            </div>
            
            </div>
            </div>
        );
    }
}

export default Education;