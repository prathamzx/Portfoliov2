import React from 'react';
import './Project.css';

class Project extends React.Component {
    

    render(){
        return(
            <div className="project-container">
               <div className="project-label-text">
                   <div className="project-label-text-style">
                       Projects
                   </div>
               </div>
               <div className="project-label-icon"></div>
               <div className="project-background">
                   <div className="project-row">
                       <div className="project-column">
                           <div className="project-card">

                           </div>
                       </div>
                       <div className="project-column">
                            <div className="project-card">
                               
                            </div>
                       </div>
                       <div className="project-column">
                            <div className="project-card">
                               
                            </div>
                       </div>
                   </div>
                   <div className="project-row">
                       <div className="project-column">
                           <div className="project-card">

                           </div>
                       </div>
                       <div className="project-column">
                            <div className="project-card">
                               
                            </div>
                       </div>
                       <div className="project-column">
                            <div className="project-card">
                               
                            </div>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default Project;