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
            <Route path="/Literature" element={<Literature/>} />
            <Route path="/Philosophy" element={<Philosophy/>} />
            <Route path="/Culture" element={<Culture/>} />
            <Route path="/Psychology" element={<Psychology/>} />
            <Route path="/History" element={<History/>} />
            <Route path='*' element={<Home/>}/>
        </Routes>
    );
}

export default Routers;
