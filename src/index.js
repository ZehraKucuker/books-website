import React from 'react';
import './app/index.css';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {
    BrowserRouter 
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
