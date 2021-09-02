import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-H7RL9FDDHD');
  ReactGA.pageview(window.location.pathname);

  const handleClick = () => {
    console.log('click');
    ReactGA.event({
      category: 'User',
      action: 'Create an Account'
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Click here</button>
      </header>
    </div>
  );
}

export default App;
