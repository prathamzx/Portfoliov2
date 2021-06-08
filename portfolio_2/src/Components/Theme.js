import React from 'react';
import './Theme.css';
import Scheme from './colourScheme.json';

class Theme extends React.Component {
    
    render(){
        // console.log(Scheme);
        return(
            <div className="theme-container">
                <button className="theme-navbar">
                    <div className="theme-navbar-label">
                        <div >
                        <img 
                        className="theme-navbar-label-icon"
                            src={process.env.PUBLIC_URL+"/themes/"+this.props.theme+"/caretdown.png"}></img>
                        </div>
                        Select Theme</div> 
                    </button>
                <div className="theme-button-container">
                <button onClick={()=>{this.props.changeTheme(Scheme.scheme1,"carnation")}} className="theme-button">
                    <div className="theme-button-text">Carnation</div> 
                <div id="carnation" className="theme-button-arrow">◉</div></button>
                {/* <button onClick={()=>{this.props.changeTheme(Scheme.scheme2,"bazaar")}} className="theme-button">
                <div className="theme-button-text">Bazaar</div> 
                <div id="bazaar" className="theme-button-arrow">◉</div>
                </button> */}
                <button onClick={()=>{this.props.changeTheme(Scheme.scheme3,"geraldine")}} className="theme-button">
                <div className="theme-button-text">Geraldine</div> 
                <div id="geraldine" className="theme-button-arrow">◉</div>
                </button>
                <button onClick={()=>{this.props.changeTheme(Scheme.scheme4,"shadowgreen")}} className="theme-button">
                <div className="theme-button-text">Shadow Green</div> 
                <div id="shadowgreen" className="theme-button-arrow">◉</div>
                </button>
                </div>
            </div>
        );
    }
}

export default Theme;