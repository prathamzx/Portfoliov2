import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-buttons">
                    <button onClick={() => this.props.clickFunction()}>
                        <a href="#skills">
                            <span className="navbar-text">Home</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction()}>
                        <a href="#skills">
                            <span className="navbar-text">About</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction()}>
                        <a href="#skills">
                            <span className="navbar-text">Skills</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction()}>
                        <a href="#skills">
                            <span className="navbar-text">Experience</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction()}>
                        <a href="#skills">
                            <span className="navbar-text">Projects</span>
                        </a>
                    </button>
                    <button onClick={() => this.props.clickFunction()}>
                        <a href="#skills">
                            <span className="navbar-text">Education</span>
                        </a>
                    </button>

                    
                </div>
            </div>
        );
    }
}

export default Navbar;