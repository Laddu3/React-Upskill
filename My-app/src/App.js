import './App.css';
import Route, { Fragment } from 'react';
import Router from 'react';
import Hello from './Component/Hello';
import Buttonstyle from './Component/Buttonstyle';
import Helloapp from './Component/Helloapp';
import Fruit from './Component/Fruit';
import Button from './Component/Button';
import Counter from './Component/Counter';
import Classcount from './Component/Classcount';
import Funcount from './Component/Funcount';
import TaskForm from './Component/TaskForm';
import SubmittedPage from './Component/SubmittedPage';
import ErrorBoundary from './Component/ErrorBoundary';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Counter/>
      <Classcount/>
      <Funcount/>
      {/* <Buttonstyle/> */}
      {/* <ErrorBoundary>
       <MyComponent/> 
      </ErrorBoundary> */}
      {/* <Helloapp/>
      <Fruit/>
      <Button label="Submit"/>
      <Router>
      <Route path="/" exact component={TaskForm} />
      <Route path="/submitted" component={SubmittedPage} />
    </Router> */}
    </div>
  );
}

export default App;
