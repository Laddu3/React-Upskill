import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Taskdata from './components/Taskdata'
import Edit from './components/Edit';
import Create from './components/Create'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Taskdata/> }/>
        <Route path="/taskdata/:taskid" element={ <Edit/> }/>
        <Route path="/taskadd" element={ <Create/> }/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
