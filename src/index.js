import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './contexts/ResultContextProvider';

import App from "./App";

// const container = document.getElementById("root");
const root = createRoot(document.getElementById("root"));

root.render(
    <StateContextProvider>
        <Router> 
            <App /> 
        </Router>
    </StateContextProvider>);

// ReactDOM.render(
// <StateContextProvider>
// <Router> 
//     <App /> 
// </Router>
// </StateContextProvider>,
// document.getElementById("root"));