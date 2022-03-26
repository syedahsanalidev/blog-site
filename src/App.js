import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import Admin from './components/admin/admin/admin';
// import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
