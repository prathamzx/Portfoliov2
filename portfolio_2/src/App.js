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
    theme:1
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
  getBackgroundImage = () => {
    let str=process.env.PUBLIC_URL + '/grayBackground/theme'+this.state.theme+'.jpg';
    console.log(str);
    return str; 
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
        <Theme changeTheme={this.changeTheme}/>
      <img className="app-myimg" src={this.getBackgroundImage()} />
      </div>
    </div>
  );
  }
}

export default App;
