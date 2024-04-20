import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import Form from './components/Form';



function App() {
  return (
  //   <Router>
  //   <div className='App'>
  //     <ul className="App-header">
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">About</Link>
  //       </li>
  //       <li>
  //         <Link to="/contact">Contact</Link>
  //       </li>
  //     </ul>
  //     <Routes>
  //       <Route exact path='/' element={<Home/>}></Route>
  //       <Route exact path='/about' element={<About/>}></Route>
  //       <Route exact path='/contact' element={<Contact/>}></Route>
  //     </Routes>
  //   </div>
  //   </Router>
  <Form/>
  
  );
}


export default App;
