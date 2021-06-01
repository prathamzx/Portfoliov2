import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Project from './Components/Project';
import Footer from './Components/Footer';
import Theme from './Components/Theme';
import React from 'react';

class App extends React.Component {
  state={
    skills:0,
    project:0,
    home:0,
    about:0,
    experience:0,
    education:0,
    theme:"carnation"
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

  changeTheme = (theme,id)=>{
      document.documentElement.style.setProperty('--dark',theme.dark);
      document.documentElement.style.setProperty('--medium',theme.medium);
      document.documentElement.style.setProperty('--light',theme.light);
      document.getElementById(this.state.theme).style.opacity='0';
      document.getElementById(id).style.opacity='1';
      this.setState({
        theme:id
      });
  }
  getBackgroundImage = () => {
    let str=process.env.PUBLIC_URL+"/themes/"+this.state.theme+"/background.jpg";
    console.log(str);
    return str; 
  }
  render(){
  return (
    <div className="App">
      <div className="app-container">
        
        <Home clicked={this.state.home}/>
        <Skills clicked={this.state.skills}/>
        <About clicked={this.state.about}/>
        <Experience clicked={this.state.experience} theme={this.state.theme}/>
        <Education clicked={this.state.education} theme={this.state.theme}/>
        <Project clicked={this.state.project}  theme={this.state.theme}/>
        <Navbar clickFunction={this.clickFunction}/>
        <Footer/>
        <Theme changeTheme={this.changeTheme}/>
      <img className="app-myimg" src={this.getBackgroundImage()} />
      </div>
    </div>
  );
  }
}

export default App;
