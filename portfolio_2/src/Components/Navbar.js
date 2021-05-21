import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-buttons">
                    <span className="navbar-text">Home</span>
                    <span className="navbar-text">About</span>
                    <span className="navbar-text">Education</span>
                    <span className="navbar-text">Skills</span>
                    <span className="navbar-text">Experience</span>
                    <span className="navbar-text">Projects</span>

                    {/* 0DC5A0: cyan */}
                    {/* #f6f6f6: light grey */}
                    
                </div>
            </div>
        );
    }
}

export default Navbar;