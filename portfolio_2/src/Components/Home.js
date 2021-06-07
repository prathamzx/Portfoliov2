import React from 'react';
import './Home.css';

class Home extends React.Component {

    render(){
        return(
            <div key={this.props.clicked}>
                <div id="home"></div>
            <div className="home-container">
                {/* <button onClick={()=>{this.changeColor()}} className="test-button">Click me</button> */}
                <div className="home-pic-back-1"></div>
                <div className="home-pic-back-2">
                    {/* <img className="home-dp" 
                    src={process.env.PUBLIC_URL+"/themes/"+this.props.theme+"/dp1.jpg"}></img> */}
                </div>
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
            </div>
        );
    }
}

export default Home;