import logo from './logo.svg';
import './App.css';
import PrincipalComponent from './components/principal';
import BodyComponent from './components/body'
function App() {
  return (
    <div className="App">
      <div className="App-Content">
        <PrincipalComponent />
      </div>
      <div className="App-body">

        <BodyComponent />
      </div>
    </div>
  );
}

export default App;
