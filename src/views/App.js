import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent';
import TestJsx from './Example/TestJsx';
import TestState from './Example/TestState';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* embedding JSX file into interface user */}
            <TestState/>
        {/* <Mycomponent></Mycomponent> */}
      </header>
    </div>
  );
}

export default App;
