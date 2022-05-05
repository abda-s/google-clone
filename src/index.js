import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './contexts/ResultContextProvider';

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <StateContextProvider>
        <Router> 
            <App /> 
        </Router>
    </StateContextProvider>
    )
