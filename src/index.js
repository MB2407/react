import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <React.StrictMode>
    	<HashRouter>
        	<App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
