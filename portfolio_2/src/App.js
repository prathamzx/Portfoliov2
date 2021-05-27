import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Project from './Components/Project';
import Footer from './Components/Footer';
import React from 'react';

class App extends React.Component {
  state={
    skills:0,
    project:0,
    home:0,
    about:0,
    experience:0,
    education:0
  }
  clickFunction=(component)=>{
    console.log("function called!!");
    if (component==="skills") {
      this.setState({
        skills:this.state.skills+1
      });
    } else if (component==="project") {
      this.setState({
        project:this.state.project+1
      });
    } else if (component==="home") {
      this.setState({
        home:this.state.home+1
      });
    } else if (component==="about") {
      this.setState({
        about:this.state.about+1
      });
    } else if (component==="experience") {
      this.setState({
        experience:this.state.experience+1
      });
    } else if (component==="education") {
      this.setState({
        education:this.state.education+1
      });
    }
    console.log(this.state);
  }
  render(){
  return (
    <div className="App">
      <div className="app-container">
        
        <Home clicked={this.state.home}/>
        {/* <Social/> */}
        <Skills clicked={this.state.skills}/>
        <About clicked={this.state.about}/>
        {/* <Skills/> */}
        <Experience clicked={this.state.experience}/>
        <Education clicked={this.state.education}/>
        <Project clicked={this.state.project}/>
        <Navbar clickFunction={this.clickFunction}/>
        <Footer/>
      <img className="app-myimg" src={process.env.PUBLIC_URL + '/grayBackground/back9.jpg'} />
      </div>
    </div>
  );
  }
}

export default App;
