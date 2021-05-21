import React from 'react';
import './Social.css';

class Social extends React.Component {
    

    render(){
        return(
            <div className="social-container">
                <div className="social-tabs">
                    <div className="social-text">LinkedIn</div>
                </div>
                <div className="social-tabs">
                    <div className="social-text">Github</div>
                </div>
                <div className="social-tabs">
                    <div className="social-text">E-mail</div>
                </div>
            </div>
        );
    }
}

export default Social;