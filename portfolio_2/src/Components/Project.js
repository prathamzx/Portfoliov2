import React from 'react';
import './Project.css';

class Project extends React.Component {
    

    render(){
        return(
            <div key={this.props.clicked}>
                <div id="project"></div>
            <div className="project-container">
               
               {/* <div className="project-upper-semi"></div>
               <div className="project-lower-semi"></div> */}
               <div className="project-label-icon"></div>
               <div className="project-background">
                   <div className="project-row">
                       <div id="project-label-1" className="project-column">
                       <div className="project-label-text">
                            <div className="project-label-text-style">
                                Projects
                            </div>
                        </div>
                       </div>
                       <div className="project-column">
                       <div className="project-card">
                                <div className="project-card-row-1">
                                    <div className="project-card-col-1">
                                        <img className="project-logo" 
                                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/projectlogo1.png"}></img>
                                    </div>
                                    <div className="project-card-col-2">
                                        <div className="project-title">
                                            Cleaning Text Documents using Convolutional Autoencoders
                                        </div>
                                        <div className="project-link">
                                            <button className="project-link-button">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-row-2">
                                    <div className="project-card-row-2-1">
                                        <div className="project-desc">
                                            A deep CNN model that cleans and restores dirty text documents
                                             using autoencoder architecture on a custom made image dataset.
                                        </div>
                                    </div>
                                    <div className="project-card-row-2-2">
                                        <div className="project-tech">
                                            Python, Tensorflow, Keras, OpenCV, Matplotlib, Photoshop
                                        </div>
                                    </div>
                                </div>
                           </div>
                       </div>
                       <div className="project-column">
                            <div className="project-card">
                            <div className="project-card-row-1">
                                    <div className="project-card-col-1">
                                    <img className="project-logo" 
                                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/projectlogo2.png"}></img>
                                    </div>
                                    <div className="project-card-col-2">
                                        <div className="project-title">
                                            Techspardha'19 Official Website
                                        </div>
                                        <div className="project-link">
                                            <button className="project-link-button">
                                                Visit
                                            </button>
                                            <button className="project-link-button">
                                                GitHub
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-row-2">
                                    <div className="project-card-row-2-1">
                                        <div className="project-desc">
                                        Designed, Developed and Deployed official 
                                            website for Techspardha which is an 
                                                annual technical fest of NIT Kurukshetra. 
                                        </div>
                                    </div>
                                    <div className="project-card-row-2-2">
                                        <div className="project-tech">
                                            ReactJS, ExpressJS, Firebase, Bootstrap, HTML, CSS
                                        </div>
                                    </div>
                                </div>
                           </div>
                            </div>
                       </div>
                   <div className="project-row">
                       <div id="project-label-1" className="project-column">
                           
                           </div>
                       <div className="project-column">
                       <div className="project-card">
                           <div className="project-card-row-1">
                                    <div className="project-card-col-1">
                                    <img className="project-logo" 
                                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/projectlogo3.png"}></img>
                                    </div>
                                    <div className="project-card-col-2">
                                        <div className="project-title">
                                            Patience
                                        </div>
                                        <div className="project-link">
                                            <button className="project-link-button">
                                                Visit
                                            </button>
                                            <button className="project-link-button">
                                                Github
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-row-2">
                                    <div className="project-card-row-2-1">
                                        <div className="project-desc">
                                           A Super Mario look alike 2D web mini game with platformer controls.
                                        </div>
                                    </div>
                                    <div className="project-card-row-2-2">
                                        <div className="project-tech">
                                            Quintus, VanillaJS, Tiled
                                        </div>
                                    </div>
                                </div>
                           </div>
                       </div>
                       <div className="project-column">
                            <div className="project-card">
                            <div className="project-card-row-1">
                                    <div className="project-card-col-1">
                                    <img className="project-logo" 
                                        src={process.env.PUBLIC_URL+ "/themes/" + this.props.theme + "/projectlogo4.png"}></img>
                                    </div>
                                    <div className="project-card-col-2">
                                        <div className="project-title">
                                            Student Management System
                                        </div>
                                        <div className="project-link">
                                            <button className="project-link-button">
                                                GitHub
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-row-2">
                                    <div className="project-card-row-2-1">
                                        <div className="project-desc">
                                            A freelance project required by a university to keep track of their students
                                             and their academic records. 
                                        </div>
                                    </div>
                                    <div className="project-card-row-2-2">
                                        <div className="project-tech">
                                            PHP, Bootstrap, MySql, phpMyAdmin 
                                        </div>
                                    </div>
                                </div>
                           </div>
                           </div>
                            </div>
                            </div>
                       </div>
                   </div>
               
        );
    }
}

export default Project;