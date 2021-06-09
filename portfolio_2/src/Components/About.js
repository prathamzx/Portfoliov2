import React from 'react';
import './About.css';

class About extends React.Component {
    

    render(){
        const aboutText="";
        return(
        <div key={this.props.clicked} className="about">   
            <div id="about"></div>
            <div className="about-container">
                <div className="about-container-text">
                    <div className="about-container-text-style">
                        <div className="about-text">
                            <div className="about-head">
                        <div className="about-text-quote">
                            "You don't need work-life balance if you're able to make work
                             your life and life your work"</div>
                             <div className="about-contact-final">
                                <a href={process.env.PUBLIC_URL + 'Pratham_Agarwal_Resume.pdf'} download>
                                <div className="resume-final">
                                    <div className="resume-final-text">
                                        Resume
                                    </div>
                                </div>
                                </a>
                             </div>
                             </div>
                             <br/><br/>
                            Hi there, I am Pratham Agarwal, a 22 year old tech savvy and a software engineer, 
                            who believes in exploration rather than exploitation and prefers tea over coffee.

                            I have experience in developing full fledged websites from scratch, training deep CNN models
                             and making life easier by providing automated solutions. 

                            Pursuing competitive programming gave me a good command over data structures and algorithms with problem solving abilities.
                            <br/><br/>

                            With learning potential as my greatest strength, I don't rely on a single skill set since not every problem can be
                             tackled with the same old solution. The technology is evolving rapidly and one needs to be 
                            flexible enough to be able to adapt to it.

                            Do have a look on what I have to offer and get in touch.
                        </div>
                        <div className="about-text-right">
                            <a href={process.env.PUBLIC_URL + 'Pratham_Agarwal_Resume.pdf'} download>
                            <div className="about-resume">
                                <div className="about-resume-text">
                                    Resume
                                </div>
                            </div>
                            </a>
                            <div className="about-contact">
                                <div className="about-contact-icon">
                                <a href="https://api.whatsapp.com/send?phone=918295197406">
                                    <img className="about-contact-icon-style" 
                                    src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/whatsapp-dark.png'}></img>
                                
                                </a>
                                </div>
                                <div className="about-contact-entry">
                                <div className="about-contact-entry-text">
                                    (+91) 82951 97406
                                    </div>
                                </div>
                            </div>
                            <div className="about-contact">
                                <div className="about-contact-icon">
                                <div className="about-contact-icon">
                                <a href="http://maps.google.com/?q=Dehradun, Uttarakhand, India" target="_blank">
                                    <img className="about-contact-icon-style" 
                                    src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/web-dark.png'}></img>
                                </a>
                                </div>
                                </div>
                                <div className="about-contact-entry">
                                    <div className="about-contact-entry-text">
                                Dehradun, Uttarakhand, India, 248001
                                </div>
                                </div>
                            </div>
                            <div className="about-social">
                            
                                <div className="about-social-icon">
                                <a href="mailto:agarwalpratham1999@gmail.com">
                                    <img className="about-social-icon-style" 
                                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/mail-dark.png'}></img>
                                </a>
                                </div>
                                <div className="about-social-icon">
                                <a href="https://www.linkedin.com/in/pratham-agarwal/" target="_blank">
                                
                                <img className="about-social-icon-style" style={{paddingBottom:"5px"}}
                                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/linkedin-dark.png'}></img>
                                </a>
                                </div>
                                
                                
                                <div className="about-social-icon">
                                <a href="https://github.com/prathamzx" target="_blank">
                                <img className="about-social-icon-style" 
                                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/github-dark.png'}></img>
                                </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="about-text-right-shift">
                <a href={process.env.PUBLIC_URL + 'Pratham_Agarwal_Resume.pdf'} download>
                            <div className="about-resume-sec">
                                <div className="about-resume-text-sec">
                                    Resume
                                </div>
                            </div>
                            </a>
                            <div className="about-contact-sec">
                                <div className="about-contact-icon-sec">
                                <a href="https://api.whatsapp.com/send?phone=918295197406">
                                    <img className="about-contact-icon-style-sec" 
                                    src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/whatsapp-light.png'}></img>
                                </a>
                                </div>
                                <div className="about-contact-entry-sec">
                                <div className="about-contact-entry-text-sec">
                                    (+91) 82951 97406
                                    </div>
                                </div>
                            </div>
                            <div className="about-contact-sec">
                                <div className="about-contact-icon-sec">
                                <div className="about-contact-icon-sec">
                                    <a href="http://maps.google.com/?q=Dehradun, Uttarakhand, India" target="_blank">
                                    <img className="about-contact-icon-style-sec" 
                                    src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/web-light.png'}></img>
                                </a>
                                </div>
                                </div>
                                <div className="about-contact-entry-sec">
                                    <div className="about-contact-entry-text-sec">
                                Dehradun, Uttarakhand, India, 248001
                                </div>
                                </div>
                            </div>
                            <div className="about-social-sec">
                                <div className="about-social-icon-sec">
                                <a href="mailto:agarwalpratham1999@gmail.com">
                                    <img className="about-social-icon-style-sec" 
                                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/mail-light.png'}></img>
                                </a>
                                </div>
                                <div className="about-social-icon-sec">
                                <a href="https://www.linkedin.com/in/pratham-agarwal/" target="_blank">
                                <img className="about-social-icon-style-sec" style={{paddingBottom:"5px"}}
                                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/linkedin-light.png'}></img>
                                </a>
                                </div>
                                <div className="about-social-icon-sec">
                                <a href="https://github.com/prathamzx" target="_blank">
                                <img className="about-social-icon-style-sec" 
                                        src={process.env.PUBLIC_URL + '/themes/' + this.props.theme + '/github-light.png'}></img>
                                </a>
                                </div>
                            </div>
                </div>
           
            
            <div className="about-label">
                <div className="about-label-text">About Me</div>
            </div>
        </div>
        );
    }
}

export default About;