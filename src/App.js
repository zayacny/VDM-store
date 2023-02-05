import logo from './logo.svg';
import './App.css';

function App() {
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
          Хлопці! Вітаю вас на першому проекті!
        </a>
        <br></br>
        <a
          className="App-link secondary"
          href="https://stackoverflow.com/questions/39478482/how-to-create-development-branch-from-master-on-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Це вєтка DEV
        </a>
      </header>
    </div>
  );
}

export default App;
