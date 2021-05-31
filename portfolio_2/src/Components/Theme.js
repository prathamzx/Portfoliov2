import React from 'react';
import './Theme.css';
import Scheme from './colourScheme.json';

class Theme extends React.Component {
    
    changeTheme = (theme)=>{
        document.documentElement.style.setProperty('--dark',theme.dark);
        document.documentElement.style.setProperty('--medium',theme.medium);
        document.documentElement.style.setProperty('--light',theme.light);
    }
    render(){
        console.log(Scheme);
        return(
            <div className="theme-container">
                <button onClick={()=>{this.changeTheme(Scheme.scheme1)}} className="theme-button">Scheme 1</button>
                <button onClick={()=>{this.changeTheme(Scheme.scheme2)}} className="theme-button">Scheme 2</button>
            </div>
        );
    }
}

export default Theme;