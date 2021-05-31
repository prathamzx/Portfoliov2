import React from 'react';
import './Theme.css';
import Scheme from './colourScheme.json';

class Theme extends React.Component {
    
    render(){
        console.log(Scheme);
        return(
            <div className="theme-container">
                <button className="theme-navbar">
                    <div className="theme-navbar-label">⏷ &nbsp; Select Theme &nbsp;</div> 
                    </button>
                <div className="theme-button-container">
                <button onClick={()=>{this.props.changeTheme(Scheme.scheme1,1)}} className="theme-button">
                    <div className="theme-button-text">Carnation</div> 
                <div id="theme-selected-1" className="theme-button-arrow">◉</div></button>
                <button onClick={()=>{this.props.changeTheme(Scheme.scheme2,2)}} className="theme-button">
                <div className="theme-button-text">Bazaar</div> 
                <div id="theme-selected-2" className="theme-button-arrow">◉</div>
                </button>
                <button onClick={()=>{this.props.changeTheme(Scheme.scheme3,3)}} className="theme-button">
                <div className="theme-button-text">Geraldine</div> 
                <div id="theme-selected-3" className="theme-button-arrow">◉</div>
                </button>
                <button onClick={()=>{this.props.changeTheme(Scheme.scheme4,4)}} className="theme-button">
                <div className="theme-button-text">Shadow Green</div> 
                <div id="theme-selected-4" className="theme-button-arrow">◉</div>
                </button>
                </div>
            </div>
        );
    }
}

export default Theme;