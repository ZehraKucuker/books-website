import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home';
import Literature from '../pages/literature';
import Philosophy from '../pages/philosophy';
import Culture from '../pages/culture';
import Psychology from '../pages/psychology';
import History from '../pages/history';

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