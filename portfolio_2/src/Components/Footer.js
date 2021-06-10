import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    

    render(){
        return(
            <div className="footer-container">
                <div className="footer-social">
                    <a href="https://api.whatsapp.com/send?phone=918295197406">
                    <div className="footer-social-bubble">
                        <img className="footer-social-img" 
                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/whatsapp-light.png'}></img>
                    </div>
                    </a>
                    <a href="mailto:agarwalpratham1999@gmail.com">
                    <div className="footer-social-bubble">
                    <img className="footer-social-img" 
                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/mail-light.png'}></img>
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/in/pratham-agarwal/" target="_blank">
                    <div className="footer-social-bubble">
                    <img className="footer-social-img" 
                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/linkedin-light.png'}></img>
                    </div>
                    </a>
                    <a href="https://github.com/prathamzx" target="_blank">
                    <div className="footer-social-bubble">
                    <img className="footer-social-img" 
                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/github-light.png'}></img>
                    </div>
                    </a>
                </div>
                <div className="footer-copyright">
                © 2021 prathamintech.in, All Rights Reserved.
                </div>
            </div>
        );
    }
}

export default Footer;