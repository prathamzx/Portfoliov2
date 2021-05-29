import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-buttons">
                        <a href="#home" onClick={() => this.props.clickFunction("home")}>
                            <span className="navbar-text">Home</span>
                        </a>
                        <a href="#about" onClick={() => this.props.clickFunction("about")}>
                            <span className="navbar-text">About</span>
                        </a>
                        <a href="#skills" onClick={() => this.props.clickFunction("skills")}>
                            <span className="navbar-text">Skills</span>
                        </a>
                        <a href="#project" onClick={() => this.props.clickFunction("project")}>
                            <span className="navbar-text">Projects</span>
                        </a>
                        <a href="#experience" onClick={() => this.props.clickFunction("experience")}>
                            <span className="navbar-text">Experience</span>
                        </a>
                        <a href="#education" onClick={() => this.props.clickFunction("education")}>
                            <span className="navbar-text">Education</span>
                        </a>
                    

                    
                </div>
            </div>
        );
    }
}

export default Navbar;