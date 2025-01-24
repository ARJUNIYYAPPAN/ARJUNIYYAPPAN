import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Valid from "./Valid";
import Login from "./Login";
import Api from "./Api";
import Counter from "./Counter";
import Tasks from "./Tasks";
import Apps from "./Apps";



function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/Apps' element={<Apps/>}></Route>
          <Route path='/' element={<Tasks/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/valid' element={<Valid/>}></Route>
          <Route path='/api' element={<Api/>}></Route>
          <Route path='/Counter' element={<Counter/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
