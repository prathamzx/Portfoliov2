import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    

    render(){
        return(
            <div className="footer-container">
                <div className="footer-social">
                    <div className="footer-social-bubble">
                        <img className="footer-social-img" 
                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/whatsapp-light.png'}></img>
                    </div>
                    <div className="footer-social-bubble">
                    <img className="footer-social-img" 
                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/mail-light.png'}></img>
                    </div>
                    <div className="footer-social-bubble">
                    <img className="footer-social-img" 
                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/linkedin-light.png'}></img>
                    </div>
                    <div className="footer-social-bubble">
                    <img className="footer-social-img" 
                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/github-light.png'}></img>
                    </div>
                </div>
                <div className="footer-copyright">
                © 2021 prathamintech.com, All Rights Reserved.
                </div>
            </div>
        );
    }
}

export default Footer;