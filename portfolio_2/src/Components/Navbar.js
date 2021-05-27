import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-buttons">
                    <button onClick={() => this.props.clickFunction("home")}>
                        <a href="#home">
                            <span className="navbar-text">Home</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction("about")}>
                        <a href="#about">
                            <span className="navbar-text">About</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction("skills")}>
                        <a href="#skills">
                            <span className="navbar-text">Skills</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction("project")}>
                        <a href="#project">
                            <span className="navbar-text">Projects</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction("education")}>
                        <a href="#education">
                            <span className="navbar-text">Education</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction("experience")}>
                        <a href="#experience">
                            <span className="navbar-text">Experience</span>
                        </a>
                    </button>

                    
                </div>
            </div>
        );
    }
}

export default Navbar;