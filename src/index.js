import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";


const app = document.getElementById('app');

// create a root
const root = createRoot(app);

//render app to root
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
