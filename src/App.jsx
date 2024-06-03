import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from  './components/Home'
import Pokemon from './components/Pokemon'
import './Styles.scss'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search/:name" element={<Pokemon/>}/>
    </Routes>
  </BrowserRouter>;
};

export default App;
