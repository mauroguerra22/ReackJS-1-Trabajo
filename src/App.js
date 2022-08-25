import logo from './logo.svg';
import './App.css';
import './components/NavBar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mi E-commerce</p>
        <p>Mauro Guerra</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
