import logo from './logo.svg';
import './App.css';
import PrincipalComponent from './components/principal';
import BodyComponent from './components/body'
import { FaArrowCircleDown, FaMouse, FaArrowDown } from 'react-icons/fa';
import PortfolioComponent from './components/portafolio';
function App() {
  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div id="header" className="App-Content">
        <PrincipalComponent />
      </div>
      <div className="scroll-btn">
        <a href="#about">
          <FaArrowDown /><br></br>
          <FaMouse size="2em" />
        </a>
      </div>
      <div id="about" className="App-body">
        <BodyComponent />
      </div>
      <div className="scroll-btn">
        <a href="#portafolio">
          <FaArrowDown /><br></br>
          <FaMouse size="2em" />
        </a>
      </div>
      <div class="bg-2"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div id="portafolio" className="App-body-flow">
        <PortfolioComponent />
      </div>
    </div>
  );
}

export default App;
