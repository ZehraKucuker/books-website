import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Welcome/index';
import Literature from '../pages/Literature/index';
import Philosophy from '../pages/Philosophy/index';
import Culture from '../pages/Culture/index';
import Psychology from '../pages/Psychology/index';
import History from '../pages/History/index';

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/literature" element={<Literature/>} />
        <Route path="/philosophy" element={<Philosophy/>} />
        <Route path="/culture" element={<Culture/>} />
        <Route path="/psychology" element={<Psychology/>} />
        <Route path="/history" element={<History/>} />
      </Routes>
  );
}

export default Routers