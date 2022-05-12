import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    )
  }
}

export default App;
