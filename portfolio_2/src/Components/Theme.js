import React from 'react';
import './Theme.css';
import Scheme from './colourScheme.json';

class Theme extends React.Component {
    state={
        theme:1
    }
    
    changeTheme = (theme,id)=>{
        document.documentElement.style.setProperty('--dark',theme.dark);
        document.documentElement.style.setProperty('--medium',theme.medium);
        document.documentElement.style.setProperty('--light',theme.light);
        let str="theme-selected-"+this.state.theme;
        document.getElementById(str).style.opacity='0';
        if(id==1){
            // document.getElementById(str).style.opacity='0';
            // document.getElementsByClassName('theme-button-arrow').opacity='0';
            document.getElementById('theme-selected-1').style.opacity='1';
            
            
            this.setState({
                theme:1
            })
        } else if (id==2) {
            // document.getElementById(str).style.opacity='0';
            document.getElementById('theme-selected-2').style.opacity='2';
            // document.getElementById(str).style.opacity='0';
            this.setState({
                theme:2
            })
        } else if (id==3) {
            document.getElementById('theme-selected-3').style.opacity='1';
            // document.getElementById(str).style.opacity='0';
            this.setState({
                theme:3
            })
        } else if (id==4) {
            document.getElementById('theme-selected-4').style.opacity='1';
            // document.getElementById(str).style.opacity='0';
            this.setState({
                theme:4
            })
        }
        
    }
    render(){
        console.log(Scheme);
        return(
            <div className="theme-container">
                <button className="theme-navbar">
                    <div className="theme-navbar-label">⏷ &nbsp; Select Theme &nbsp;</div> 
                    </button>
                <div className="theme-button-container">
                <button onClick={()=>{this.changeTheme(Scheme.scheme1,1)}} className="theme-button">
                    <div className="theme-button-text">Carnation</div> 
                <div id="theme-selected-1" className="theme-button-arrow">◉</div></button>
                <button onClick={()=>{this.changeTheme(Scheme.scheme2,2)}} className="theme-button">
                <div className="theme-button-text">Bazaar</div> 
                <div id="theme-selected-2" className="theme-button-arrow">◉</div>
                </button>
                <button onClick={()=>{this.changeTheme(Scheme.scheme3,3)}} className="theme-button">
                <div className="theme-button-text">Geraldine</div> 
                <div id="theme-selected-3" className="theme-button-arrow">◉</div>
                </button>
                <button onClick={()=>{this.changeTheme(Scheme.scheme4,4)}} className="theme-button">
                <div className="theme-button-text">Shadow Green</div> 
                <div id="theme-selected-4" className="theme-button-arrow">◉</div>
                </button>
                </div>
            </div>
        );
    }
}

export default Theme;