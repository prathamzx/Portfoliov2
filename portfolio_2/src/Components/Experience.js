import React from 'react';
import './Experience.css';

class Experience extends React.Component {
    

    render(){
        return(
            <div className="experience-container">
               <div className="experience-label-container">
               <div className="experience-label"></div>
                <div className="experience-label-text">
                    <div className="experience-label-text-style">
                      Experience
                    </div>
                </div>
                </div>
                <div className="experience-text">
                   
                </div>
                <div className="experience-entry">
                <div className="experience-entry-logo">
                    <img className="experience-entry-img"
                    src={process.env.PUBLIC_URL+"/natwest.jpg"}></img>
                </div>
                <div className="experience-entry-connect"></div>
                </div>
                
                <div className="experience-entry">
                <div className="experience-entry-logo">
                <img className="experience-entry-img"
                    src={process.env.PUBLIC_URL+"/bluestacks.jpg"}></img>
                </div>
                <div className="experience-entry-connect"></div>
                </div>
                <div className="experience-entry">
                <div className="experience-entry-logo">
                <img className="experience-entry-img"
                    src={process.env.PUBLIC_URL+"/gawds.jpg"}></img>
                </div>
                <div className="experience-entry-connect"></div>
                </div>
            </div>
        );
    }
}

export default Experience;