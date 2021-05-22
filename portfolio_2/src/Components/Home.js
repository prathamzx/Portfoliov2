import React from 'react';
import './Home.css';

class Home extends React.Component {
    

    render(){
        return(
            <div className="home-container">
                <div className="home-pic-back-1"></div>
                <div className="home-pic-back-2"></div>
                <div className="home-text">
                    <div className="home-text-name">
                        Pratham Agarwal
                    </div>
                    <div className="home-text-title">
                        Full Stack Web Developer
                        &nbsp;  
                        <span className="home-text-title-web">
                            {"</>"}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;