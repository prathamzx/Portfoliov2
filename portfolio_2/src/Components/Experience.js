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
                    <div className="experience-entry-logo">
                        <img src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/natwest.png"} 
                        className="experience-entry-logo-img" ></img>
                    </div>
                </div>
                <div className="experience-entry">
                    <div className="experience-entry-logo">
                    <img src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/bluestacks.png"} 
                        className="experience-entry-logo-img" ></img>
                    </div>
                
                </div>
                <div className="experience-entry">
                 <div className="experience-entry-logo">
                 <img src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/gawds.png"}
                        className="experience-entry-logo-img" ></img>
                 </div>
                </div>
                </div>
               
            </div>
            </div>
        );
    }
}

export default Experience;