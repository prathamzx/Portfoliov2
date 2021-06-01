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
                                {/* Description comes here! */}
                        </div>

                        <img className="education-text-entry-cover"
                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/nitcover.png"}></img>
                        {/* <div className="education-text-entry-title">
                            National Institute of Technology, Kurukshetra
                        </div> */}
                        <div className="education-text-entry-dp-back">
                        <img className="education-text-entry-dp"
                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/nitlogo.png"}></img>
                        </div>

                </div>
                <div className="education-text-entry">
                        
                        <img className="education-text-entry-cover"
                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/discover.png"}></img>
                        <div className="education-text-entry-desc">
                                {/* Description comes here! */}
                        </div>
                        {/* <div className="education-text-entry-title">
                            Doon International School, Dehradun
                        </div> */}
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