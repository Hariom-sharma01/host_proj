import React from 'react';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import About from './pages/About';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Technologies' element={<Technologies/>} />
      <Route path='/About' element={<About/>} />
    </Routes>
  );
}

export default App;
