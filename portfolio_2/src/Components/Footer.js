import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    

    render(){
        return(
            <div className="footer-container">
                <div className="footer-social">
                    <div className="footer-social-bubble"></div>
                    <div className="footer-social-bubble"></div>
                    <div className="footer-social-bubble"></div>
                </div>
                <div className="footer-copyright">
                © 2021 pratham-dev.com, All Rights Reserved.
                </div>
            </div>
        );
    }
}

export default Footer;