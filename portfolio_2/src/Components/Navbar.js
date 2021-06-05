import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    
    displayDropdown = () => {
        let x=document.getElementsByClassName('navbar-dropdown-item');
        let y=document.getElementsByClassName('navbar-dropdown-item-text');
        let z=document.getElementsByClassName('navbar-dropdown-icon-style');
        let p=document.getElementsByClassName('navbar-dropdown-icon-img');
        let q=document.getElementsByClassName('navbar-dropdown-anchor');
        
        if(x[0].style.visibility==="hidden" || x[0].style.visibility===""){
            z[0].style.backgroundColor="var(--medium)";
            p[0].src=process.env.PUBLIC_URL + "/themes/"+ this.props.theme +"/hamburger-dark.png";
            for(let i=0 ; i<x.length ; i++){
                x[i].style.visibility="visible";
                x[i].style.height="50px";
                y[i].style.opacity="1";
                q[i].style.pointerEvents="all";
            }
        }
        else {
            z[0].style.backgroundColor="var(--dark)";
            p[0].src=process.env.PUBLIC_URL + "/themes/"+ this.props.theme +"/hamburger-medium.png";
            for(let i=0 ; i<x.length ; i++){
                x[i].style.visibility="hidden";
                x[i].style.height="0px";
                y[i].style.opacity="0";
                q[i].style.pointerEvents="none";
              }
        }
        
    }
    render(){
        const theme=this.props.theme;
        window.onclick = function(event) {
            if (!event.target.matches('.navbar-dropdown-icon-img')) {
              var x = document.getElementsByClassName("navbar-dropdown-item");
              let y=document.getElementsByClassName('navbar-dropdown-item-text');
              let z=document.getElementsByClassName('navbar-dropdown-icon-style');
              let p=document.getElementsByClassName('navbar-dropdown-icon-img');
              let q=document.getElementsByClassName('navbar-dropdown-anchor');

              z[0].style.backgroundColor="var(--dark)";
              p[0].src=process.env.PUBLIC_URL + "/themes/"+ theme +"/hamburger-medium.png";
              for(let i=0 ; i<x.length ; i++){
                x[i].style.visibility="hidden";
                x[i].style.height="0px";
                y[i].style.opacity="0";
                q[i].style.pointerEvents="none";
              }
            }
        }
          
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
                <div className="navbar-menu-dropdown">
                    <div className="navbar-dropdown-icon">
                        <a onClick={()=>this.displayDropdown()} 
                        className="navbar-dropdown-icon-style">
                            <img className="navbar-dropdown-icon-img"
                            src={process.env.PUBLIC_URL + "/themes/"+ this.props.theme +"/hamburger-medium.png"}></img>
                        </a>
                    </div>
                    
                    <a href="#home" onClick={() => this.props.clickFunction("home")}
                    className="navbar-dropdown-anchor">
                    <div className="navbar-dropdown-item">
                        <div className="navbar-dropdown-item-text">Home</div>
                        </div>
                    </a>
                    
                    
                    <a href="#about" onClick={() => this.props.clickFunction("about")}
                    className="navbar-dropdown-anchor">
                    <div className="navbar-dropdown-item">
                        <div className="navbar-dropdown-item-text">About</div>
                        </div>
                        </a>
                    
                    
                    <a href="#skills" onClick={() => this.props.clickFunction("skills")}
                    className="navbar-dropdown-anchor">
                    <div className="navbar-dropdown-item">
                        <div className="navbar-dropdown-item-text">Skills</div>
                        </div>
                        </a>
                    
                    
                    <a href="#project" onClick={() => this.props.clickFunction("project")}
                    className="navbar-dropdown-anchor">
                    <div className="navbar-dropdown-item">
                        <div className="navbar-dropdown-item-text">Projects</div>
                        </div>
                        </a>
                    
                    
                    <a href="#experience" onClick={() => this.props.clickFunction("experience")}
                    className="navbar-dropdown-anchor">
                    <div className="navbar-dropdown-item">
                        <div className="navbar-dropdown-item-text">Experience</div>
                        </div>
                        </a>
                    
                    
                    <a href="#education" onClick={() => this.props.clickFunction("education")}
                    className="navbar-dropdown-anchor">
                    <div className="navbar-dropdown-item">
                        <div className="navbar-dropdown-item-text">Education</div>
                        </div>
                        </a>
                    
                </div>
            </div>
        );
    }
}

export default Navbar;