import React from 'react';
import './Experience.css';

class Experience extends React.Component {
    

    render(){
        return(
            <div key={this.props.clicked}>
                <div id="experience"></div>
            <div className="experience-container">
               
                <div className="experience-text">
                <div className="experience-label-container">
               {/* <div className="experience-label"></div> */}
                <div className="experience-label-text-back">
                    <div className="experience-label-text">
                    <div className="experience-label-text-style">
                      Experience
                    </div>
                </div>
                </div>
                </div>
                <div className="experience-entry">
                    <div className="experience-logo-container">
                    <div className="experience-entry-logo">
                        <img src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/natwest.png"} 
                        className="experience-entry-logo-img" ></img>
                    </div>
                    </div>
                    <div className="experience-desc-container">
                        <div className="experience-head">
                            <span className="experience-head-title">Natwest Group</span> 
                             
                            <br/>
                            <span className="experience-head-designation">Software Engineer</span> 
                            <br/>
                            <span className="experience-head-duration">July 2021 - Current</span> 
                            <br/>
                            <span className="experience-head-location">Gurugram, Haryana, India</span> 
                        </div>
                    </div>
                </div>
                <div className="experience-entry">
                <div className="experience-logo-container">
                    <div className="experience-entry-logo">
                        <img src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/bluestacks.png"} 
                        className="experience-entry-logo-img" ></img>
                    </div>
                    </div>
                    <div className="experience-desc-container">
                        <div className="experience-head">
                            <span className="experience-head-title">BlueStacks</span> 
                             
                            <br/>
                            <span className="experience-head-designation">MTS - Intern</span> 
                            <br/>
                            <span className="experience-head-duration">Jan 2020 - June 2020</span> 
                            <br/>
                            <span className="experience-head-location">Gurugram, Haryana, India</span> 
                        </div>
                    </div>
                
                </div>
                <div className="experience-entry">
                <div className="experience-logo-container">
                    <div className="experience-entry-logo">
                        <img src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/techno.png"} 
                        className="experience-entry-logo-img" ></img>
                    </div>
                    </div>
                    <div className="experience-desc-container">
                        <div className="experience-head">
                            <span className="experience-head-title">Technobyte</span> 
                             
                            <br/>
                            <span className="experience-head-designation">Website Committee Head</span> 
                            <br/>
                            <span className="experience-head-duration">June 2020 - May 2021</span> 
                            <br/>
                            <span className="experience-head-location">Kurukshetra, Haryana, India</span> 
                        </div>
                    </div>
                </div>
                
                </div>
               
            </div>
            </div>
        );
    }
}

export default Experience;