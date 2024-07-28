import React from 'react';
import {
    Routes, Route
} from 'react-router-dom';
import {
    Home, Literature, Philosophy, Culture, Psychology, History
} from '../pages';

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/literature" element={<Literature/>} />
            <Route path="/philosophy" element={<Philosophy/>} />
            <Route path="/culture" element={<Culture/>} />
            <Route path="/psychology" element={<Psychology/>} />
            <Route path="/History" element={<History/>} />
            <Route path='*' element={<Home/>}/>
        </Routes>
    );
}

export default Routers;
