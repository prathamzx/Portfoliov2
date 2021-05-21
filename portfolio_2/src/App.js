import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        
        <Home/>
        {/* <Social/> */}
        <Skills/>
        <About/>
        {/* <Skills/> */}
        <Navbar/>
      <img className="app-myimg" src={process.env.PUBLIC_URL + '/grayBackground/back8.jpg'} />
      </div>
    </div>
  );
}

export default App;
