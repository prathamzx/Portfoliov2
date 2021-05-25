import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import React from 'react';

class App extends React.Component {
  state={
    skills:0
  }
  clickFunction=()=>{
    console.log("function called!!");
    this.setState({
      skills:this.state.skills+1
    });
  }
  render(){
  return (
    <div className="App">
      <div className="app-container">
        
        <Home/>
        {/* <Social/> */}
        <Skills clicked={this.state.skills}/>
        <About/>
        {/* <Skills/> */}
        <Experience/>
        <Navbar clickFunction={this.clickFunction} clicked={this.state.skills}/>
      <img className="app-myimg" src={process.env.PUBLIC_URL + '/grayBackground/back8.jpg'} />
      </div>
    </div>
  );
  }
}

export default App;
